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

    const help = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Command list')
    .addFields(
		{name: `?horny`, value: `Hmm... spicy, isn't it?;` },
		{ name: `?bakugo`, value: `Reserved for Val4ity;`  },
        { name: `?fight <@user>`, value: `fight untill death;`},
        { name: `?fighthelp`, value: `Explains the rules of the game;`},
        { name: `?fuckbakugo`, value: `You should really think before using this one!;`},
	
	)
     
     msg.channel.send(help);
    }

    if (command === 'fighthelp') {
         
       
        const fighthelp = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Fight help')
        .addFields(
            {name: `How to play`, value: `To join a match you have to type ${"`yes`"} (you have 60 seconds to accept the battle). After that the match starts. Each one of you have 1 turn per round. You can choose an abilitiy dependent on which round you're on and how many abilies you have used. The goal is simple, eliminate your opponent. Good Luck!` },
            { name: `Light attack`, value: `Activated by typing number ${"`1`"}; Deals 1 - 6 damage; Can be used at all times`  },
            { name: `Medium attack`, value: `Activated by typing number ${"`2`"}; Deals 1 - 11 damage; To use this attack you need to use your light attack at least 4 times`},
            { name: `Heavy attack`, value: `Activated by typing number ${"`3`"}; Deals 1 - 16 damage; To use this attack you need to use your medium attack at least 3 times`},
            { name: `Ultimate attack`, value: `Activated by typing number ${"`4`"}; Deals 50 damage; To use this attack you need to use all of your attacks (light - 4 times; medium - 3 times; heavy - 2 times); You can only use this attack once a game!`},
        )
        
        

        msg.channel.send(fighthelp);
        
       }

 
});


client.login(process.env.TOKEN);
