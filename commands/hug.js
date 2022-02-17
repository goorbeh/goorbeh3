const Discord = require('discord.js')
const huggifs = require("../gifs.json").gifshug
module.exports = {
  name: "hug",
  description: "hug command",
  usage: ["hug"],
  category: "general",

  run: async(client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    const Response = Math.floor(Math.random() * huggifs.length);
    if (!member) return message.channel.send("باوا این کیه دیگه")
    if (member.id === message.author.id) return message.channel.send("عزیز من کی خودشو بغل میکنه")
    let embed = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}>بغل کرد اینو >><@${member.id}>`)
    .setImage(huggifs[Response]+"?size=2048")
    .setFooter("GOORBEH bot")
    .setColor("GREEN")
    message.channel.send({embeds: [embed]})
  }
}