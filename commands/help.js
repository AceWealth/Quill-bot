const {
    RichEmbed
} = require("discord.js");
const Discord = require('discord.js');

//sends a formatted embed to list commands and sommand syntax.
const help = function (message) {
    const embed = new Discord.RichEmbed()
        .setTitle("Command List.")
        .addField("?random poem", "Retrieve a random poem from www.poemist.com.")
        .addField("?reddit prompt", "Retrieve a random writing prompt from r/WritingPrompts.")
        .addField("?rhymes <word>", "Retrieve a list of possible rhymes to match your search term.")
        .addField("?silly prompt", "Sends a silly writing prompt.")
        .addField("?definition <word>", "Retrieve a collegiate definition for your search term.")
        .addField("?synonym <word>", "Retrieve a list of possible synonyms to match your search term.")
        .addField("?urban <word/phrase>", "Search urban dictionary for a word or phrase.")
        .addField("?gen archetype", "Generate a random, simple character archetype.")
        .addField("?gen character", "Generate a random character attribute profile.")
    message.channel.send({ embed });
}

module.exports.help = help;



