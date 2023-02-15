const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: ( { client, interaction} ) => {
        const ping = {
            fields: [
                {
                    name: 'Latence',
			        value: `<:online:1075129159845687376> Ma latence est de **${client.ws.ping}** ms.`,
                }
            ],
            footer: {
                text: "Saiting Cloud"
            },
        };
        interaction.reply({ embeds: [ping]} )
    },
    help: {
        description: "⭐ Affiche la latence du bot.",
        memberPermissions: [
            PermissionFlagsBits.UseApplicationCommands
        ],
        botPermissions: [
            PermissionFlagsBits.EmbedLinks,
            PermissionFlagsBits.AddReactions
        ]
    }
}