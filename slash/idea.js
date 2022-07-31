const Discord = require('discord.js')

module.exports = {
      category: 'Testing',
  description: 'tell me the idea', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,
  options: [
    {
    name: "idea",
      description: "tell the idea",
      required: true,
      type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
      
    }
  ],

    callback: ({interaction, user, client}) => {
      let chidea = client.channels.cache.get("936580852090032178")
      let query = interaction.options.getString("idea")
      let embed = new Discord.MessageEmbed()
      .setTitle("NEW IDEA")
      .addField('Author', user.username, true)
      .addField('IDEA', query)
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      interaction.reply({content: "ایده شما ثبت شد با تشکر", ephemeral: true});
      chidea.send({embeds: [embed]})
    }
}
