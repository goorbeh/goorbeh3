const Discord = require('discord.js')
const Schema = require('../schema/items-schema')
const cooldowns = new Map();
const humanizeDuration = require('humanize-duration');

module.exports = {
     category: 'Testing',
  description: 'work-command', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,
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
cooldowns.set(interaction.user.id, Date.now() + 3600000);
                    setTimeout(() => cooldowns.delete(interaction.user.id), 3600000);

       const number  = Math.floor(Math.random() * 1000) +1;


       

        const respons = await Schema.findOneAndUpdate({
            userID: interaction.user.id,
        }, {
            $inc: {
                money: number,
            }
        })
        let embed = new Discord.MessageEmbed()
        .setTitle("کار کردید")
        .setDescription(`شما ${number} تومن کار کردید`)
        .setColor("RANDOM")
        .setFooter("economy commands")

          
        interaction.reply({embeds: [embed], ephemeral: true})
}
    }
}
