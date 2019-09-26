const Discord = require('discord.js');
const config = require('../config.json');

module.exports.noLogChannel = (message, perm) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setColor(config.red)
    .setDescription('Sorry, I could not find the `#audit-log` channel. This notification was unable to be sent! \nPlease Create the #audit-log channel!');

  message.channel.send(embed);
};

module.exports.noReportChannel = (message, perm) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setColor(config.red)
    .setDescription('Sorry, I could not find the `#reports` channel. This report was unable to be sent! \nPlease Create the #reports channel!');

  message.channel.send(embed);
};

module.exports.noPermissions = (message, perm) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription(`You have insufficent permissions to run this command.\nYou require the permission flag of **${perm}**!`)
    .setColor(config.red)

  message.channel.send(embed);
};

module.exports.invalidUser = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('This user could not be found or does not exist!')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.invalidReason = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('No reason has been provided.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.cannotPunish = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('This user cannot be punished.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.invalidPoll = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Please provide a question for your poll.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.provideNumber = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Please provide a number of messages you would like to delete.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.emptyMessage = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Please specify the message you would like to send, you cannot send an empty message.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.invalidURL = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Please enter a valid URL.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.invalidTime = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('You have not specified a time, using d/h/m/s')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.ownerOnly = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription(`Only <@${config.ownerid}> can use this command.`)
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.invalidIP = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Enter a valid Minecraft IP.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.invalidClientID = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Please specify a client ID, the field cannot be left blank.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.noTweetChannel = (message, perm) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setColor(config.red)
    .setDescription('Sorry, I could not find the `#tweet` channel.');

  message.channel.send(embed);
};

module.exports.emptyMessage = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Please specify the message you would like to tweet, you cannot send an empty tweet.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.incorrectChannel = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('You have sent this command in the wrong channel, try `#tweet`.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.noCommandName = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Must provide a command name to reload.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.anotherNumber = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Please provide a number less than 100')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.userNotBanned = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setColor(config.red)
    .setDescription('This user is not banned.');

  message.channel.send(embed);
};

module.exports.userNotMuted = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('This user is not muted.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.userAlreadyMuted = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('This user has already been muted.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.noAPIKey = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('An API key is not available or could not be found, please check your `token.json` file.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.invalidPlatform = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Please include a platform and username in your arguments.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.commandNotEnabled = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('This command is not enabled, you can turn this on via the `config.json` file.')
    .setColor(config.yellow);

  message.channel.send(embed);
};

module.exports.emptyCode = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Please specify the code you would like to send.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.noRoleExists = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('The specified role does not exist.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.userHasRole = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('The specified user already has this role.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.userDoesNotHaveRole = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('The specified user does not have this role.')
    .setColor(config.red);

  message.channel.send(embed);
};

module.exports.specifyARole = (message) => {
  let embed = new Discord.RichEmbed()
    .setTitle('An error has occurred!')
    .setDescription('Please specify a role to assign to the user.')
    .setColor(config.red);

  message.channel.send(embed);
};