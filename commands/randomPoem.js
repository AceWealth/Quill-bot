const errorMsg = require('../error-messages.js');
const got = require('got');

const randomPoem = function(message) {
    (async () => {
        try {
            const response = await got('https://www.poemist.com/api/v1/randompoems');
            let result = (JSON.parse(response.body));
            let random = result[Math.floor(Math.random() * result.length)];
            let resultArray = [random["content"], "*" + random["title"] + "* by " + "**" + random["poet"].name + "**"];
            message.channel.send(resultArray.join(" \n"));
        } catch (error) {
            message.channel.send(errorMsg.randomPoemError);
        }
    })();
}

module.exports.get = randomPoem;

