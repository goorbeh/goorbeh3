const Discord = require("discord.js")
const Schema = require("../schema/factory-schema")
const MoneySchema = require("../schema/items-schema")
const cooldowns = new Map();
const humanizeDuration = require('humanize-duration');

module.exports = {
    category: 'Testing',
  description: 'create your clothes', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,
    callback: async({interaction, user}) => {

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
cooldowns.set(interaction.user.id, Date.now() + 3600000);
                    setTimeout(() => cooldowns.delete(interaction.user.id), 3600000);
        const factory = await Schema.findOne({
            User: user.id,
        })

        const data3 = await MoneySchema.findOne({
            userID: user.id,
        })
    
        if(!data3){
            interaction.reply({content: "شما هنوز ثبت نام نکردید با زدن /sabtnam ثبت نام کنید", ephemeral: true})
            return;
        }

        if(!factory) {
            interaction.reply({content: "شما کارخانه ندارید با زدن کامند /buy-factory کارخانه بخرید", ephemeral: true})
            return;
        }

        if(factory.clothes === factory.anbar || factory.clothes > factory.anbar) {
            interaction.reply({content: "شما دیگر جایی برای ذخیره کردن ندارید", ephemeral: true})
            return;
        }

        if(factory.nakh < 500) {
            interaction.reply({content: "شما نخ کافی ندارید حداقل 500 تا نخ میخواهید", ephemeral: true})
            return;
        }

        const buyClothes = await Schema.findOneAndUpdate({
            User: user.id,
        }, {
            $inc: {
                nakh: -500,
                clothes: 1,
            }
        })

        interaction.reply({content: "یک لباس ساخته شد", ephemeral: true})

    }
    }
}