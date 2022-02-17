const Discord = require("discord.js")

module.exports = {
    
    name: "help",
    description: "کامند help",
    usage: "komak karden",
    category: "komak kardan",

    run: async (client, message, args) => {
        
        let embed = new Discord.MessageEmbed()
        .setTitle("کامند های من")
        .addField("bot", "کامند های مخصوص بات")
        .addField("public", "دیدن کامند های عمومی")
        .addField("fun", "دیدن کامند های فان")
        .addField("admin", "دیدن کامند های مخصوص ادمین ها")
        .setColor("RANDOM")
        .setFooter("GOORBEH bot")
    message.channel.send({embeds: [embed]})
    }
  }