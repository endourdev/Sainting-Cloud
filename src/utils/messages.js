const config = require('../../config.json');

module.exports = {
    giveaway: `<:gw:1075129150945361953> **GIVEAWAY EN COURS** <:gw:1075129150945361953> `,
    giveawayEnded: '<:gw:1075129150945361953> **GIVEAWAY TERMINÉ** <:gw:1075129150945361953>',
    title: '{this.prize}',
    inviteToParticipate: '🎁 Réagis avec 🎉 pour participer.',
    winMessage: 'Bravo, {winners}! Tu as gagné **{this.prize}**!\n{this.messageURL}',
    drawing: 'Temps Restant : {timestamp}',
    dropMessage: 'Soyez le premier à réagir avec 🎉 !',
    embedFooter: '{this.winnerCount} gagnant(s)',
    noWinner: 'Giveaway annulé, pas de participants valides.',
    winners: 'Gagnant(s) :',
    endedAt: 'Fini le',
    hostedBy: 'Héberger par : {this.hostedBy}'
};