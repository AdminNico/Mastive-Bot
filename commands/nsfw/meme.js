const Discord = require('discord.js');
const meme = require('memejsfork');

module.exports = {
  name: 'meme',
  description: "Generates a meme. Only NSFW channels.",
  run: async (client, message, args, config) => {
    if (!message.channel.nsfw) return message.channel.send("**Please switch to NSFW channel in order to use this command.**\n\nIf you dont know how to add a nsfw channel, please follow the following guide:\nhttps://support.discordapp.com/hc/en-us/articles/115000084051-NSFW-channels-and-content")
    meme(function (data) {
        const embed = new Discord.RichEmbed()
          .setTitle(data.title[0])
          .setURL(data.url[0])
          .setDescription(`From r/${data.subreddit[0]} by ${data.author[0]}`)
          .setImage(data.url[0])
        message.channel.send({
          embed
        });
      });
  }
};