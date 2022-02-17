const Discord = require('discord.js')
const { Client } = require('discord.js')
const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES"]})
const botconfig = require('./botconfig')
const { readdirSync } = require("fs");
const { join } = require("path");

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
  let logEmbed = new Discord.MessageEMbed()
  .setTitle("جوین یهسرور شدم")
  .addField("اسم سرور", `${guild.name}`, true)
  .addField("اونر سرور", `${guild.owner}`, true)
  .addField("تعداد ممبر ها", `${guild.memberCount}`, true)
  .addField("ایدی سرور", `${guild.id}`, true)
  .setImage(guild.iconURL())
  logChannel.send({embeds: [logEmbed]})
})
client.commands = new Discord.Collection();

client.on("ready", () => {
  console.log(`logged as ${client.user.tag}`)


    function YousamPower() {
      let hungry = [`${client.guilds.cache.size} Servers | ^help ` , `${client.users.cache.size} Members | ^invite`]
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
  .addField("پریفیکس من در این سرور", `/${prefix}/`)
  .addField("اینوایت دادن من", `/${prefix}invite/`)
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

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
})

client.login(process.env.token)
