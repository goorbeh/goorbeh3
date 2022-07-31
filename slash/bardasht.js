const Discord = require("discord.js")
const Schema = require('../schema/items-schema')
const cooldowns = new Map();
const humanizeDuration = require('humanize-duration');

module.exports = {
    description: "take your money in bank to wallet",
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,

  options: [
    {
      name: "money",
      description: "the amount of money",
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

      const cooldown = cooldowns.get(interaction.user.id);
if (cooldown) {
          const remaining = humanizeDuration(cooldown - Date.now());
          const embed = new Discord.MessageEmbed()
          .setColor(`DARK_BUT_NOT_BLACK`)
          .setFooter(`${interaction.user.username} ارسال شده توسط`, interaction.user.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setDescription(`<:emoji_82:997586723330588845>
**${remaining}**`)
          return interaction.reply({embeds: [embed]})
            .catch(console.error);
        } else {
cooldowns.set(interaction.user.id, Date.now() + 60000);
                    setTimeout(() => cooldowns.delete(interaction.user.id), 60000);


        

      
        let amount = interaction.options.getNumber("money")

        if(user.bank < amount) {
            return interaction.reply({content: "<:emoji_85:998533562481508472> شما اینقدر پول ندارید", ephemeral: true})
        }

        
        const variz = await Schema.findOneAndUpdate({
            userID: interaction.user.id
        }, {
            $inc: {
                money: amount,
                bank: -amount
            }
        })

        let embed = new Discord.MessageEmbed()
        .setTitle("برداشت شد")
        .setDescription(`شما با موفقیت ${amount} تومان به کارت خود برداشت کردید`)
        .setColor("RANDOM")
        .setFooter("economy commands")


        interaction.reply({embeds: [embed], ephemeral: true})

    }
          }
}
