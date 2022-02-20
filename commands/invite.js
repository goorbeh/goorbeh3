const Discord = require('discord.js')

module.exports = {
    name: "invite",
    description: "invite command",
    usage: "hhhh",
    category: "hhhh",

    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("ممنون برای اینوایت :heart:")
        .setColor("GREEN")
        .setDescription("[invite](https://yun.ir/gorbeh)")
        .setFooter("GOORBEH bot")
        message.channel.send({embeds: [embed]})
    }
}
