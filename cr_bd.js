require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
console.log("bday ready")
});


client.on('message', msg => {
    
    const prefix = '?'

    
if(!msg.content.startsWith(prefix) || msg.author.bot) return;


const args = msg.content.slice(prefix.length).trim().split(/ +/g)
const command = args.shift().toLowerCase();
 

    if (command === 'creatorbirthday') {
        var birthday = new Date(1998, 1, 17);

        var today = new Date();

        birthday.setFullYear(today.getFullYear());
        if (today > birthday) {
        birthday.setFullYear(today.getFullYear() + 1);
}

    const help = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle(`My Senpai's birthdays is on 16th February and there are ${Math.floor((birthday - today) / (1000*60*60*24))} days left until his birthday! Ara - ara`)
    
     
     msg.channel.send(help);
    }

    

 
});


client.login(process.env.TOKEN);
