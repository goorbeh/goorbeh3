const Discord = require('discord.js')

module.exports = {
   description: "status of the bot",
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,
  

    callback: ({client, interaction}) => {
let count = 0;
    client.guilds.cache.forEach((guild) => {
        count += guild.memberCount
    })

        let embed = new Discord.MessageEmbed()
        .setTitle("اطلاعات بات")
        .addField("سرور ها", `${client.guilds.cache.size} `)
        .addField("زبان ربات", "JS")
        .addField("اونر", "<@779956854720823296>")
        .addField("پینگ",`${client.ws.ping}MS`)
        .addField("تعداد ممبر ها", `${count}`,)
        .setColor("YELLOW")
        .setFooter("GOORBEH bot")
        interaction.reply({embeds: [embed],
                          ephemeral: true})
    }
}
