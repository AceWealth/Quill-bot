const Discord = require('discord.js');
const client = new Discord.Client();
const {
    RichEmbed
} = require("discord.js");
const config = require("./config.json");

//command exports
const randomPoem = require('./Rand-Poem.js');

///bot start
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('error', console.error);
const prefix = "!";
client.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    // Exit and stop if it's not there
    //Grab search term from message 
    if (message.content.startsWith(prefix + "foo")) {
       randomPoem.getPoem();
    }

});


client.login(config.token);