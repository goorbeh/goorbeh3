const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('test'),
    async execute(interaction) {
        message.channel.send('hi')
    }
    }
