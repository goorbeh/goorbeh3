const Discord = require("discord.js")
const Schema = require("../schema/factory-schema")
const MoneySchema = require("../schema/items-schema")

module.exports = {
    category: 'Testing',
  description: 'buy factory :)', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
 

  guildOnly: true,
  options: [
    {
      name: "name",
      description: "the name for factory",
      required: true,
      type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
    }
  ],
  
    callback: async({interaction}) => {
       const NameF = interaction.options.getString("name")


       const NameFactory = await Schema.findOne({
        Name: NameF
    })

    if(!NameFactory) {

        const data2 = await Schema.findOne({
         User: interaction.user.id
     })


    if(data2) {
     interaction.reply({content: "شما قبلا کارخانه داشتید", ephemeral: true})
        return
    }

    const data3 = await MoneySchema.findOne({
        userID: interaction.user.id,
    })

    if(!data3){
        interaction.reply({content: "شما هنوز ثبت نام نکردید با زدن /sabtnam ثبت نام کنید", ephemeral: true})
        return;
    }

    if(data3.money < 1000000) {
        interaction.reply({content: "شما پول کافی ندارید حداقل 1 میلیون پول لازم است", ephemeral: true})
        return;
    }

    const MoSchema = await MoneySchema.findOneAndUpdate({
        userID: interaction.user.id,
    }, {
        $inc: {
            money: -1000000
        }
    })

    


       let data = await Schema.create({
           User: interaction.user.id,
           Name: NameF,
           anbar: 4,
           clothes: 0,
           nakh: 0,
           level: 1,
           nakhanbar: 400,
           moneyLevel: 1000000,
       })

       let Embed = new Discord.MessageEmbed()
       .setTitle("ساخته شد")
       .setDescription(`کارخانه شما با اسم ${NameF} ساخته شد`)
       .setColor("BLUE")
       .setTimestamp()

       interaction.reply({embeds: [Embed], ephemeral: true})
    } else {
        interaction.reply({content: "این اسم قبلا ست شده است", ephemeral: true})
        return;
    }
    }
}