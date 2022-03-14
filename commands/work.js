const Discord = require('discord.js')
const MoneySchema = require('../schema/MoneySchema')

module.exports = {
    name: "work",
    description: "kfninfa",
    usage: "ofbaf",
    category: "knvbsfube",

    run: async(client, message, args) => {

        let embed = new Discord.MessageEmbed()
        .setDescription("شما 300 تا پول گرفتید")
        .setColor("RANDOM")

       const response = await MoneySchema.findOneAndUpdate({
           userID: message.author.id,
       }, {
        $inc: {
            money: "300",
        }
       });
       return message.channel.send({embed: embed})
    },
};
