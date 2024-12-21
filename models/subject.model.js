const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    standard: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Standard'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Subject', subjectSchema)
