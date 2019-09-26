const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: "avr",
    description: "Dsiplays in an embed the avatar of a tagged user.",
    run: async (client, message, args, config) => {
        const user = message.mentions.users.first() || message.author;
        const avatarEmbed = new Discord.RichEmbed()
            .setColor("#0000")
            .setAuthor(user.username + "'s avatar")
            .setImage(user.avatarURL);
        return message.channel.send(avatarEmbed);
    }
}