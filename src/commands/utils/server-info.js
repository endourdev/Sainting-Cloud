const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: ({ client, interaction }) => {
        const serverInfo = {
            author: { name: interaction.guild.name },
            thumbnail: { url: interaction.guild.iconURL({size: 2048, extension: "png"}) },
            fields: [
                {
                    name: 'Propriétaire :',
			        value: `<:owner:1071506269858451597>  <@${interaction.guild.ownerId}>`,
                },
                {
                    name: "Création :",
                    value: `<:time:1071546174626070568> <t:${Math.floor(interaction.guild.createdAt / 1000)}>` 
                },
                {
                    name: "Description :",
                    value: `<:channel:1071506415778287786> ${interaction.guild.description}`
                },
                {
                    name: "Boosts :",
                    value: `<a:boost:1071506445415239822> ${interaction.guild.premiumSubscriptionCount}`,
                    inline: true
                },
                {
                    name: "Niveau :",
                    value: `<a:boost:1071506445415239822> ${interaction.guild.premiumTier}`,
                    inline: true
                },
                {
                    name: "Niveau de Vérification :",
                    value: `<:mod:1071553136474476675> ${interaction.guild.verificationLevel}`,
                    inline: true
                },
                {
                    name: "Membres :",
                    value: `<:members:1071506360258277407> ${interaction.guild.memberCount.toString()}`,
                    inline: true,
                },
                {
                    name: "Rôles :",
                    value: `<:roles:1071506315177885846> ${interaction.guild.roles.cache.size.toString()}`,
                    inline: true,
                },
                {
                    name: "Salons :",
                    value: `<:channel:1071506415778287786> ${interaction.guild.channels.cache.size.toString()}`,
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