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

    

    switch (command) {
            case 'fight': {
                if(!msg.mentions.users.first()) return msg.channel.send(msg.author.toString() + ", you forgot to mention your enemy, b-baka!");
                else {

                  const mUser = msg.mentions.users.first()
                  
                    msg.reply(mUser.toString() + ', do you accept the duel?');


                    msg.channel.awaitMessages(m => m.author.id === mUser.id,
                            {max: 1, time: 60000}).then(collected => {
                                    
                                    if (collected.first().content.toLowerCase() === 'yes') {
                                          msg.reply("Game starting! Please choose your player!")

                                          



                                          
                                    }
                                
                                    else
                                            message.reply('Operation canceled.');      
                            }).catch(() => {
                                    msg.reply('No answer after 60 seconds, operation canceled.');
                            });
                    break;
                        }
                }
        
        }
        });
client.login(process.env.TOKEN);