const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports = {
    name: 'warnings',
    description: 'This command gives the information about the Warning Level of a user.',
    usage: 'warnlevel [@user]',
    run: async (client, message, args, config) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.RichEmbed().setColor('#FF0400').addField("Invalid Permissions", config.permissions.missingMod + '\nRun `/cmd-permissions`' + '\nRun `/cmd-permissions`'));
        if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.reply('Im sorry, I dont have `MANAGE_MESSAGES` permission!');
        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
        };
      
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't do that.");
        
        if(!wUser) return message.reply("Couldn't find them yo");
        let warnlevel = warns[wUser.id].warns;
    
        //message.reply(`<@${wUser.id}> has **${warnlevel}** warnings.`);
        message.reply(
            new Discord.RichEmbed()
            .setTitle('User warnings')
            .setColor(' #0000')
            .setDescription(`**Username:** \`${wUser}\`\n**Id:** \`${wUser.id}\`\n**Warnings:**\`${warnlevel}\``)
            .setFooter(`Mastive | Bot ID: ` + client.user.id )
            .setTimestamp()
        );
    }
};