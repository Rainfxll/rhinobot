const botSettings = require("./botsettings.json")
const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const request = require("request");
const client = new Discord.Client();
const prefix = botSettings.prefix
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

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
})


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
        console.log("Nie znaleziono komend do załadowania!");
        return;
    }

    console.log(`Ładowanie ${jsfiles.length} komend!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
});

bot.on("ready", async () => {
console.log(`Bot jest gotowy do pracy przy ${bot.guilds.size} serwerach oraz ${bot.users.size} użytkownikach!`);
    
    
bot.user.setStatus('Online')

bot.user.setActivity("rhinobot | 2.8", { type: "STREAMING", url: "https://www.twitch.tv/something" })
bot.channels.get("648090668933316608").setName(`» | Serwery: ${bot.guilds.size}/2`)
}, 500);
    
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

bot.on ("guildMemberAdd", member => {  

    var role = member.guild.roles.find ("name", "» | Oczekuję na rejestrację!");
    member.addRole (role);
})
});

bot.on ("guildMemberRemove", member => {  

// Wiadomość powitalna.

bot.on("guildMemberAdd", function(member){
    member.guild.channels.find("name", "🌠┃powitalnia").send("(**SYSTEM**) Powitajmy użytkownika o nazwie @"  +  member.user.username )
})

});

bot.login(process.env.token);

//restart
