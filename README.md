
# Quill-bot
A node.js discord bot dedicated to helping artists, writers, and roleplayers create. 
Sample commands include random character attribute generation, writing prompts, rhyme search, and more!

<h1>Usage:</h1>
Add Quill to your discord server and see a list of all current commands via it's official website http://getquill.info/ 

<h1>Self-Hosting:</h1>
You are welcome to host a copy of the bot yourself, but you will need to add 3 special keys to the code. You will also need to have node.js, a working knowledge of node.js, and its CLI commands if hosting locally. 

1. A discord bot application and bot token from [https://discordapp.com/developers/applications/](https://discordapp.com/developers/applications/). See [https://discordapp.com/developers/docs/intro](https://discordapp.com/developers/docs/intro) for more setup instructions. 
2. A dictionary API key from [https://www.dictionaryapi.com/](https://www.dictionaryapi.com/).
3.  A Thesaurus API key from [https://www.dictionaryapi.com/](https://www.dictionaryapi.com/).

Once you have these, you will need to plug them into the code in files bot.js, dictionary.js, and thesaurus.js. Keep in mind that the APIs for dictionary and thesaurus lookup are rate limited to 1000 queries per day on a free account. 

If you are forking or keeping a public copy on github, DO NOT commit or push your tokens. Store them as variables in a separate file using .gitignore or similar process to keep them out of your repo. This process can change depending on your hosting method and is entirely up to you, but please be responsible with your bot token.  

Simply replace "process.env.BOT_TOKEN", "process.env.DICTIONARY", and "process.env.THESAURUS" in each listed file with your own tokens (if the bot repo is strictly private and secure) or token variables. They only appear once in each file and can be found with a quick ctrl-f. 

Be sure to run 'npm install' before starting to install dependencies. 

Either host the bot locally and start it via main file bot.js, or follow configuration steps for the hosting provider of your choice. 
