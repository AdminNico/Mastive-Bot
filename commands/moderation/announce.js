const Discord = require('discord.js');

module.exports = {
    name: "announce",
    aliases: ["announcement"],
    description: "Sends an embed of the text said to the stated channel.",
    run: async (client, message, args, config) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(new Discord.RichEmbed().setColor('#FF0400').addField("Invalid Permissions", config.permissions.missingMod + '\nRun `/cmd-permissions`'));

        message.delete();
        let channel = message.mentions.channels.first();
        let text = args.slice(1).join(' ');
        let textEmbed = new Discord.RichEmbed()
            .setTitle(`Announcement by` + message.author.username)
            .setColor(message.guild.me.displayColor)
            .setDescription(text)
            .setFooter(client.user.id)
            .setTimestamp();
        return channel.send(textEmbed);
        
    }
}