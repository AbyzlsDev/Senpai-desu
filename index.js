require('dotenv').config();
const Discord = require('discord.js');
//const bank = require('./bank.js')
const song = require('./core/song')
const commands = require('./core/commands')
const meme_cmds = require('./core/meme_cmds')
const minigame_launcher = require ('./core/minigame_launcher.js')



const client = new Discord.Client();


client.login(process.env.TOKEN);
client.on('ready', () => {
console.log("Bot ready")
});


    






