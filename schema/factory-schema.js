const mongoose = require('mongoose')
const facSchema = mongoose.Schema({
   User: {
       type: String,
       require: true
   },
   Name: {
       type: String,
   },
   anbar: {
       type: Number,
       require: true
   },
   nakhanbar: {
       type: Number,
       require: true
   },
   clothes: {
       type: Number,
       require: true
   },
   nakh: {
       type: Number,
       require: true
   },
   level: {
       type: Number,
       require: true
   },
   moneyLevel: {
       type: Number,
       require: true
   }
})

const model = mongoose.model("factory", facSchema)

module.exports = model;