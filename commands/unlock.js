const Discord = require('discord.js')

module.exports = {
    name: "unlock",
    description: "unlock command",
    usage: ["unlock"],
    category: "general",

    run: async(client, message, args) => {
        if (!message.member.permissions.has('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
            return message.channel.send("Shoma Permission Nadarid 💩")
            }
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true });
            const embed = new Discord.MessageEmbed()
            .setTitle("Channel Update Shod")
            .setDescription(`🔓 ${message.channel}  Unlock Shod`)
            .setColor("#00ff20");
            await message.channel.send({embeds: [embed]});
            message.delete();
    }
}
