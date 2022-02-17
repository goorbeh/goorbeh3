const Discord = require('discord.js')
const kissgifs = require("../gifs.json").gifskiss
module.exports = {
  name: "kiss",
  description: "kiss command",
  usage: ["kiss"],
  category: "general",

  run: async(client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!member) return message.channel.send("باوا این کیه دیگه")
    if (member.id === message.author.id) return message.chanel.send("میخوای با خودت لب بگیری؟!")
const Response = Math.floor(Math.random() * kissgifs.length);
    let embed = new Discord.MessageEmbed()
    .setDescription(`جناب <@${message.author.id}> این <@${member.id}> را بوسید  :kiss:`)
    .setImage(kissgifs[Response])
    .setFooter("GOORBEH bot")
    .setColor("RED")
    message.channel.send({embeds: [embed]})
  }
      }