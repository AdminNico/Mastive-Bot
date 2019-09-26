const Discord = require("discord.js");
let giveMeAJoke = require('give-me-a-joke');;

module.exports = {
    name: "joke",
    description: "Says a joke.",
    run: async (client, message, args, config) => {

        giveMeAJoke.getRandomDadJoke(function(joke){
            message.channel.send(joke)
        })
        
    }
}
