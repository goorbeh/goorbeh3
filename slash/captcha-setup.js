
const { MessageEmbed } = require("discord.js")
const Schema = require("../schema/captcha-schema")

module.exports = {
      category: 'Testing',
  description: 'setting up the captcha system', // Required for slash commands
  
  slash: true, // Create both a slash and legacy command
 
  guildOnly: true,

  options: [
    {
      name: "captcha-role",
      description: "mention a role to get user",
      required: true,
      type: "ROLE",
    }, {
      name: "code",
      description: "write captcha code",
      required: true,
      type: "STRING",
    }
  ],

    callback: async({interaction}) => {

     const role = interaction.options.getRole("captcha-role")
     const code = interaction.options.getString("code")


        const data = await Schema.findOne({
            Guild: interaction.guild.id
        })


      
        if(!data) {
          await Schema.create({
                Guild: interaction.guild.id,
                Code: code,
                Role: role.id,
            })
        }else{
          await Schema.findOneAndUpdate({
                Guild: interaction.guild.id,
                Code: code,
                Role: `${role.id}`,
            })
        }


       interaction.reply({content: "انجام شد", ephemeral: true})
    }
}