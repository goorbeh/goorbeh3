const Discord = require('discord.js')

module.exports = {
    name: "clear",
    description: "clear command",
    usage: ["clear"],
    category: "general",
    
    run: async(client, message, args) => {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('پرمیشن نداری :/')
        if(!args[0]) return message.channel.send('خو بعد کامند بنویس چقدرو میخوای پاک کنی')
        if(isNaN(args[0])) return message.channel.send('دا عدد باید بدی فقط')
        if(parseInt(args[0])> 99) return message.channel.send('بیشتر از 99 تا نمیتونی پاک کنی')
        await message.channel.bulkDelete(parseInt(args[0]) +1)
            .catch(err => console.log(err))
        message.channel.send(`** ${args[0]} تا مسیج پاک شد **`).then(m => m.delete({ timeout : 5000 }))
    }
} 
