const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: ({ client, interaction }) => {
        const help = {
            author: { name: "Help" },
            thumbnail: { url: client.user.displayAvatarURL({size: 2048, extension: "png"}) },
            fields: [
                {
                    name: 'Ban :',
			        value: `<:moderator:1075129156146315354> Permet de bannir un utilisateur.`,
                },
                {
                    name: "Kick :",
                    value: `<:moderator:1075129156146315354> Permet d'expulser une personne.` 
                },
                {
                    name: "Server-Info :",
                    value: `<:channels:1075129148395237406> Permet d'avoir les informations d'un serveur.`
                },
                {
                    name: "Server-Count :",
                    value: `<:channels:1075129148395237406> Permet de voir le nombre de serveur utilisant le bot.`,
                    inline: true
                },
                {
                    name: "User-Info :",
                    value: `<:member:1075129153143185459> Permet de voir les informations d'un utilisateur.`,
                    inline: true
                },
                {
                    name: "Ping :",
                    value: `<:online:1075129159845687376> Permet de voir la latence du bot.`,
                    inline: true
                },
                {
                    name: "Create :",
                    value: `<:gw:1075129150945361953> Permet de créer un giveaway.`,
                    inline: true
                },
                {
                    name: "Reroll :",
                    value: `<:gw:1075129150945361953> Permet de reroll un giveaway.`,
                    inline: true
                },
                {
                    name: "Stop :",
                    value: `<:gw:1075129150945361953> Permet d'arrêter un giveaway.`,
                    inline: true
                },
            ],
            footer: {
                text: "Saiting Cloud"
            },
        };

        interaction.reply({ embeds: [help] });
    },
    help: {
        description: "❔ Affiche la liste des commandes du bot.",
        botPermissions: [
            PermissionFlagsBits.EmbedLinks
        ]
    },
};