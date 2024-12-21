const ClassCategories = require('../models/classCategory.model')

exports.getClassCategories = async (req, res) => {
  try {
    const classCategories = await ClassCategories.find().lean().exec()
    res.status(200).json(classCategories)
  } catch (error) {
    console.error('getClassCategories(), error', error)
    res.status(500).json({ message: `Error fetching class categories, ${error.message}` })
  }
}

exports.addClassCategory = async (req, res) => {
  try {
    const classCategory = new ClassCategories(req.body)
    await classCategory.save()
    res.status(201).json({ message: 'Class category added successfully', data: classCategory })
  } catch (error) {
    console.error('addClassCategory(), error', error)
    res.status(500).json({ message: `Error adding class category, ${error.message}` })
  }
}
