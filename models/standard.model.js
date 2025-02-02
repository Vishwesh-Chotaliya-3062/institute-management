const mongoose = require('mongoose')

const standardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    classCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ClassCategory'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Standard', standardSchema)
