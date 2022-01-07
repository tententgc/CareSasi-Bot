const { Client } = require('discord.js'); // Import Discord.js 

const { readdirSync } = require("fs"); // Import fs

/**
 *  @param {Client} client 
 */

module.exports = (client) => {
    try{
        console.log("-".repeat(36).yellow);
        console.log("[!] Initializing Event Handler!".blue);
        console.log("-".repeat(36).yellow); 

        const events_dir = readdirSync("./events/").filter((f) => f.endsWith(".js")); // Get all events 
        events_dir.map((e) =>{ 
            const event_file = require(`../events/${e}`);

            if(typeof event_file === "function"){
                const event_name = e.split(".js")[0]; 
                client.on(event_name, event_file.bind(null, client)); 
                console.log(`[✔] Loaded Event: [`.green + event_name.cyan +`] Event`.green);
            }
        });
        console.log("-".repeat(36).yellow);
    } catch (err){ 
        client.error(err);  
    }
};
