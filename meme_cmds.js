require('dotenv').config();
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();



client.on('ready', () => {
console.log("Meme cmds ready")
});

client.on('message',  msg => {
    const prefix = '?';


    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if(command == 'horny'){
        var text = [" is horny! What a sick fuck!", " needs Anti-Horny tabs. Luckily, I brought some!"]
    var img  = ["https://tenor.com/view/horny-jail-bonk-dog-hit-head-stop-being-horny-gif-17298755", "https://pbs.twimg.com/media/EGFj8CoWsAUraO0?format=jpg&name=small"]
    var counter = Math.floor(Math.random() * text.length) 
    
        if(msg.mentions.users.first()){
        
            msg.channel.send(msg.mentions.users.first().toString() + text[counter])
            msg.channel.send(img[counter])
            return;
        }
        else if (msg.author) {
           
            msg.channel.send(msg.author.toString() + text[counter] )
            msg.channel.send(img[counter])
            return;
            }
    }

    if(command == "bakugo"){
        if (msg.author.id === "713314518297739274") {
        msg.channel.send("Hey baby! ( btw you're a horny bitch and stop simping for me you fucking whore, get a fucking life")
        msg.channel.send('https://tenor.com/view/bakugo-anime-hero-academy-gif-10939343')
        }
     else   {
        msg.channel.send('SHINEE!')
        msg.channel.send('https://tenor.com/view/bakugo-power-gif-13741841')

     } 
      
       
     

      
    }
    
});

    
        
        
    
      
    
    
    



    client.on('message',  msg => {
        
        
        
    
        if(msg.content == 'faka u' || msg.content == 'fuck you' || msg.content == 'fuck u' ||  msg.content == 'ebi sa'){
            msg.channel.send('no u')
            msg.channel.send('https://tenor.com/view/reverse-card-uno-uno-cards-gif-13032597')
       
    
            
        }
    
        if(msg.content == 'thx' || msg.content == 'Thanks!' || msg.content == 'thanks'){
            msg.channel.send('No Problem!')
            msg.channel.send('https://tenor.com/view/no-problem-anime-girl-heart-happy-gif-15653269')
       
 
        }

        

        
         
    });
           
    

    
   


    




client.login(process.env.TOKEN);