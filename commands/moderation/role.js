const Discord = require('discord.js');
const chalk = require('chalk');

module.exports = {
  name: 'role',
  description: 'This will add or remove a role from the mentioned user.',
  usage: 'role [add/remove] [@user] [role]',
  run: async (client, message, args, config) => {
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(new Discord.RichEmbed().setColor('#FF0400').addField("Invalid Permissions", config.permissions.missingMod + '\nRun `/cmd-permissions`' + '\nRun `/cmd-permissions`'));
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return message.reply('Im sorry, I dont have `MANAGE_ROLES` permission!');

    let user = message.guild.member(message.mentions.members.first());
    if (!user) return message.reply('Invalid User! Please provide a valid user');
    let role = args.slice(2).join(" ");
    if (!role) return message.reply('Please state a role.');
    let guildRole = message.guild.roles.find(x => x.name === role);
    if (!guildRole) return message.reply('Role doesnt exist.');

    if (args[0] === 'add') {
      if (user.roles.has(guildRole.id)) return message.reply('This user already has the role.');
      await (user.addRole(guildRole));

      let embed = new Discord.RichEmbed()
        .setTitle('User has been assigned to a role.')
        .setColor(config.green)
        .addField('Assigned User', `${user}`)
        .addField('Assigned By', `${message.author}`)
        .addField('Assigned Role', `${role}`);
      message.channel.send(embed);

      console.log(chalk.yellow(`[${message.guild}]`) + ` ${message.author.username} has assigned the role ${guildRole.name} to ${user.user.username}.`);
    };

    if (args[0] === 'remove') {
      if (!user.roles.has(guildRole.id)) return message.reply('This user doesnt have the role stated.');
      await (user.removeRole(guildRole.id));

      let embed = new Discord.RichEmbed()
        .setTitle('User\'s role has been removed.')
        .setColor(config.green)
        .addField('Assigned User', `${user}`)
        .addField('Assigned By', `${message.author}`)
        .addField('Assigned Role', `${role}`);
      message.channel.send(embed);

      console.log(chalk.yellow(`[${message.guild}]`) + ` ${message.author.username} has removed the role ${guildRole.name} to ${user.user.username}.`);
    };
  }
};