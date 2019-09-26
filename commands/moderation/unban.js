const Discord = require('discord.js');
const chalk = require('chalk');
const permissions = ["MANAGE_GUILD", "MANAGE_ROLES", "BAN_MEMBERS"];

module.exports = {
  name: 'unban',
  description: 'This will unban a user from the guild with the reason provided.',
  usage: 'unban [user ID] [reason]',
  run: async (client, message, args, config) => {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.RichEmbed().setColor('#FF0400').addField("Invalid Permissions", config.permissions.missingAdmin + '\nRun `/cmd-permissions`'));
    if (!message.guild.member('BAN_MEMBERS'.user).hasPermission(permissions)) return message.reply('Im sorry, I dont have `BAN_MEMBERS` permission!');

    let user = args[0];
    if (!user) return message.reply('Invalid User! Please provide a valid user');
    if (message.guild.members.get(user)) return message.reply('This user is not banned.')

    let reason = args.slice(1).join(' ');
    if (!reason) return message.reply('Missing reason! Please provide one.');

    let createdAtRaw = message.createdAt.toDateString();
    let createdAt = createdAtRaw.split(' ');

    let embed = new Discord.RichEmbed()
      .setTitle('User has been unbanned')
      .setColor(config.yellow)
      .addField('Banned User', `${user}`, true)
      .addField('Unbanned By', `${message.author}`, true)
      .addField('Time', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
      .addField('Reason', reason);

    let auditlogchannel = message.guild.channels.find(c => c.name === 'audit-log');
    if (!auditlogchannel) return message.reply('I can not find the log channel, please create one: `audit-log`');

    auditlogchannel.send(embed);
    message.guild.unban(user);
    return
  }
};
