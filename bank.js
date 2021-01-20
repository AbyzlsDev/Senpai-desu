require('dotenv').config();
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
var mysql = require('mysql');
var CronJob = require('cron').CronJob;


client.on('ready', () => {
console.log("Bank ready")
});


client.on('guildMemberAdd', member => {
    connection.query(`INSERT INTO userCash (userID, userCurrency) VALUES ('${member.id}', 0)`, err => {
    if (err) throw err;
    console.log("New member added " + member.id);

    
    });

});





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



var daily = 0;

var result = daily 

var lastVal = result



    



client.on('message', msg => {


 

    if (msg.content === '?add') {
         
      daily = 2600
     
      

     msg.reply('You get ' + daily + ' money');
    }

    if (msg.content === '?bal') {
        
        
        
        result = daily 
      msg.reply(result + ' is your balance');

        
  }
 
});


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "a mighty password",
  database: "Cash"

});

connection.connect(err => {
  if(err) throw err
  console.log("Connected")

});

client.login(process.env.TOKEN);

