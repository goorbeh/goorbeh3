const Discord = require("discord.js")
const Schema = require("../schema/items-schema")

module.exports = {
     category: 'Testing',
  description: 'sign up in economy', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
  

  guildOnly: true,

    callback: async({interaction}) => {

        let embed = new Discord.MessageEmbed()
        .setTitle("خوش اومدید")
        .setColor("BLUE")
        .setTimestamp()
        .setDescription("شما با موفقیت ثبت نام کردید \n\n شما میتوانید با زدن کامند /work کار کنبد \n\n بقیه کامند ها هم داخل کامند /economy هست")

        const user = await Schema.findOne({
            userID: interaction.user.id,
        })

        if(user) {
            return interaction.reply({content: "<:emoji_85:998533562481508472> شما قبلا ثبت نام کردید", ephemeral: true})
        } else {
            const sabt = await Schema.create({
                userID: interaction.user.id,
                money: 100,
                bank: 0,
                car: "پراید",
                house: "هتل",
                gem: 0,
                job: "سرایدار",
            })

            await interaction.reply({embeds: [embed], ephemeral: true})
        }
    }
}