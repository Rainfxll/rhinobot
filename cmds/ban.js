const Discord = require("discord.js")

//ban command

module.exports.run = async (bot, message, args) => {

let xdemb = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle("Ban Command")
        .addField("Description:", `Ban a member`, true)
        .addField("Usage:", `!ban [user] [reason]`, true)
        .addField("Example:", `!ban @Odar spam`)

        if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "291221132256870400") return message.channel.send("Nie możesz użyć tej komendy!");

        let member = message.mentions.members.first();
        if(!member) return message.channel.send(xdemb)
        if(!member.bannable) return message.channel.send("Nie możesz zbanować tej osoby!")
        if(member.user.id === "291221132256870400") return message.channel.send("Nie możesz zbanować mojego twórcy!")

        if(member.id === message.author.id) return message.channel.send("Nie możesz zbanować samego siebie!")

        let reason = args.slice(1).join(" ");

        if(!reason) {
                    res = "Nie ustawiono powodu!";
        } else {
            res = reason
        }

        await member.ban(reason).catch(error => message.channel.send(`Sorry, I coldn't ban because of: ${error}`));

        let bean = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle(`Rhino BOT - BAN | ${member.user.tag}`)
        .addField("Użytkownik", member, true)
        .addField("Administrator", message.author, true)
        .addField("Powód", res)
        .setTimestamp()

        message.channel.send(bean)

        message.delete()

      }
      module.exports.help = {
        name: "ban"
      }
