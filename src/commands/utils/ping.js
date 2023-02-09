const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: ( { client, interaction} ) => {
        const ping = {
            title: "Server Ping's",
            description: "Voici la latence du bot",
            fields: [
                {
                    name: 'Latence',
			        value: `Ma latence en ms est de **${client.ws.ping}** ms.`,
                }
            ],
            footer: {
                text: "Saiting Cloud"
            },
        };
        interaction.reply({ embeds: [ping]} )
    },
    help: {
        description: "Affiche la latence du bot !",
        memberPermissions: [
            PermissionFlagsBits.UseApplicationCommands
        ],
        botPermissions: [
            PermissionFlagsBits.EmbedLinks,
            PermissionFlagsBits.AddReactions
        ]
    }
}