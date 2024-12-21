const Mediums = require('../models/medium.model')

exports.getMediums = async (req, res) => {
  try {
    const mediums = await Mediums.find().lean().exec()
    res.status(200).json(mediums)
  } catch (error) {
    console.error('getMediums(), error', error)
    res.status(500).json({ message: `Error fetching mediums, ${error.message}` })
  }
}

exports.addMedium = async (req, res) => {
  try {
    const medium = new Mediums(req.body)
    await medium.save()
    res.status(201).json({ message: 'Medium added successfully', data: medium })
  } catch (error) {
    console.error('addMedium(), error', error)
    res.status(500).json({ message: `Error adding medium, ${error.message}` })
  }
}
