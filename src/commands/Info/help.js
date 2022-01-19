const { Message, Client, MessageEmbed } = require("discord.js");
const fs = require("fs");
const prefix = require("../../data/config.json").prefix;
module.exports = {
    name: "help",
    aliases: ["h"],
    description: "help with all command Info",

    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!args[0]) {
            let categories = [];

            fs.readdirSync("./commands/").forEach(dir => {
                const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));

                const cmds = commands.map(command => {
                    let file = require(`../../commands/${dir}/${command}`);

                    if (!file.name) return 'No command name';

                    let name = file.name.replace(".js", "");

                    return `\`${name}\``;
                });

                let data = new Object();

                data = {
                    name: dir.toUpperCase(),
                    value: cmds.length === 0 ? 'In progress' : cmds.join(", ")
                }

                categories.push(data);

            });

            //edit embed
            const helpEmbed = new MessageEmbed()
            .setTitle('Help Menu')
            .addFields(categories)
            .setDescription(`Use \`${prefix}help <command>\` to get more information about a command.`)
            .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true })) 
            .setColor("RANDOM")
            .setTimestamp(); 

            return message.channel.send({ embed: [helpEmbed] });
        }else{ 
            const command  = client.commands.get(args[0]).toLowerCase() || client.commands.find(c => c.aliases && c.aliases.includes(args[0].toLowerCase()));
        
            if (!command){
                 const noCommandEmbed = new MessageEmbed() 
                .setTitle(`Command not found`)
                .setDescription(`Use \`${prefix}help <command>\` to get more information about a command.`)
                .setColor("RANDOM")
                .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                .setTimestamp();

                return message.channel.send({ embed: [noCommandEmbed] });
            }
            const helpMenuEmbed = new MessageEmbed()
            .setTitle(`Command Information`)
            .addFields(`Prefix`,`\`${prefix}\``)
            .addFields(`Command`, command.name ? `\`${command.name}\`` : 'No command name')
            .addFields(`Aliases`, command.aliases ? `\`${command.aliases.join('` `')}\`` : 'No aliases')
            .addFields(`Description`, command.description ? command.description : 'No description')
            .addFields(`Usage`, command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : 'No usage')
            .setFooter(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
            .setColor("RANDOM")
            .setTimestamp();
            console.log(helpMenuEmbed);
            return message.channel.send({ embeds: [helpMenuEmbed] }); 
        }
    },
};