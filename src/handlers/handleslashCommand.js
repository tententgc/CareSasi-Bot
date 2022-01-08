const { Client } = require('discord.js'); // Import Discord.js 

const { readdirSync } = require("fs"); // Import fs

/**
 *  @param {Client} client 
 */

module.exports = async (client) => {
    try {
        console.log("-".repeat(36).yellow);
        console.log("[!] Initializing Slash Commands Handler!".blue);
        console.log("-".repeat(36).yellow);

        const slash_cmd_dirs  = readdirSync("./slashCommands");

        slash_cmd_dirs.map( slash_cmd_dir  => { 
            const  slash_cmd_files = readdirSync("./slashCommands/"+slash_cmd_dir).filter((f) => f.endsWith(".js")); 
            slash_cmd_files.map(file => { 
                const cmd = require(`../slashCommands/${slash_cmd_dir}/${file}`); 

                console.log(cmd)
            })
        });
    } catch (err) {
        client.error(err);
    }
};
