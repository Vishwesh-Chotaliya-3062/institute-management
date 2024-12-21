const InstituteTypes = require('../models/instituteType.model')

exports.getInstituteTypes = async (req, res) => {
  try {
    const instituteTypes = await InstituteTypes.find().lean().exec()
    res.status(200).json(instituteTypes)
  } catch (error) {
    console.error('getInstituteTypes(), error', error)
    res.status(500).json({ message: `Error fetching institute types, ${error.message}` })
  }
}

exports.addInstituteType = async (req, res) => {
  try {
    const instituteType = new InstituteTypes(req.body)
    await instituteType.save()
    res.status(201).json({ message: 'Institute type added successfully', data: instituteType })
  } catch (error) {
    console.error('addInstituteType(), error', error)
    res.status(500).json({ message: `Error adding institute type, ${error.message}` })
  }
}
