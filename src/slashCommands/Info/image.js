const { Interaction, Client, MessageEmbed,MessageAttachment } = require("discord.js");

module.exports = {
    name: "image",
    description: "Send image",

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
            
            let photos = [
                'https://img.buzzfeed.com/buzzfeed-static/static/2020-07/20/21/asset/e54e446d5e20/sub-buzz-10019-1595282244-15.jpg?output-quality=auto',
                'http://www.tasteofcinema.com/wp-content/uploads/2015/10/Visually-stunning-animated-movies.jpg',
                'https://damassets.autodesk.net/content/dam/autodesk/www/industry/3d-animation/create-beautiful-3d-animations-thumb-1204x677.jpg']
                
            const random_num = () => { 
                    return Math.floor(Math.random() * photos.length) 
                }
            
            const embed = new MessageEmbed().setImage(
                photos[random_num()])
            await interaction.reply({embeds: [embed]}); 
        } catch (err) {
            client.error(err);
        }
    },
};