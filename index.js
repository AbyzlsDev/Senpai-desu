require('dotenv').config();
const Discord = require('discord.js');
/*const commands = require('./commands')
const meme_cmds = require('./meme_cmds')
const fight = require('./fight.js')
const fight_beta = require('./fight_beta.js')
const bday = require('./cr_bd.js')

const tictactoe = require('./tictactoe.js')*/

require('./reminder.js');

const client = new Discord.Client();




client.login(process.env.TOKEN);

client.on('ready', () => {


console.log("Bot ready")


//status: "online",  // You can show online, idle... Do not disturb is dnd
//client.user.setStatus('Currently for private use - all functions disabled')
client.user.setPresence({ activity: { name: `Currently for private use - all public functions disabled`, type: "LISTENING" }, status: 'dnd' });

//client.user.setActivity('Currently for private use - all functions disabled');

});










