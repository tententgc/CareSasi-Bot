const { Message, Client, MessageEmbed } = require("discord.js");
module.exports = {
    name: "cal",
    description: "say something",

    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        try {

            const calnum = (args) => {
                return eval(args).toString();
            }
            const sum = calnum(args[0])

            await message.channel.send(sum);

        } catch (err) {
            client.error(err);
        }
    },
};