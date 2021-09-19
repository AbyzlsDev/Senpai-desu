require('dotenv').config();
const cron = require('node-cron');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Tasks")

    
    
    })
//30 14 * * 1,2,3,4,5,6,0
    cron.schedule('30 14 * * 1,2,3,4,5,6,0', () => {

        client.users.fetch('438618320468705290').then((user) => {

           

            var d = new Date()
            var n = d.getDay()

           user.send("Just a friendly reminder you have to study for:\n\n" + scheduleToStudyFor[n])

        })

        
      });



/*client.on('message',  msg=> {
    const prefix = '?';


    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    if(command == "addtest") {

       
        
    
    }
    
           

})*/


var scheduleToStudyFor = {

    0: "Немски език ИУЧ\nХимия и оп.на ок.среда\nМатематика\nГеография и икономика\nАнглийски език", // 0 - Sunday, study for Monday
    1: "История и цивилазиця\nБиология и здр.обр.\nФиолософия",
    2: "Физика и астрономия\nМатематика\nХимия и оп.на ок.среда\nБълг.език и литература",
    3: "История и цивилизации\nИнформ.технологии\nМатематика\nФизика и астрономия\nАнглийски език",
    4: "География и икономика\nНемски език\nБълг.език и литература\nБиология и здр.обр.",
    5: "Провери всеки предмет!",
    6: "Провери всеки предмет!",


}






client.login(process.env.TOKEN);
          
