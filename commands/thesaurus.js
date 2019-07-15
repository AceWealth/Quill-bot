const errorMsg = require('../error-messages.js');
const got = require('got');
const utility = require('../utility.js');
const config = require("../config.json");
const aws = require('aws-sdk');
let s3 = new aws.S3({
    thesaurus: process.env.THESAURUS
});

const thesaurus = function (message) {
    let searchTerm = utility.getSearch(message);
    (async () => {
        try {
            const response = await got('https://www.dictionaryapi.com/api/v3/references/thesaurus/json/' + searchTerm + '?key=' + s3.thesaurus);
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