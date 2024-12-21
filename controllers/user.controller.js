const Users = require('../models/user.model')

exports.addUser = async (req, res) => {
  try {
    const user = new Users(req.body)
    await user.save()
    res.status(201).json({ message: 'User added successfully', data: user })
  } catch (error) {
    console.error('addUser(), error', error)
    res.status(500).json({ message: `Error adding user, ${error.message}` })
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await Users.find()
      .populate('instituteType board university degree medium classCategory standard subjects exam')
      .lean()
      .exec()
    res.status(200).json(users)
  } catch (error) {
    console.error('getUsers(), error', error)
    res.status(500).json({ message: `Error fetching users, ${error.message}` })
  }
}

exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params
    const user = await Users.findById(userId)
      .populate('instituteType board university degree medium classCategory standard subjects exam')
      .lean()
      .exec()
    res.status(200).json(user)
  } catch (error) {
    console.error('getUserById(), error', error)
    res.status(500).json({ message: `Error fetching user by ID, ${error.message}` })
  }
}
