const Discord = require("discord.js")
const Schema = require("../schema/factory-schema")
const Mschema = require("../schema//items-schema")
const cooldowns = new Map();
const humanizeDuration = require('humanize-duration');

module.exports = {
    category: 'Testing',
  description: 'sell your clothes', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,

    callback: async({interaction, user}) => {

const data3 = await Mschema.findOne({
            userID: user.id,
        })
    
        if(!data3){
            interaction.reply({content: "شما هنوز ثبت نام نکردید با زدن /sabtnam ثبت نام کنید", ephemeral: true})
            return;
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
cooldowns.set(interaction.user.id, Date.now() + 3600000);
                    setTimeout(() => cooldowns.delete(interaction.user.id), 3600000);
        const factory = await Schema.findOne({
            User: user.id,
        })

        

        if(!factory) {
            interaction.reply({content: "شما کارخانه ندارید با زدن کامند /buy-factory کارخانه بخرید", ephemeral: true})
            return;
        }

        const money = await Mschema.findOne({
            userID: user.id
        })

        const sefr = 0

        if(factory.clothes === sefr) {
            interaction.reply({content: "شما لباس ندارید تا بفروشید با زدن کامند /create-clothes لباس درست کنید", ephemeral: true})
            return;           
        }

        const update1 = await Schema.findOneAndUpdate({
            User: user.id,
        }, {
            $inc: {
                clothes: -1
            }
        })

        const update2 = await Mschema.findOneAndUpdate({
            User: user.id,
        }, {
            $inc: {
                money: 500000,
            }
        })

        interaction.reply({content: "شما یک لباس فروختید و 300000 تا پول گرفتید", ephemeral: true})
    }
    }
}
