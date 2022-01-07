const {Client , Intents} = require('discord.js'); // Import discord.js 
const dotenv = require('dotenv'); // Import dotenv
dotenv.config(); // Load .env file 

const client = new Client({ 
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,   
    ]
});

client.on('ready', () => {
    console.log("CareSasi is ready!");  // When the bot is ready, print "CareSasi is ready!"
}); 

client.on('messageCreate', msg => {
    console.log(msg)
});
client.login(process.env.TOKEN); // Login to discord 