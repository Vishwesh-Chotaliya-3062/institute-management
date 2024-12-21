const mongoose = require('mongoose')

const universitySchema = new mongoose.Schema(
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

module.exports = mongoose.model('University', universitySchema)
