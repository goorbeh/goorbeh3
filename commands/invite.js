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
        .setDescription("[invite](https://discord.com/api/oauth2/authorize?client_id=826124040677752853&permissions=0&scope=bot)")
        .setFooter("GOORBEH bot")
        message.channel.send({embeds: [embed]})
    }
}