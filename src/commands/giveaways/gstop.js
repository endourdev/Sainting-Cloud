const { ApplicationCommandOptionType, PermissionsFlagsBits } = require('discord.js')

module.exports = {
    run: async ({ client, interaction }) => {

        const query = interaction.options.getString('giveaway');

        // try to found the giveaway with prize then with ID
        const giveaway = 
            // Search with giveaway prize
            client.giveawaysManager.giveaways.find((g) => g.prize === query && g.guildId === interaction.guild.id) ||
            // Search with giveaway ID
            client.giveawaysManager.giveaways.find((g) => g.messageId === query && g.guildId === interaction.guild.id);

        // If no giveaway was found
        if (!giveaway) {
            return interaction.reply({
                content: 'Impossible de trouver le giveaway `'+ query + '`.',
                ephemeral: true
            });
        }

        if (giveaway.ended) {
            return interaction.reply({
                content: 'Ce giveaway est déjà fini',
                ephemeral: true
            });
        }

        // Edit the giveaway
        client.giveawaysManager.end(giveaway.messageId)
        // Success message
        .then(() => {
            // Success message
            interaction.reply({content: "Giveaway Terminé", ephemeral: true});
        })
        .catch((e) => {
            interaction.reply({
                content: e,
                ephemeral: true
            });
        });

    },
    help: {
        description: '🎉 Terminer un giveaway',

    options: [
        {
            name: 'giveaway',
            description: 'Le giveawayà terminer (Id du message ou prix à gagner)',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    }
}