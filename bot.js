const botSettings = require("./botsettings.json")
const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const request = require("request");
const client = new Discord.Client();
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

client.on('messageReactionAdd', async (reaction, user) => {
    
    let applyRole = async () => {
        let emojiName = reaction.emoji.name;
        let role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === emojiName.toLowerCase());
        let member = reaction.message.guild.members.find(member => member.id === user.id);
        try {
            if(role && member) {
                console.log("Role and member found.");
                await member.roles.add(role);
                console.log("Done.");
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    if(reaction.message.partial)
    {
        try {
            let msg = await reaction.message.fetch(); 
            console.log(msg.id);
            if(msg.id === '647922766166753290')
            {
                console.log("Cached")
                applyRole();
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    else 
    {
        console.log("Not a partial.");
        if(reaction.message.id === '647922766166753290') {
            console.log(true);
            applyRole();
        }
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
