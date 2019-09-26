const superagent = require("snekfetch");
const Discord = require('discord.js');
const rp = require('request-promise-native');

module.exports = {
    name: "boobs",
    run: async (client, message, args, config) => {
        if (!message.channel.nsfw) return message.channel.send('**Please switch to NSFW channel in order to use this command.**\n\nIf you dont know how to add a nsfw channel, please follow the following guide:\nhttps://support.discordapp.com/hc/en-us/articles/115000084051-NSFW-channels-and-content').then(msg => {msg.delete(15000)})

        return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
            return rp.get({
                url:'http://media.oboobs.ru/' + res[0].preview,
                encoding: null
            });
        }).then(function(res)   {

        const lewdembed = new Discord.RichEmbed()
            .setTitle("Boobs")
            .setColor(`#000000`)
            .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])
            .setFooter(`Mastive | Bot ID: ` + client.user.id )
            .setTimestamp();
            message.channel.send(lewdembed);
        });
    } 
}