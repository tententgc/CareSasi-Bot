const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    description: "Stop it.. Get Some Help!",

    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        try {
            const { guild } = message;

            const embed = new MessageEmbed().setColor(client.color);

            embed.setDescription("Hey.. Wassup")

            await message.reply({ embeds: [embed] });
        } catch (err) {
            client.error(err);
        }
    },
};