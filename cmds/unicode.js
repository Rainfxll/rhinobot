const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  if (args[0] === undefined) {
      
    return message.channel.send('Potrzebuję postaci, aby uzyskać jej Unicode!');

  } else {

    let transArg = args[0].toLowerCase();

    if (transArg === undefined) {

      return message.channel.send('Wpisz ** 1 ** znak, aby uzyskać kod Unicode!');

    } else {

      if (transArg.length >= 2) {

        return message.channel.send(`Za długi $ {message.author}; możesz wpisać tylko ** 1 ** znak.`);

      }

      const embed = new Discord.RichEmbed()
      .setDescription(transArg.charCodeAt(0));

      return message.channel.send(embed);

    }

  }
  
}

module.exports.help = {
  
  name: 'unicode'
}
