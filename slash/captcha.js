const Discord = require("discord.js")

module.exports = {
  category: 'Testing',
  description: 'captcha commands list', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,
 callback: ({interaction}) => {
   let embed = new Discord.MessageEmbed()
   .setTitle("Captcha commands")
   .addField("captcha-setup", "<:emoji_82:997586723330588845> تنظیم کردن کپتچا سیستم")
   .addField("captcha-make", "<:emoji_82:997586723330588845> ساختن کپتچا")
   .setColor("BLUE")
   interaction.reply({embeds: [embed], ephemeral: true})
 }
}