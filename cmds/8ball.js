 const Discord = require("discord.js")
 
 module.exports.run = async (bot, message, args) => {

    //!8ball question
    if(!args[1]) return message.reply("Proszę wpisz pełne pytanie z 2 lub więcej słów!");
    let replies = ["Tak ”,„ Nie ”,„ Nie wiem ”,„ Zapytaj ponownie później ”,„ Cyka ”,„ Nie jestem pewien! ”,„ Proszę nie ”,„ Powiedz mi ”,„ Bez wątpienia ” , „Nie można teraz przewidzieć”, „Bez wątpienia", ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.RichEmbed()

    .setAuthor(message.author.username)
    .setColor("#00ff00")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed)

    message.delete();


 }

    module.exports.help = {
        name: "8ball"
    }
