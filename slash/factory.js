const Discord = require("discord.js")
const Schema = require("../schema/factory-schema")
const MoneySchema = require("../schema/items-schema")

module.exports = {
    category: 'Testing',
  description: 'your factory', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,

    callback: async({interaction, user}) => {

        const data3 = await MoneySchema.findOne({
            userID: user.id,
        })
    
        if(!data3){
            interaction.reply({content: "شما هنوز ثبت نام نکردید با زدن /sabtnam ثبت نام کنید", ephemeral: true})
            return;
        }

       let NOdataEmbed = new Discord.MessageEmbed()
       .setTitle("کارخانه ندارید")
       .setDescription("شما هنوز کارخانه خریداری نکردید لطفا با زدن /buy-factory کارخانه بخرید")
       .setColor("RED")
       .setTimestamp()

        const data = await Schema.findOne({
            User: user.id
        })

        if(!data) {
        interaction.reply({embeds: [NOdataEmbed], ephemeral: true})
        return;
        } else {
            let embed = new Discord.MessageEmbed()
            .setTitle("کارخانه شما")
            .addField("اسم کارخانه", `__**${data.Name}**__`, true)
            .addField("جای انبار", `__**${data.anbar}**__`, true)
            .addField("مقدار نخ", `__**${data.nakh}**__`, true)
            .addField("مقدار لباس", `__**${data.clothes}**__`, true) 
            .addField("لول کارخانه", `__**${data.level}**__`, true)
            .addField("پول اپگرید بعدی", `__**${data.moneyLevel}**__`, true)
            .setColor("BLUE")
            .setTimestamp()
           interaction.reply({embeds: [embed]})
        }
    }
}