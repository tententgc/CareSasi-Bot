import DiscordJS , {Intents} from 'discord.js'; 
import dotenv from 'dotenv'; 
dotenv.config(); 

const client = new DiscordJS.Client({ 
    intents : [ 
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES, 
    ]
}); 

client.on('ready', () => {
    console.log('Tenten bot is ready!'); 
})

client.on('messageCreate', (message) => { 
    if(message.content === 'ping') {
        message.reply('pong'); 
    }
})

client.login(process.env.TOKEN); 