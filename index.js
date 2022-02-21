const Discord = require('discord.js')
const { Client } = require('discord.js')
const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES"]})
const botconfig = require('./botconfig')
const { readdirSync } = require("fs");
const { join } = require("path");
let invite = message.channel.createInvite({
 "maxAge": "604800", 
"maxUses": "100" 
})

const mongodb = require('./mongo')()

const PrefixSchema = require('./schema/PrefixSchema');
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
  .addField('<:verify:945185150579392522> **Invite**',`__**${invite}**__}`)
  .setImage(guild.iconURL())
  logChannel.send({embeds: [logEmbed]})
})
client.commands = new Discord.Collection();

client.on("ready", () => {
let count = 0;
client.guilds.cache.forEach((guild) => {
count += guild.memberCount
})
  console.log(`logged as ${client.user.tag}`)


    function YousamPower() {
      let hungry = [`${client.guilds.cache.size} Servers | ^help` , `${count} Members | ^invite`]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "PLAYING"});
    }; setInterval(YousamPower, 10000)
  });

const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async message => {

  let prefix;
  let data = await PrefixSchema.findOne({
    _id: message.guild.id
  })
  if(data === null) {
    prefix = botconfig.perfix
  } else {
    prefix = data.newPrefix
    
  };

  let prefixEmbed = new Discord.MessageEmbed()
  .setTitle("کاری داری باهام؟")
  .addField("پریفیکس من در این سرور", `${prefix}`)
  .addField("اینوایت دادن من", `${prefix}invite`)
  .setFooter("GOORBEH bot")
  .setColor("BLACK")

  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.channel.send({embeds: [prefixEmbed]});
  }

  

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (command) command.run(client, message, args);
})

client.login(process.env.token)
