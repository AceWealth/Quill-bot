const errorMsg = require('../error-messages.js');
const got = require('got');
const utility = require('../utility.js');


const rhymes = function (message) {
    let searchTerm = utility.getSearch(message);
    (async () => {
        try {
            const response = await got('https://api.datamuse.com/words?rel_rhy=' + searchTerm);
            let result = (JSON.parse(response.body));
            let results = [];
            //limit number of results based on response length. If more than 20 words are available, limit amount. If not, loop by full length of response. 
            if (result.length < 20) {
                for (var i = 0; i < result.length; i++) {
                    results.push(result[i]["word"]);
                } 
            } else {
                for (var i = 0; i < 20; i++) {
                    results.push(result[i]["word"]);
                }
            }
            message.channel.send("Possible rhyming words for **" + searchTerm + "**: \n"+ "```" + results.join(", ") + "```")
        } catch (error) {
            message.channel.send(errorMsg.rhymeError);
        }
    })();
}

module.exports.get = rhymes;