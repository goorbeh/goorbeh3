const Discord = require('discord.js')

module.exports = {
    name: "idea",
    description: "idea command",
    usage: ["idea"],
    category: "general cmds",

    run: async(client, message, args) => {
      let chidea = client.channels.cache.get("936580852090032178")
      let query = args.slice(0).join(" ");
      if (!query) return message.channel.send("لطفا متن ایده خود را بعد از کامند بنویسید")
      let invite = await message.channel.createInvite({
            "maxAge": "604800",
            "maxUses": "100"
        })
      let embed = new Discord.MessageEmbed()
      .setTitle("NEW IDEA")
      .addField('Author', message.author.username, true)
      .addField('IDEA', query)
      .addField('Invite',`${invite}`)
      .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
      .setTimestamp()
      message.channel.send("ایده شما ثبت شد با تشکر");
      chidea.send({embeds: [embed]})
    }
}
