const Discord = require('discord.js')

module.exports = {
    category: 'Testing',
  description: 'invite me to your server', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,

    callback: ({interaction}) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("ممنون برای اینوایت :heart:")
        .setColor("GREEN")
        .setDescription("[invite](https://yun.ir/gorbeh)")
        .setFooter("GOORBEH bot")
       interaction.reply({embeds: [embed], 
                         ephemeral: true})
    }
}
