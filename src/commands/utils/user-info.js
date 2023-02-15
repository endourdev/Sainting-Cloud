const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: async ({ client, interaction }) => {
        const member = interaction.options.getMember("membre") || interaction.member;
        const userInfo = {
            author: { name: interaction.user.tag, icon_url: interaction.user.displayAvatarURL() },
            thumbnail: { url: member.user.displayAvatarURL({size: 2048, extension: "png"}) },
            fields: [
                {
                    name: 'Membre :',
			        value: `<:member:1075129153143185459> ${member.toString()}`,
                    inline: true
                },
                {
                    name: "Id du membre :",
                    value: `<:member:1075129153143185459> ${member.id.toString()}`,
                    inline: true
                },
                {
                    name: "Boosts depuis :",
                    value: member.premiumSinceTimestamp ? `<:woboost:1075132024970559509> <t:${(Math.floor(member.premiumSinceTimestamp / 1000))}:R>` : `<a:boost:1071506445415239822> Aucun boost`,
                    inline: false
                },
                {
                    name: "Création :",
                    value: `<:time:1075129168481763338> <t:${Math.floor(member.user.createdAt / 1000)}:R>`,
                    inline: true
                },
                {
                    name: "À rejoint :",
                    value: `<:time:1075129168481763338> <t:${Math.floor(member.joinedAt / 1000)}:R>`,
                    inline: true
                },
            ],
            image: { url: member.user.bannerURL({ size: 4096, extension: "png"}) },
            footer: {
                text: "Saiting Cloud"
            },
        };

        interaction.reply({ embeds: [userInfo] });
    },
    help: {
        description: "⭐ Affiche les informations d'un utilisateur.",
        botPermissions: [
            PermissionFlagsBits.EmbedLinks
        ],
        memberPermissions: [
            PermissionFlagsBits.UseApplicationCommands
        ],
        options: [{
            name: "membre",
            description: "Séléctionnez un membre pour avoir ses informations.",
            type: ApplicationCommandOptionType.User
        }],
    },
};