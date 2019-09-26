const Discord = require('discord.js');
const chalk = require('chalk');

module.exports = {
  name: 'prune',
  description: 'This allows messages to be deleted from a channel.',
  aliases: ["prune", "delete"],
  permission: 'MANAGE_MESSAGES',
  usage: 'purge [number of messages [max 100]]',
  run: async (client, message, args, config) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.RichEmbed().setColor('#FF0400').addField("Invalid Permissions", config.permissions.missingMod + '\nRun `/cmd-permissions`' + '\nRun `/cmd-permissions`'));
    if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.reply('Im sorry, I dont have `MANAGE_MESSAGES` permission!');

    if (isNaN(args[0])) return message.reply('Please provide a number.');
    if (args[0] > 100) return message.reply('The number must not be more than 100.');

    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send('**Messages cleared!**\n**Deleted messages number:** `' + args[0] + '`').then(message.delete(5000));
      return
    })

    let createdAtRaw = message.createdAt.toDateString();
    let createdAt = createdAtRaw.split(' ');

    let embed = new Discord.RichEmbed()
      .setTitle('Messages Purged!')
      .setColor(config.green)
      .addField('Purged By', `${message.author}`, true)
      .addField('Number of Messages', args, true)
      .addField('Channel', message.channel, true)
      .addField('Time', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`)

    let auditlogchannel = message.guild.channels.find(c => c.name === 'audit-log');
    if (!auditlogchannel) return message.reply('I can not find the log channel, please create one: `audit-log`');

    auditlogchannel.send(embed);
    console.log(chalk.yellow(`[${message.guild}]`) + ` ${args} messages have been purged from ${message.channel.name} by ${message.author.username}`);
    return
  }
};