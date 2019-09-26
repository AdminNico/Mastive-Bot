const Discord = require('discord.js');
const fs = require("fs");

module.exports = {
  name: 'cmd-permissions',
  aliases: ["cmd-p", "cperms", "commandsp"],
  description: "Shows the permissions that each moderation command needs.",
  run: async (client, message, args, config) => {
    let member = message.channel
    let serverembed0 = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setTitle("**Commands Permissions**")
      .setDescription('**Roles Will be implemented soon**\n**Ban/Unban**: `BAN_MEMBERS` - or Role: `Admin`\n**Mute/Unmute**: `KICK_MEMBERS` - or Roles: `Mod`/`Admin`\n**Kick**:`KICK_MEMBERS` - or Roles: `Mod`/`Admin`\n**Purge**: `MANAGE_MESSAGES` - or Roles: `Mod`/`Admin`\n**Role**: `ROLE_MEMEBERS` - or Roles: `Mod`/`Admin`\n**Poll**: `MANAGE_MESSAGES` - or Roles: `Mod`/`Admin`\n**Lockdown**: `MANAGE_CHANNELS` - or Roles: `Mod`/`Admin`\n**Warn/Warn Level**: `MANAGE_MESSAGES` - or Roles: `Mod`/`Admin`\n**Announce**: `MANAGE_CHANNELS` - or Roles: `Mod`/`Admin`')
      .setFooter(client.user.username + ` | Bot ID: ` + client.user.id)
      .setTimestamp(message.createdAt);
    member.send(serverembed0);
  }
};