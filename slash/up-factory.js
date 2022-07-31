const Discord = require("discord.js")
const Schema = require("../schema/factory-schema")
const pSchema = require("../schema/items-schema")

module.exports = {
    category: 'Testing',
  description: 'upgrade your factory', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,

    callback: async({interaction, user}) => {

        const up = await Schema.findOne({
            User: user.id,
        })

        const data3 = await pSchema.findOne({
            userID: user.id,
        })
    
        if(!data3){
            interaction.reply({content: "شما هنوز ثبت نام نکردید با زدن /sabtnam ثبت نام کنید", ephemeral: true})
            return;
        }

        if(!up) {
            interaction.reply({content: "شما کارخانه ندارید با زدن /buy-factory کارخانه خریداری کنید", ephemeral: true})
            return;
        }

        const mm = await pSchema.findOne({
            userID: user.id
        })

        
        if(mm.money < up.moneyLevel) {
            interaction.reply({content: `شما پول کافی ندارید نیاز به ${up.moneyLevel} تا پول دارید`, ephemeral: true})
            return;
        }

        const level = await Schema.findOneAndUpdate({
            User: user.id
        }, {
            $inc: {
                level: 1,
                anbar: 4,
                nakhanbar: 400,
                moneyLevel: 1000000,
            }
        })

        const upp = await Schema.findOne({
            User: user.id,
        })



        const money = await pSchema.findOneAndUpdate({
            userID: user.id,
        }, {
            $inc: {
                money: -up.moneyLevel
            }
        })

     

        let embed = new Discord.MessageEmbed()
        .setTitle("کارخانه اپگرید شد")
        .setDescription(`کارخانه شما به لول ${upp.level} اپگرید شد`)
        .setColor("BLUE")
        .setTimestamp()

      interaction.reply({embeds: [embed]})
    }
}