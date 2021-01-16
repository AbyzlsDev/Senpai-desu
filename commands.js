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
 

    if (command === 'help') {
         
    
     
      

     msg.channel.send('```You called for help! \n\n Here are the available commands: \n\n ?play <song name> - plays a song; \n\n ?pause - pauses the current song; \n\n ?leave - The bot leaves; \n\n ?resume - Resumes the current song; ```');
     msg.channel.send("```?horny - Hmm... spicy, isn't it?; \n\n ?bakugo - Reserved for Val4ity; \n\n ?fight <@user> - fight untill death```");
    }

 
});


client.login(process.env.TOKEN);
