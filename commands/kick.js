const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: "kick command",
    usage: ["kick"],
    category: "general",

    run: async(client, message, args) => {
        const user = message.mentions.users.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('!پرمیشن کیک داری که کامند میزنی؟')
        if (user) {
          const member = message.guild.member(user);
          
          if (user) {
            
            user
              .kick('Optional reason that will display in the audit logs')
              .then(() => {
                message.channe.send(`**از سرور کیک شد${user.tag}**`);
              })
              .catch(err => {
  
                message.channel.send('نمیتونم اینو کیک کنم');
  
                console.error(err);
              });
          } else {
            message.channel.send("**فرد مورد نظر شما در سرور عضو نمیباشد!**");
          }
        } else {
          message.channel.send("**کسی رو منشن نکردی, منشن کن تا با دندونام جرش بدم**");
        }
    }
} 
