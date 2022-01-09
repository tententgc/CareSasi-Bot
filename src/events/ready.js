const { Client } = require("discord.js");

/**
 * 
 * @param {Client} client 
 */
module.exports = async (client) => { 
try{
    console.log("-".repeat(36).yellow);
    console.log(`[✔] `.green + client.user.username.cyan + ` is ready!`.white);
}catch(err){ 
    client.error(err);  
}
}
