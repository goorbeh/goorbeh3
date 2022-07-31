const Discord = require("discord.js")

module.exports = {
    description: "bots commands",
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,
  

    callback: ({interaction}) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("کامند های بات")
        .addField("invite", "/منو اینوایت بده جون دل/")
        .addField("botinfo", "/اطلاعات باته جون دل/")
          .addField("idea", "/ایده داری بگو بینم چیه/")
          .addField("bug", "/باگ داره بات ای بابا بگو بینم/")
          .addField("ping", "/پینگ ربات دایی/")
        .setFooter("GOORBEH bot")
        .setColor("BLUE")
        interaction.reply({embeds: [embed],
                          ephemeral: true})
    }
}
