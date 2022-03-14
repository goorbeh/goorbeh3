const Discord = require('discord.js')
const MoneySchema = require('../schema/MoneySchema')

module.exports = {
    name: "money",
    description: "kf",
    usage: "nfnd",
    category: "fhu",

    run: async(client, message, args) => {

        let money = await MoneySchema.findOne({
            usetID: message.author.id,
        })

        let bank = await MoneySchema.findOne({
            userID: message.author.id,
        })

        let embed = new Discord.MessageEmbed()
        .addField("پول های کیف پولتان", `${money}`)
        .addField("پول های بانک شما", `${bank}`)
        .setTitle("پروقایل شما")
        .setColor("RANDOM")

        message.channel.send({
            embeds: [embed]
        })
    }
}
