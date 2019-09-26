const Discord = require('discord.js');

module.exports = {
  name: 'serverinfo',
  description: 'Displays information about the guild.',
  aliases: 'guldinfo',
  run: async (client, message, args, config) => {
    let guild = message.guild;
    let icon = message.guild.iconURL;

    let createdAtRaw = guild.createdAt.toDateString();
    let createdAt = createdAtRaw.split(" ");

    let textChannels = message.guild.channels.filter(c => c.type === 'text').size;
    let voiceChannels = message.guild.channels.filter(c => c.type === 'voice').size
    /*
    guild.channels.forEach(channel => {
      channel.type === "text" ? textChannels++ : voiceChannels++;
    });*/

    const emojis = message.guild.emojis.map(e => e.toString()).join(" ");
    const roles = message.guild.roles.map(e => e.toString()).join(" ");

    let embed1 = new Discord.RichEmbed()
      .setTitle(`Information about ${message.guild.name}`)
      .setColor(config.white)
      .setThumbnail(icon)
      .addField('❯ Guild Name', guild.name, true)
      .addField('❯ Guild Owner', guild.owner, true)
      .addField('❯ Created At', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
      .addField('❯ Server Region', guild.region.toUpperCase(), true)
      .addField('❯ Members', message.guild.members.filter(member => !member.user.bot).size, true)
      .addField('❯ Bots', message.guild.members.filter(member => member.user.bot).size, true)
      .addField('❯ Verification Level', veriToText(guild.verificationLevel), true)
      .addField('❯ Text Channels', textChannels, true)
      .addField('❯ Text Channels', voiceChannels, true)
      .setFooter(client.user.username + ` | Bot ID: ` + client.user.id);
    return message.channel.send(embed1);
  }
}

function veriToText(lvl) {
    switch (lvl) {
        case 0:
            return "None";
        case 1:
            return "Verified Email";
        case 2:
            return "Verified Email & Registered on Discord for 5 Minutes or More.";
        case 3:
            return "Verified Email & Registered on Discord for 10 Minutes or More.";
        case 4:
            return "Verified Phone.";
        default:
            return "Ultra???"
    }
}
