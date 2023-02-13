const ms = require('ms');
const messages = require("../../utils/messages");
const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js')

module.exports = {
    run: async ({ client, interaction }) => {
    
        const giveawayChannel = interaction.options.getChannel('salon');
        const giveawayDuration = interaction.options.getString('durée');
        const giveawayWinnerCount = interaction.options.getInteger('nombre-gagnant');
        const giveawayPrize = interaction.options.getString('prix');
        
        if(!giveawayChannel.isTextBased()) {
            return interaction.reply({
                content: ':x: Sélectionnez salon valide.',
                ephemeral: true
            });
        }

        client.giveawaysManager.start(giveawayChannel, {
            duration: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinnerCount,
            hostedBy: client.config.hostedBy ? interaction.user : null,
            messages
        });
    
        interaction.reply({content: `Giveaway démarré dans : ${giveawayChannel} !`, ephemeral: true});
    
    },
    help: {
        description: 'Démarrez un giveaway',
        memberPermissions: [
            PermissionFlagsBits.ManageMessages
        ],
        botPermissions: [
            PermissionFlagsBits.ManageMessages
        ],
    options: [
        {
            name: 'salon',
            description: 'Dans quel salon le giveway doit être crée',
            type: ApplicationCommandOptionType.Channel,
            required: true
        },
        {
            name: 'durée',
            description: 'Combien de temps doit durer le giveaway',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'nombre-gagnant',
            description: 'Combien de gagnant doit-t-il y avoir.',
            type: ApplicationCommandOptionType.Integer,
            required: true
        },
        {
            name: 'prix',
            description: 'Que voulez-vous faire gagner',
            type: ApplicationCommandOptionType.String,
            required: true
        },
    ],
    }
}