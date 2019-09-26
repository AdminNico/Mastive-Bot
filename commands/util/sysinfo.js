const Discord = require('discord.js');
const os = require('os')

module.exports.run = async (client, message) => {
    
};

module.exports = {
    name:"sysinfo",
    aliases: ["systeminfo", "system-info"],
    description: "It gives information about the system where im hosted.",
    run: async (client, message, args, config) => {
        const gbU =  os.totalmem / 1000000000
        const gbR = Math.round(gbU)
        const hours = os.uptime / 1440
        const sysuptime = Math.floor(hours)
        const days = hours / 24
        let sysuptimeDays = Math.round(days)
        
    
        const msg = await message.channel.send("Loading...");
        const embed = new Discord.RichEmbed()
        .setColor("#0ad394")
        .setTimestamp(message.createdAt)
        .setTitle('System Information')
        
        if (os.platform == 'win32') {
            embed.addField('Operating System', `Windows`, true)
            embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024518761021460/Windows-Logo.png')
        }
        if (os.platform == 'linux') {
            embed.addField('Operating System', `Linux`, true)
            embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024720733536277/LINUX-LOGO.png')
        }
        if (os.platform == 'darwin') {
            embed.addField('Operating System', `Mac OS`, true)
            embed.setThumbnail('https://cdn.discordapp.com/attachments/491024501971222538/491024928028491779/2000px-OS_X_El_Capitan_logo.png')
        }
        if(os.platform == null || undefined) {
            embed.addField('Operating System', `OS is undefined`, true)
        }
    
        embed.addField('OS Release', `${os.release()}`, true)
        embed.addField('CPU', `${os.cpus()[0].model}`, true)
        .addBlankField()
        embed.addField('Architecture', `${os.arch}`, true)
        embed.addField('Memory', `${gbR}GB`, true)
        embed.addField('Directory', `${os.homedir()}`, true)
        embed.addField('Process File', `${process.mainModule.filename}` ,true)
        embed.addField('System Uptime', `${sysuptimeDays} days | ${sysuptime} total hours`, true)
    
        embed.setFooter(client.user.username, client.user.avatarURL)
        msg.edit(embed)
    }
};