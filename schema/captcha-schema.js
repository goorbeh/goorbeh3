const mongoose = require('mongoose')
const CaptchaSchema = mongoose.Schema({
  Guild: {
      type: String,
      require: true
  },
  Code: {
    type: String,
    require: true
  },
  Role: {
    type: String,
    require: true
  }
})

const model = mongoose.model("captcha", CaptchaSchema)

module.exports = model;