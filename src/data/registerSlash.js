const {Client , ApplicationCommandData ,Snowflake} = require("discord.js"); 

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
module.exports =(client, slashCommandsArr , guildId ,command ) => {
    try{ 
        let len =  slashCommandsArr?.length; 

        //Register Slash Command in specific Guild 
        if (guildId){
            const guild = await client.guilds.fetch(guildId); 
            if (!guild){ 
                return console.log("[⨯] Invalid Guild ID".red);
            }

            //Register specific Command in specific Guild 
            if (command) {
                const cmd = slashCommandsArr.find((e) => e.name === command);
                if (!cmd) {
                    return console.log("[×] {".red + command.cyan + "} Command Not Found.".red);
                }

                await guild.commands.create(cmd).catch(handleErr); 
        }
    }
    }catch{

    }
};