const config = require('../../config.json');

module.exports = {
    giveaway: (config.everyoneMention ? "@everyone\n\n" : "")+"🎉🎉 **GIVEAWAY** 🎉🎉",
    giveawayEnded: (config.everyoneMention ? "@everyone\n\n" : "")+"🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
    title: '{this.prize}',
    inviteToParticipate: 'Réagissez avec 🎉 pour participer',
    winMessage: 'Bravo, {winners}! Tu as gagné **{this.prize}**!',
    drawing: 'Temps Restant : {timestamp}',
    dropMessage: 'Soyez le premier à réagir avec 🎉',
    embedFooter: '{this.winnerCount} gagnant(s)',
    noWinner: 'Pas de gagnant',
    winners: 'Gagnant(s) :',
    endedAt: 'Fini le :',
    hostedBy: 'Héberger par : {this.hostedBy}'
};