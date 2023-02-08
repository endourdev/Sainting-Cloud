const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: async ({ client, interaction }) => {
        const user = interaction.options.getUser("utilisateur");
        const member = interaction.options.getMember("utilisateur");
        const reason = interaction.options.getString("raison");
        const history = interaction.options.getString("supprimer-message");

        if (!user) return interaction.reply({ content: "Utilisateur non trouvé", ephemeral: true });
        if (await interaction.guild.bans.fetch(user.id).catch(() => null )) return interaction.reply({ content: "Utilisateur déjà banni", ephemeral: true });
        if (user.id === interaction.user.id) return interaction.reply({ content: "Voyons on ne se ban pas tout seul. ( je te conseille de demander de l'aide )", ephemeral: true });
        if (user.id === client.user.id) return interaction.reply({ content: "Tu essayes de me bannir moi ??", ephemeral: true });
        if (user.id === interaction.user.ownerId) return interaction.reply({ content: "Tu vois dans ce serveur cette personne est beaucoup plus importante que toi.", ephemeral: true });

        if (member) {
            if (interaction.user.id !== interaction.guild.ownerId && interaction.user.members.roles.highest.position <= member.roles.highest.position) return interaction.reply({ content: "Ce membre à trop de flow pour vous.", ephemeral: true });
            if (member.bannable === false) return interaction.reply({ content: "Tu vois dans ce serveur cette personne est beaucoup plus importante que toi.", ephemeral: true });
        };

        const historySeconds = {
            previous_hour: 1 * 60 * 60,
            previous_6_hour: 6 * 60 * 60,
            previous_12_hour: 12 * 60 * 60,
            previous_24_hour: 24 * 60 * 60,
            previous_3_days: 3 * 24 * 60 * 60,
            previous_7_days: 7 * 24 * 60 * 60
        };

        interaction.guild.members.ban(user.id, { reason: `${reason || "Aucune raison fournie"} (${interaction.user.tag})`, historySeconds: history ? historySeconds[history] : null});

        const ban = {
            description: "Membre banni",
            fields: [
                {
                    name: 'Membre :',
			        value: `${interaction.user.tag}`,
                }
            ],
            footer: {
                text: "Saiting Cloud"
            },
        };
        interaction.reply({ embeds: [ban]} );
    },
    help: {
        description:  "Permet de bannir un utilisateur.",
        memberPermissions: [
            PermissionFlagsBits.BanMembers
        ],
        botPermissions: [
            PermissionFlagsBits.BanMembers
        ],
        options: [
            {
            name: "utilisateur",
            description: "L'utilisateur à bannir.",
            type: ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "raison",
            description: "Fournir une raison du bannissement.",
            type: ApplicationCommandOptionType.String,
        },
        {
            name: "supprimer-message",
            description: "Permet de supprimer les messages d'un utilisateur.",
            type: ApplicationCommandOptionType.String,
            choices: [
                {
                    name: "Heure Précédente",
                    value: "previous_hour"
                },
                {
                    name: "6 Heures Précédente",
                    value: "previous_6_hour"
                },
                {
                    name: "12 Heures Précédente",
                    value: "previous_12_hour"
                },
                {
                    name: "24 Heures Précédente",
                    value: "previous_24_hour"
                },
                {
                    name: "3 Jours Précédent",
                    value: "previous_3_days"
                },
                {
                    name: "7 Jours Précédent",
                    value: "previous_7_days"
                },
            ],
        },
    ]
    }
};