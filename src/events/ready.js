const { Client } = require("discord.js");

/**
 * 
 * @param {Client} client 
 */
module.exports = (client) => { 
try{
        console.log(`[>]`.green + client.user.username.cyan + ` is ready!`.green);
}catch(err){ 
    client.error(err);  
}
}
