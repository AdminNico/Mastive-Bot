const Discord = require('discord.js')
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'hentai',
    aliases: ['hentai'],
    description: "Generates a porn hentai image. Only NSFW channels.",
    run: async (client, message, args, config) => {
        if (!message.channel.nsfw) return message.channel.send('**Please switch to NSFW channel in order to use this command.**\n\nIf you dont know how to add a nsfw channel, please follow the following guide:\nhttps://support.discordapp.com/hc/en-us/articles/115000084051-NSFW-channels-and-content \nMessage will be autodeleted in 15 seconds.').then(msg => {msg.delete(15000)}) 
        let reddit = [
            "hentai_gif",
            "hentai"
        ]
        let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
        const loading = new Discord.RichEmbed()
          .setColor(`#0000`)
        randomPuppy(subreddit).then(async url => {
            const two = new Discord.RichEmbed()
            .setTitle('Hentai:')
            .setImage(url) 
            .setColor(`#0000`)
            .setTimestamp()
            .setFooter(`Mastive | Bot ID: ` + client.user.id )
    
            message.channel.send(loading).then(async msg => {
                setTimeout(() => {
                    msg.edit(two);
                }, 600)
        })
        }).catch(err => console.error(err));
    }
}