
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();


const fighthelp = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Fight help')
        .addFields(
            {name: `How to play`, value: `To join a match you have to type ${"`yes`"} (you have 60 seconds to accept the battle). After that the match starts. Each one of you have 1 turn per round. You can choose an abilitiy dependent on which round you're on and how many abilies you have used. The goal is simple, eliminate your opponent. Good Luck!` },
            { name: `Light attack`, value: `Activated by typing number ${"`1`"}; Deals 1 - 6 damage; Can be used at all times`  },
            { name: `Medium attack`, value: `Activated by typing number ${"`2`"}; Deals 1 - 11 damage; To use this attack you need to use your light attack at least 4 times`},
            { name: `Heavy attack`, value: `Activated by typing number ${"`3`"}; Deals 1 - 16 damage; To use this attack you need to use your medium attack at least 3 times`},
            { name: `Ultimate attack`, value: `Activated by typing number ${"`4`"}; Deals 30 damage; To use this attack you need to use all of your attacks (light - 4 times; medium - 3 times; heavy - 2 times); You can only use this attack once a game!`},
        )

      

        


        


client.on('ready', () => {
    console.log("Fight beta ready")
    
    });


client.on('message',  msg=> {
    const prefix = '?';


    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

  if (command == "fightbeta") {
        if(!msg.mentions.users.first()) return msg.channel.send(`${msg.author.toString()}, you forgot to mention your enemy, b-baka!`);
        else {
                const mUser = msg.mentions.users.first()

                let {guild} = msg;
                msg.channel.send(`Please, keep in mind that you're playing a beta version of the Fighting minigame! It could be unstable and potentialy unplayable! If you notice something unusual DM @abyzls on Twitter!`);

                mUser.send(`${msg.author.username} has requested to duel you in ${guild.name}! To accept the duel type ${"`yes`"}!`)

                  msg.channel.send(`${mUser.toString()}, do you accept the duel?`);
                  msg.channel.awaitMessages(m => m.author.id === mUser.id,
                        {max: 1, time: 60000}).then(collected => {
                         if (collected.first().content.toLowerCase() === 'yes') {

                                msg.channel.send(`Game starting!`)
                                msg.channel.send(`Player 1 is ${msg.author.toString()} and Player 2 is ${mUser.toString()}`)

                                const player1 = msg.author.toString() 
                                const player2 = mUser.toString()

                               

                              let min

                              let player, enemy, health, type, damage

                              let sent = 0


                              

                               let turn = 1
                                
                               let used1 = 0
                               let used2 = 0
                                
                               let lightUsed1 = 0
                               let lightUsed2 = 0

                               let mediumUsed1 = 0
                               let mediumUsed2 = 0

                               let heavyUsed1 = 0
                               let heavyUsed2 = 0

                              let light = 0
                              let medium
                              let heavy 
                              const ultimate = 30

                          const endD = ["`end`", "`attacks`"]

                          let alrtMSG
          
                                let health1 = 100
                                let health2 = 100

                                    game();

                      function game() {

                       


                        
                        let  MSG = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setDescription(`${player} used their ${type} attack and dealt ${damage} damage to ${enemy} and they have ${health} health left!`)

                        let alerts = new Discord.MessageEmbed()
                        .setColor('#DC143C')
                        .setDescription(alrtMSG)
                        
                          switch(sent) {

                      case 3:

                         sent = 1

                       break
                         case 2:

                          

                          sent = 1
                          msg.channel.send(alerts)
                          .then(msg => {
                            msg.delete({ timeout: 30000 })
                          }) 

                          
                          
                         

                        break
                      case 1:
                          
                                     msg.channel.send(MSG)
                                            
                                          break

                                        }

                             

                              if(turn == 1){
                                
                                if(health1 > 0)  {
                                  msg.channel.send(`Please, choose an abilty, ${player1}! Remember, if you want to end the game, you can type ${endD[0]}. Also you can check your attacks by typing ${endD[1]}. `)


                                  .then(msg => {
                                    msg.delete({ timeout: 15000 })
                                  }) 

                                 msg.channel.awaitMessages(m => m.author.id == msg.author.id,
                                  {max: 1, time: 15000}).then(collected => { 
                                  switch(collected.first().content.toLowerCase()){
                                    case "1":
                                            
                                            min = 1
                                            
                                            light = Math.floor(Math.random() * 5)
                                            
                                            if(light < min) light = min
                                        

                                            health2 -= light
                                            turn++
                                            lightUsed1++

                                            player = player1
                                            enemy = player2
                                            health = health2
                                            type = "light"
                                            damage = light
                                            firstplay = false
                                            
                                            sent = 1
                                            
                                            
                                            game()
                                              
                                          
                                          break

                                         case "2": 

                                            if(lightUsed1 >= 4){
                                              min = 5
                                            medium = Math.floor(Math.random() * 10) 
                                            if(medium < min ) medium = min
                                            health2 -= medium
                                            
                                            turn++
                                            mediumUsed1++

                                            player = player1
                                            enemy = player2
                                            health = health2
                                            type = "medium"
                                            damage = medium

                                            sent = 1

                                               game()
                                            } else {
                                              sent = 2
                                            alrtMSG = `${player1}, you need to use your medium attack at least ${4 - lightUsed1} more times!`
                                                 game()
                                            }  

                                            break
                                          
                                          case "3":
                                            if(mediumUsed1 >= 3){
                                              min = 10
                                            heavy = Math.floor(Math.random() * 15) 
                                              if (heavy < min) heavy = min

                                            health2 -= heavy
                                            
                                            player = player1
                                            enemy = player2
                                            health = health2
                                            type = "heavy"
                                            damage = heavy
                       
                                            turn++
                                            heavyUsed1++

                                            sent = 1
          
                                            game()    
                                          }
                                          else{
                                            sent = 2
                                            alrtMSG = `${player1}, you need to use your medium attack at least ${3 - mediumUsed1} more times!`
                                               game()
                                          }
                                        break
                                          case "4":
                                           if(mediumUsed1 >= 3 && lightUsed1 >= 4 && heavyUsed1 >= 2){
                                            if(used1 == 0){
                                              used1++
                                            health2 -= ultimate
                                            
                                            mediumUsed1 = 0
                                            lightUsed1 = 0
                                            heavyUsed1 = 0
                                      
                                            sent = 1
                                      
                                            player = player1
                                            enemy = player2
                                            health = health2
                                            type = "ultimate"
                                            damage = ultimate

                        let  reset = new Discord.MessageEmbed()
                        .setColor('#DC143C')
                        .setDescription(`${player1}'s abilites have been reset!`)
                                  
                                            

                                            msg.channel.send(reset)
                                            .then(msg => {
                                              msg.delete({ timeout: 15000 })
                                            }) 
    
                                            turn++
          
                                            game()  
                                            } 
                                            
                                            else{
                                              sent = 2
                                              alrtMSG = `${player1}, you have already used your ultimate attack!`
                                              
                                              game()
        
                                            }
                                          } else { 
                                            sent = 2
                                            alrtMSG = `${player1}, you have to use all of your attacks before you're able to use your ultimate!`
                                            
                                            game()
                                          }
                                        break
      
                                          case "end":
                                            
                                            msg.channel.send(`Game ending!`)
                                            .then(msg => {
    msg.delete({ timeout: 15000 })
  })
                                            return
                                              
                                          
                                         case "attacks":
                                            msg.channel.send(fighthelp)  
                                            sent = 3 
                                           game()
                                          break
                                          
                                          default:
                                            sent = 2
                                            alrtMSG = `${player1}, something went wrong! Try again!`
                                            
                                            return game();

                                          
                                          
            }   
                                          
                                  }).catch(() => {
                                    alrtMSG = `${player1} failed to respond in time, what a turtle! ${player2} has won!`
                                    msg.channel.send(alerts)
                                         
                                          
                                          
                                  });
                          return;

                          
                      
                                }else{
                                  msg.channel.send(`${player2} has won! :crown:`)
                                  
                                  return;
                                }

                                }

                              if(turn == 2){

                                if(health2 > 0){

                                msg.channel.send(`Please, choose an abilty, ${player2}! Remember, if you want to end the game, you can type ${endD[0]}. Also you can check your attacks by typing ${endD[1]}. `)
                                .then(msg => {
                                  msg.delete({ timeout: 15000 })
                                }) 

                                msg.channel.awaitMessages(m => m.author.id == mUser.id,
                                  {max: 1, time: 150000}).then(collected => {

                                    switch(collected.first().content.toLowerCase()){
                                    
                                   case "1":

                        
                                    sent = 1
                                      min = 1
                                      light = Math.floor(Math.random() * 5)
                                      
                                      if(light < min) light = min
                                     
                                      health1 -= light
                                      turn--
                                      lightUsed2++
                                      
                                      player = player2
                                      enemy = player1
                                      health = health1
                                      type = "light"
                                      damage = light
    
                                      game()  
                                      
                                    break
                                    
                                   case "2": 

                                   sent = 1
                                      if(lightUsed2 >= 4){
                                        min = 5
                                      medium = Math.floor(Math.random() * 10)
                                      if(medium < min) medium = min
                                      health1  -= medium

                                      
                                      
                                      turn--
                                      mediumUsed2++

                                      player = player2
                                      enemy = player1
                                      health = health1
                                      type = "medium"
                                      damage = medium
    
                                      game()   
                                      }
                                      else{
                                        sent = 2
                                        alrtMSG = `${player2}, you need to use your light attack at least ${4 - lightUsed2} more times!`
                                        
                                               game()
                                      } 
                                    break
                                    case "3":
                                      sent = 1
                                      if(mediumUsed2 >= 3){
                                        min = 10
                                      heavy = Math.floor(Math.random() * 15)
                                      if(heavy < min ) heavy = min
                                      health1 -= heavy
                                      
                                      
                                      turn--
                                      heavyUsed2++

                                      player = player2
                                      enemy = player1
                                      health = health1
                                      type = "heavy"
                                      damage = heavy
                                      
                                      game()
                                      }
                                      else{
                                        sent = 2
                                        alrtMSG = `${player2}, you need to use your medium attack at least ${3 - mediumUsed2} more times!`
                                       
                                               game()
                                      } 
                                    break
                                    case "4": 
                                    sent = 1
                                      if(mediumUsed2 >= 3 && lightUsed2 >= 4 && heavyUsed2 >= 2){
                                      if(used2 == 0){
                                        used2++
                                      health1 -= ultimate
                                      mediumUsed2 = 0
                                      lightUsed2 = 0
                                      heavyUsed2 = 0
                                      
                                     
                                      turn--

                                      player = player2
                                      enemy = player1
                                      health = health1
                                      type = "ultimate"
                                      damage = ultimate
                                      

                        let  reset = new Discord.MessageEmbed()
                        .setColor('#DC143C')
                        .setDescription(`${player2}'s abilites have been reset!`)
                                  
    

                                            msg.channel.send(reset)
                                            .then(msg => {
                                              msg.delete({ timeout: 15000 })
                                            }) 
                                            
    
                                      game()    
                                    }
                                    else{
                                      sent = 2
                                      alrtMSG = `${player2}, you have already used your ultimate attack!`
                                      
                                      game()

                                    }
                                  }
                                  else{
                                    sent = 2
                                    alrtMSG = `${player2}, you have to use all of your attacks before you're able to use your ultimate!`
                                    
                                    game()
                                  }
                                  break
                                
                                 case "attacks":
                                    msg.channel.send(fighthelp)
                                    sent = 3 
                                   game()
                                  break
                                  
                                  case "end":
                                    msg.channel.send(`Game ending!`)
                                    .then(msg => {
    msg.delete({ timeout: 15000 })
  })
                                     return;   
                                  
                                default:
                                    alrtMSG = `${player2}, Something went wrong! Try again!`
                                    sent = 2
                                    
                                    return game();
                                  
}      
                                  
                                  
}).catch(() => {
                                    alrtMSG = `${player2} failed to respond in time, what a turtle! ${player1} has won!`
                                    msg.channel.send(alerts)

                                         
                                           
                                            
                                           
                                          
                                  });
                          return;

                                  
                        }
                      }
                        
                        else{
                          msg.channel.send(`${player1} has won! :crown:`)
                          
                          
                           
                            
                          return;
                        }
                         
                              

                      }
                    
                        
                  
                   } else{
                    msg.channel.send(`Game rejected by ${mUser.toString()}, c'mon man up!`)
                    .then(msg => {
    msg.delete({ timeout: 15000 })
  })
                    
                   }
                  }).catch(() => {
                    msg.channel.send(`${mUser.toString()} failed to accept in time, what a turtle!`)
                    .then(msg => {
    msg.delete({ timeout: 15000 })
  })
            
    return;
                                
              })       
        
            }
          }
            })


             



client.login(process.env.TOKEN);
            



//msg.edit - in progress
