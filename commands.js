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
         
    
     
      

     msg.channel.send('```You called for help! \n\n Here are the available commands: \n\n ```');
     msg.channel.send("```?horny - Hmm... spicy, isn't it?; \n\n ?bakugo - Reserved for Val4ity; \n\n ?fight <@user> - fight untill death; ?fighthelp - Explains the rules of the game; \n\n\ ?fuckbakugo - You should really think before using this one!;```");
    }

    if (command === 'fighthelp') {
         
    
     
      

        msg.channel.send(`You have 4 main attacks: \n\n\ light attack; \n\n\ medium attack (you need to use your light attack 4 times before you're able to use the medium attack); \n\n\ heavy attack (you need to use your medium attack 3 times before you're able to use the heavy attack); \n\n\ ultimate attack (you have to use all of your attacks, including 2 times your heavy attack); \n\n\ Have fun! `);
        
       }

 
});


client.login(process.env.TOKEN);
