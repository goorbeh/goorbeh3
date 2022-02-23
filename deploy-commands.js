const { REST } = require('@discordjs/rest');
 const { Routes } = require('discord-api-types/v9');
 const { token } = require('./botconfig.json');
 const fs = require('fs'); const commands = [];
 const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
 // Place your client and guild ids here 
const clientId = '826124040677752853'; 
const guildId = '839525552476913704';
 for (const file of commandFiles) { 	
const command = require(`./commands/${file}`);
 	}
 const rest = new REST({ version: '9' }).setToken(token);
 (async () => {
 	try {
 		console.log('Started refreshing application (/) commands.');
 		await rest.put(
 			Routes.applicationGuildCommands(clientId, guildId),
 			{ body: commands },
 		);
 		console.log('Successfully reloaded application (/) commands.');
 	} catch (error) {
 		console.error(error);
 	} })();
