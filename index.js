require('dotenv').config();
const Discord = require('discord.js');
const commands = require('./commands')
const meme_cmds = require('./meme_cmds')
const fight = require('./fight.js')
const fight_beta = require('./fight_beta.js')
const bday = require('./cr_bd.js')
const tictactoe = require('./tictactoe.js')






const client = new Discord.Client();




client.login(process.env.TOKEN);

client.on('ready', () => {

console.log("Bot ready")
//status: "online",  // You can show online, idle... Do not disturb is dnd
client.user.setStatus('busy')

client.user.setActivity('?help', { type: 'LISTENING' });

});



    






