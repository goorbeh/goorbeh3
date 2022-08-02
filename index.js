
const Discord = require('discord.js')
const { Client, MessageEmbed, MessageActionRow } = require('discord.js')
const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES"]})
const botconfig = require('./botconfig')
const { readdirSync } = require("fs");
const { join } = require("path");
const WOKCommands = require("wokcommands")
const captchaSchema = require("./schema/captcha-schema")

const mongodb = require('./mongo')()


const { trusted } = require('mongoose');




client.on('guildCreate', guild => {

 const member = guild.memberCount

  if (member < 20 ) {
    guild.leave()
  }
})

client.on('guildCreate', guild => {
  const logChannel = client.channels.cache.get("943784949532745748")
  let logEmbed = new Discord.MessageEmbed()
  .setTitle("New Server Is Added")
  .addField("<:verify:945185150579392522> **name**", `**__${guild.name}__**`, true)
  .addField("<:verify:945185150579392522> **__Member__**", `__**${guild.memberCount}**__`, true)
  .addField("<:verify:945185150579392522> **ID**", `**__${guild.id}__**`, true)
  .setImage(guild.iconURL())
  logChannel.send({embeds: [logEmbed]})
})
client.commands = new Discord.Collection();

client.on("ready", () => {


   new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: join(__dirname, 'slash'),

     testServers: ['984456075963166790'],
  })

  const guild = client.guilds.cache.get("83952555247691370")

  let commands

  if(guild) {
    commands = guild.commands
  } else {
    commands = client.application.commands
  };
  
commands.create({
  name: "ping",
  description: "pong"
}),
commands.create({
    name: "say",
    description: "کلمه ای که میخوای رو میگه",
    options: [
      {
        name: "word",
        description: "کلمه رو بزار",
        required: true,
        type: Discord.Constants.ApplicationCommandOptionTypes.STRING
      }
      ]
  })
let count = 0;
client.guilds.cache.forEach((guild) => {
count += guild.memberCount
})
  console.log(`logged as ${client.user.tag}`)

