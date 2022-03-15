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

       const user = await MoneySchema.find({
           message.author.id,
})
const money = parseInt(user[0].money) + 300
MoneySchema.findOneAndUpdate({ userID: message.author.id }, { money: money });
      message.channel.send({embeds: [embed]})
    },
};
