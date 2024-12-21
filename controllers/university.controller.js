const Universities = require('../models/university.model')

exports.getUniversities = async (req, res) => {
  try {
    const universities = await Universities.find().lean().exec()
    res.status(200).json(universities)
  } catch (error) {
    console.error('getUniversities(), error', error)
    res.status(500).json({ message: `Error fetching universities, ${error.message}` })
  }
}

exports.getUniversitiesByInstituteType = async (req, res) => {
  try {
    const { instituteTypeId } = req.params
    const universities = await Universities.find({ instituteType: instituteTypeId }).populate('instituteType').lean().exec()
    res.status(200).json(universities)
  } catch (error) {
    console.error('getUniversitiesByInstituteType(), error', error)
    res.status(500).json({ message: `Error fetching universities by institute type, ${error.message}` })
  }
}

exports.addUniversity = async (req, res) => {
  try {
    const university = new Universities(req.body)
    await university.save()
    res.status(201).json({ message: 'University added successfully', data: university })
  } catch (error) {
    console.error('addUniversity(), error', error)
    res.status(500).json({ message: `Error adding university, ${error.message}` })
  }
}
