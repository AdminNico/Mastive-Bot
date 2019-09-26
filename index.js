const Discord = require('discord.js');
const config = require('./settings/config.json');
const fs = require('fs');
const chalk = require('chalk');
const token = require('./token.json');
const client = new Discord.Client({
  disableEveryone: true
});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
require('./util/eventLoader.js')(client);

client.login(config.token);

/*fs.readdir('./commands/', (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === 'js')
  if (jsfile.length <= 0) {
    console.log(chalk.red('Couldn\'t find commands.'));
    return
  }

  jsfile.forEach((files, i) => {
    let props = require(`./commands/${files}`);
    console.log(chalk.green('[Console] ') + chalk.yellow(files) + ` has been loaded.`);
    client.commands.set(props.help.name, props);
  })
});*/

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let settings = JSON.parse(fs.readFileSync('./settings.json', 'utf8'));
  if(!settings[message.guild.id]){
    settings[message.guild.id] = {
      prefix: config.prefix
    };
  }

  let prefix = settings[message.guild.id].prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (!cmd.startsWith(prefix)) return;
  let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd));
  if (commandfile) commandfile.run(client, message, args, config);

  const invite = ['discord.gg', 'discord.io', 'discord.me'];
  if (config.discordinvite == true) {
    if (invite.some(word => message.content.toLowerCase().includes(word))) {
      message.delete().catch(O_o => {});

      let embed = new Discord.RichEmbed()
        .setTitle('Discord Invite Detected')
        .setColor(config.red)
        .setDescription(`${message.author}, you are not allowed to advertise other Discords`);
      message.channel.send(embed);

      console.log(chalk.green(`[${message.guild}]`) + ` ${message.author.username} advertised a Discord server in their message.`);
      return;
    }
  };
});


//const privatekey = require('./privatekey.json'); // Used for local development
//client.login(privatekey.token); // Used for local development
