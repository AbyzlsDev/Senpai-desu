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
        var img  = ["https://media1.tenor.com/images/6493bee2be7ae168a5ef7a68cf751868/tenor.gif?itemid=17298755", "https://pbs.twimg.com/media/EGFj8CoWsAUraO0?format=jpg&name=small"]
        var counter = Math.floor(Math.random() * text.length) 

        
    
        if(msg.mentions.users.first()){
        
        const horny = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription(msg.mentions.users.first().toString() + text[counter])
        .setImage(img[counter])
        msg.channel.send(horny)
           
            return;
        }
        else if (msg.author) {
            const horny1 = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setDescription(msg.author.toString() + text[counter])
            .setImage(img[counter])
            msg.channel.send(horny1)
            return;
            }
    }

    if(command == "bakugo"){
        if (msg.author.id === "713314518297739274") {
            const bakugo1 = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription("Hey baby!")
        .setImage('https://media.tenor.com/images/8fa24f7d79598c7710c38a6697583ca1/tenor.gif')

        msg.channel.send(bakugo1)
       
        }
     else   {

        const bakugo = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription("SHINEE!")
        .setImage('https://media.tenor.com/images/c5e312b7347bd035ad471de27fdf93d0/tenor.gif')
        msg.channel.send(bakugo)
       

     } 


      
    }

    if(command == "fuckbakugo"){
       let arrest = Math.floor(Math.random() * 100) + 1
        let years = Math.floor(Math.random() * 100) + 1

        const fuckbakugo1 = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription(`Waiting for you babe, ${msg.author.toString()}!`)
        .setImage('https://media.tenor.com/images/b5cda1049b6a5c5f88f1f0f3d18c7d65/tenor.gif')
        
        if (msg.author.id === "713314518297739274") {  
        msg.channel.send(fuckbakugo1)
        
        }
        else{

            const fuckbakugo = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription(`Bakugo called the FBI!`)
        .setImage('https://cdn.discordapp.com/attachments/737727016635334716/803578593006452756/unknown.png')

        msg.channel.send(fuckbakugo)
        

        if(arrest >= 50){
            const arrest1 = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setDescription(`Oh no, ${msg.author.toString()} got arrested for ${years} years! Reason - horniness`)
            

        msg.channel.send(arrest1)

        } 
        else {
            const arrest = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setDescription(`${msg.author.toString()} got away! I guess it's their lucky day!`)
            msg.channel.send(arrest)
        }

        }


        }

        if (command === 'dick') {

            let size = ["=", "==", "===", "====", "=====", "======", "=======", "========", "=========", "==========", "==========="]
            let i;
        
            

            if(msg.mentions.users.first()){
                  
                
                    i = Math.floor(Math.random() * size.length) 
                  msg.channel.send(dick1);

                  const dick1 = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setDescription(`${msg.mentions.users.first().toString()}'s dick is -> 8${size[i]}D`)

          
               }
               
               else if(msg.author.id == "438618320468705290"){

                const dick2 = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setDescription(`${msg.author.toString()}'s dick is -> 8=================================D \n Your dick is so big, daddy!`)
              
                msg.channel.send(dick2);
        
             }

               else if(msg.author){

                
                   
                  i = Math.floor(Math.random() * size.length)
                   
                  const dick3 = new Discord.MessageEmbed()
                  .setColor('#0099ff')
                  .setDescription(`${msg.author.toString()}'s dick is -> 8${size[i]}D`)
              
                   msg.channel.send(dick3);
                   
                   }
              } 

              if (command == "choosegame"){

              
                  
              let game = ["osu!", "Valorant", "CS:GO", "Fortnite", "R6", "Minecraft", "Among Us", "League Of Legends", "Skribble.io", "VR Chat", "Apex Legends", "Roblox -  RP"]
              let g = Math.floor(Math.random() * game.length);

              const game1 = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setDescription(`You're going to play ${game[g]}!`)

              msg.channel.send(game1)

              

              }

              if (command == "mangal"){

                if(msg.member.roles.cache.find(r => r.id === "795236730667008011")) {

                let mangal = Math.floor(Math.random() * 100);
                let metal = Math.floor(Math.random() * 100);
  
                const mangal1 = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setDescription(`Ти си ${mangal}% мангал и ти току-що открадна ${metal} метал.`)
  
                msg.channel.send(mangal1)

                } 
                else {
                    let mangal = Math.floor(Math.random() * 100);
                    let metal = Math.floor(Math.random() * 100);
      
                    const mangal2 = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setDescription(`You're ${mangal}% gypsy and you just stole ${metal} iron.`)

                    msg.channel.send(mangal2)

                }
              
                  
                
  
                
  
                }

                if (command == "svetatacordiq"){

                    if(msg.member.roles.cache.find(r => r.id === "800618727703445516")) {
    
                    
      
                    const cordiq1 = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setDescription(`${msg.author.toString()} is member of the Svetata Cordiq`)
                    .setImage('https://media1.tenor.com/images/97b76417cd056e79f7c420a0194d16fc/tenor.gif?itemid=20250900')
      
                    msg.channel.send(cordiq1)
    
                    } 
                    else {
                        
          
                        const cordiq2 = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setDescription(`You're not part of the Elites!`)
    
                        msg.channel.send(cordiq2)
    
                    }
                  
                      
                    
      
                    
      
                    }

                
    
    
});

    
        
        
    
      
    
    
    



    client.on('message', async msg => {
        
        
        
    
        if(msg.content == 'faka u' || msg.content == 'fuck you' || msg.content == 'fuck u' ||  msg.content == 'ebi sa'){
            msg.channel.send('no u' + 'https://tenor.com/view/reverse-card-uno-uno-cards-gif-13032597')
            
    
            
        }
    
        if(msg.content == 'thx' || msg.content == 'Thanks!' || msg.content == 'thanks'){
            msg.channel.send('No Problem!' + 'https://tenor.com/view/no-problem-anime-girl-heart-happy-gif-15653269')
            
       
 
        }

        if(msg.content == 'cry'){
            msg.channel.send(`It'll be ok!` + 'https://tenor.com/view/deku-cry-tears-anime-izuku-midoriya-gif-14926648')
            
       
 
        }

       
      
         
    });
           
    

    


    




client.login(process.env.TOKEN);