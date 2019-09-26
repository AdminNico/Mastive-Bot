const Discord = require('discord.js');

module.exports = {
    name: "m",
    run: async (client, message, args, config) => {
        message.channel.send(
            new Discord.RichEmbed()
            .setColor('#4C8FD6')
            .setTitle('**Mastive Staff List**')
            .setDescription('Here you will find the mastive staff, from server support to engenieering team.')
            .addField('Owner', '<@!328354437552668672>')
            .addField('Engenieering Team', '<@!328354437552668672>\n<@!236303666011832321>\n<@!583796101786763267>')
            .addField('Senior Administrators', '<@!200511039622742016>')
            .addField('Administrators', '<@!227033616989814784>')
            .addField('Senior Moderators', '<@!283318906024886272>')
            .addField('Moderators', 'N/A')
            .addField('Support Staff', 'N/A')
            
        )
    }
}