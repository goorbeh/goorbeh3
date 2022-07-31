const Discord = require('discord.js')

module.exports = {
      category: 'Testing',
  description: 'clear messages', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,

  permissions: ["MANAGE_MESSAGES"],

  options: [
    {
      name: "amount",
      description: "add the amount",
      required: true,
      type: 10,
    }
  ],
    
    callback: ({interaction, channel}) => {
const tedad = interaction.options.getNumber("amount")

      if(tedad > 99) {
        interaction.reply({content: "بیشتر از 99 تا نمیتونی پاک کنی", ephemeral: true})
       
      }
      
       channel.bulkDelete(tedad, true)
      
     interaction.reply({content: `** ${tedad} تا مسیج پاک شد **`, ephemeral: true})
    }
} 
