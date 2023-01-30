module.exports = {
    run: ( { client, interaction} ) => {
        interaction.reply({ content: `Ma latence en ms est de ${client.ws.ping}ms.`})
    },
    help: {
        description: "Affiche la latence du bot !"
    }
}