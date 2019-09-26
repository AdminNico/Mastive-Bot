const Discord = require('discord.js');

module.exports = {
  name: 'terminate',
  description: 'Will make the bot leave the Discord guild and terminate it\'s instance.',
  usage: 'terminate',
  run: async (client, message, args, config) => {
    if (message.author.id !== `${config.ownerid}`) return message.reply('Owner only.');

    if (message.author.id == `${config.ownerid}`) {
      let embed = new Discord.RichEmbed()
        .setTitle(`It's time for ${client.user.username} to go!!!`)
        .setColor(config.red)
        .setDescription('Leaving Guild...')
      message.channel.send(embed);

      message.guild.leave();
      return
    }
  }
};