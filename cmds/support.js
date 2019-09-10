const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .setTitle("Rhino BOT - Informacje")
    .addField("Aby zobaczyć komendy wpisz", "`!help`")
    .addField("Aby zgłosić buga wpisz", "`!contact`")
    .addField("Wejdż na officjalny serwer!", "[Rihno BOT - Support Center](https://discord.gg/XznfRUU)")

    message.channel.send(embed)

            message.delete();
}

module.exports.help = {
    name: "support"
}
