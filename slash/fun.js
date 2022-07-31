const Discord = require('discord.js')

module.exports = {
  category: 'Testing',
  description: 'fun commands', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,

    callback: ({interaction}) => {
        let embed = new Discord.MessageEmbed()
        .setTitle("کامند های فان")
        .setColor("BLUE")
        .setFooter("GOORBEH bot")
        .addField("gaysanj", "/نشون میده درصد گی بودنتون/")
        .addField("noobsanj", "/نشون میده درصد نوب بودنتون/")
        .addField("kill", "/میخوای یکی رو بکشی؟/")
        .addField("hug", "/میخوای یکی رو بغل کنی؟/")
        .addField("kiss", "/میخوای یکی رو بوس کنی؟/")
        .addField("say", "/هر چی بگی بات میگه/")
        .setFooter("GOORBEH bot")
       interaction.reply({embeds: [embed], 
                         ephemeral: true})
    }
}