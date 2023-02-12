const { Client } = require('discord.js');
const { readdirSync } = require('node:fs');
const config = require('./config');
const { GiveawaysManager } = require('discord-giveaways');
require('dotenv').config();

const client = new Client({ intents: config.intents });

client.config = config;
client.commands = {};
client.slashs = [];

const manager = new GiveawaysManager(client, {
    storage: './giveaways.json',
    default: {
        botsCanWin: false,
        embedColor: '#FF0000',
        embedColorEnd: '#000000',
        reaction: '🎉'
    }
});

client.giveawaysManager = manager;

readdirSync("./src/utils/handlers").forEach(handler => require(`./src/utils/handlers/${handler}`)(client))

client.login(process.env.TOKEN);