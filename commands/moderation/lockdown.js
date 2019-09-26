const Discord = require('discord.js');
const ms = require('ms');
const chalk = require('chalk');

module.exports = {
  name: "lockdown",
  aliases: ["lockchannel", "lock"],
  description: "Temporarily lock any channel from interaction from other users.",
  run: async (client, message, args, config) => {

    if (!message.member.hasPermission('MANAGE_CHANNELS') || !message.member.hasPermission(config.roles)) return message.channel.send(new Discord.RichEmbed().addField("Invalid Permissions", config.permissions.missingMod + '\nRun `/cmd-permissions`'));
    if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.reply('Im sorry, I dont have `MANAGE_CHANNELS` permission!');

    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (!time) return message.reply('Invalid time! Please provide a valid time.');

    if (validUnlocks.includes(time)) {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      }).then(() => {
        let embed = new Discord.RichEmbed()
          .setColor(config.green)
          .setDescription('Lockdown has been lifted.')
        message.channel.send(embed);
        console.log(`[${message.guild}] The lockdown on #${message.channel.name} has been lifted.`);

        clearTimeout(client.lockit[message.channel.id]);
        delete client.lockit[message.channel.id];
      }).catch(error => {
        console.log(error);
      });
    } else {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      }).then(() => {
        let embed = new Discord.RichEmbed()
          .setTitle('This channel has been locked down!')
          .setColor(config.red)
          .setDescription(`${message.channel} has been locked down for ${ms(ms(time), { long:true })} by ${message.author.username}`)
        message.channel.send(embed);
        console.log(chalk.yellow(`[${message.guild}]`) + ` ${message.author.username} has locked down #${message.channel.name}.`);

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          })

          let embed = new Discord.RichEmbed()
            .setColor(config.green)
            .setDescription('Lockdown has been lifted.')
          message.channel.send(embed);
          console.log(chalk.yellow(`[${message.guild}]`) + ` The lockdown on #${message.channel.name} has been lifted.`);

          delete client.lockit[message.channel.id];
        }, ms(time));
      })
    }

  }
}