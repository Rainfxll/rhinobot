const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!mute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("Oznacz użytkownika, aby go wyciszyć!");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Przepraszamy, nie masz uprawnień do korzystania z tego!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nie mogę wyciszyć tego użytkownika");
  if (tomute.id === message.author.id) return message.channel.send("Nie możesz się wyciszyć!");
  let muterole = message.guild.roles.find(`name`, "» | Kara: Mute");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "» | Kara: Mute",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Nie podałeś czasu!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> został wyciszony na ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> został odciszony!`);
  }, ms(mutetime));

  message.delete();

}

module.exports.help = {
  name: "mute"
}
