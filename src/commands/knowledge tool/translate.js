const { Message, Client, MessageEmbed } = require("discord.js");
const translate = require('@iamtraction/google-translate');
module.exports = {
    name: "translate",
    description: "Translate text to english",

    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        try {
            const query = args.join(" "); 
            if (!query) return message.reply("Please provide a text to translate!");
            const embed = new MessageEmbed().setColor(client.color);
            translate(query, {to: 'en'}).then(res => {
                embed.setDescription(res.text);
                message.reply({embeds: [embed]});
            })
        } catch (err) {
            client.error(err);
        }
    },
};