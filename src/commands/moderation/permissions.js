const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: ( { client, interaction} ) => {
        const perms = {
            fields: [
                {
                    name: 'Membre :',
			        value: `Les membres ont besoin de la permissions \`UseApplicationCommands\``,
                }
            ],
            footer: {
                text: "Saiting Cloud"
            },
        };
        interaction.reply({ embeds: [perms]} )
    },
    help: {
        description: "⚒️ Affiche les pemissions nécessaires.",
        memberPermissions: [
            PermissionFlagsBits.Administrator
        ],
        botPermissions: [
            PermissionFlagsBits.Administrator
        ]
    }
}