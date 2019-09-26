const Discord = require('discord.js');
const chalk = require('chalk');

module.exports = (message, config) => {
  let auditlogchannel = message.guild.channels.find(c => c.name === 'audit-log');
  if (!auditlogchannel) return;

  let embed = new Discord.RichEmbed()
    .addField(`Message Deleted in #${message.channel.name}.`, `${message.author.username}: ${message.content}`)
    .setColor('#FFB325')
  auditlogchannel.send(embed);

  console.log(chalk.yellow(`[${message.guild}]`) + ` A message has been deleted in #${message.channel.name} by ${message.author.username}: ${message.content}`);
  return
}