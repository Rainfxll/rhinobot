const Discord = require ("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    const infoList = fs.readFileSync("./info.txt", "utf8");
    const adminCommands = fs.readFileSync("./admin.txt", "utf8");
    const funcommands = fs.readFileSync("./fun.txt", "utf8");
    let bicon = bot.user.displayAvatarURL;
    const pidor = message.guild.members.get(args[0]) || message.member;

    let funEmbed = new Discord.RichEmbed()
    .setColor("00ff00")
    .setTitle("**__Zabawy__**")
    .setDescription(funcommands)
    
    pidor.send(funEmbed);

    let infoEmbed = new Discord.RichEmbed()
    .setColor("00ff00")
    .setTitle("**__Informacyjne__**")
    .setDescription(infoList)

    pidor.send(infoEmbed);

    let modembed = new Discord.RichEmbed()
    .setColor("00ff00")
    .setTitle("**__Moderacyjne__**")
    .setDescription(adminCommands)
    
    pidor.send(modembed);

    let supEmbed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setTitle("Rhino BOT - Pomoc")
    .setImage("https://cdn.discordapp.com/avatars/291221132256870400/4f71fea454b62405b55f2fe0d8e7db0c.png?size=2048")
    .setDescription("Jeśli potrzebujesz pomocy wejdz na officialny serwer [Rhino BOT - Support Center](https://discord.gg/XznfRUU)")
    .setFooter("<> means required, [] means optional")
    .setTimestamp()
    .addField("Contact", Aby zkontaktować się z twórcą wpisz `!contact`")

    pidor.send(supEmbed)

    let chanEmbed = new Discord.RichEmbed()
    .setTitle("Rhino BOT - HELP")
    .setColor("#0ff00")
    .setFooter(`Użył: ${pidor.user.username}`)
    .setDescription(`${pidor} Wysłano w prywatnej wiadomości`);

    message.channel.send(chanEmbed).then(msg => {msg.delete(5000)});

    message.delete();
    
 }

 module.exports.help = {
     name: "help" 
 }
