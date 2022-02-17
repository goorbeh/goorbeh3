const Discord = require("discord.js")

module.exports = {
    
    name: "serverinfo",
    description: "کامند serverinfo",
    usage: "komak karden",
    category: "komak kardan",

    run: async (client, message, args) => {
        let server = new Discord.MessageEmbed()
        server.setColor("#ff0000")
        server.setTitle("اطلاعات سرور")
        server.setImage(message.guild.iconURL())
        server.addField("اسم سرور", `${message.guild.name}`)
        server.addField("اونر سرور", `${message.guild.owner}`)
        server.addField("ایدی سرور", `${message.guild.id}`)
        server.addField("ممبر های سرور", `${message.guild.memberCount}`)
        server.addField("محل سرور", `${message.guild.region}`)
        server.setFooter(`${client.user.username} bot`)
message.channel.send({embeds: [server]})
    }
    }