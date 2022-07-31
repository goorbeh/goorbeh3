const mongoose = require('mongoose')
const itemschema = mongoose.Schema({
    userID: {
        type: String,
        require: true
    },
    money: {
        type: Number,
    },
    bank: {
        type: Number,
    },
    car: {
        type: String,
    },
    house: {
        type: String,
    },
    gem: {
        type: Number,
    },
    job: {
        type: String,
    }
})

const model = mongoose.model("items", itemschema)

module.exports = model;