const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: "prefix",
    aliases: "prf",
    run: async (client, message, args, config) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.RichEmbed().setColor('#FF0400').addField("Invalid Permissions", config.permissions.missingAdmin + '\nRun `/cmd-permissions`'));
        if (!args[0]) return message.channel.send(new Discord.RichEmbed().setColor('#FF0400').setTitle('Invalid Syntax!').setDescription('The correct syntax is: `/prefix [newPrefix]`.'));

        let settings = JSON.parse(fs.readFileSync('./settings.json', 'utf8'));
        settings[message.guild.id] = {
            prefix: args[0]
        };

        fs.writeFile('./settings.json', JSON.stringify(settings), (err) => {
            if(err) console.log(err);
        });

        //message.channel.send('<@' + message.author.id + '>, **Prefix was updated to: **`' + settings[message.guild.id].prefix + '`');
        let pembed = new Discord.RichEmbed()
            .setTitle('Prefix was updated!')
            .setDescription('New prefix: `' + settings[message.guild.id].prefix + '`')
            .setTimestamp();
        return message.channel.send(pembed);
    }
}