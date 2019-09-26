const Discord = require('discord.js');
const ms = require('ms');
const chalk = require('chalk');

module.exports = {
  name: 'unmute',
  description: 'Unmutes a user.',
  usage: 'unmute [@user]',
  run: async (client, message, args, config) => {
    if (message.channel.type == "dm") return message.channel.send("This command only works in a server!");
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.reply('Im sorry, you dont have the permissions needed. Run `/cmd-permissions`');
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.reply('Im sorry, you dont have the permissions needed.');

    let cmd = message.content.split(" ")[0].replace(configprefix, ''); 
    if(args[0] == "help") return message.channel.send(usage.fullHelp(bot, cmd));

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.reply('Im sorry, I can`t find that user.')

    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if(!muterole) return message.channel.send("There is no mute role to remove!") 

    if(!mutee.roles.has(muterole.id)) return message.channel.send("That user is not muted to begin with!"); 
    mutee.removeRole(muterole.id); 
    return message.channel.send(`${mutee} has been unmuted!`);
  }
};