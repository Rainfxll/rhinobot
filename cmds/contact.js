const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Contact Command", "Usage: !Contact <reason>")

    message.channel.send(helpembxd);
    return;
  } 

    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    if(!sayMessage) return message.channel.send("Please give us reason for contacting").then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setColor("00ff00")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`Contact message from [${message.guild.name}](${Invite.url})`)
   .setTitle("Message from contact command!")
   .addField("User", Sender, true)
   .addField("User ID: ", Sender.id, true)
   .addField("Message: ", sayMessage)
   .setTimestamp()

    bot.users.get("461215237002231808").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Message Sent!")
    .setDescription("Twoja wiadomość została wysłana")
    .addField("Reqested by ", Sender)
    .addField("Message: ", sayMessage)
    .setFooter("Dziękujemy za wysłanie wiadomości do supportu Rhino BOT")

    message.channel.send(embed).then(msg => {msg.delete(10000)});

        message.delete();

      }
      module.exports.help = {
        name: "contact"
      }
