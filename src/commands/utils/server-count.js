const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: ({ client, interaction }) => {
        const counter = {
            title: "Server Count's",
            description: "Le nombre de serveur m'utilisant",
            fields: [
                {
                    name: 'Server\'s',
			        value: `Je suis sur **${client.guilds.cache.size}** serveurs`,
                }
            ],
            footer: {
                text: "Saiting Cloud"
            },
        };

        interaction.reply({ embeds: [counter] });
    },
    help: {
        description: "Affiche le nombres de serveurs utilisant le bot.",
        botPermissions: [
            PermissionFlagsBits.EmbedLinks
        ]
    },
};