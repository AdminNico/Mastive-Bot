const os = require('os');
const Discord = require("discord.js");

module.exports = {
    name: "e",
    aliases: "e",
    description: 'Restricted',
    usage: 'Restricted',
    run: async (client, message, args, config) => {
        if(message.author.id !== "328354437552668672" && message.author.id !== "236303666011832321") return;
        const code = args.join(" ");
        try {
          let codein = args.join(" ");
          let code = eval(codein);
      
          if (typeof code !== 'string')
              code = require('util').inspect(code, { depth: 0 });
          let embed = new Discord.RichEmbed()
          .setAuthor('Evaluate')
          .setColor('#0000')
          .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
          .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
          message.channel.send(embed)
        } catch(e) {
            message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
        }
    }
}