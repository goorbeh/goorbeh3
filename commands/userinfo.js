const Discord = require('discord.js')
const { description, category } = require('./serverinfo')

module.exports = {
    name: "userinfo",
    description: "userinfo command",
    usage: "komak kardan",
    category: "hhhhhhh",

    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.member;
let embed = new Discord.MessageEmbed()
.setTitle(`Info User ${member.user.username}`)
.setColor("RANDOM")
.addField("Username", `${member.user.username}`,true)
.addField("Tag", `${member.user.discriminator}`,true)
.addField("Joined in Discord",`${member.user.createdAt}`,true)
.addField("Joined in Server",`${member.joinedAt}`,true)
.setThumbnail("https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png?size=1024")
message.channel.send({embeds: [embed]})
    }
}