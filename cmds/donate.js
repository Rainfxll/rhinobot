const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let bicon = bot.user.displayAvatarURL;
let donateEmb = new Discord.RichEmbed()
.setColor("#00ff00")
.setTitle("Donate")
.setDescription("Donate chwilowo wyłączone!")
.addField("PayPal Donate", "[PayPal]()")
.addField("Patreon Donate", "[Patreon]()")
.addField("Steam Donate", "[Steam]()")
.setFooter("Linki do donate dla bota!")
.setThumbnail(bicon)

message.channel.send(donateEmb)

message.delete();

}

module.exports.help = {
  name: "donate"
}
