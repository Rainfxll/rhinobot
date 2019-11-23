const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Nazwa Bota", `<:robot:425631858265423883> ${bot.user.username}`, inline)
    .addField("Twórca Bota", "<:bust_in_silhouette:424890572919013397> <@KukisS#3597>", inline )
    .addField("Serwery", `🛡 ${servsize}`, inline)
    .addField("Kanały", `📁 ${chansize}`, inline)
    .addField("Użytkownicy", `<:busts_in_silhouette:424958082691629057> ${usersize}`, inline)
    .addField("Biblioteka botów", "<:floppy_disk:425241283779362816> Discord.js", inline)
    .addField("Stworzono bota", "09.02.2019", inline)
    .setFooter(`Informacja o: ${bot.user.username}. Opracowany przez: KukisS`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}
