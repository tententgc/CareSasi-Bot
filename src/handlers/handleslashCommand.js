const { Client } = require("discord.js");

const { readdirSync, read } = require("fs");
const registerSlash = require("../data/registerSlash");

/**
 *
 * @param {Client} client
 */
module.exports = async (client) => {
    try {
        console.log("-".repeat(36).yellow);
        console.log("[!] Initiating Slash Command Handler!".blue);
        console.log("-".repeat(36).yellow);

        const slashCommandsArr = [];

        const slash_cmd_dirs = readdirSync("./slashCommands");

        slash_cmd_dirs.map((slash_cmd_dir) => {
            const slash_cmd_files = readdirSync("./slashCommands/" + slash_cmd_dir).filter((f) => f.endsWith(".js"));

            slash_cmd_files.map((file) => {
                const cmd = require(`../slashCommands/${slash_cmd_dir}/${file}`);

                if (!cmd.name) {
                    console.log(`[⨯] Failed to load [`.red + file.cyan + `] Slash Command.. Missing Name!`.red);
                } else if (!cmd.description) {
                    console.log(`[⨯] Failed to load [`.red + cmd.name.cyan + `] Slash Command.. Missing Description!`.red);
                } else if (!cmd.run) {
                    console.log(`[⨯] Failed to load [`.red + cmd.name.cyan + `] Slash Command.. Missing Run Function!`.red);
                } else {
                    client.slashCommands.set(cmd.name, cmd);
                    slashCommandsArr.push(cmd);
                    console.log(`[✔] loaded [`.green + cmd.name.cyan + `] Slash Command`.green);
                }
            });
        });

        client.on("ready", () => {
            console.log("-".repeat(36).yellow);
            registerSlash(client, slashCommandsArr)
        })
    } catch (err) {
        client.error(err);
    }
};