const Discord = require("discord.js")
const request = require('request'); 

module.exports = {
    name: "cat",
    run: async (client, message, args, config) => {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.RichEmbed()
                    .setImage(body)
                    .setColor("#0000")
                    .setTitle("Cat:")
                    .setFooter(`Mastive | Bot ID: ` + client.user.id )
                    .setTimestamp();
                   message.channel.send(emb)  
            }
        });
    }
}