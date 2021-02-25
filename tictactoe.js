require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();


const fighthelp = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Fight help')
        .addFields(
            {name: `How to play`, value: `To join a match you have to type ${"`yes`"} (you have 60 seconds to accept the battle). After that the match starts. Each one of you have 1 turn per round. You can choose an abilitiy dependent on which round you're on and how many abilies you have used. The goal is simple, eliminate your opponent. Good Luck!` },
            { name: `Light attack`, value: `Activated by typing number ${"`1`"}; Deals 1 - 6 damage; Can be used at all times`  },
            { name: `Medium attack`, value: `Activated by typing number ${"`2`"}; Deals 1 - 11 damage; To use this attack you need to use your light attack at least  times`},
            { name: `Heavy attack`, value: `Activated by typing number ${"`3`"}; Deals 1 - 16 damage; To use this attack you need to use your medium attack at least 3 times`},
            { name: `Ultimate attack`, value: `Activated by typing number ${"`2`"}; Deals 50 damage; To use this attack you need to use all of your attacks (light - 2 times; medium - 3 times; heavy - 2 times); You can only use this attack once a game!`},
        )

      

        





client.on('ready', () => {
    console.log("tictactoe ready")
    
    });


client.on('message', msg=> {
    const prefix = '?';


    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

  if (command == "tictactoe") {

    

    
    const mUser = msg.mentions.users.first()
    

    if(!mUser) return msg.channel.send(`${msg.author.toString()}, you forgot to mention your enemy, b-baka!`);

    msg.channel.send(`${mUser} pls say yes`)

    msg.channel.awaitMessages(m => m.author.id === mUser.id,
        {max: 1, time: 60000}).then(collected => {

            
               
                if (collected.first().content.toLowerCase() === 'yes') {

                    
               
        
                  

                   let turn = 0

                   let x = ":x:"

                   let o = `:blue_circle:`

                   

                        let a1 = ":white_large_square:", 
                        a2 = ":white_large_square:", 
                        a3 = ":white_large_square:", 
                        b1 = ":white_large_square:", 
                        b2 = ":white_large_square:", 
                        b3 = ":white_large_square:", 
                        c1 = ":white_large_square:", 
                        c2 = ":white_large_square:", 
                        c3 = ":white_large_square:"

                        let valuea1 = 0,
                        valuea2 = 0,
                        valuea3 = 0,
                        valueb1 = 0,
                        valueb2 = 0,
                        valueb3 = 0,
                        valuec1 = 0,
                        valuec2 = 0,
                        valuec3 = 0
                        
                        
                   

                        
                                
                   

                  

                

                   
                
                
                    
                    game()

                    function game(){

                        const player1 = msg.author
                    const player2 = mUser

                        

                        let boardDRW = new Discord.MessageEmbed()
                   .setColor('#0099ff')
                   .setTitle(`${player1.username} - ${x} vs ${player2.username} - ${o} `)
                   .addField("\u200b", `${a1}  ${a2}  ${a3}\n${b1}  ${b2}  ${b3}\n${c1}  ${c2}  ${c3} `, true )


                                       
                                        
                                        msg.channel.send(boardDRW) 
                                        
                   

                    
                   
                   
                    


                

                        
    
                        
                    
                        if(turn == 0){
                                msg.channel.send(`${player1.toString()}, please choose a square`)

                            msg.channel.awaitMessages(m => m.author.id == msg.author.id,
                                {max: 1, time: 60000}).then(collected => {

                                        if(collected.first().content.toLowerCase() == "a1"){




                                                if(valuea1 == 0){

                                                a1 = x
                                                valuea1 = 1
                                                turn++
                                                calc()
                                               
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }




                                        }

                                       else if(collected.first().content.toLowerCase() == "a2"){
    
    
    
    
                                                if(valuea2 == 0){

                                                a2 = x
                                                valuea2 = 1
                                                turn++
                                                calc() 
                                               
                                                    
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }

                                                

                                                




                                        }
                                        else if(collected.first().content.toLowerCase() == "a3"){
    
    
    
    
                                                if(valuea3 == 0){

                                                a3 = x
                                                valuea3 = 1
                                                turn++
                                                calc() 
                                               
                                                    
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }

                                                

                                                




                                        }

                                        else if(collected.first().content.toLowerCase() == "b1"){




                                                if(valueb1 == 0){

                                                b1 = x
                                                valueb1 = 1
                                                turn++
                                                calc()
                                               
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }




                                        }

                                        else if(collected.first().content.toLowerCase() == "b2"){
    
    
    
    
                                                if(valueb2 == 0){

                                                b2 = x
                                                valueb2 = 1
                                                turn++
                                                calc() 
                                               
                                                    
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }

                                                

                                                




                                        }
                                        else  if(collected.first().content.toLowerCase() == "b3"){
    
    
    
    
                                                if(valueb3 == 0){

                                                b3 = x
                                                valueb3 = 1
                                                turn++
                                                calc() 
                                               
                                                    
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }

                                                

                                                




                                        }

                                        else if(collected.first().content.toLowerCase() == "c1"){




                                                if(valuec1 == 0){

                                                c1 = x
                                                valuec1 = 1
                                                turn++
                                                calc()
                                               
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }




                                        }

                                        else if(collected.first().content.toLowerCase() == "c2"){
    
    
    
    
                                                if(valuec2 == 0){

                                                c2 = x
                                                valuec2 = 1
                                                turn++
                                                calc() 
                                               
                                                    
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }

                                                

                                                




                                        }
                                        else  if(collected.first().content.toLowerCase() == "c3"){
    
    
    
    
                                                if(valuec3 == 0){

                                                c3 = x
                                                valuec3 = 1
                                                turn++
                                                calc() 
                                               
                                                    
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }

                                                

                                                




                                        }
                                        else {
                                                msg.channel.send(`Something went wrong! Try again!`)
                
                                                game()
                
                                              }    
                                    
                                        
                                     
                                    


                                })

                            
                           
                           
                    
                        }
                    
                        if (turn == 1){
                    
                            
                                msg.channel.send(`${player2.toString()}, please choose a square`)

                                msg.channel.awaitMessages(m => m.author.id == mUser.id,
                                    {max: 1, time: 60000}).then(collected => {
    
                                            if(collected.first().content.toLowerCase() == "a1"){
    
    
    
    
                                                    if(valuea1 == 0){
    
                                                    a1 = o
                                                    valuea1 = 2
                                                    turn--
                                                    calc() 
                                                   
                                                        
                                                    
    
                                                    }
                                                    else{
                                                            msg.channel.send("This square has been already taken!")
                                                            
                                                            game()
                                                    }

                                                    
    
    
    
    
                                            }
                                            else  if(collected.first().content.toLowerCase() == "a2"){
    
    
    
    
                                                if(valuea2 == 0){

                                                a2 = o
                                                valuea2 = 2
                                                turn--
                                                calc() 
                                               
                                                    
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }

                                                




                                        }

                                        else if(collected.first().content.toLowerCase() == "a3"){
    
    
    
    
                                                if(valuea3 == 0){

                                                a3 = o
                                                valuea3 = 2
                                                turn--
                                                calc() 
                                               
                                                    
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }

                                                

                                                




                                        }
                                        else if(collected.first().content.toLowerCase() == "b1"){
    
    
    
    
                                                if(valueb1 == 0){

                                                b1 = o
                                                valueb1 = 2
                                                turn--
                                                calc() 
                                               
                                                    
                                                

                                                }
                                                else{
                                                        msg.channel.send("This square has been already taken!")
                                                        
                                                        game()
                                                }

                                                




                                        }
                                        else if(collected.first().content.toLowerCase() == "b2"){




                                            if(valueb2 == 0){

                                            b2 = o
                                            valueb2 = 2
                                            turn--
                                            calc() 
                                           
                                                
                                            

                                            }
                                            else{
                                                    msg.channel.send("This square has been already taken!")
                                                    
                                                    game()
                                            }

                                            




                                    }

                                    else  if(collected.first().content.toLowerCase() == "b3"){




                                            if(valueb3 == 0){

                                            b3 = o
                                            valueb3 = 2
                                            turn--
                                            calc() 
                                           
                                                
                                            

                                            }
                                            else{
                                                    msg.channel.send("This square has been already taken!")
                                                    
                                                    game()
                                            }

                                            

                                            




                                    }

                                    else if(collected.first().content.toLowerCase() == "c1"){
    
    
    
    
                                        if(valuec1 == 0){

                                        c1 = o
                                        valuec1 = 2
                                        turn--
                                        calc() 
                                       
                                            
                                        

                                        }
                                        else{
                                                msg.channel.send("This square has been already taken!")
                                                
                                                game()
                                        }

                                        




                                }
                                else if(collected.first().content.toLowerCase() == "c2"){




                                    if(valuec2 == 0){

                                    c2 = o
                                    valuec2 = 2
                                    turn--
                                    calc() 
                                   
                                        
                                    

                                    }
                                    else{
                                            msg.channel.send("This square has been already taken!")
                                            
                                            game()
                                    }

                                    




                            }

                            else if(collected.first().content.toLowerCase() == "c3"){




                                    if(valuec3 == 0){

                                    c3 = o
                                    valuec3 = 2
                                    turn--
                                    calc() 
                                   
                                        
                                    

                                    }
                                    else{
                                            msg.channel.send("This square has been already taken!")
                                            
                                            game()
                                    }


                                    

                                    




                            }
                            
                            else {
                                msg.channel.send(`Something went wrong! Try again!`)

                                game()

                              }     
                    
                        })
                
                                            
                                        }

                                function calc(){

                                        let boardDRW = new Discord.MessageEmbed()
                   .setColor('#0099ff')
                   .setTitle(`${player1.username} - ${x} vs ${player2.username} - ${o} `)
                   .addField("\u200b", `${a1}  ${a2}  ${a3}\n${b1}  ${b2}  ${b3}\n${c1}  ${c2}  ${c3} `, true )

                                        let winner1 = new Discord.MessageEmbed()
                                        .setColor('#0099ff')
                                        .setTitle(`${player1.username} has won! :crown:`)

                                        let winner2 = new Discord.MessageEmbed()
                                        .setColor('#0099ff')
                                        .setTitle(`${player2.username} has won! :crown:`)
                                        
                     
                     
                                                            
                                                             
                                                             
                                                if(valuea1 == 1 && valuea2 == 1 && valuea3 == 1 || valueb1 == 1 && valueb2 == 1 && valueb3 == 1 || valuec1 == 1 && valuec2 == 1 && valuec3 == 1  // horizontal check
                                                        || valuea1 == 1 && valueb1 == 1 && valuec1 == 1 ||  valuea2 == 1 && valueb2 == 1 && valuec2 == 1 || valuea3 == 1 && valueb3 == 1 && valuec3 == 1 // vertical check
                                                        || valuea1 == 1 && valueb2 == 1 && valuec3 == 1 ||  valuea3 == 1 && valueb2 == 1 && valuec1 == 1 // diagonal checks
                                                        ){
                                                                msg.channel.send(boardDRW) 
                                  
                                                  msg.channel.send(winner1)
                                                  return
                                  
                                                  
                                                }
                                                  
                                                 else if (valuea1 == 2 && valuea2 == 2 && valuea3 == 2 || valueb1 == 2 && valueb2 == 2 && valueb3 == 2 || valuec1 == 2 && valuec2 == 2 && valuec3 == 2 // horizontal check
                                                        || valuea1 == 2 && valueb1 == 2 && valuec1 == 2 ||  valuea2 == 2 && valueb2 == 2 && valuec2 == 2 || valuea3 == 2 && valueb3 == 2 && valuec3 == 2 // vertical check
                                                        || valuea1 == 2 && valueb2 == 2 && valuec3 == 2 ||  valuea3 == 2 && valueb2 == 2 && valuec1 == 2 // diagonal checks
                                                        ){
                                                                msg.channel.send(boardDRW) 
                                                                msg.channel.send(winner2)
                                                                return
                                                        
                                                        } else if(valuea1 == 0 || valuea2 == 0 || valuea3 == 0 || valueb1 == 0 || valueb2 == 0 || valueb3 == 0 || valuec1 == 0 || valuec2 == 0 || valuec3 == 0) //checking if there are empty spaces
                                                        {
                                                                game()
                                                        } else {
                                                                msg.channel.send(boardDRW)
                                                                msg.channel.send("Nobody wins!")
                                                                return
                                                        }


                }
        }
        }
                else
                        msg.channel.send('Operation canceled.');      
        }).catch(() => {
                msg.channel.send('No answer after 30 seconds, operation canceled.');
        });
return;
}  
        


  
  })

  client.login(process.env.TOKEN);



  
                