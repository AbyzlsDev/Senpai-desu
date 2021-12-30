require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
console.log("Commands ready")
});


client.on('message', msg => {
    
    const prefix = '?'

    
if(!msg.content.startsWith(prefix) || msg.author.bot) return;


const args = msg.content.slice(prefix.length).trim().split(/ +/g)
const command = args.shift().toLowerCase();
 

   

 
});


client.login(process.env.TOKEN);
