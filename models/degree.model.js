const mongoose = require('mongoose')

const degreeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    instituteType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InstituteType'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Degree', degreeSchema)
