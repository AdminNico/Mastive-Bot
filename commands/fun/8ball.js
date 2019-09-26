const Discord = require('discord.js');

module.exports = {
    name: "8ball",
    description: "Gives the answer for something you say.",
    run: async (client, message, args, config) => {
        if(!args[1]) return message.reply("Plesae enter a full question with 2 or more words!");
        let replies = ["Yes", "No", "I don't know", "Ask again later!", "Cyka", "I am not sure!", "Pls No", "You tell me", "Without a doubt", "Cannot predict now", "Without a doubt", "Maybe", "You will need to tell me"];
        let result = Math.floor((Math.random() * replies.length));
        let question = args.join(" ");
        message.reply('**Question: ' + question + '**\n**Answer: ' + replies[result] + '**');
        message.delete();
    }
}