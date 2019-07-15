const errorMsg = require('../error-messages.js');
const got = require('got');
const utility = require('../utility.js');

const thesaurus = function (message) {
    let searchTerm = utility.getSearch(message);
    (async () => {
        try {
            const response = await got('https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + searchTerm + '?key=' + process.env.THESAURUS);
            let result = (JSON.parse(response.body));
            let syns = result[0]["meta"]["syns"];
            //flatten nested arrays
            let merged = [].concat.apply([], syns);
            message.channel.send("Synonyms for **" + searchTerm + "**: \n" + "```" + merged.join(", ") + "```");
        } catch (error) {
            message.channel.send(errorMsg.genericError);
        }
    })();
}

module.exports.get = thesaurus;