const Discord = require('discord.js');

module.exports = {
    name: "roleinfo",
    run: async (client, message, args, config) => {
        let inline = true

        let role = args.join(` `)
        if(!role) return message.reply("**Please specify a role!** Run `help roleinfo` if you do not understand.");
        let gRole = message.guild.roles.find(`name`, role);
        if(!gRole) return message.reply("**Couldn't find that role stated.** \nProblem might be that you wrote something wrong or that there is no such a role.");

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleemebed = new Discord.RichEmbed()
            .setTitle('Role Information')
            .setColor("#0000")
            .addField("Name", gRole.name, inline)
            .addField("ID", gRole.id, inline )
            .addField("Mention", `\`<@${gRole.id}>\``, inline)
            .addField("Hex", gRole.hexColor, inline)
            .addField("Members", gRole.members.size, inline)
            .addField("Position", gRole.position, inline)
            .addField("Hoisted", status[gRole.hoist], inline)
            .addField("Mentionable", status[gRole.mentionable], inline)
            .addField("Managed", status[gRole.managed], inline)
            .setFooter(`Mastive | Bot ID: ` + client.user.id )
            .setTimestamp();
        message.channel.send(roleemebed);
    }
}