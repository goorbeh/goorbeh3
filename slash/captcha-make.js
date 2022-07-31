const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const Schema = require("../schema/captcha-schema")


module.exports = {
      category: 'Testing',
  description: 'setting up the captcha system', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command


  guildOnly: true,

    callback: async({interaction, client, channel}) => {

      const mwrong1 = ["6gv1kk", "18nnao", "0bqvj", "19hbn", "axhh", "ywyh11"]

      const wrong1 = mwrong1[Math.floor(Math.random() * mwrong1.length)];

      const mwrong2 = ["7hqlao", "0jbca", "9ahban", "8hqhkqk", "8habka"]

      const wrong2 = mwrong2[Math.floor(Math.random() * mwrong2.length)];

        let embed1 = new MessageEmbed()
        .setTitle("ثبت نشده")
        .setColor("RED")
        .setDescription(`شما چیزی ثبت نکرده اید.
        برای ثبت کردن **/captcha-setup** را استفاده کنید`)

        const data = await Schema.findOne({
            Guild: interaction.guild.id,
        })
        if(!data) {
            interaction.reply({embeds: [embed1], ephemeral: true})
        };
        
      

        let embed4 = new MessageEmbed()
        .setTitle("برای وریفای انتخاب کنید")
        .setDescription("یکی از دکمه ها درست است که کد زیر بر روی ان است ان را انتخاب کنید تا وریفای شوید")
        .setImage(`https://hremussi.sirv.com/Negar_%DB%B2%DB%B0%DB%B2%DB%B2%DB%B0%DB%B7%DB%B1%DB%B8_%DB%B1%DB%B5%DB%B3%DB%B9%DB%B4%DB%B8.png?text.0.text=${data.Code}&text.0.position.gravity=center&text.0.size=30`)
        .setColor("RANDOM")

        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.reply({content: "شما پرمیشن ندارید", ephemeral: true})
        const row = new MessageActionRow().addComponents(
           new MessageButton()
        .setLabel(wrong1)
        .setStyle("DANGER")
        .setCustomId("no1"),

        new MessageButton()
        .setLabel(data.Code)
        .setStyle("DANGER")
        .setCustomId("yes"),

        new MessageButton()
        .setLabel(wrong2)
        .setStyle("DANGER")
        .setCustomId("no2")
        );

       interaction.channel.send({
          embeds: [embed4],
          components: [row]
        })
      interaction.reply({content: "Done", ephemeral: true})
  }
}