const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole <@user> <Role>
  if(args[0] == "help"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Addrole Command", "Usage: !addrole <@user> <role>")

    message.channel.send(helpembxd);
    return;
  } 

  let xdemb = new Discord.RichEmbed()
  .setColor("#00ff00")
  .setTitle(`Rhino BOT - DODODAWANIE ROLI`)
  .addField("Funkcja:", "Nadawanie roli użytkownikowi", true)
  .addField("Usage", "!addrole [nazwa] [rola]", true)
  .addField("Example", "!addrole @Odar Member")

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Nie możesz użyć tej komendy");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.channel.send(xdemb);

  let role = args.join(" ").slice(22);
  if(!role) return message.channel.send("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.channel.send("Nie mogę znaleść tej roli!");

  if(rMember.roles.has(gRole.id)) return message.channel.send("Ta osoba już ma tą role");
  await(rMember.addRole(gRole.id));

    await message.channel.send(`***Nadano użytkownikowi ${rMember.user.username} rola ${gRole.name} ***`)

    message.delete();
  
}

module.exports.help = {
  name: "addrole",
  description: 'Add role to someone',
  usage: 'addrole <@user> <Role>'
}
