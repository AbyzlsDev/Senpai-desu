require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log("shutdown ready")
    });


client.on('message', msg=> {
    const prefix = '?';


    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    

  if (command == "fight") {
        if(!msg.mentions.users.first()) return msg.channel.send(msg.author.toString() + ", you forgot to mention your enemy, b-baka!");
        else {
                const mUser = msg.mentions.users.first()

                let {guild} = msg;

                mUser.send(msg.author.username + " has requested to duel you in " + guild.name)

                  msg.reply(mUser.toString() + ', do you accept the duel?');
                  msg.channel.awaitMessages(m => m.author.id === mUser.id,
                        {max: 1, time: 60000}).then(collected => {
                         if (collected.first().content.toLowerCase() === 'yes') {

                                msg.reply("Game starting!")
                                msg.reply("Player 1 is "+ msg.author.toString()+" and Player 2 is " + mUser.toString())

                                const player1 = msg.author.toString()
                                const player2 = mUser.toString()

                                let x
                                let y

                                

                                let turn = 1

                              let light = 0
                              let medium = Math.floor(Math.random() * 10) + 1
                              let heavy = Math.floor(Math.random() * 15) + 1
                              let ultimate = 100
                          

                                let health1 = 100
                                let health2 = 100

                                    game()

                      function game(){
                                
                                if(turn == 1){
                                  
                                  light = Math.floor(Math.random() * 5) + 1

                                  x = health1 - light

                                  msg.channel.send(`Player 1's current health is ${x}`)

                                  turn++

                                  game()


                                }

                                if(turn == 2){

                                  light = Math.floor(Math.random() * 5) + 1

                                  y = health2 - light

                                  msg.channel.send(`Player 2's current health is ${y}`)

                                  turn--

                                  game()

                                }


                              
                      

                                    
                                      
                                  
                                 
                               

                                  

                                

                      }


                                }
                                
                            })       
        }
                
}
        

});
client.login(process.env.TOKEN);


function player1() {

  

  
  
}


         
