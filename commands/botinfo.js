const Discord = require('discord.js')

module.exports = {
    name: "botinfo",
    description: "botinfo command",
    usage: ["botinfo"],
    category: "General",

    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("اطلاعات بات")
        .addField("سرور ها", `${client.guilds.cache.size} `)
        .addField("زبان ربات", "JS")
        .addField("اونر", "<@779956854720823296>")
        .addField("پینگ",`${client.ws.ping}MS`)
        .addField("تعداد ممبر ها", `${client.users.cache.size}`,)
        .setColor("YELLOW")
        .setFooter("GOORBEH bot")
        message.channel.send({embeds: [embed]})
    }
}