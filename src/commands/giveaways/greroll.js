const { ApplicationCommandOptionType, PermissionsFlagsBits } = require('discord.js')

module.exports = {
    run: async ({ client, interaction }) => {

        const query = interaction.options.getString('giveaway');

        const giveaway =
            client.giveawaysManager.giveaways.find((g) => g.prize === query && g.guildId === interaction.guild.id) ||
            client.giveawaysManager.giveaways.find((g) => g.messageId === query && g.guildId === interaction.guild.id);
        if (!giveaway) {
            return interaction.reply({
                content: 'Impossible de trouver le giveaway `'+ query +'`.',
                ephemeral: true
            });
        }

        if (!giveaway.ended) {
            return interaction.reply({
                content: 'Ce giveaway n\'est pas encore terminé',
                ephemeral: true
            });
        }

        client.giveawaysManager.reroll(giveaway.messageId)
        .then(() => {
            interaction.reply({content: "Giveaway Rerolled", ephemeral: true});
        })
        .catch((e) => {
            interaction.reply({
                content: e,
                ephemeral: true
            });
        });

    },
    help: {
        description: '🎉 Reroll un giveaway',

    options: [
        {
            name: 'giveaway',
            description: 'Le giveways à reroll (Id du message ou prix à gagner)',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    }
}