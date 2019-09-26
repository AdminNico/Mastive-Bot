const Discord = require('discord.js');
const chalk = require('chalk');
const permissions = ["MANAGE_GUILD", "MANAGE_ROLES", "BAN_MEMBERS"];

module.exports = {
  name: "ban",
  aliases: ["ban"],
  description: "This will permanently bans a user from the guild with the reason provided.",
  run: async (client, message, args, config) => {

    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(new Discord.RichEmbed().setColor('#FF0400').addField("Invalid Permissions", config.permissions.missingAdmin + '\nRun `/cmd-permissions`'));
    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.reply('Im sorry, I dont have `BAN_MEMBERS` permission!');
  
    let user = message.mentions.members.first();
    if (!user) return message.reply('Invalid User! Please provide a valid user');
  
    let reason = args.slice(1).join(' ');
    if (!reason) return message.reply('Missing reason! Please provide one.');
  
    if (user.hasPermission(permissions)) return message.reply('Im sorry, I can not pusnish this user.');
  
    let createdAtRaw = message.createdAt.toDateString();
    let createdAt = createdAtRaw.split(' ');
  
    let embed = new Discord.RichEmbed()
      .setTitle('User has been banned')
      .setColor(config.red)
      .addField('Banned User', `${user}`, true)
      .addField('Banned By', `${message.author}`, true)
      .addField('Banned in Channel', message.channel)
      .addField('Time', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
      .addField('Reason', reason);
  
    let auditlogchannel = message.guild.channels.find(c => c.name === 'audit-log');
  
    auditlogchannel.send(embed).catch(e => {
      message.reply('I can not find the log channel, please create one: `audit-log`');
    })
    await user.send(embed).catch(e => { });
  
    message.guild.member(user).ban(reason);
    console.log(chalk.yellow(`[${message.guild}]`) + ` ${message.author.username} has banned ${user.user.username} from ${message.guild} for ${reason}.`);
    return
      
  }
}