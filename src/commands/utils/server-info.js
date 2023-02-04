const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: ({ client, interaction }) => {
        const serverInfo = {
            title: "Server Info's",
            author: { name: interaction.guild.name },
            thumbnail: { url: interaction.guild.iconURL({size: 2048, extension: "png"}) },
            fields: [
                {
                    name: 'Propriétaire :',
			        value: `<@${interaction.guild.ownerId}>`,
                },
                {
                    name: "Création :",
                    value: `<t:${Math.floor(interaction.guild.createdAt / 1000)}>` 
                },
                {
                    name: "Description :",
                    value: `${interaction.guild.description}`
                },
                {
                    name: "Niveau :",
                    value: `${interaction.guild.premiumTier}`,
                },
                {
                    name: "Membres :",
                    value: interaction.guild.memberCount.toString(),
                    inline: true,
                },
                {
                    name: "Rôles :",
                    value: interaction.guild.roles.cache.size.toString(),
                    inline: true,
                },
                {
                    name: "Salons :",
                    value: interaction.guild.channels.cache.size.toString(),
                    inline: true,
                },
            ],
            footer: {
                text: "Saiting Cloud"
            },
        };

        interaction.reply({ embeds: [serverInfo] });
    },
    help: {
        description: "Affiche des informations sur un serveur.",
        botPermissions: [
            PermissionFlagsBits.EmbedLinks
        ]
    },
};