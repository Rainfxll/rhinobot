const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[**Zaproszenie**](https://discordapp.com/oauth2/authorize?client_id=620235638511239168&permissions=8&scope=bot)")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Użyj tego linku aby zaprosić bota na serwer", "https://discordapp.com/oauth2/authorize?client_id=620235638511239168&permissions=8&scope=bot")

 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "invite"
      }
