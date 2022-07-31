const Discord = require("discord.js")
const Schema = require("../schema/factory-schema")
const Mschema = require("../schema/items-schema")

module.exports = {
     category: 'Testing',
  description: 'buy nakh :)', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,
    callback: async({interaction, user}) => {
        const factory = await Schema.findOne({
            User: user.id,
        })
        const data3 = await Mschema.findOne({
            userID: user.id,
        })
    
        if(!data3){
            iteraction.reply({content: "شما هنوز ثبت نام نکردید با زدن /sabtnam ثبت نام کنید", ephemeral: true})
            return;
        }

        if(!factory) {
            interaction.reply({content: "شما کارخانه ندارید با زدن کامند /buy-factory کارخانه بخرید", ephemeral: true})
            return;
        }

        if(factory.nakh === factory.nakhanbar || factory.nakh > factory.nakhanbar) {
            interaction.reply({content: "شما دیگر جایی برای خرید نخ ندارید", ephemeral: true})
            return;
        }

        const money = await Mschema.findOne({
            userID: user.id,
        })

        if(money.money < 200000) {
            interaction.reply({content: "شما پول کافی ندارید", ephemeral: true})
            return;
        }

        const moneyUpdate = await Mschema.findOneAndUpdate({
            userID: user.id,
        }, {
            $inc: {
                money: -200000,
            }
        })


        const addNakh = await Schema.findOneAndUpdate({
            User: user.id,
        }, {
            $inc: {
                nakh: 300
            }
        })

        const tedadNakh = await Schema.findOne({
            User: user.id,
        })

        let embed = new Discord.MessageEmbed()
        .setTitle("خریداری شد")
        .setDescription(`شما 300 تا نخ خریداری کردید و الان ${tedadNakh.nakh} تا نخ دارید`)
        .setColor("BLUE")

        interaction.reply({embeds: [embed], ephemeral: true})
    }
}
