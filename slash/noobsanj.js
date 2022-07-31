const Discord = require('discord.js')

module.exports = {
     category: 'Testing',
  description: 'are you noob?',
  
  slash: true, // Create both a slash and legacy command
  

   guildOnly: true,

    callback: ({interaction}) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("noobsanj command")
        .setDescription(`${Math.floor(Math.random() * 101)}% نوب هستید`)
        .setColor("YELLOW")
        .setFooter("GOORBEH bot")
        interaction.reply({embeds: [embed], ephemeral: true})
    }
}