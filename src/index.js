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

    if(command == "reportuser"){

        var number = Math.random() 
        number.toString(36); 
        var id = number.toString(36).substr(2, 36);
        id.length >= 32; 

         var reportedUser = message.mentions.users.first()

        var reason = args.slice(1).join(' ')

        const newUser = await User.create({

            reportID: id,
            caseReason: reason,
            reportedUser: reportedUser,
            author: message.author.id


        })

        const savedUser = await newUser.save()
      
        console.log(id);

        const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setDescription(`Thank you, ${message.author} for reporting ${reportedUser} for reason: ${reason}! The moderators will take action soon!`)
    .setTimestamp()
    

        message.channel.send(exampleEmbed)

    }

})

});










