const errorMsg = require('../error-messages.js');
const got = require('got');

const redditPrompt = function (message) {
    (async () => {
        try {
            const response = await got('https://www.reddit.com/r/writingPrompts/random/.json');
            let result = (JSON.parse(response.body));
            let prompt = result[0]["data"]["children"][0]["data"]["title"];
            message.channel.send(prompt);
        } catch (error) {
            message.channel.send(errorMsg.genericError);
        }
    })();
}

module.exports.get = redditPrompt;