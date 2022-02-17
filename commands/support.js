const Discord = require('discord.js')

module.exports = {
    name: "support",
    description: "support command",
    usage: "hhhh",
    category: "hhhh",

    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("ممنون برای جوین")
        .setDescription("[join now](https://discord.gg/2f44kgYCAJ)")
        .setColor("ORANGE")
        .setFooter("GOORBEH bot")
        message.channel.send({embeds: [embed]})
    }
}