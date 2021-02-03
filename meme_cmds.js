require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
console.log("Meme cmds ready")
});

client.on('message',  msg => {
    
    
    const prefix = '?';



    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

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
        msg.channel.send("Hey baby!")
        msg.channel.send('https://tenor.com/view/bakugo-anime-hero-academy-gif-10939343')
        }
     else   {
        msg.channel.send('SHINEE!')
        msg.channel.send('https://tenor.com/view/bakugo-power-gif-13741841')

     } 


      
    }

    if(command == "fuckbakugo"){
       let arrest = Math.floor(Math.random() * 100) + 1
        let years = Math.floor(Math.random() * 100) + 1
        
        if (msg.author.id === "713314518297739274") {  
        msg.channel.send(`Waiting for you babe, ${msg.author.toString()}!`)
        msg.channel.send('https://tenor.com/view/bakugo-my-hero-academia-smile-handsome-gif-17142535')
        }
        else{
        msg.channel.send(`Bakugo called the FBI!`)
        msg.channel.send('https://cdn.discordapp.com/attachments/737727016635334716/803578593006452756/unknown.png')

        if(arrest >= 50){
        msg.channel.send(`Oh no, ${msg.author.toString()} got arrested for ${years} years! Reason - horniness`)

        } 
        else {
            msg.channel.send(`${msg.author.toString()} got away! I guess it's their lucky day!`)
        }

        }


        }

        if (command === 'dick') {

            let size = ["=", "==", "===", "====", "=====", "======", "=======", "========", "=========", "==========", "==========="]
            let i;
        
            

            if(msg.mentions.users.first()){
                  
                  
            
               
            
                    i = Math.floor(Math.random() * size.length) 
                  msg.channel.send(`${msg.mentions.users.first().toString()}'s dick is -> 8${size[i]}D`);

          
               }
               else if(msg.author.id == "438618320468705290"){
              
                msg.channel.send(`${msg.author.toString()}'s dick is -> 8=================================D \n Your dick is so big, daddy!`);
        
             }

               else if(msg.author){
                   
                  i = Math.floor(Math.random() * size.length)
                   
                    
              
                   msg.channel.send(`${msg.author.toString()}'s dick is -> 8${size[i]}D`);
                   
                   }
              } 

              if (command == "choosegame"){
                  
              let game = ["osu!", "Valorant", "CS:GO", "Fortnite", "R6", "Minecraft", "Among Us", "League Of Legends", "Skribble.io", "VR Chat", "Apex Legends", "Roblox -  RP"]
              let g = Math.floor(Math.random() * game.length);

              msg.channel.send(`You're going to play ${game[g]}!`)

              

              }
    
    
});

    
        
        
    
      
    
    
    



    client.on('message', async msg => {
        
        
        
    
        if(msg.content == 'faka u' || msg.content == 'fuck you' || msg.content == 'fuck u' ||  msg.content == 'ebi sa'){
            msg.channel.send('no u')
            msg.channel.send('https://tenor.com/view/reverse-card-uno-uno-cards-gif-13032597')
       
    
            
        }
    
        if(msg.content == 'thx' || msg.content == 'Thanks!' || msg.content == 'thanks'){
            msg.channel.send('No Problem!')
            msg.channel.send('https://tenor.com/view/no-problem-anime-girl-heart-happy-gif-15653269')
       
 
        }

        if(msg.content == 'cry'){
            msg.channel.send(`It'll be ok!`)
            msg.channel.send('https://tenor.com/view/deku-cry-tears-anime-izuku-midoriya-gif-14926648')
       
 
        }

       
      
         
    });
           
    

    


    




client.login(process.env.TOKEN);