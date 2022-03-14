const Discord = require('discord.js')
const MoneySchema = require('../schema/MoneySchema')

module.exports = {
    name: "money",
    description: "kf",
    usage: "nfnd",
    category: "fhu",

    run: async(client, message, args) => {

        let money;
 let data = await MoneySchema.findOne({
 userID: message.guild.id 
})
 if(data === null) {
 money = "0" 
} else {
 prefix = data.money } 


        let bank;
 let data2 = await MoneySchema.findOne({
 userID: message.guild.id 
})
 if(data === null) {
 bank = "0" 
} else {
 prefix = data2.bank } 


        let embed = new Discord.MessageEmbed()
        .addField("پول های کیف پولتان", `${money}`)
        .addField("پول های بانک شما", `${bank}`)
        .setTitle("پروفایل شما")
        .setColor("RANDOM")

        message.channel.send({
            embeds: [embed]
        })
    }
}
