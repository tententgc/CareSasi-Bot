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
        if (!args[0]){ 
            let categories = []; 

            fs.readdirSync("./commands/").forEach(dir => { 
                const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js")); 
            
                const cmds = commands.map(command => {
                    let file = require(`../../commands/${dir}/${command}`); 

                    if (!file.name) return 'No command name'; 

                    let name  = file.name.replace(".js", ""); 

                    return `\`${name}\``;
                });

                let data = new Object(); 

                data  = { 
                    name : dir.toUpperCase(), 
                    value : cmds.length  === 0? 'In progress' : cmds.join(", ") 
                }

                categories.push(data); 
                


            });
        }
    },
};