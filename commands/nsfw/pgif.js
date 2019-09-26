const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "pgif",
    description: "Shows a porn gif. Only NSFW channels.",
    run: async (client, message, args, config) => {
        if (!message.channel.nsfw) return message.channel.send('**Please switch to NSFW channel in order to use this command.**\n\nIf you dont know how to add a nsfw channel, please follow the following guide:\nhttps://support.discordapp.com/hc/en-us/articles/115000084051-NSFW-channels-and-content').then(msg => {msg.delete(15000)})

        let reddit = [
            "porn_gifs",
            "NSFW_GIF",
            "nsfw_gifs",
            "60fpsporn",
            "the_best_nsfw_gifs"
        ]
    
        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
    
        randomPuppy(subreddit).then(async url => {
            const two = new Discord.RichEmbed()
            .setTitle('Porngif:')
            .setImage(url) 
            .setColor(`#0000`)
            .setTimestamp()
            .setFooter(`Mastive | Bot ID: ` + client.user.id )
            message.channel.send(two);
        })
    }
}