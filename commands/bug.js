const Discord = require('discord.js')

module.exports = {
    name: "bug",
    description: "bug command",
    usage: ["bug"],
    category: "general",

    run: async(client, message, args) => {
        const channel = client.channels.cache.get('936580852090032178')

        let query = args.slice(0).join(" ");
        if(!query) return message.channel.send('لطفا مشکل خود را بگویید')
            let invite = await message.channel.createInvite({
            "maxAge": "604800",
            "maxUses": "100"
        })
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('New Bug!')
        .addField('Author', message.author.username, true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .addField('Invite=',`${invite}`)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        message.channel.send("پیام شما به سیستم ارسال شد با تشکر");
 channel.send(reportEmbed)
    }
}