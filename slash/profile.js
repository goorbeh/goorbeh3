const Discord = require('discord.js')
const Schema = require('../schema/factory-schema')
const profileSchema = require("../schema/items-schema")

module.exports = {
     category: 'Testing',
  description: 'your profile ', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
 

  guildOnly: true,

  options: [
    {
      name: "member",
      description: "mention one member",
      required: false,
      type: 6,
    }
  ],

    callback: async({interaction, user}) => {

        const FactoryName = await Schema.findOne({
            User: user.id,
        })

        const profile = await profileSchema.findOne({
            userID: user.id
        })

        if(!profile) {
            return interaction.reply({content: "<:emoji_85:998533562481508472> شما هنوز ثبت نام نکرده اید", ephemeral: true})
        }

        const mention = interaction.options.getUser("member")

       

        if(mention) {

            const mentionFactory = await Schema.findOne({
                User: mention.id
            })

        const mentionUser = await profileSchema.findOne({
            userID: mention.id
        })

        if(!mentionUser) {
            return interaction.reply({content: "<:emoji_85:998533562481508472>این شخص هنوز ثبت نام نکرده است", ephemeral: true})
        }


        if(!mentionFactory) {
            let embed4  = new Discord.MessageEmbed()
        .setTitle(`پروفایل شما`)
        .addField("پول هایتان", `**__${mentionUser.money}__**`, true)
        .addField("پول بانکتان", `**__${mentionUser.bank}__**`, true)
        .addField("کارخانه", `**__ندارد__**`, true)
        .addField("الماس هایتان", `**__${mentionUser.gem}__**`, true)
        .addField("ماشینتان", `**__${mentionUser.car}__**`, true)
        .addField("خانه شما", `**__${mentionUser.house}__**`, true)
        .addField("شغل شما", `**__${mentionUser.job}__**`, true)
        .setColor("RANDOM")
        .setFooter("economy commands")

        interaction.reply({content: `||<@${mention.id}>||`, embeds: [embed4]})
        } else {

        let embed3  = new Discord.MessageEmbed()
        .setTitle(`پروفایل شما`)
        .addField("پول هایتان", `**__${mentionUser.money}__**`, true)
        .addField("پول بانکتان", `**__${mentionUser.bank}__**`, true)
        .addField("کارخانه", `**__${mentionFactory.Name}__**`, true)
        .addField("الماس هایتان", `**__${mentionUser.gem}__**`, true)
        .addField("ماشینتان", `**__${mentionUser.car}__**`, true)
        .addField("خانه شما", `**__${mentionUser.house}__**`, true)
        .addField("شغل شما", `**__${mentionUser.job}__**`, true)
        .setColor("RANDOM")
        .setFooter("economy commands")

        interaction.reply({content: `||<@${mention.id}>||`, embeds: [embed3]})
        }

        
    } else {
    

        if(!FactoryName) {
            let embed  = new Discord.MessageEmbed()
        .setTitle(`پروفایل شما`)
        .addField("پول هایتان", `**__${profile.money}__**`, true)
        .addField("پول بانکتان", `**__${profile.bank}__**`, true)
        .addField("کارخانه", `**__ندارد__**`, true)
        .addField("الماس هایتان", `**__${profile.gem}__**`, true)
        .addField("ماشینتان", `**__${profile.car}__**`, true)
        .addField("خانه شما", `**__${profile.house}__**`, true)
        .addField("شغل شما", `**__${profile.job}__**`, true)
        .setColor("RANDOM")
        .setFooter("economy commands")

        interaction.reply({embeds: [embed], ephemeral: true})
        } else {

        let embed2  = new Discord.MessageEmbed()
        .setTitle(`پروفایل شما`)
        .addField("پول هایتان", `**__${profile.money}__**`, true)
        .addField("پول بانکتان", `**__${profile.bank}__**`, true)
        .addField("کارخانه", `**__${FactoryName.Name}__**`, true)
        .addField("الماس هایتان", `**__${profile.gem}__**`, true)
        .addField("ماشینتان", `**__${profile.car}__**`, true)
        .addField("خانه شما", `**__${profile.house}__**`, true)
        .addField("شغل شما", `**__${profile.job}__**`, true)
        .setColor("RANDOM")
        .setFooter("economy commands")

        interaction.reply({embeds: [embed2], ephemeral: true})
        }
    }
    }
}