const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "<:white_check_mark: 424890369688469504> Online",
        idle: "<:back:424890472855502849> Zaraz Wracam",
        dnd: "<:shield: 424890429524410368> Nie przeszkadzać",
        offline: "<:x:424890400319340546> Offline/Nie widoczny"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "<:busts_in_silhouette: 425631858265423883> Tak";
  } else {
    bot = "<:bust_in_silhouette:424958082691629057> Nie";
  }

            let embed = new Discord.RichEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00ff00")
                .addField("Pełna Nazwa", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nazwa", `${member.nickname !== null ? `<:yes:425632265993846795> Nickname: ${member.nickname}` : "<:no:425632070036094986> None"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Gra", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "<:x:425632070036094986> Nie Gra"}`,inline, true)
                .addField("Role", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:no:425632070036094986> No Roles"}`, true)
                .addField("Dołączył do discorda", member.user.createdAt)
                .setFooter(`Informacje o ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }
