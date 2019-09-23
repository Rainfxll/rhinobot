const botSettings = require("./botsettings.json")
const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const request = require("request");
const client = new Discord.Client();
const prefix = botSettings.prefix;
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.dblapi, client);

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./cmds", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        console.log("Nie znaleziono komend do załadowania!");
        return;
    }

    console.log(`Ładowanie ${jsfiles.length} komend!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
console.log(`Bot jest gotowy do pracy przy ${bot.guilds.size} serwerach oraz ${bot.users.size} użytkownikach!`);
    
    dbl.postStats(bot.guilds.size);
 
/*setInterval(() => {
        dbl.postStats(bot.guilds.size);
    }, 5);/*
    
bot.user.setStatus('Online')

bot.user.setActivity(`Ilość serwerów ${bot.guilds.size} | v1.1`);
    
    bot.channels.get("621021768148058162").setName(`📑┃Serwery: ${bot.guilds.size}/1`)
    bot.channels.get("621027476935671809").setName(`📑┃Użytkownicy: ${bot.users.size}`)
    

try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
    } catch(e) {
        console.log(e.stack);
        }
});
     
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
    
});

// Nadawanie rangi po wejściu użytkownika na serwer.

client.on ("guildMemberAdd", member => {  

    var role = member.guild.roles.find ("name", "[RHINO] MEMBER");
    member.addRole (role);
    var role = member.guild.roles.find ("name", "╠-● POWIADOMIENIA");
    member.addRole (role);
    var role = member.guild.roles.find ("name", "╠-● UŻYTKOWNIK");
    member.addRole (role);
})

client.on ("guildMemberRemove", member => {

})  

// Wiadomość powitalna.

client.on("guildMemberAdd", function(member){
    member.guild.channels.find("name", "🌠┃powitalnia").send(`(**SYSTEM**) Przywitajmy użytkownika o nazwie **${member}**, zapoznaj się z regulaminem!`)

});

bot.login(process.env.token);

//restart
