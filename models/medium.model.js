const mongoose = require('mongoose')

const mediumSchema = new mongoose.Schema(
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

module.exports = mongoose.model('Medium', mediumSchema)
