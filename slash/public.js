const Discord = require("discord.js")

module.exports = {
  category: 'Testing',
  description: 'public commands',
  
  slash: true, // Create both a slash and legacy command
  

   guildOnly: true,

    callback: ({interaction}) => {
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("کامند های عمومی")
        .addField("serverinfo", "اطلاعات سرورو بهت میده")
        .addField("userinfo", "اطلاعات یه کسی رو بهت میده")
        .setFooter("GOORBEH bot")
       interaction.reply({embeds: [embed], ephemeral: true})
    }
}