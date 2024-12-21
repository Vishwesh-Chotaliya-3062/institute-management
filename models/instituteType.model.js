const mongoose = require('mongoose')

const instituteTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('InstituteType', instituteTypeSchema)
