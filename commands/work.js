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

       const user = await MoneySchema.find({ userID: message.author.id })
const mon = parseInt(user.money) + "300";
MoneySchema.findOneAndUpdate({ userID: message.author.id }, { money: mon }, (err) => {
                if(err) {
                    console.log(err)
                }
                message.channel.send({embeds: [embed]})
            })
    },
};
