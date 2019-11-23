const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Kontakt do supportu", "Usage: !contact <powód>")

    message.channel.send(helpembxd);
    return;
  } 

    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("Proszę uzasadnić swój problem!").then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setColor("00ff00")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`Kontakt z serwera [${message.guild.name}](${Invite.url})`)
   .setTitle("Rhino BOT - Support")
   .addField("Użytkownik", Sender, true)
   .addField("ID Użytkownika: ", Sender.id, true)
   .addField("Wiadomość: ", sayMessage)
   .setTimestamp()

    bot.users.get("632975599119630356").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Rhino BOT Support")
    .setDescription("Twoja wiadomość została wysłana")
    .addField("Wysłał ", Sender)
    .addField("Wiadomość: ", sayMessage)
    .setFooter("Dziękujemy za wysłanie wiadomości do supportu Rhino BOT")

    message.channel.send(embed).then(msg => {msg.delete(10000)});

        message.delete();

      }
      module.exports.help = {
        name: "contact"
      }
