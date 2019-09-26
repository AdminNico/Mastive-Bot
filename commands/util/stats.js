const { version } = require('discord.js');
const moment = require('moment');
require('moment-duration-format');
const Discord = require('discord.js');

module.exports = {
	name: 'stats',
	description: 'Gives some useful bot statistics',
	usage: 'stats',
	aliases: "botinfo",
	run: async (client, message, args, config) => {
		var time = Date.now();
		const duration = moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]');
		const embed = new Discord.RichEmbed()
			.setColor('#2C2F33')
			.setAuthor(message.author.username, message.author.displayAvatarURL)
			.setTitle(`Bot Information/Stats <:beta:623599718760579092>`)
			.addField(`❯ Owner`, `Administrator_Nico#5074`)
			.addField(`❯ Developers`, `Administrator_Nico#5074 (Discord Feature/Website) || Fede0512#8281 (Website)`)
			.addField(`❯ Memory Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
			.addField(`❯ Uptime`, `${duration}`, true)
			.addField(`❯ Users`, `${client.users.filter(u => u.id !== '1').size.toLocaleString()}`, true)
			.addField(`❯ Servers`, `${client.guilds.size.toLocaleString()}`, true)
			.addField(`❯ Channels`, `${client.channels.size.toLocaleString()}`, true)
			.addField(`❯ Discord.js`, `v${version}`, true)
			.addField(`❯ Node`, `${process.version}`, true)
			.addField(`❯ Bot Version`, `v2.0.5.9`, true)
			.addField(`❯ Bot Invite`, `[Click Here](https://discordapp.com/api/oauth2/authorize?client_id=613498706133647362&permissions=8&scope=bot)`, true)
			.addField(`❯ List My Bots Link`, `[Click Here](https://listmybots.com/bot/613498706133647362)`, true)
			.addField(`❯ Discord Server Invite`, `[Click Here](https://discord.gg/NPN2tKD)`, true)
			.setTimestamp()
			.setFooter(client.user.username + ` | Bot ID: ` + client.user.id + ` | Time taken: ${Date.now() - time}ms`);
		message.channel.send({ embed });
	}
};