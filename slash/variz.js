const Discord = require("discord.js")
const Schema = require('../schema/items-schema')

module.exports = {
     category: 'Testing',
  description: 'take money in wallet to bank', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
 

  guildOnly: true,

  options: [
    {
      name: "money",
      description: "amount of the money",
      required: true,
      type: 10,
    }
  ],

    callback: async({interaction}) => {
        const user = await Schema.findOne({
            userID: interaction.user.id,
        })

        if(!user) {
            return interaction.reply({content: "<:emoji_85:998533562481508472> شما هنوز ثبت نام نکردید", ephemeral: true})
        }
      
        let amount = interaction.options.getNumber("money")

        
        if(user.money < amount) {
            return interaction.reply({content: "<:emoji_85:998533562481508472> شما اینقدر پول ندارید", ephemeral: true})
        }

        
        const variz = await Schema.findOneAndUpdate({
            userID: interaction.user.id
        }, {
            $inc: {
                money: -amount,
                bank: amount
            }
        })

        let embed = new Discord.MessageEmbed()
        .setTitle("واریز شد")
        .setDescription(`شما با موفقیت ${amount} تومان به کارت خود واریز کردید`)
        .setColor("RANDOM")
        .setFooter("economy commands")


        interaction.reply({embeds: [embed], ephemeral: true})

    }
}
