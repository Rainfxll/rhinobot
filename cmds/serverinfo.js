const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const verlvl = {
    0: "None",
    1: "Low",
    2: "Medium",
    3: "(╯°□°）╯︵ ┻━┻",
    4: "(ノಠ益ಠ)ノ彡┻━┻"
  }

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Nazwa", message.guild.name, inline)
    .addField("ID", message.guild.id, inline)
    .addField("Założyciel", message.guild.owner, inline)
    .addField("Region", message.guild.region, inline)
    .addField("Level Weryfikacji", verlvl[message.guild.verificationLevel],inline)
    .addField("Użytkownicy", `<:busts_in_silhouette:424958082691629057> ${message.guild.memberCount}`, inline)
    .addField("Role", message.guild.roles.size, inline)
    .addField("Kanały", message.guild.channels.size, inline)
    .addField("Dołączyłeś", message.member.joinedAt)
    .setFooter(`Utworzono ${message.guild.createdAt}`);

    message.channel.send(serverembed);

    message.delete();
}

module.exports.help = {
  name:"serverinfo"
}
