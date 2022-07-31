const Discord = require('discord.js')
const cooldowns = new Map();
const humanizeDuration = require('humanize-duration'); 

module.exports = {
   category: 'Testing',
  description: 'are you gay?', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,
    callback: ({interaction}) => {

        let embed = new Discord.MessageEmbed()
        .setTitle("gaysanj command")
        .setDescription(`${Math.floor(Math.random() * 100)}% گی هستید 😂 `)
        .setColor("YELLOW")
        .setFooter("GOORBEH bot")
        interaction.reply({embeds: [embed], 
                          ephemeral: true})

      
    }
}