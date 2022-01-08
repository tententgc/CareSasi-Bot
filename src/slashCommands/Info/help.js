const { Interaction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "help",
    description: "Stop it.. Get Some Help!",

    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        try {
            if (!interaction.isCommand()) return;
            const { guild } = interaction;

            const embed = new MessageEmbed().setColor(client.color);

            embed.setDescription("Hello World");

            await interaction.reply({ embeds: [embed] });
        } catch (err) {
            client.error(err);
        }
    },
};