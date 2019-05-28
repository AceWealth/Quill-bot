//https://discord.js.org/#/
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    RichEmbed
} = require("discord.js");
//https://github.com/sindresorhus/got << Node http request library

//local scripts
const config = require("./config.json");
const errorMsg = require('./error-messages.js');
const rhymes= require('./commands/rhymes.js');
const randomPoem = require('./commands/randomPoem.js');

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
       randomPoem.get(message);
    }
    //command to find 10 words that rhyme with the search query. 
    //Results are grabbed from Datamuse API.
    if (message.content.startsWith(prefix + "rhymes")) {
        rhymes.get(message);
    }

});


client.login(config.token);