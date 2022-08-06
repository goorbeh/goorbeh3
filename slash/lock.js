const Discord = require('discord.js')

module.exports = {
     category: 'Testing',
  description: 'lock the channel',
  
  slash: true, // Create both a slash and legacy command
  

   guildOnly: true,
  


    callback: ({interaction, user, channel}) => {
if(!interaction.member.permissions.has("MANAGE_CHANNELS")) {
  return interaction.reply({content: "no perm", ephemeral: true})
}
            channel.permissionOverwrites.edit(channel.guild.roles.everyone, { SEND_MESSAGES: false }).catch(err => { 
interaction.reply({content: "پرم ندارم :)", ephemeral: true})
 })
            const embed = new Discord.MessageEmbed()
            .setTitle("Channel Update Shod")
            .setDescription(`🔒 ${channel} Lock Shod`)
            .setColor("00ff20");
            interaction.reply({embeds: [embed], ephemeral: true});
            
    }
}
