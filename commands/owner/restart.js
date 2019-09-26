const Discord = require('discord.js');

/* eslint consistent-return: 0, no-console: 0 */
module.exports = {
  name: "restart",
  run: async (client, message, args, config) => {
    if (message.author.id !== '328354437552668672') return;
            console.clear();
               client.destroy()
               client.login(config.token);
             message.channel.send('Restarting...')
    .then((message)=> {
      setTimeout(function(){
        message.edit('I have succesfully restarted!');
      }, 500)
      });
            return;
      message.delete().catch();
  }
};

