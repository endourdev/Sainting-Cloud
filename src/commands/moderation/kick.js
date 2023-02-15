const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: async ({ client, interaction }) => {
        const member = interaction.options.getMember("utilisateur");
        const reason = interaction.options.getString("raison");

        if (!member) return interaction.reply({ content: "Utilisateur non trouvé", ephemeral: true });
        if (member.id === interaction.user.id) interaction.reply({ content: "S'exclure soi même... Quelle idée...", ephemeral: true });
        if (member.id === client.user.id) interaction.reply({ content: "Tu exclu l'expulseur... Quelle idée...", ephemeral: true });
        if (member.id === interaction.guild.ownerId) interaction.reply({ content: "Sache que cette personne est beaucoup plus importante que toi sur le serveur...", ephemeral: true });
        if (interaction.user.id !== interaction.guild.ownerId && interaction.member.roles.highest.position <= member.roles.highest.position) interaction.reply({ content: "Exclusion impossible.", ephemeral: true });
        if (member.kickable === false) interaction.reply({ content: "Exclusion impossible.", ephemeral: true });

        member.kick(`${reason || "Aucune raison fournie."} (${interaction.user.tag})`);

        const kick = {
            fields: [
                {
                    name: 'Membre :',
			        value: `<:member:1075129153143185459> s${member.user.tag}`,
                }
            ],
            footer: {
                text: "Saiting Cloud"
            },
        };
        interaction.reply({ embeds: [kick]} );
    },
    help: {
        description: "⚒️ Permet d'exclure un membre.",
        botPermissions: [
            PermissionFlagsBits.KickMembers
        ],
        memberPermssions: [
            PermissionFlagsBits.KickMembers
        ],
        options: [
            {
                name:"utilisateur",
                description: "Séléctionnez un membre à exclure.",
                type: ApplicationCommandOptionType.User,
                required: true
            },
            {
                name: "raison",
                description: "Donnez une raison de l'exclusion.",
                type: ApplicationCommandOptionType.String
            }
        ]
    },
};