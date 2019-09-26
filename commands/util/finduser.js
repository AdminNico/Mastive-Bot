const Discord = require('discord.js');

module.exports = {
    name: "fuser",
    aliases: ["finduser", "find"],
    description: "Searchs users with a term provided. (In all guilds Im in)",
    run: async (client, message, args, config) => {
        let users = client.users;
        let searchTerm = args[0];
        if(!searchTerm) return message.channel.send("Please type a term to search the user!");
        let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
        message.channel.send(matches.map(u => u.tag));
    }
}