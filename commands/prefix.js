const Discord = require('discord.js')
const PrefixSchema = require('../schema/PrefixSchema')

module.exports = {
    name: "prefix",
    descripton: "set a new prefix",
    usgae: "prefix <new prefix>",
    category: "admin",

    run: async(client, message, args) => {
     if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('شما پریمیشن کافی ندارید')
     const newprefix = args[0]
     if(!newprefix) return message.channel.send('لطفا پریفیکس جدید را بعد کامند بنویسید')
     if(newprefix.length > 3) return message.channel.send('شما نمیتوانید بیشتر از سه کاراکتر بنویسید')

     let data;
     try {
         data = await PrefixSchema.findOne({
             _id: message.guild.id
         })
         if(!data) {
             let newdata = await PrefixSchema.create({
                 _id: message.guild.id,
                 newPrefix: newprefix
             })
             newdata.save()
         } else {
             await PrefixSchema.findOneAndUpdate({
                 _id: message.guild.id,
                 newPrefix: newprefix,
             })
         }
         message.channel.send(`پریفیکس به ${newprefix} تغییر کرد`)
     } catch (err) {
         console.log(err)
     }
    }
    }
