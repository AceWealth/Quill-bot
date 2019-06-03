//https://discord.js.org/#/
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    RichEmbed
} = require("discord.js");
//https://github.com/sindresorhus/got << Node http request library

//CHANGE TO NPM PACKAGE WHEN PUBLISHED
const generate = require('/Users/cailey/.nvm/versions/node/v10.13.0/lib/node_modules/character-gen');

//local scripts
const config = require("./config.json");
const sillyPrompt = require('./commands/sillyprompt.js');
const rhymes = require('./commands/rhymes.js');
const randomPoem = require('./commands/randomPoem.js');
const definition = require('./commands/dictionary.js');
const thesaurus = require('./commands/thesaurus.js');
const urban = require('./commands/urban.js');
const redditPrompt = require('./commands/redditPrompt.js');


///bot start
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('error', console.error);
const prefix = "?";

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
    //retrieve synonym(s) of searched word via https://dictionaryapi.com
    if (message.content.startsWith(prefix + "synonym")) {
        thesaurus.get(message);
    }
    //retrieve urban dictionary definition of search term
    if (message.content.startsWith(prefix + "urban")) {
        urban.get(message);
    }
    //retrieve a random writing prompt from r/writingPrompts
    if (message.content.startsWith(prefix + "reddit prompt")) {
        redditPrompt.get(message);
    }
    //generate a random character archetype 
    if (message.content.startsWith(prefix + "gen archetype")) {
        message.channel.send(generate.basic());
    }
    //generate a random character appearance profile
    if (message.content.startsWith(prefix + "gen appearance")) {
        message.channel.send(generate.appearance());
    }
    //generate a random character attribute profile
    if (message.content.startsWith(prefix + "gen character")) {
        message.channel.send(generate.complex());
    }

 
});


client.login(config.token);