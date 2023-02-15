const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: ({ client, interaction }) => {
        const counter = {
            fields: [
                {
                    name: 'Nombre de serveurs :',
			        value: `<:channels:1075129148395237406> Je suis actuellement sur **${client.guilds.cache.size}** serveurs`,
                }
            ],
            footer: {
                text: "Saiting Cloud"
            },
        };

        interaction.reply({ embeds: [counter] });
    },
    help: {
        description: "⭐ Affiche le nombres de serveurs utilisant le bot.",
        botPermissions: [
            PermissionFlagsBits.EmbedLinks
        ],
        memberPermissions: [
            PermissionFlagsBits.UseApplicationCommands
        ],
    },
};