const Standards = require('../models/standard.model')

exports.getStandards = async (req, res) => {
  try {
    const standards = await Standards.find().populate('classCategory').lean().exec()
    res.status(200).json(standards)
  } catch (error) {
    console.error('getStandards(), error', error)
    res.status(500).json({ message: `Error fetching standards, ${error.message}` })
  }
}

exports.getStandardsByClassCategory = async (req, res) => {
  try {
    const { classCategoryId } = req.params
    const standards = await Standards.find({ classCategory: classCategoryId }).populate('classCategory').lean().exec()
    res.status(200).json(standards)
  } catch (error) {
    console.error('getStandardsByClassCategory(), error', error)
    res.status(500).json({ message: `Error fetching standards by class category, ${error.message}` })
  }
}

exports.addStandard = async (req, res) => {
  try {
    const standard = new Standards(req.body)
    await standard.save()
    res.status(201).json({ message: 'Standard added successfully', data: standard })
  } catch (error) {
    console.error('addStandard(), error', error)
    res.status(500).json({ message: `Error adding standard, ${error.message}` })
  }
}
