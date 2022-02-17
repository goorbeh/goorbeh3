const Discord = require('discord.js')

module.exports = {
  name: "ping",
  description: "ping command",
  usage: ["ping"],
  category: "general",

  run: async(client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("پینگ ربات")
    .setDescription(`Ping: /${client.ws.ping}/`)
    .setFooter("GOORBEH bot")
    .setColor("RANDOM")
    message.channel.send({embeds: [embed]})
  }
}