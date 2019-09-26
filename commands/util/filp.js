const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>?@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
const OFFSET = '!'.charCodeAt(0);

module.exports = {
    name: "flip",
    run: async (client, message, args, config) => {
        if (args.length < 1) return message.reply("**You must provide text to flip!**");

        message.channel.send(
            args.join(' ').split('')
                .map(c => c.charCodeAt(0) - OFFSET)
                .map(c => mapping[c] || ' ')
                .reverse().join('')
        );
    }
}