const errorMsg = require('../error-messages.js');
const got = require('got');
const utility = require('../utility.js');
const config = require("../config.json");

const dictionary = function(message) {
    let searchTerm = utility.getSearch(message);
    (async () => {
        try {
            const response = await got('https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + searchTerm +'?key='+ config.dictionary);
            let result = (JSON.parse(response.body));
            definitions = result[0]["shortdef"];
            //add definition number and quotation marks to make definitions more readable
            formatResults = function() {
                count = 0;
                for (var i = 0; i < definitions.length; i++) {
                    count += 1;
                    definitions[i] = count + ': "' + definitions[i] + '."';
                }
            }
            formatResults();
            message.channel.send(definitions.join("\n \n"));
        } catch (error) {
            message.channel.send(errorMsg.genericError);
        }
    })();
}

module.exports.get = dictionary;