const Discord = require("discord.js")

module.exports = {
    
    name: "public",
    description: "کامند public",
    usage: "komak karden",
    category: "komak kardan",

    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("کامند های عمومی")
        .addField("serverinfo", "اطلاعات سرورو بهت میده")
        .addField("userinfo", "اطلاعات یه کسی رو بهت میده")
        .setFooter("GOORBEH bot")
        message.channel.send({embeds: [embed]})
    }
}