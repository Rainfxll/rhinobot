const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("KICK_MEMBERS")  && message.author.id !== "291221132256870400") return message.channel.send("Sorry, you don't have permissions to use this!");
    
  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle("Richo BOT - KICK")
  .addField("Funkcja:", `Wyrzuca użytkownika`, true)
  .addField("Uzycie:", "!kick [nazwa] [powód]", true)
  .addField("Przykład:" ,"!kick @Odar spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("Nie możesz wyrzucić tej osoby!");
   if(member.user.id === "461215237002231808") return message.channel.send("Nie możesz wyrzucić mojego twórcy!")

    
    let reason = args.slice(1).join(' ');
    if(!reason) {
      res = "Nie użyto powodu";
    }
    else {
      res = `${reason}`
    }
    
    await member.kick(reason)
      .catch(error => message.reply(`Nie można wyrzućić tej osoby! Powód : ${error}`));

      let kick = new Discord.RichEmbed()
      .setColor("#00ff00")
      .setTitle(`Wyrzuco | ${member.user.tag}`)
      .addField("Uzytkownik", member, true)
      .addField("Administrator", message.author, true)
      .addField("Powód", res)
      .setTimestamp()
      .setFooter(member.id)

      message.channel.send(kick)

    message.delete();
    
}
      module.exports.help = {
        name: "kick"
      }
