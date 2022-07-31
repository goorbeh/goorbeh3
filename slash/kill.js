const Discord = require('discord.js')
const killgifs = require("../gifs.json").gifskill
module.exports = {
   category: 'Testing',
  description: 'kill someone', // Required for slash commands
  
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
    
const Response = Math.floor(Math.random() * killgifs.length);
     const member = interaction.options.getUser("user")
    
   if (member.id === user.id) return interaction.reply({content: "عزیز من کی خودشو میکشه؟", 
                                                        ephemeral: true})
    let embed = new Discord.MessageEmbed()
    .setDescription(`<@${user.id}> این فرد را <@${member.id}> به قتل رساند :pleading_face:`)
    .setImage(killgifs[Response])
    .setFooter("GOORBEH bot")
    .setColor("RED")
    interaction.reply({embeds: [embed]})
  }
}