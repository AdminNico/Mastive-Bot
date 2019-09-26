const Discord = require('discord.js');
const ms = require('ms');
const chalk = require('chalk');

module.exports = {
  name: 'mute',
  description: "Mutes a user.",
  run: async (client, message, args, config) => {
    if (message.channel.type == "dm") return message.channel.send("This command only works in a server!");
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.reply('Im sorry, you dont have the permissions needed. Run `/cmd-permissions`');
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.reply('Im sorry, you dont have the permissions needed.');

    let cmd = message.content.split(" ")[0].replace(config.prefix, ''); 
    if(args[0] == "help") return message.channel.send(usage.fullHelp(client, cmd));

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.reply('Im sorry, I can`t find that user.')

    if (mutee.hasPermission("MANAGE_ROLES")) return message.reply('Im sorry, but it seems you both have the same permissions.');

    let reason = args.slice(1).join(" "); 
    if(!reason) reason = "No reason was given!";

    let muterole = message.guild.roles.find(r => r.name === "Muted") 

    if(!muterole) { //if not
        try{
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#514f48",
                permissions: [] 
            });
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                });  
            });
        } catch(e) {
            console.log(e.stack); 
        }
    }

    if(mutee.roles.has(muterole.id)) return message.channel.send(`${mutee} is already muted!`); 
    mutee.addRole(muterole.id); 
    return message.channel.send(`${mutee} has been muted! Reason: ${reason}`);
  }
};
