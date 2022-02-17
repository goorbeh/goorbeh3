const Discord = require('discord.js')

module.exports = {
    name: "gaysanj",
    description: "gaysanj command",
    usage: ["gaysanj"],
    category: "general",

    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("gaysanj command")
        .setDescription(`${Math.floor(Math.random() * 100)}% گی هستید 😂 `)
        .setColor("YELLOW")
        .setFooter("GOORBEH bot")
        message.channel.send({embeds: [embed]})
    }
}