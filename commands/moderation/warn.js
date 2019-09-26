const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports = {
    name: 'warn',
    description: 'This command is used to warn people.',
    usage: 'warn [@user] [reason]',
    run: async (client, message, args, config) => {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new Discord.RichEmbed().setColor('#FF0400').addField("Invalid Permissions", config.permissions.missingMod + '\nRun `/cmd-permissions`' + '\nRun `/cmd-permissions`'));
      if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.reply('Im sorry, I dont have `MANAGE_MESSAGES` permission!');
      let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if(!wUser) return message.reply("Couldn't find this user!");
        if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("I'm sorry, this user cant get warned!");
        let reason = args.join(" ").slice(22);

        if(!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
          };
        
          warns[wUser.id].warns++;
        
          fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
            if (err) console.log(err)
          });
        
          let warnEmbed = new Discord.RichEmbed()
          .setDescription("Warns")
          .setAuthor(message.author.username)
          .setColor("#fc6400")
          .addField("Warned User", `<@${wUser.id}>`)
          .addField("Warned In", message.channel)
          .addField("Number of Warnings", warns[wUser.id].warns)
          .addField("Reason", reason);
        
          let warnchannel = message.guild.channels.find(`name`, "audit-log");
          if(!warnchannel) return message.reply("Couldn't find channel");
        
          warnchannel.send(warnEmbed);
        
          if(warns[wUser.id].warns == 2){
            let muterole = message.guild.roles.find(`name`, "Muted");
            if(!muterole) return message.reply("You should create the `Muted` role.");
        
            let mutetime = "10s";
            await(wUser.addRole(muterole.id));
            message.channel.send(`<@${wUser.id}> has been temporarily muted`);
        
            setTimeout(function(){
              wUser.removeRole(muterole.id)
              message.reply(`<@${wUser.id}> has been unmuted.`)
            }, ms(mutetime))
          }
          if(warns[wUser.id].warns == 3){
            message.guild.member(wUser).ban(reason);
            message.reply(`<@${wUser.id}> has been banned.`)
          }
    }
};