const Discord = require("discord.js")
const profileSchema = require("../schema/items-schema")

module.exports = {
     category: 'Testing',
  description: 'give money to someone', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,

  options: [
    {
      name: "member",
      description: "the user for mention",
      required: true,
      type: 6,
    },
    {
      name: "amount",
      description: "the amount for pay",
      required: true,
      type: 10,
    }
  ],

    callback: async({interaction, user}) => {
        const mention = interaction.options.getUser("member")
            
        const amount = interaction.options.getNumber("amount")

        const iprofile = await profileSchema.findOne({
            userID: user.id
        })

        if(!iprofile) {
            return interaction.reply({content: "<:emoji_85:998533562481508472> شما ثبت نام نکردید", ephemeral: true})
        }

        const youprof = await profileSchema.findOne({
            userID: mention.id,
        })

        if(!youprof) {
            return interaction.reply({content: "<:emoji_85:998533562481508472> ایشون ثبت نام نکردند", ephemeral: true})
        }

        if(iprofile.bank < amount) {
            return interaction.reply({content: "<:emoji_85:998533562481508472> شما اینقدر پول ندارید", ephemeral: true})
        }

        const up1 = await profileSchema.findOneAndUpdate({
            userID: user.id
        }, {
            $inc: {
                bank: -amount
            }
        })

        const up2 = await profileSchema.findOneAndUpdate({
            userID: mention.id,
        }, {
            $inc: {
                bank: amount
            }
        })

        interaction.reply({content: `<:emoji_82:997586700064805006> شما ${amount} تا پول کارت به کارت کردید`, ephemeral: true})

        }
    
}