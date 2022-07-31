const Discord = require('discord.js')
const huggifs = require("../gifs.json").gifshug
module.exports = {
    category: 'Testing',
  description: 'hug someone', // Required for slash commands
  
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
    const member = interaction.options.getUser("user")
    const Response = Math.floor(Math.random() * huggifs.length);
    if (member.id === user.id) return interaction.reply({content: "عزیز من کی خودشو بغل میکنه", ephemeral: true})
    let embed = new Discord.MessageEmbed()
    .setDescription(`<@${user.id}>بغل کرد اینو >><@${member.id}>`)
    .setImage(huggifs[Response]+"?size=2048")
    .setFooter("GOORBEH bot")
    .setColor("GREEN")
    interaction.reply({embeds: [embed]})
  }
}