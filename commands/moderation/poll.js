const Discord = require('discord.js');
const chalk = require('chalk');

module.exports.run = async (client, message, args, config) => {
  
};

module.exports = {
  name: 'poll',
  description: "Makes a poll with a text provided.",
  run: async (client, message, args, config) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.RichEmbed().setColor('#FF0400').addField("Invalid Permissions", config.permissions.missingMod + '\nRun `/cmd-permissions`'));

    if (args == 0) return message.reply('Please provide some text.');

    let embed = new Discord.RichEmbed()
      .setTitle(`Poll by ${message.author.username}`)
      .setColor(config.yellow)
      .setDescription(`${args}`.split(',').join(' '));

    console.log(chalk.yellow(`[${message.guild}]`) + ` ${message.author.username} has created a poll with the question: ${args}.`);
    return message.channel.send(embed).then(message.delete())

      .then(function (message, str) {
        message.react("👍")
        message.react("👎")
      }).catch(function () {});
      
  }
};