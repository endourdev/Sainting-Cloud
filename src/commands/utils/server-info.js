const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: ({ client, interaction }) => {
        const serverInfo = {
            author: { name: interaction.guild.name, icon_url: interaction.guild.iconURL() },
            thumbnail: { url: interaction.guild.iconURL({size: 2048, extension: "png"}) },
            fields: [
                {
                    name: 'Propriétaire :',
			        value: `<:owner:1075129161682780190> <@${interaction.guild.ownerId}>`,
                },
                {
                    name: "Création :",
                    value: `<:time:1075129168481763338> <t:${Math.floor(interaction.guild.createdAt / 1000)}>` 
                },
                {
                    name: "Description :",
                    value: `<:desc:1075133704558629026> ${interaction.guild.description}`
                },
                {
                    name: "Boosts :",
                    value: `<:boost:1075132024970559509> ${interaction.guild.premiumSubscriptionCount}`,
                    inline: true
                },
                {
                    name: "Niveau :",
                    value: `<:woboost:1075132024970559509> ${interaction.guild.premiumTier}`,
                    inline: true
                },
                {
                    name: "Niveau de Vérification :",
                    value: `<:moderator:1075129156146315354> ${interaction.guild.verificationLevel}`,
                    inline: true
                },
                {
                    name: "Membres :",
                    value: `<:member:1075129153143185459> ${interaction.guild.memberCount.toString()}`,
                    inline: true,
                },
                {
                    name: "Rôles :",
                    value: `<:member:1075129153143185459> ${interaction.guild.roles.cache.size.toString()}`,
                    inline: true,
                },
                {
                    name: "Salons :",
                    value: `<:channels:1075129148395237406> ${interaction.guild.channels.cache.size.toString()}`,
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
        description: "⭐ Affiche des informations sur un serveur.",
        botPermissions: [
            PermissionFlagsBits.EmbedLinks
        ],
        memberPermissions: [
            PermissionFlagsBits.UseApplicationCommands
        ],
    },
};