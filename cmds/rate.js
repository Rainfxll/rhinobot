const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

let ratus = message.mentions.members.first();
if(!ratus) return message.channel.send("Oznacz kogoś, aby go ocenić!");

let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let result = Math.floor((Math.random() * rates.length));

if(ratus.user.id === message.author.id) {
  return message.channel.send(`**${message.author.username}**, Dałbym ci ${result}/10<:thought_balloon: 427846193503272960>`);
} else return message.channel.send(`Dałbym ci **__${ratus.user.username}__** ${result}/10 <thought_balloon427846193503272960>`);

}
module.exports.help = {
  name: "rate"
}
