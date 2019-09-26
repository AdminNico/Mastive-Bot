const Discord = require('discord.js');
const chalk = require('chalk');

module.exports = async (client, guild, message) => {
  console.log(`\n\n` + chalk.green('[Console]') + ` Left the Guild ${guild.name}.\nGuild Owner: ${guild.owner.user.tag}\nNumber of Members: ${guild.memberCount}\nGuild Location: ${guild.region}\n\n`);
  message.channel.get('').send('**I have left a guild** : ' + guild.name + '\n**Guild Owner*+: ' + guild.owner.user.tag);
};