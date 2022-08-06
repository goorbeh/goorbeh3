const Discord = require("discord.js")

module.exports = {
description: "admins commands",
  slash: true, // Create both a slash and legacy command

  guildOnly: true,
  
  callback: ({interaction}) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("کامند های ادمینستوری")
    .setColor("BLUE")
    .addField("پاک کردن پیام ها", "clear", true)
    .addField("قفل کردن چنل", "lock", true)
    .addField("باز کردن چنل", "unlock", true)
    .setFooter("GOORBEH bot")
   interaction.reply({embeds: [embed],
                     ephemeral: true})
  }
}
