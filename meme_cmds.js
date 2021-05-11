require('dotenv').config();
const Discord = require('discord.js');
const cron = require("node-cron");
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
            let i
        
            

            if(msg.mentions.users.first()){
                  
                
                    i = Math.floor(Math.random() * size.length) 
                  

                  const dick1 = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setDescription(`${msg.mentions.users.first().toString()}'s dick is -> 8${size[i]}D`)
                msg.channel.send(dick1);

          
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

                let metal 

                let decide = [2, 3]

                let y = Math.floor(Math.random() * decide.length)
                
                let x 

                let choose = [1, 2]

                let z = Math.floor(Math.random() * choose.length)
            
                if(choose[z] == 1){

                metal = mangal / decide[y] - decide[y] 

                }
                else if (choose[z] == 2){

                    metal = mangal / decide[y] + decide[y]
                }

                if(metal > 0) {
                
                
                 x = Math.round(metal)

                }

                else if(metal < 0) {
                    
                    x = 1
                
                }

                
                


                
  
                const mangal1 = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setDescription(`${msg.author.toString()}, ти си ${mangal}% мангал и ти току-що открадна ${x} метал.`)
  
                msg.channel.send(mangal1)

                } 
                else {

                    let mangal = Math.floor(Math.random() * 100);

                    let metal 
    
                    let decide = [2, 3]
    
                    let y = Math.floor(Math.random() * decide.length)
                    
                    let x 
    
                    let choose = [1, 2]
    
                    let z = Math.floor(Math.random() * choose.length)
                
                    if(choose[z] == 1){
    
                    metal = mangal / decide[y] - decide[y] 
    
                    }
                    else if (choose[z] == 2){
    
                        metal = mangal / decide[y] + decide[y]
                    }
    
                    if(metal > 0) {
                    
                    
                     x = Math.round(metal)
                     
                    }
    
                    else if(metal < 0) {
                        
                        x = 1
                    
                    }
      
                    const mangal2 = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setDescription(`You're ${mangal}% gypsy and you just stole ${x} iron.`)

                    msg.channel.send(mangal2)

                }
              
                  
                
  
                
  
                }

                if (command == "svetatacordiq"){

                    if(msg.member.roles.cache.find(r => r.id === "800618727703445516")) {
    
                    
      
                    const cordiq1 = new Discord.MessageEmbed()
                    .setColor('#0099ff')
                    .setDescription(`${msg.author.toString()} is member of the Svetata Cordiq`)
                    .setImage('https://cdn.discordapp.com/attachments/795000131132588053/807297220415062038/image0.jpg')
      
                    msg.channel.send(cordiq1)
    
                    } 
                    else {
                        
          
                        const cordiq2 = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setDescription(`You're not part of the Elites!`)
    
                        msg.channel.send(cordiq2)
    
                    }
                  
                      
                    
      
                    
      
                    }


                    if (command == "cutiebakugo"){

                       if(msg.author.id == "713314518297739274"){

                        const cutebakugo1 = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setDescription(`You're cute too, ${msg.author.toString()}! :pleading_face:`)
                        .setImage('https://cdn.discordapp.com/attachments/795000307058475038/807354135250731048/978017372150a72a908e5a95fb91825b.png')

                        msg.channel.send(cutebakugo1)
                          
                       } else {
                        const cutebakugo = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setDescription(`You're not my baby, ${msg.author.toString()}! :sob: `)

                        msg.channel.send(cutebakugo)

                       }
          
                        
          
                        }

                        if (command == "ratehusbando"){

                            if(msg.author.id == "713314518297739274"){
     
                             const ratehusbando1 = new Discord.MessageEmbed()
                             .setColor('#0099ff')
                             .setDescription(`There's nothing like a better or best husbando, but here's your perfect match, ${msg.author.toString()}`)
                             .setImage('https://cdn.discordapp.com/attachments/795000266025730118/807359224002117652/image0.jpg')
     
                             msg.channel.send(ratehusbando1)
                               
                            } else if (msg.author.id == "620928936641167371") {
                             const ratehusbando2 = new Discord.MessageEmbed()
                             .setColor('#0099ff')
                             .setDescription(`There's nothing like a better or best husbando, but here's your perfect match, ${msg.author.toString()}`)
                             .setImage('https://cdn.discordapp.com/attachments/798947591043809370/807358438694191104/image0.jpg')
     
                             msg.channel.send(ratehusbando2)
     
                            } else if (msg.author.id == "438618320468705290"){

                                const ratehusbando4 = new Discord.MessageEmbed()
                                .setColor('#0099ff')
                                .setDescription(`I didn't know you were gay, ${msg.author.toString()}!:thinking: `)
                                
        
                                msg.channel.send(ratehusbando4)

                            }
                            else {

                            const ratehusbando3 = new Discord.MessageEmbed()
                             .setColor('#0099ff')
                             .setDescription(`Well, you didn't qualify for the rating husbando program. That's a pity!`)
                             
                             msg.channel.send(ratehusbando3)

                            }
               
                             
               
                             }

                             if (command == "goddess"){

                                let goddess =  new Discord.MessageEmbed()
                                .setColor('#0099ff')
                             .setDescription(`Praise the Goddess! (brat molq ta dai pari za pasti che nema jzhelezo ;-;)`)
                             

                             msg.channel.send(goddess)

                                
                                 
                   
                                 }  
                                 
                                 if (command == "araara"){

                                    
             
                                     const cutebakugo1 = new Discord.MessageEmbed()
                                     .setColor('#0099ff')
                                     .setDescription(`Fuck off, you horny cunt!`)
                                     
             
                                     msg.channel.send(cutebakugo1)
                                       
                                    
                       
                                     
                       
                                     }

                                     if (command == "gay"){

                                        let min = 1
                                        let gay 
                                         
                                        
                                        gay = Math.floor(Math.random() * 100)

                                        if(gay < min) gay = min

                                        

                                        if(msg.mentions.users.first()){

                                            if(gay == 69){
                                                const gay1 = new Discord.MessageEmbed()
                                        .setColor('#0099ff')
                                        .setDescription(`${msg.mentions.users.first().toString()}, is ${gay}% gay! Nice!`)
                                        msg.channel.send(gay1)
                                            } else if(gay >= 50) {

                                             const gay1 = new Discord.MessageEmbed()
                                            .setColor('#0099ff')
                                            .setDescription(`${msg.mentions.users.first().toString()}, is ${gay}% gay! You're hella sus, damn! 4k :camera_with_flash: `)
                                            msg.channel.send(gay1)
                                                
                                            }
                                            
                                            else if(gay <= 50){
             
                                        const gay1 = new Discord.MessageEmbed()
                                        .setColor('#0099ff')
                                        .setDescription(`${msg.mentions.users.first().toString()}, is ${gay}% gay! You're fine, thank god! You're too innocent to join the LGBTQ community!`)
                                        msg.channel.send(gay1)
                                            }
                                        
                
                                        
                                        }
                                        else {

                                            if(gay == 69){
                                                const gay2 = new Discord.MessageEmbed()
                                        .setColor('#0099ff')
                                        .setDescription(`${msg.author}, is ${gay}% gay! Nice!`)
                                        msg.channel.send(gay2)
                                            } else if(gay >= 50){

                                            const gay2 = new Discord.MessageEmbed()
                                        .setColor('#0099ff')
                                        .setDescription(`${msg.author.toString()}, is ${gay}% gay! You're hella sus, damn! 4k :camera_with_flash:`)
                                        
                
                                        msg.channel.send(gay2)
                                            }
                                            else if(gay <= 50) {
                                                const gay2 = new Discord.MessageEmbed()
                                                .setColor('#0099ff')
                                                .setDescription(`${msg.author.toString()}, is ${gay}% gay! You're fine, thank god! You're too innocent to join the LGBTQ community!`)
                                                
                        
                                                msg.channel.send(gay2)

                                            }

                                            


                                            
                                        }
                                       
                                        
                                        
                          
                                        
                          
                                        }
                                        if(command == "pantof"){

                                            if(msg.mentions.users.first()){

                                            let pantof = new Discord.MessageEmbed()
                                            .setColor('#0099ff')
                                            .setDescription(`${msg.mentions.users.first().toString()} is getting bonked with a "pantof", because they kicked the bot!`)
                                            
                    
                                            msg.channel.send(pantof)

                                            } else {

                                                let pantof = new Discord.MessageEmbed()
                                            .setColor('#0099ff')
                                            .setDescription(`And today the person that is getting bonked with a "pantof" is... Nobody. (You forgot to mention a user!)`)
                                            
                    
                                            msg.channel.send(pantof)

                                            }
                                            
                                        }

                                        if(command == "fbiopenup"){

                                            let i

                                            let fbiopenups = ['https://media1.tenor.com/images/5abcc4434910b37e1c99a38f24a24357/tenor.gif?itemid=17130851', 'https://media1.tenor.com/images/1de67159288c2583f1d457cb19b49462/tenor.gif?itemid=13450966']
                                            i = Math.floor(Math.random() * fbiopenups.length)
                                            if(msg.mentions.users.first()){

                                            let pantof = new Discord.MessageEmbed()
                                            .setColor('#0099ff')
                                            .setDescription(`FBI-chan desu, you seem to be lewding lolies, ${msg.mentions.users.first().toString()}!`)
                                            .setImage(fbiopenups[i])
                                            
                    
                                            msg.channel.send(pantof)

                                            } else{

                                                let pantof = new Discord.MessageEmbed()
                                            .setColor('#0099ff')
                                            .setDescription(`Who is FBI-chan raiding? Baka!`)
                                            
                                            
                    
                                            msg.channel.send(pantof)

                                            }
                                            
                                        }

                                        if(command == "saucegenerator"){

                                            let i

    
                                            i = Math.floor(Math.random() * 350000) + 1

                                            if(i < 0) i = 1
                                            
                                            else if(i > 350000) i = 350000

                                            

                                                let pantof = new Discord.MessageEmbed()
                                            .setColor('#0099ff')
                                            .setDescription(`Your sauce is ${i}. Please, keep in mind that this is a random number generator, so some of the sauces might not work!`)
                                            
                                            
                    
                                            msg.channel.send(pantof)

                                            
                                            
                                        }

                                        if(command == "cappy"){

                                            let cappies = ['orange', 'pineapple', 'banana', 'apple', 'lemon', 'apricot', 'peach', 'pear', 'strawberry', 'cherry', 'green apple']

                                            let i

    
                                            i = Math.floor(Math.random() * cappies.length)

                                            

                                            

                                                let pantof = new Discord.MessageEmbed()
                                            .setColor('#0099ff')
                                            .setDescription(`Your Cappy flavour is ${cappies[i]}!`)
                                            
                                            
                    
                                            msg.channel.send(pantof)

                                            
                                            
                                        }

                                        if(command == "funny"){

                                            

                                            let i = Math.floor(Math.random() * 100) + 1

                                            if(i < 0) i = 1

                                            if(i > 100) i = 100

                                            let funny = ["you're funny", "you're not funny"]
                                            let funnyMSG 

                                            if(i >= 50) funnyMSG = funny[0]
                                            else funnyMSG = funny[1]

                                            
                                        
                                             if(msg.mentions.users.first()){
                  
                
                                              
                            
                                              const dick1 = new Discord.MessageEmbed()
                                            .setColor('#0099ff')
                                            .setDescription(`${msg.mentions.users.first().toString()}, ${funnyMSG}!`)
                                            msg.channel.send(dick1);
                            
                                      
                                           }
                                            

                                            else if(msg.author == "220113473315536897"){

                                                let pantof = new Discord.MessageEmbed()
                                            .setColor('#0099ff')
                                            .setDescription(`${msg.author.toString()}, you're not funny!`)
                                            
                                            
                    
                                            msg.channel.send(pantof)
                                            }
                                            else {

                                                let pantof = new Discord.MessageEmbed()
                                            .setColor('#0099ff')
                                            .setDescription(`${msg.author.toString()}, ${funnyMSG}!`)

                                            msg.channel.send(pantof)

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