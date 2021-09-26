require('dotenv').config();
const cron = require('node-cron');
const Discord = require('discord.js');
const { timeout } = require('cron');
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Tasks")

    
    
    })
//30 14 * * 1,2,3,4,5,6,0
    cron.schedule('30 11 * * 1,2,3,4,5,6,0', () => {


        var d = new Date()
        var n = d.getDay()

        client.users.fetch('438618320468705290').then((user) => {

           

            

           user.send("Just a friendly reminder you have to study for:\n\n" + scheduleToStudyFor[n])

        })

        client.channels.cache.get('891710715285630996').send("Just a friendly reminder you have to study for:\n\n" + scheduleToStudyFor[n]);

        
      });



/*client.on('message',  msg=> {
    const prefix = '?';


    const args = msg.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    if(!msg.content.startsWith(prefix) || msg.author.bot) return;

    if(command == "addtest") {


        var questions = ["Where test?", "When test?", "When to clear"]
        let counter = 0

        

        if(msg.author.id === client.user.id) return;

        else {

    const filter = m => (m.author.id != client.user.id);

    const channel = msg.channel;

    const collector1 = new Discord.MessageCollector(channel, filter, { time: 15000, max: 2 });


    console.log("collector started");

    
    msg.channel.send(questions[counter++])

    collector1.on('collect',  (m) => {
        
        

        if(counter < questions.length)  {  

      
            strings[counter] = m.content

        m.channel.send(questions[counter++])

        

        }

        strings[counter] = m.content

        console.log(`Collected ${m.content}`)
    
    
        })

        

  
    switch(strings[1]) {

        case "Bulgarian":

        var Bulgarian = {

            date: strings[2],

            dateToDestroy: cron.schedule(`${strings[3]}`, () => {

                Bulgarian.clear();


            })


        }

        break




    }


         

      

    
        

        }

        
     

       
        
    
    }
    
    if(command == "showtest") {

       // console.log(map.get(`${strings[1]} + ${strings[2]}`))

       

       

        }


    


})

var strings = {

    0: null,

    1: null,

    2: null

}*/


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
          
