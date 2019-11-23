const Discord = module.require("discord.js")

module.exports.run = async (bot, message, args) => {

    let owner = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!owner) return message.channel.send("Proszę oznaczyć kogoś, aby mógł zostać nowym właścicielem serwera");

    message.channel.send(`Udało się zostać ${owner} nowym właścicielem serwera ✅`)


}        

module.exports.help = {
  name: "owner"
}
