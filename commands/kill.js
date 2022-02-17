const Discord = require('discord.js')
const killgifs = require("../gifs.json").gifskill
module.exports = {
  name: "kill",
  description: "kill command",
  usage: ["kill"],
  category: "general",

  run: async(client, message, args) => {
    
const Response = Math.floor(Math.random() * killgifs.length);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!member) return message.channel.send("باوا این کیه دیگه")
    if (member.id === message.author.id) return message.channel.send("عزیز من کی خودشو میکشه؟")
    let embed = new Discord.MessageEmbed()
    .setDescription(`<@${message.author.id}> این فرد را <@${member.id}> به قتل رساند :pleading_face:`)
    .setImage(killgifs[Response])
    .setFooter("GOORBEH bot")
    .setColor("RED")
    message.channel.send({embeds: [embed]})
  }
}