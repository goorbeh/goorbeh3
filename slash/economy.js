const Discord = require("discord.js")

module.exports = {
  category: 'Testing',
  description: 'captcha commands list', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,
  callback: async({interaction}) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Economy Commands")
        .setColor("BLUE")
        .addField("کامند های رول پلی", "<:emoji_82:997586723330588845> bardasht \n <:emoji_82:997586723330588845> variz \n <:emoji_82:997586723330588845> work \n <:emoji_82:997586723330588845> profile \n <:emoji_82:997586723330588845> pay \n <:emoji_82:997586723330588845> sabtnam")
          .addField("کامند های کارخانه", "<:emoji_82:997586723330588845> buy-factory: 1m \n <:emoji_82:997586723330588845> factory \n <:emoji_82:997586723330588845> buy-nakh: 200k \n <:emoji_82:997586723330588845> create-clothes: 500nakh \n <:emoji_82:997586723330588845> sell-clothes: +500k \n <:emoji_82:997586723330588845> up-factory: watch factory")

            interaction.reply({embeds: [embed], ephemeral: true})
  }
}
