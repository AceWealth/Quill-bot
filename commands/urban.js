const ud = require('urban-dictionary');
const utility = require('../utility.js');
const errorMsg = require('../error-messages.js');
const urban = function (message) {
    let searchTerm = utility.getSearch(message);
    // Callback 
    ud.term(searchTerm, (error, entries, tags, sounds) => {
        if (error) {
            message.channel.send(errorMsg.genericError);
        } else {
            console.log(entries[0].definition)
            console.log(entries[0].example)
        }
    })
    // Promise 
    ud.term(searchTerm).then((result) => {
        const entries = result.entries
        message.channel.send("**" + (entries[0].word).replace(/[\[\]']+/g, '') + "**"
            + ":```\n" + (entries[0].definition).replace(/[\[\]']+/g, '')
            + "```\n" + "*Example(s):* \n" + (entries[0].example).replace(/[\[\]']+/g, ''));

    }).catch((error) => {
        message.channel.send(errorMsg.genericError);
    })
}

module.exports.get = urban;

