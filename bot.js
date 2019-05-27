const Discord = require('discord.js');
const client = new Discord.Client();
const {
    RichEmbed
} = require("discord.js");
const config = require("./config.json");
const got = require('got');
const errorMsg = require('./error-messages.js');

//command exports
//const randomPoem = require('./Rand-Poem.js');

///bot start
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('error', console.error);
const prefix = "!";

client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    // Exit and stop if it's not there
     
    //command to pull up a random poem from www.poemist.com API. 
    if (message.content.startsWith(prefix + "random poem")) {
        (async () => {
            try {
                const response = await got('https://www.poemist.com/api/v1/randompoems');
                let result = (JSON.parse(response.body));
                let random = result[Math.floor(Math.random() * result.length)];
                let resultArray = [random["content"], "*" + random["title"] + "* by " + "**" + random["poet"].name + "**"];
                message.channel.send(resultArray.join(" \n"));
                message.channel.send(errorMsg.randomPoemError);
            } catch (error) {
                message.channel.send(errorMsg.randomPoemError);
            }
        })();
    }
});


client.login(config.token);