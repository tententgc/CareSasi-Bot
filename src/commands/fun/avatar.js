const { Message, Client, MessageEmbed } = require("discord.js");
module.exports = {
    name: "avatar",
    description: "send your avatar", 

    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        try {
            const avatarEmbed = new MessageEmbed()
                .setTitle(`${message.author.tag}'s Avatar`)
                .setImage(message.author.displayAvatarURL({ dynamic: true ,size : 512}))
                .setTimestamp()
                .setColor("RANDOM");
            await message.channel.send({ embeds: [avatarEmbed] });

        } catch (err) {
            client.error(err);
        }
    },
};