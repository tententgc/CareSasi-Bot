const { default: Discord, Client,Collection } = require('discord.js'); // Import Discord.js
require("colors"); // Import colors
const config = require('./data/config.json'); // Import config.json
const { readdirSync } = require("fs");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"], allowedMentions: { repliedUser: true  } });



console.clear(); 
console.log("-".repeat(36).yellow);
console.log("[!] Starting CareSasi!" .blue);
readdirSync("./handlers/").map((d) => { 
    if (typeof (i = require("./handlers/" + d)) === "function") {
        i(client); 
    }
})


client.login(config.token); // Login to discord 