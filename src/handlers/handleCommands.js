const { Client } = require('discord.js'); // Import Discord.js 

const { readdirSync } = require("fs"); // Import fs

/**
 *  @param {Client} client 
 */

module.exports = (client) => {
    try {
        console.log("-".repeat(36).yellow);
        console.log("[!] Initializing Commands Handler!".blue);
        console.log("-".repeat(36).yellow);
        
        const dirs = readdirSync("./commands")

        const isDir = (path) => { 
            try{ 
                readdirSync(path); 
                return true; 
            }catch { 
                return false; 
            }
        }
        console.log(dirs) 


        console.log("-".repeat(36).yellow);
    } catch (err) {
        client.error(err);
    }
};
