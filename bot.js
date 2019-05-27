//https://discord.js.org/#/
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    RichEmbed
} = require("discord.js");
//https://github.com/sindresorhus/got << Node http request library
const got = require('got');

//local scripts
const config = require("./config.json");
const errorMsg = require('./error-messages.js');

///bot start
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('error', console.error);
const prefix = "!";

client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    // Exit and stop if prefix is not there

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