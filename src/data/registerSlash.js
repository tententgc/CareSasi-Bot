const { Client, ApplicationCommandData, Snowflake } = require("discord.js");

const handleErr = (err) => {
    if (err.name !== "DiscordAPIError: Missing Access") {
        console.log("[⨯] Failed to Register Slash Command,", red, err.stack);
    }
};

/**
 *
 * @param {Client} client
 * @param {?ApplicationCommandData[]} slashCommandsArr
 * @param {Snowflake} guildId
 * @param {String} command
 */
module.exports = async (client, slashCommandsArr, guildId, command) => {
    try {
        let len = slashCommandsArr?.length;

        // Register Slash Command in specific Guild
        if (guildId) {
            const guild = await client.guilds.fetch(guildId).catch(handleErr);
            if (!guild) {
                return console.log("[⨯] Invalid Guild ID");
            }

            // Register Specific Command in Specific Guild
            if (command) {
                const cmd = slashCommandsArr.find((e) => e.name === command);
                if (!cmd) {
                    return console.log("[×] {".red + command.cyan + "} Command Not Found.".red);
                }

                await guild.commands.create(cmd).catch(handleErr);
                console.log(`${"[✔] Registered ".green}${cmd.name.cyan}${` Command in `.green}${guild.name.cyan}`);
            } else {
                await guild.commands.set(slashCommandsArr).catch(handleErr);
                console.log(`${"[✔] Registered ".green}${len >= 1 ? "a".cyan : len.toString().cyan}${` Command${len >= 1 ? "" : "s"} in `.green}${guild.name.cyan}`);
            }
        } else {
            const guilds = client.guilds.cache;

            guilds.map(async (g) => {
                await g.commands.set(slashCommandsArr).catch(handleErr);
                console.log(`${"[✔] Registered ".green}${len >= 1 ? "a".cyan : len.toString().cyan}${` Command${len >= 1 ? "" : "s"} in `.green}${g.name.cyan}`);
            });
        }
    } catch (error) {
        handleErr(error);
    }
};