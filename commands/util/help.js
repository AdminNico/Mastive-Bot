const Discord = require('discord.js');
const fs = require("fs");

module.exports = {
  name: 'help',
  description: 'Displays all commands and descriptions.',
  usage: 'help',
  aliases: ["cmds", "commands"],
  run: async (client, message, args, config) => {
    const command = message.content.split(' '); 

    if(command[1] == undefined){
      const embed = new Discord.RichEmbed()
          .setColor("#0000")
          .setTitle('Commands')
          .setDescription('For more information about the commands, please run: `/help [cmd]`')
          .addField('**Main Commands**', '`avatar`, `cmd-permissions`, `fuser`, `help`, `mcstatus`, `report`, `serverinfo`, `stats`, `sysinfo`, `userinfo`, `roleinfo`')
          .addField('**NSFW Commands**', '`ass`, `hentai`, `meme`, `nudes`, `porngif`, `pussy`, `boobs`')
          .addField('**Fun Commands**', '`8ball`, `joke`')
          .addField('**Moderation Commands**', '`announce`, `ban`, `kick`, `lockdown`, `poll`, `prefix`, `purge`, `role`, `unban`, `warn`, `warnlevel`')
          .setFooter("Mastive Bot | Requested by " + message.author.tag + " | Total Commands: " + client.commands.size)
          .setTimestamp();
      message.channel.send(embed);  
    }
      else if(command[1] != undefined){ 
        fs.readFile(__dirname + '/../../settings/commands.json', (err, dataJson) => {  
            if (err) throw err;
            let helpMe = JSON.parse(dataJson);
            var commandName = command[1];

            try{
                const embed = new Discord.RichEmbed()
                    .setColor("#2C2F33")
                    .addField(`Command: /${helpMe[commandName].name}`,`Description: ${helpMe[commandName].description}\n`+`Usage: ${helpMe[commandName].usage}\n`+`Aliases: ${helpMe[commandName].aliases}\n`+`Group: ${helpMe[commandName].group}\n`)
                    .setFooter("Mastive Bot | Requested by " + message.author.tag)
                    .setTimestamp();
                message.channel.send(embed);    
            }
            catch(error){
                message.channel.send("I could not find that command!");
            }
        });
    }
    /*message.react('📤');
    let member = message.author
    let bicon = client.user.displayAvatarURL;
    let serverembed0 = new Discord.RichEmbed()
      .setColor("#0000")
      .setTitle("**Commands**")
      .addField("__**Moderation**__", `Commands available for everyone.`)
      .addField("`/report`", `Report a player to the staff of this Discord server.\n` + config.usage.report)
      .addField("`/mcstatus`", `Display information about a Minecraft Server.\n` + config.usage.mcstatus)
      .addField("`/stats`", `Gives some useful bot statistics.\n` + config.usage.stats)
      .addField("`/serverinfo`", `Displays information about the guild.\n` + config.usage.serverinfo)
      .addField("`/userinfo`", `Displays information about the mentioned user.\n` + config.usage.userinfo)
      .addField("`/cmd-permissions`", `Displays the permissions needed for each moderation command.` + config.usage.cmdp)
      .addField("`/joke`", `Generate a joke.\n` + config.usage.joke)
      .setTimestamp(message.createdAt);
      member.send(serverembed0);

    let serverembedn = new Discord.RichEmbed()
      .setColor("#0000")
      .addField("__**NSFW**__", `Commands available for everyone only in NSFW channels.`)
      .addField("`/meme`", `Generate a meme.\n` + config.usage.meme)
      .addField("`/hentai`", `Generate a hentai img.\n` + config.usage.hentai)
      .addField("`/nudes`", `Generate a nudes.\n` + config.usage.nudes)
      .addField("`/ass`", `Generate a img with an ass.\n` + config.usage.ass)
      .addField("`/pussy`", `Generate a img of a pussy.\n` + config.usage.pussy)
      .setTimestamp(message.createdAt);
      member.send(serverembedn);

    let serverembed1 = new Discord.RichEmbed()
      .setColor("#0000")
      .addField("__**Moderation**__", "Commands that are available to moderators.")
      .addField("`/ban`", `This will permanently bans a user from the guild with the reason provided.\n` + config.usage.ban)
      .addField("`/unban`", `This will unban a user from the guild with the reason provided.\n` + config.usage.unban)
      .addField("`/kick`", `Kicks the mentioned user from the guild with the reason provided.\n` + config.usage.kick)
      .addField("`/mute`", `Temporarily mutes a user.\n` + config.usage.mute)
      .addField("`/unmute`", `Unmutes a user.\n` + config.usage.unmute)
      .addField("`/purge`", `This allows messages to be deleted from a channel.\n` + config.usage.purge)
      .addField("`/role`", `This will add or remove a role from the mentioned user.\n` + config.usage.role)
      .addField("`/poll`", `Make a poll with a question with thumbs up and down reactions.\n` + config.usage.poll)
      .addField("`/lockdown`", `Temporarily lock any channel from interaction from other users.\n` + config.usage.lockdown)
      .addField("`/warn`", `This command is used to warn people.\n` + config.usage.warn)
      .addField("`/warnlevel`", `This command gives the information about the Warning Level of a user.\n` + config.usage.warnlevel)
      .addField("`/announce`", `This command returns the text that you especified in the channel u run the command.\n` + config.usage.announce)
      .addField("`/prefix`", `**WARNING, CMD NOT WORKING ATM** Allows you to change the prefix in your guild.\n` + config.usage.prefix)
      .setFooter("Mastive Bot | Requested by " + message.author.tag)
      .setTimestamp(message.createdAt);
      return member.send(serverembed1);*/
  }
}