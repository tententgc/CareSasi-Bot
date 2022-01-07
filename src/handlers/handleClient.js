const {Client, WebhookClient, MessageEmbed} = require('discord.js'); // Import Discord.js 
const config = require('../Data/config.json'); // Import config.json 
/**
 * 
 *  @param {Client} client 
 */

module.exports = (client) => { 
    client.prefix =  config.prefix; // Set the bot's prefix
    
    /**
     *
     *  @param {Error} err
     */
    client.error = (err) => { 
        try {
            const isURL = (u) =>{
                try { 
                    new URL(u); 
                    return true; 
                }catch{
                    return false; 
                }
            };
            if (isURL(logger)){
                try{
                const loggerhook = new WebhookClient({ url : logger }); 
                const error_embed = new MessageEmbed().setTitle("Error!").setDescription(`\`\`\`${err}\`\`\``).setColor(config.color);
                loggerhook.send({ embeds : [error_embed] }); 
            } catch{}
            }
            console.log("[ERROR]".red + ` ${err}`.red); 
            //logger
        }catch (err) {
            //err
        } 
    }
} 