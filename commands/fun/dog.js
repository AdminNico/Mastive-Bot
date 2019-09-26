const Discord = require("discord.js")
const request = require('request'); 
const snekfetch = require('snekfetch');

module.exports = {
    name: "dog",
    run: async (client, message, args, config) => {

        const { body } = await snekfetch.get('https://random.dog/woof.json');
        const embed = new Discord.RichEmbed()
            .setColor("#0000")
            .setTitle('Dog:')
            .setImage(body.url)
            .setFooter(`Mastive | Bot ID: ` + client.user.id )
            .setTimestamp();
        message.channel.send(embed)

    }
}