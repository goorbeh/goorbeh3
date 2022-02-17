const Discord = require('discord.js')

module.exports = {
  name: "say",
  description: "say command",
  usage: ["say"],
  category: "general",

  run: async(client, message, args) => {
    let query = args.slice(0).join(" ");
        if(!query) return message.lineReply("بعد    کامند یه چیزی بنویسید")

        let embed = new Discord.MessageEmbed()
        .setTitle("say command")
        .setDescription(query)
        .setFooter("GOORBEH bot")
        .setColor("GREEN")

        message.channel.send({embeds: [embed]})
  }
}