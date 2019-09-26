const Discord = require('discord.js');

module.exports = {
  name: 'shutdown',
  description: 'This will shutdown the bot instance on all Discord servers.',
  usage: 'shutdown',
  run: async (client, message, args, config) => {
    if (message.author.id !== `${config.ownerid}`) return message.reply('Owner only.');

    if (message.author.id == `${config.ownerid}`) {
      let embed = new Discord.RichEmbed()
        .setTitle('Shutting Down...')
        .setColor(config.red);

      message.channel.send(embed)
        .then(message => client.destroy())
    }
  }
};