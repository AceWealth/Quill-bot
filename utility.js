
    //utility function to grab user search terms from message
    const getSearch = function (message) {
        let words = message.content.split(" ")
        let searchTerm = words.slice(1);
        searchTerm = searchTerm.join(" ")
        return searchTerm;
    };

    module.exports = {
        getSearch: getSearch
    }