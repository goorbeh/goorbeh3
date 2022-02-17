const Discord = require('discord.js')

module.exports = {
    name: "noobsanj",
    description: "noobsanj command",
    usage: ["noobsanj"],
    category: "general",

    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("noobsanj command")
        .setDescription(`${Math.floor(Math.random() * 101)}% نوب هستید`)
        .setColor("YELLOW")
        .setFooter("GOORBEH bot")
        message.channel.send({embeds: [embed]})
    }
}