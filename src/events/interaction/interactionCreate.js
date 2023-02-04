const { PermissionsBitField, PermissionFlagsBits } = require('discord.js');

module.exports = ({ client, params: [interaction] }) => {
    if (!interaction.isCommand() || !interaction.channel.permissionsFor(interaction.guild.members.me).has([
        PermissionFlagsBits.SendMessages,
        PermissionFlagsBits.ViewChannel
    ])) return;

    const command = client.commands[interaction.commandName];
    if (!command) return interaction.reply({ content: "Cette commande est indisponible." });
    if(command.help.botPermissions?.lenght > 0 && !interaction.channel.permissionsFor(
        interaction.guild.members.me.has(
            command.help.botPermissions)))
            return interaction.reply({ content: `Le bot n'as pas les permissions requises ! Il me faut cela : ${new PermissionsBitField(command.help.botPermissions).toArray().map(perm => `\`${perm}\``).join(", ")}.`});

    command.run({ client, interaction });
    console.log(command)
};