const Discord = require('discord.js')
const { description, category } = require('./serverinfo')

module.exports = {
   category: 'Testing',
  description: 'server info',
  
  slash: true, // Create both a slash and legacy command
  

   guildOnly: true,

  options: [
    {
      name: "target",
      description: "mention target",
      required: false,
      type: 6,
    }
  ],


    callback: ({interaction, user}) => {
       const member = interaction.options.getUser("target") || user
let embed = new Discord.MessageEmbed()
.setTitle(`Info User ${member.username}`)
.setColor("RANDOM")
.addField("Username", `${member.username}`,true)
.addField("Tag", `${member.discriminator}`,true)
.addField("Joined in Discord",`${member.createdAt}`,true)
.setThumbnail(`https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png?size=1024`)
interaction.reply({embeds: [embed], ephemeral: true})
    }
}