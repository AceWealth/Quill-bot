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
const sillyPrompt = require('./commands/sillyprompt.js');
const rhymes= require('./commands/rhymes.js');
const randomPoem = require('./commands/randomPoem.js');
const definition = require('./commands/dictionary.js');

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
    //command to find words that rhyme with the search query. 
    //Results are grabbed from Datamuse API.
    if (message.content.startsWith(prefix + "rhymes")) {
        rhymes.get(message);
    }
    //retrieve a random silly writing prompt from https://www.ineedaprompt.com/
    if (message.content.startsWith(prefix + "silly prompt")) {
        sillyPrompt.get(message);
    }
    //retrieve definition(s) of searched word via https://dictionaryapi.com
    if (message.content.startsWith(prefix + "definition")) {
        definition.get(message);
    }

});


client.login(config.token);