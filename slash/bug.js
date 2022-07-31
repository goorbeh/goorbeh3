const Discord = require('discord.js')

module.exports = {
     category: 'Testing',
  description: 'tell me the bug', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
 

  guildOnly: true,

  options: [
    {
      name: "bug",
      description: "tell the bug",
      required: true,
      type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
    }
  ],

    callback: ({client, interaction, args, channel, user}) => {
        const hannel = client.channels.cache.get('936580852090032178')
const matn = interaction.options.getString("bug");
       
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('New Bug!')
        .addField('Author', user.username, true)
        .addField('Guild', interaction.guild.name, true)
        .addField('Report', matn, true)
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        interaction.reply({content: "sended Thanx", ephemeral: true});
 hannel.send({embeds: [reportEmbed]})
    }
}
