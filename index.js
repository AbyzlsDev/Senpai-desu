require('dotenv').config();
const Discord = require('discord.js');
//const bank = require('./bank.js')
const song = require('./song')
const commands = require('./commands')
const meme_cmds = require('./meme_cmds')
const shutdown = require('./minigames.js')



const client = new Discord.Client();


client.login(process.env.TOKEN);
client.on('ready', () => {
console.log("Bot ready")
});


    






