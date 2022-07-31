const Discord = require("discord.js")

module.exports = {
    
    category: 'Testing',
  description: 'server info',
  
  slash: true, // Create both a slash and legacy command
  

   guildOnly: true,
    callback: ({interaction, client}) => {

      const owner = interaction.guild.fetchOwner()
        let server = new Discord.MessageEmbed()
        server.setColor("#ff0000")
        server.setTitle("اطلاعات سرور")
        server.setImage(interaction.guild.iconURL())
        server.addField("اسم سرور", `${interaction.guild.name}`)
        server.addField("ایدی سرور", `${interaction.guild.id}`)
        server.addField("ممبر های سرور", `${interaction.guild.memberCount}`)
        server.addField("محل سرور", `${interaction.guild.preferredLocale}`)
       server.setTimestamp()
interaction.reply({embeds: [server]})
    }
    }