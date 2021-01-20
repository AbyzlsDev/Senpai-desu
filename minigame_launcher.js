require('dotenv').config();
const Discord = require('discord.js');
const fight = require('./fight.js')



const client = new Discord.Client();


client.login(process.env.TOKEN);
client.on('ready', () => {
console.log("Minigame launcher ready")
});
