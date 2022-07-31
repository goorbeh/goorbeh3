const Discord = require("discord.js")
 
        //let embed = new Discord.MessageEmbed()
        //.setTitle("کامند های من")
        //.addField("bot", "کامند های مخصوص بات")
        //.addField("public", "دیدن کامند های عمومی")
        //.addField("fun", "دیدن کامند های فان")
        //.addField("admin", "دیدن کامند های مخصوص ادمین ها")
        //.setColor("RANDOM")
        //.setFooter("GOORBEH bot")

module.exports = {
    category: 'Testing',
  description: 'help command', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  
  
  guildOnly: true,
  
    callback: ({ interaction }) => {
    
  let embed = new Discord.MessageEmbed()
        .setTitle("کامند های من")
        .addField("<:emoji_83:997586743656206417> bot", "<:emoji_82:997586723330588845> کامند های مخصوص بات")
        .addField("<:emoji_81:997586674404032532>public", "<:emoji_82:997586723330588845> دیدن کامند های عمومی")
        .addField("<:emoji_80:997586645018742826>fun", "<:emoji_82:997586723330588845> دیدن کامند های فان")
        .addField("<:emoji_86:998600731114348664> admin", "<:emoji_82:997586723330588845> دیدن کامند های مخصوص ادمین ها")
        .addField("<:verify:997586700064805006>captcha", "<:emoji_82:997586723330588845> دیدن کامند های کپتچا سیستم")
        .addField("<:emoji_79:997586591625248808> economy", "<:emoji_82:997586723330588845> دیدن کامند های اکونومی")
        .setColor("RANDOM")
        .setFooter("GOORBEH bot")

      const logoRow = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setEmoji("953165645493710879")
        .setCustomId("false")
        .setDisabled(true)
        .setStyle("DANGER")
        .setLabel("GOORBEH")
      )

      const invite = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
        .setLabel("Invite")
        .setEmoji("1002270264161226824")
        .setStyle("LINK")
        .setURL("https://yun.ir/goorbeh"),

        new Discord.MessageButton()
        .setStyle("LINK")
        .setLabel("Server Support")
        .setURL("https://discord.gg/8QxgXnXZ")
        .setEmoji("997586743656206417")
      )

      const Select = new Discord.MessageActionRow().addComponents(
        new Discord.MessageSelectMenu()
        .setPlaceholder("انتخاب کنید")
        .setCustomId("SelectHelp")
        .addOptions([
          {
          label: "bot",
          value: "Bot",
          emoji: "997586743656206417"
         }, {
            label: "public",
            value: "Public",
            emoji: "997586674404032532"
         }, {
            label: "fun",
            value: "Fun",
            emoji: "997586645018742826"
         }, {
            label: "admin",
            value: "Admin",
            emoji: "998600731114348664"
         }, {
            label: "captcha",
            value: "Captcha",
            emoji: "997586700064805006"
         }, {
            label: "economy",
            value: "Economy",
            emoji: "997586591625248808"
         }
                    ])
      )

      interaction.reply({embeds: [embed], components: [Select, logoRow, invite],
                        ephemeral: true})
    }
  }