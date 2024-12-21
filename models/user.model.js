const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    instituteType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InstituteType'
    },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Board'
    },
    university: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'University'
    },
    degree: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Degree'
    },
    exam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exam'
    },
    medium: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medium'
    },
    classCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ClassCategory'
    },
    standard: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Standard'
    },
    subjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
