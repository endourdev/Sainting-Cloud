module.exports = ({ client, params: [interaction] }) => {
    const command = client.commands[interaction.commandName];
    if (!command) return interaction.reply({ content: "Cette commande est indisponible." });

    command.run({ client, interaction });
};