const errorMsg = require('../error-messages.js');
const got = require('got');
const utility = require('../utility.js');
//change to npm when published
const generate = require('character-gen');


const nameGen = function (message) {
    let urls = ['https://uinames.com/api/?region=united%20states', 'https://uinames.com/api/?gender=female&region=united%20states', 'https://uinames.com/api/?gender=male&region=united%20states']
    let search = utility.getSearch(message);
    console.log(search)
    let url = '';
    //set request URL according to search term: male, female, or none.
    if (search.toLowerCase() === 'female') {
        url = urls[1];
    } else if (search.toLowerCase() === 'male') {
        url = urls[2];
    } else {
        url = urls[0];
    }
    (async () => {
        try {
            const response = await got(url);
            let result = (JSON.parse(response.body));
            message.channel.send(result.name + " " + result.surname);
        } catch (error) {
            console.log(error);
            message.channel.send(errorMsg.genericError);
        }
    })();
}

const NameAndCharacter = function (message, test) {
    let name = '';
    (async () => {
        try {
            const response = await got('https://uinames.com/api/?region=united%20states')
            let result = (JSON.parse(response.body));
            name = result.name + " " + result.surname;
            message.channel.send(name + ". " + generate.complex());
        } catch (error) {
            console.log(error);
            message.channel.send(errorMsg.genericError);
        }
    })();
    
}

module.exports = {
    name: nameGen,
    character: NameAndCharacter
}