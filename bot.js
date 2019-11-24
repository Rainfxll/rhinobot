const botSettings = require("./botsettings.json")
const fs = require("fs");
const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const request = require("request");
const client = new Discord.Client();
const prefix = botSettings.prefix

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

bot.on("ready", async () => {
console.log(`Jest gotowy do pracy przy ${bot.guilds.size} serwerach i ${bot.users.size} użytkownikach!`);

bot.user.setStatus('Online')
 
try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
    } catch(e) {
        console.log(e.stack);
        }
});

// Check every 30 seconds for changes
setInterval(function() {
  console.log('Getting stats update..')
  
  bot.channels.get("648103250549014572").setName(`» | Serwery: ${bot.guilds.size}/1`)
  bot.channels.get("648103267699785750").setName(`» | Użytkownicy: ${bot.users.size}`)
  }, 30000)

let statuses = [
    "r!help | 2.8",
    "rhinobot | 2.8",
    `serwery: ${bot.guilds.size}/1 | 2.8`
]

setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {type: "WATCHING"});

 }, 5000)

bot.on ("message", (message) => {

    msg = message.content.toLowerCase();

    if (message.author.bot) return;
    
    mention = message.mentions.users.first();

    if (msg.startsWith (prefix + "dm")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (4);
        mention.sendMessage (mentionMessage);
        message.channel.send ("Wysłano!")
    }
});

bot.on('message', (message) => {
if(message.content.startsWith('!weryfikacja')) {
message.member.addRole(role = "647911726662287370").catch(console.error);
message.member.addRole(role = "647971547658846239").catch(console.error);
message.delete(500);
}
});

bot.on('message', (message) => {
if(message.content.startsWith('!akceptuje')) {
message.member.addRole(role = "647971394432270367").catch(console.error);
message.member.removeRole(role = "647971547658846239").catch(console.error);
message.delete(500);
}
});

fs.readdir("./cmds", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("No commands found to load!");
        return;
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

client.on ("guildMemberAdd", member => {  

    var role = member.guild.roles.find ("name", "» | Oczekuję na rejestrację!");
    member.addRole (role);
});

client.on ("guildMemberRemove", member => {

}) ; 

// Wiadomość powitalna.

client.on("guildMemberAdd", function(member){
    member.guild.channels.find("name", "🌠┃powitalnia").send("(**SYSTEM**) Powitajmy użytkownika o nazwie @"  +  member.user.username )
});

bot.login(process.env.token);
