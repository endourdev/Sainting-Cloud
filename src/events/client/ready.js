const { ActivityType } = require('discord.js')

module.exports = async ({ client }) => {
    console.log(`[${client.user.tag}] : Connecté avec succès !.`);
    client.channels.cache.get("1066750383311048755").send("<a:online:1071454309402804334> - Le bot est désormais en **ligne.**");

    if (process.argv.includes("--slash")) {
        if (process.env.NODE_ENV === "prod") {
            client.application.commands.set(client.slashs)
        } else if (process.env.NODE_ENV === "dev ") {
            const devGuild  = await client.guilds.fetch(process.env.GUILD_ID);

            devGuild.commands.set(client.slashs);
        }

        console.log(`[${client.user.tag}] : J'ai chargé ${client.slashs.length} commandes {/}.`);
        
    };

    client.user.setActivity(`${client.guilds.cache.size} serveurs `, { type: ActivityType.Streaming, url: "https://twitch.tv/bras_ace" });
};