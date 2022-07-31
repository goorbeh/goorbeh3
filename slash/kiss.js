const Discord = require('discord.js')
const kissgifs = require("../gifs.json").gifskiss
module.exports = {
   category: 'Testing',
  description: 'kiss someone', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
 
  guildOnly: true,

  options: [
    {
      name: "user",
      description: "mention user",
      required: true,
      type: 6,
    }
  ],

  callback: ({interaction, user}) => {
    const member = interaction.options.getUser("user")
    
    if (member.id === user.id) return interaction.reply({content: "میخوای با خودت لب بگیری؟!", ephemeral: true})
const Response = Math.floor(Math.random() * kissgifs.length);
    let embed = new Discord.MessageEmbed()
    .setDescription(`جناب <@${user.id}> این <@${member.id}> را بوسید  :kiss:`)
    .setImage(kissgifs[Response])
    .setFooter("GOORBEH bot")
    .setColor("RED")
    interaction.reply({embeds: [embed]})
  }
      }
