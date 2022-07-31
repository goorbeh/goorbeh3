const Discord = require("discord.js")

module.exports = {
description: "say coomand",
guildOnly: true,
callback: ({interaction}) => {
             const word = interaction.options.getString("word");

        let embedSay = new Discord.MessageEmbed()
      .setDescription(`**__${word}__**`)
        .setColor("RANDOM")
        
        interaction.reply({embeds: [embedSay]})
    
}
}
