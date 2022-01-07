import DiscordJS , {Intents } from 'discord.js';  
const config = require('./Data/config.json');  

const client = new DiscordJS.Client({
    intents : [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES, 
    ]
});

client.on('ready', () => {
    console.log("CareSasi is online!"); 
})

client.login(config.token); 