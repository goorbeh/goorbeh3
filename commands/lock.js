const Discord = require('discord.js')

module.exports = {
    name: "lock",
    description: "lock command",
    usage: ["lock"],
    category: "general",

    run: async(client, message, args) => {
        if (!message.member.Permissions.has('MANAGE_CHANNELS')) {
            return message.channel.send("Shoma Permission Nadarid 💩")
            }
            message.channel.permissionOverwrites.edit(message.guild.everyone.id, {
                SEND_MESSAGES: false
            });
            
            const embed = new Discord.MessageEmbed()
            .setTitle("Channel Update Shod")
            .setDescription(`🔒 ${message.channel} Lock Shod`)
            .setColor("00ff20");
            await message.channel.send({embeds: [embed]});
            message.delete();
    }
}