const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder
    .setName('اسم کامند')
    .setDescription('دیسکریپشن کامند'),
    async execute(interaction) {
        message.channel.send('hi')
    }
    }
