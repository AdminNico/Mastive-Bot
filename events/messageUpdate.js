const Discord = require('discord.js');
const chalk = require('chalk');

module.exports = (oldMessage, newMessage, config) => {
  if (oldMessage.content == newMessage.content) return;

  let auditlogchannel = newMessage.guild.channels.find(c => c.name === 'audit-log');
  if (!auditlogchannel) return;

  if (newMessage.author.bot) return;

  let embed = new Discord.RichEmbed()
    .setColor('#FFB325')
    .addField(`Message Edited in #${newMessage.channel.name} by ${newMessage.author.username}`, `${oldMessage.content} **->** ${newMessage.content}`)
  auditlogchannel.send(embed);

  console.log(chalk.yellow(`[${newMessage.guild}]`) + ` A message in #${newMessage.channel.name} has been edited by ${newMessage.author.username}: [${oldMessage.content} -> ${newMessage.content}]`);
  return
}