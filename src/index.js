require('dotenv').config();
const Discord = require('discord.js');
const mongoose = require('mongoose');

const client = new Discord.Client();

const { MessageEmbed } = require('discord.js');

const User = require("./schemas/UserSchema")





client.login(process.env.TOKEN);

client.on('ready', () => {

    mongoose.connect(process.env.MONGODB_SRV, {
        
        useNewUrlParser: true

    }).then(() => {

        console.log("Connected to DB")

    }).catch((err) => {

        console.log(err)

    })

console.log("Bot ready")



client.user.setPresence({ activity: { name: `Currently for private use - all public functions disabled`, type: "STREAMING", url: "https://www.twitch.tv/abyzlsfr" }, status: 'online' });

client.on('message', async (message) => {

    const prefix = '+'

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();



  switch(command){

        case "reportuser":

            var reportAuthor = message.author

            var number = Math.random() 
            number.toString(36); 
            var id = number.toString(36).substr(2, 36);
            id.length >= 32; 
    
             var reportedUser = message.mentions.users.first()
    
            var reason = args.slice(1).join(' ')

            if(args[0] == null || args[1] == null) {

                const exampleEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setDescription(`${message.author}, something is missing or misspelled!\n\nCommand syntax: ${`+reportuser <user> <reason>`}`)
                .setTimestamp()
            
                    message.channel.send(exampleEmbed)

                    return

            }

            

            
    
            const newUser = await User.create({
    
                reportID: id,
                caseReason: reason,
                reportedUser: reportedUser,
                author: reportAuthor
    
    
            })
    
            const savedUser = await newUser.save()
          
            console.log(id);
    
            const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setDescription(`Thank you, ${message.author} for reporting ${reportedUser} for reason: ${reason}! The moderators will take action soon!`)
        .setTimestamp()

        const exampleEmbedd = new MessageEmbed()
        .setColor('#0099ff')
        .setDescription(`Report ID: ${id}\nReport by: ${reportAuthor.id}\nReported user: ${reportedUser.id}\nReason for report: ${reason}\n`)
        .setTimestamp()

            client.channels.cache.get('925868590639497271').send(exampleEmbedd);
            
    
            message.channel.send(exampleEmbed)

            

            break
            
            case "resolve":

            if(message.member.hasPermission("MANAGE_MESSAGES")){

                var id = args[0]

                User.findOneAndDelete({reportID: id}, (err, data) => {
    
                    if(err) throw err

                    else if(data == null) {

                        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setDescription(`${message.author}, this ID doesn't exist! Check the ID again! `)
        .setTimestamp()
        
                message.channel.send(exampleEmbed)

                    }

                    else {
                    
                       

                     const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setDescription(`${message.author} resolved ${id}!`)
        .setTimestamp()
        
                client.channels.cache.get('925868590639497271').send(exampleEmbed);
           
                    
                    }
                })
              

            }
            else {
                const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setDescription(`${message.author}, you don't have the permissions to resolve this case!`)
        .setTimestamp()
        
                message.channel.send(exampleEmbed)
            }
           

            


            break


    }

    

})

});










