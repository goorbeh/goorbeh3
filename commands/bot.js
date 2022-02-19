const Discord = require("discord.js")

module.exports = {
    name: "bot",
    description: "کامند bot",
    usage: "komak karden",
    category: "komak kardan",

    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("کامند های بات")
        .addField("invite", "/منو اینوایت بده جون دل/")
        .addField("botinfo", "/اطلاعات باته جون دل/")
          .addField("idea", "/ایده داری بگو بینم چیه/")
          .addField("bug", "/باگ داره بات ای بابا بگو بینم/")
          .addField("ping", "/پینگ ربات دایی/")
        .setFooter("GOORBEH bot")
        .setColor("BLUE")
        message.channel.send({embeds: [embed]})
    }
}
