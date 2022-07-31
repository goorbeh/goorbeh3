const Discord = require("discord.js")

module.exports = {
description: "ping coomand",
  guildOnly: true,
  slash: true,
  callback: ({interaction}) => {
  
        //const word = interaction.options.getString("word");
        //const washy = interaction.options.getNumber("washy");

        interaction.reply({
            content: `**__${client.ws.ping}__** Ms`,
            ephemeral: true
        })
      
   
  }
}
