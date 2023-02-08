const { PermissionFlagsBits } = require('discord.js');

module.exports = {
    run: ({ client, interaction }) => {
        const help = {
            author: { name: "Help" },
            thumbnail: { url: client.user.displayAvatarURL({size: 2048, extension: "png"}) },
            fields: [
                {
                    name: 'Ban :',
			        value: `<:ban:1072955401206759465> Permet de bannir un utilisateur.`,
                },
                {
                    name: "Kick :",
                    value: `<:mod:1071553136474476675> Permet d'expulser une personne.` 
                },
                {
                    name: "Server-Info :",
                    value: `<:channel:1071506415778287786> Permet d'avoir les informations d'un serveur.`
                },
                {
                    name: "Server-Count :",
                    value: `<:channel:1071506415778287786> Permet de voir le nombre de serveur utilisant le bot.`,
                    inline: true
                },
                {
                    name: "User-Info :",
                    value: `<:members:1071506360258277407> Permet de voir les informations d'un utilisateur.`,
                    inline: true
                },
                {
                    name: "Ping :",
                    value: `<a:online:1071454309402804334> Permet de voir la latence du bot.`,
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
        description: "Affiche la liste des commandes du bot.",
        botPermissions: [
            PermissionFlagsBits.EmbedLinks
        ]
    },
};