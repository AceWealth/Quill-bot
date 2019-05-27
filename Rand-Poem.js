const got = require('got');
const errorMsg = require('./error-messages.js');

const getPoem = function() {
    let content = "initial"
    (async () => {
        try {
            const response = await got('https://www.poemist.com/api/v1/randompoems');
            let result = (JSON.parse(response.body));
            let random = result[Math.floor(Math.random()*result.length)];
            let resultArray = [random["content"], random["poet"].name];
            content = resultArray[0]
        } catch (error) {
            console.log(error.response.body);
            return errorMsg.randomPoemError;
        }
    })();
}

module.exports.getPoem = getPoem;

