const Exams = require('../models/exam.model')

exports.getExamsByInstituteType = async (req, res) => {
  try {
    const { instituteTypeId } = req.params
    const exams = await Exams.find({ instituteType: instituteTypeId }).populate('instituteType').lean().exec()
    res.status(200).json(exams)
  } catch (error) {
    console.error('getExamsByInstituteType(), error', error)
    res.status(500).json({ message: `Error fetching exams by institute type, ${error.message}` })
  }
}

exports.addExam = async (req, res) => {
  try {
    const exam = new Exams(req.body)
    await exam.save()
    res.status(201).json({ message: 'Exam added successfully', data: exam })
  } catch (error) {
    console.error('addExam(), error', error)
    res.status(500).json({ message: `Error adding exam, ${error.message}` })
  }
}
