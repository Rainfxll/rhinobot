const Discord = require("discord.js")
const Client = new Discord.Client

module.exports.run = async (bot, message, args) => {

  if(message.author.id !== "632975599119630356") return;

    const command = message.content.split(' ').slice(1).join(' ');
    message.channel.send(
`\`\`\`js
${eval(command)}
\`\`\``);

  }
    module.exports.help = {
        name: "eval"
      }
