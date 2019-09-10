const Discord = require('discord.js');
const fs = require("fs");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie możesz użyć tej komendy!");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Musisz wpisać nazwę aby kogoś upomnieć!');
  if (reason.length < 1) return message.reply('Musisz wpisać powód...');

  let dmsEmbed = new Discord.RichEmbed()
  .setTitle("Rhino BOT - Ostrzeżenie")
  .setColor("#00ff00")
  .setDescription(`Zostałeś ostrzeżony \`${message.guild.name}\``)
  .addField("Ostrzeżony przez", message.author.tag)
  .addField("Powód", reason);

  user.send(dmsEmbed);

  message.delete();
  
  message.channel.send(`${user.tag} Został ostrzeżony`)

}

exports.help = {
  name: 'warn'
};
