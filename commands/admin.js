const Discord = require('discord.js')

module.exports = {
  name: "admin",
  description: "admin command",
  usage: ["admin"],
  category: "general",

  run: async(client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("کامند های ادمینستوری")
    .setColor("BLUE")
    .addField("پاک کردن پیام ها", "clear", true)
    .addField("قفل کردن چنل", "lock", true)
    .addField("باز کردن چنل", "unlock", true)
    .addField("ست کردن پریفیکس", "prefix", true)
    .setFooter("GOORBEH bot")
    message.channel.send({embeds: [embed]})
  }
}
