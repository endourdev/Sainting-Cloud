module.exports = {
    run: ( { client, interaction} ) => {
        
        const embed = {
            title: "Embed Test",
            description: "Un super embed lol"
        };
        
        interaction.reply({ embeds: [embed] });
    },
    help: {
        description: "Affiche un embed"
    }
}