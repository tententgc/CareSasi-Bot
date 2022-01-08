const { Message, Client, MessageEmbed } = require("discord.js");
module.exports = {
    name: "say",
    description: "say something",

    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        try {
             const sayEmbed = new MessageEmbed() 
             .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
             .setDescription(args.join(" ")) 
             .setTimestamp()
             .setColor("RANDOM"); 
        await message.channel.send({ embeds: [sayEmbed] });

        } catch (err) {
            client.error(err);
        }
    },
};