const { default: Discord, Client } = require('discord.js'); // Import Discord.js
require("colors"); // Import colors
const config = require('./Data/config.json');

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"], allowedMentions: { repliedUser: true  } });

client.on('ready', () => {
    console.log(client.user.username.cyan +` Started`.green);  // When the bot is ready, print "CareSasi is ready!"

    client.user.setActivity("Coding with Tenten", { type: "WATCHING" }); // Set the bot's activity to "Watching"
});

client.on('messageCreate',(msg) => { 
    if (msg.author.bot || msg.auhtor.id ===client.user.id) return ; // If the message is from a bot or the bot itself, return
    if (!msg.guild) return ; 

    if (msg.content === "ping"){
        msg.reply("pong!"); // If the message is "ping", reply "pong!"
    }
})


client.login(config.token); // Login to discord 