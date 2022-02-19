const Discord = require('discord.js')

module.exports = {
    name: "ban",
    description: "ban command",
    usage: ["ban"],
    category: "general",

    run: async(client, message, args) => {
        const user = message.mentions.users.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('!پرمیشن بن داری که کامند میزنی؟')
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .ban({
                reason: 'They were bad!',
              })
              .then(() => {
  
                message.channel.send(`**از سرور بن شد! ${user.tag}**`);
              })
              .catch(err => {
                message.channel.send('نمیتونم اینو بن کنم');
                console.error(err);
              });
          } else {
            message.channel.send("**ممبر مورد نظر شما در سرور عضو نیست!**");
          }
        } else {
          message.channel.send("*کسی رو منشن نکردی باید اینطوری بنویسی:*\n**^ban @user**");
        }         
    }
} 
