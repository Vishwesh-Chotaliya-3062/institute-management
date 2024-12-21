const Degrees = require('../models/degree.model')

exports.getDegrees = async (req, res) => {
  try {
    const degrees = await Degrees.find().lean().exec()
    res.status(200).json(degrees)
  } catch (error) {
    console.error('getDegrees(), error', error)
    res.status(500).json({ message: `Error fetching degrees, ${error.message}` })
  }
}

exports.getDegreesByInstituteType = async (req, res) => {
  try {
    const { instituteTypeId } = req.params
    const degrees = await Degrees.find({ instituteType: instituteTypeId }).populate('instituteType').lean().exec()
    res.status(200).json(degrees)
  } catch (error) {
    console.error('getDegreesByInstituteType(), error', error)
    res.status(500).json({ message: `Error fetching degrees by institute type, ${error.message}` })
  }
}

exports.addDegree = async (req, res) => {
  try {
    const degree = new Degrees(req.body)
    await degree.save()
    res.status(201).json({ message: 'Degree added successfully', data: degree })
  } catch (error) {
    console.error('addDegree(), error', error)
    res.status(500).json({ message: `Error adding degree, ${error.message}` })
  }
}
