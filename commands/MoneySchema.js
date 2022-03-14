const mongoose = require('mongoose')
const MoneySchema = mongoose.Schema({
    userID: {
        type: String,
        require: true
    },
    money: {
        type: Number,
        default: 200
    },
    bank: {
        type: Number
    } 
})

const model = mongoose.model("money", MoneySchema)

module.exports = model;
