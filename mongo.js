const mongo = require('mongoose')
const { mongoPath } = require('./botconfig.json')

module.exports = async () => {
    await mongo.connect(mongoPath)

    return mongo
} 


mongo.connection.on('connected', () => {
    console.log('be mongo.db vasl shod')
})
