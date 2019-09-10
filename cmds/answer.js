const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
    if(Owner.id !== "461215237002231808" && Owner.id !== "461215237002231808") return message.reply("Tylko twórca może użyć tej komendy!")
   
    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.reply("Użycie `r!answer Zidentyfikuj swoją wiadomość`")
    

   let contact = new Discord.RichEmbed()
   .setAuthor(Owner.username)
   .setColor("00ff00")
   .setThumbnail(Owner.displayAvatarURL)
   .setTitle("Odpowiedź od twojego kontaktu!")
   .addField("Odpowiedź:", sayMessage)
   .addField("Serwer", "[Odar Army](https://discord.gg/zvvasbc)")
   .setTimestamp()

    bot.users.get(id).send(contact);

    let chanemb = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setDescription(`Message sent to <@${id}>`);

    message.channel.send(chanemb).then(msg => {msg.delete(5000)});


        message.delete();

      }
      module.exports.help = {
        name: "answer",
        description: 'Owner Only',
        usage: 'answer <ID> <message>'
      }
