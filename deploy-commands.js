const { REST } = require('@discordjs/rest');
const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { token } = require('./botconfig.json')

const { Routes } = require('discord-api-types/v9');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(
    Routes.applicationCommands("826124040677752853", "839525552476913704"),
    { body: commands },
)
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
