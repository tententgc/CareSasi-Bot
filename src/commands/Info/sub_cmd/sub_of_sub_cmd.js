const {Message , Client, MessageEmbed } = require("discord.js"); 
module.exports = {
    name: "nice",
    description: "nice cmd", 

    /**
     * @param {Client} client 
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => { 
        try{ 
            const { guild } = message; 

            const embed = new MessageEmbed().setColor(client.color);

            await message.reply({ embeds : [embed]});
        }catch(err){ 
            client.error(err);
        }
    }

};