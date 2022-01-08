const { Client, Interaction, MessageEmbed } = require("discord.js");

/**
 *
 * @param {Client} client
 * @param {Interaction} interaction
 */
module.exports = async (client, interaction) => {
    try {
        if (interaction.isCommand()) {
            const cmd = client.slashCommands.get(interaction.commandName);
            const embed = new MessageEmbed().setColor(client.color);

            if (!cmd) {
                embed.setDescription("Something Went Wrong..!");
                return await interaction.reply({ embeds: [embed], ephemeral: true });
            }

            await cmd.run(client, interaction)
        }
    } catch (err) {
        client.error(err);
    }
};

// it will automatically delete the slash command when / after file got deleted after sometime