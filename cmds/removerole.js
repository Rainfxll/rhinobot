const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Removerole Command", "Użycie: r!removerole <@nick> <rola>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle(`Usuwanie roli`)
  .addField("Opis:", "Zabrano role użytkownikowi", true)
  .addField("Użycie", "r!removerole [nick] [rola]", true)
  .addField("Przykład", "!removerole @KukisS Właściciel")

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Aby to zrobić, potrzebujesz funkcji zarządzania użytkownikami!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);

  if(!role) return message.channel.send("Podaj rolę!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Nie mogę znaleść tej roli!");

  if(!rMember.roles.has(gRole.id)) return message.channel.send("Ten użytkownik nie ma tej roli.");
  await(rMember.removeRole(gRole.id));

  await message.channel.send(`***Została usunięta użytkownikowi ${rMember.user.username} ${gRole.name} rola!***`)

  message.delete();

}

module.exports.help = {
  name: "removerole"
}