const StatusEmbed = new MessageEmbed()
.setTitle("GOORBEH status")
.setColor("BLUE")
.addField("Ping", `${client.ws.ping}`)
.addField("servers", `${client.guilds.cache.size}`)
.addField("members", `${client.users.cache.size}`)
.setFooter("updated every 2Mins | GOORBEH bot")
 client.guilds.cache.get('839525552476913704').channels.cache.get('1003660134729400340').send({embeds: [StatusEmbed]}).then(msg => {
        setInterval(() => {
            msg.edit({embeds: [StatusEmbed]})
        }, 120000);
    })


    function YousamPower() {
      let hungry = [`${client.guilds.cache.size} Servers | ^help` , `${count} Members | ^invite`]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "PLAYING"});
    }; setInterval(YousamPower, 10000)
  });

    client.on("interactionCreate", async interaction => {
      if (interaction.isSelectMenu()) {

      const value = interaction.values[0]

      if(value === "Bot") {
        let embed = new Discord.MessageEmbed()
        .setTitle("کامند های بات")
        .addField("invite", "/منو اینوایت بده جون دل/")
        .addField("botinfo", "/اطلاعات باته جون دل/")
          .addField("idea", "/ایده داری بگو بینم چیه/")
          .addField("bug", "/باگ داره بات ای بابا بگو بینم/")
          .addField("ping", "/پینگ ربات دایی/")
        .setFooter("GOORBEH bot")
        .setColor("BLUE")
        interaction.reply({embeds: [embed],
                          ephemeral: true})
      }

      if(value === "Public") {
        let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("کامند های عمومی")
        .addField("serverinfo", "اطلاعات سرورو بهت میده")
        .addField("userinfo", "اطلاعات یه کسی رو بهت میده")
        .setFooter("GOORBEH bot")
       interaction.reply({embeds: [embed], ephemeral: true})
      }

      if(value === "Fun") {
        let embed = new Discord.MessageEmbed()
        .setTitle("کامند های فان")
        .setColor("BLUE")
        .setFooter("GOORBEH bot")
        .addField("gaysanj", "/نشون میده درصد گی بودنتون/")
        .addField("noobsanj", "/نشون میده درصد نوب بودنتون/")
        .addField("kill", "/میخوای یکی رو بکشی؟/")
        .addField("hug", "/میخوای یکی رو بغل کنی؟/")
        .addField("kiss", "/میخوای یکی رو بوس کنی؟/")
        .addField("say", "/هر چی بگی بات میگه/")
        .setFooter("GOORBEH bot")
       interaction.reply({embeds: [embed], 
                         ephemeral: true})
      }

      if(value === "Admin") {
        let embed = new Discord.MessageEmbed()
    .setTitle("کامند های ادمینستوری")
    .setColor("BLUE")
    .addField("پاک کردن پیام ها", "clear", true)
    .addField("قفل کردن چنل", "lock", true)
    .addField("باز کردن چنل", "unlock", true)
    .addField("ست کردن پریفیکس", "prefix", true)
    .setFooter("GOORBEH bot")
   interaction.reply({embeds: [embed],
                     ephemeral: true})
      }

      if(value === "Captcha") {
        let embed = new Discord.MessageEmbed()
   .setTitle("Captcha commands")
   .addField("captcha-setup", "<:emoji_82:997586723330588845> تنظیم کردن کپتچا سیستم")
   .addField("captcha-make", "<:emoji_82:997586723330588845> ساختن کپتچا")
   .setColor("BLUE")
   interaction.reply({embeds: [embed], ephemeral: true})
      }
      if(value === "Economy") { 
        let embed = new Discord.MessageEmbed()
        .setTitle("Economy Commands")
        .setColor("BLUE")
        .addField("کامند های رول پلی", "<:emoji_82:997586723330588845> bardasht \n <:emoji_82:997586723330588845> variz \n <:emoji_82:997586723330588845> work \n <:emoji_82:997586723330588845> profile \n <:emoji_82:997586723330588845> pay \n <:emoji_82:997586723330588845> sabtnam")
          .addField("کامند های کارخانه", "<:emoji_82:997586723330588845> buy-factory: 1m \n <:emoji_82:997586723330588845> factory \n <:emoji_82:997586723330588845> buy-nakh: 200k \n <:emoji_82:997586723330588845> create-clothes: 500nakh \n <:emoji_82:997586723330588845> sell-clothes: +500k \n <:emoji_82:997586723330588845> up-factory: watch factory")

            interaction.reply({embeds: [embed], ephemeral: true})
      }
      }

      const data = await captchaSchema.findOne({
            Guild: interaction.guild.id,
        })

const button = interaction.customId
          if(button === "yes") {
            interaction.reply({content: "دی ام را چک کنید", ephemeral: true})
           let role = interaction.guild.roles.cache.get(data.Role);

      let embed3 = new MessageEmbed()
        .setTitle("وریفای شدید")
        .setDescription(`شما در سرور ${interaction.guild.name} وریفای شدید`)
        .setColor("GREEN")
  interaction.member.send({embeds: [embed3]}).catch(err => {
              return;
            })
            interaction.member.roles.add(role).catch(err => {
              interaction.member.send("بات برای رول دادن پرم ندارد لطفا به اونر اطلاع دهید")
              return;
            })
            

            
            
        }

        if(button === "no1") {
          interaction.reply({content: "دی ام را چک کنید", ephemeral: true})

          let embed2 = new MessageEmbed()
          .setTitle("اشتباه زدید")
          .setDescription("شما گزینه اشتباه را زدید")
          .setColor("RED")


          interaction.member.send({embeds: [embed2]}).catch(err => {
            return;
          })
        }

        if(button === "no2") {
          interaction.reply({content: "دی ام را چک کنید", ephemeral: true})
          
          let embed2 = new MessageEmbed()
          .setTitle("اشتباه زدید")
          .setDescription("شما گزینه اشتباه را زدید")
          .setColor("RED")


          interaction.member.send({embeds: [embed2]}).catch(err => {
            return;
          })
            }
})


                    const express = require('express')
const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('FA_NETWORK: Service Roshan Shod');
});

app.listen(3000, () => console.log('Web View On Succed')); 
         

client.login(process.env.token)
