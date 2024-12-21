const Subjects = require('../models/subject.model')

exports.getSubjects = async (req, res) => {
  try {
    const subjects = await Subjects.find().populate('standard').lean().exec()
    res.status(200).json(subjects)
  } catch (error) {
    console.error('getSubjects(), error', error)
    res.status(500).json({ message: `Error fetching subjects, ${error.message}` })
  }
}

exports.getSubjectsByStandard = async (req, res) => {
  try {
    const { standardId } = req.params
    const subjects = await Subjects.find({ standard: standardId }).populate('standard').lean().exec()
    res.status(200).json(subjects)
  } catch (error) {
    console.error('getSubjectsByStandard(), error', error)
    res.status(500).json({ message: `Error fetching subjects by standard, ${error.message}` })
  }
}

exports.addSubject = async (req, res) => {
  try {
    const subject = new Subjects(req.body)
    await subject.save()
    res.status(201).json({ message: 'Subject added successfully', data: subject })
  } catch (error) {
    console.error('addSubject(), error', error)
    res.status(500).json({ message: `Error adding subject, ${error.message}` })
  }
}
