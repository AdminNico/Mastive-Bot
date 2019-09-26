const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'mcstatus',
  description: 'Display information about a Minecraft Server.',
  usage: 'mcstatus [ip]',
  run: async (client, message, args, config) => {
    let mcIP = args[0];
    if (!mcIP) return errors.invalidIP(message);

    let {
      body
    } = await superagent
      .get('http://mcapi.us/server/status?ip=' + mcIP);
    let status = body.online ? "✅" : "❎";

    let embed = new Discord.RichEmbed()
      .setTitle(`Information about ${mcIP}`)
      .setThumbnail('https://vignette.wikia.nocookie.net/minecraftpocketedition/images/f/f1/Minecraft_1.2_Logo.png/revision/latest?cb=20171204231225')
      .setColor(body.online ? config.green : config.red)
      .addField('Server Online', status)
      .addField('Players On', body.players.now, true)
      .addField('Max Players', body.players.max, true);
    message.channel.send(embed);

    console.log(chalk.yellow(`[${message.guild}]`) + ` ${message.author.username} requested the Minecraft Server status for ${mcIP}`);
    return
  }
};