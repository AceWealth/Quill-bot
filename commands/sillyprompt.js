const errorMsg = require('../error-messages.js');
const got = require('got');

const sillyPrompt = function(message) {
    (async () => {
        try {
            const response = await got('https://www.ineedaprompt.com/dictionary/default/prompt?q=adj+noun+adv+verb+noun+location');
            let result = (JSON.parse(response.body));
            message.channel.send(result["english"]);
        } catch (error) {
            message.channel.send(errorMsg.genericError);
        }
    })();
}

module.exports.get = sillyPrompt;
