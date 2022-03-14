const mongo = require('mongoose')

module.exports = async () => {
    await mongo.connect(process.env.mongo)

    return mongo
} 


mongo.connection.on('connected', () => {
    console.log('be mongo.db vasl shod')
})
