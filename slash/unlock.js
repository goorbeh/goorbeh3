const Discord = require('discord.js')

module.exports = {
   category: 'Testing',
  description: 'unlock channel',
  
  slash: true, // Create both a slash and legacy command
  

   guildOnly: true,

    callback: ({interaction, channel}) => {
        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) {
            return interaction.reply({content: "Shoma Permission Nadarid 💩", ephemeral: true})
            }
            channel.permissionOverwrites.edit(channel.guild.roles.everyone, { SEND_MESSAGES: true }).catch(err => { interaction.reply({content: "پرم ندارم :)", ephemeral: true}) })
            const embed = new Discord.MessageEmbed()
            .setTitle("Channel Update Shod")
            .setDescription(`🔓 ${channel}  Unlock Shod`)
            .setColor("#00ff20");
             interaction.reply({embeds: [embed], ephemeral: true});
    }
}
