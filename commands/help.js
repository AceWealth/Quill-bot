const {
    RichEmbed
} = require("discord.js");
const Discord = require('discord.js');

//sends a formatted embed to list commands and sommand syntax.
const help = function (message) {
    const embed = new Discord.RichEmbed()
        .setTitle("Command List.")
        .addField("?random poem", "Retrieve a random poem from www.poemist.com." + "\n" + "*--This command is experimental and may respond slowly.*")
        .addField("?reddit prompt", "Retrieve a random writing prompt from r/WritingPrompts.")
        .addField("?rhymes <word>", "Retrieve a list of possible rhymes to match your search term.")
        .addField("?silly prompt", "Sends a silly writing prompt.")
        .addField("?definition <word>", "Retrieve a collegiate definition for your search term.")
        .addField("?synonym <word>", "Retrieve a list of possible synonyms to match your search term.")
        .addField("?urban <word/phrase>", "Search urban dictionary for a word or phrase.")
        .addField("?gen archetype", "Generate a random, simple character archetype.")
        .addField("?gen character", "Generate a random character attribute profile.")
        .setFooter("**Note** Many commands are dependent upon a functioning API. If the corresponding command API is down, the command could result in an error or fail to respond. If this happens, please try again later. If a problem persists after a period of at least 24 hours, contact the bot developer for assistance.")
    message.channel.send({ embed });
}

module.exports.help = help;



