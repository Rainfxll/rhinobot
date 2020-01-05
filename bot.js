const botSettings = require("./botsettings.json")
const Discord = require("discord.js");
const fs = require("fs");
const request = require("request");
const client = new Discord.Client();
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

bot.on("ready", async () => {
console.log(`Jest gotowy do pracy przy ${bot.guilds.size} serwerach i ${bot.users.size} użytkownikach!`);
    
bot.user.setStatus('Online')

bot.user.setActivity('rhinobot | 2.8', { type: 'STREAMING' });

try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
    } catch(e) {
        console.log(e.stack);
        }
});

//CMDS
if (msg.content.startsWith(prefix + "help")) {
    var help = suffix[0];
    if (!help) {
    msg.channel.send([
        '```js' + 
        '\nCOMMANDS:' + 
        `\n${prefix}spam` +
        `\n${prefix}dspam` + 
        `\n${prefix}pmspam` + 
        `\n${prefix}dpmspam` + 
        `\n${prefix}cspam` +
        '```'
    ])
    } else {
     if (help === "spam") {
         msg.channel.send([
             '```js\nSpams something you said.' + 
             `\n${prefix}spam | NUMBER | TO SPAM\`\`\``
         ])
     } else
        //PMSPAM
     if (help === "pmspam") {
         msg.channel.send([
             '```js\nPM Spams someone.' + 
             `\n${prefix}pmspam | @USERNAME | NUMBER | TO SPAM\`\`\``
         ])
     } else
         //DSPAM
      if (help === "dspam") {
          msg.channel.send([
             '```js\nSpams something you said, but then deletes.' + 
             `\n${prefix}dspam | NUMBER | TO SPAM\`\`\``
          ]) 
      } else 
        //DPMSPAM
    if (help === "dpmspam") {
        msg.channel.send([
            '```js\nSpams someone, then deletes messages.' + 
            `\n${prefix}dpmspam | @USERNAME | NUMBER | TOSPAM\`\`\``
        ])
    } else
        //CHANNEL SPAM
    if (help === "cspam") {
        msg.channel.send([
            '```js\nSpams in a specific channel.' + 
            `\n${prefix}cspam | #CHANNEL | NUMBER | TOSPAM\`\`\``
        ])
    }
    }
} else
//SPAM
    if (msg.content.startsWith(prefix + "spam")) {
    try {
        var timesRun = 0;
        var numberspam = suffix[0];
        console.log(numberspam)
        var tospam = msg.content.split(' ').slice(2).join(' ');
        console.log(tospam)
        let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
       var interval = setInterval(function() {
           msg.channel.send(tospam)
           timesRun += 1
           if (timesRun === messagecount) {
               clearInterval(interval)
           }
       }, 1)
       msg.channel.send(interval.length);
        } catch (err) {
        console.log(err)
        }
        } else
//DELETESPAM
    if (msg.content.startsWith(prefix + "dspam")) {
    try {
        var timesRun = 0;
        var numberspam = suffix[0];
        console.log(numberspam)
        var tospam = msg.content.split(' ').slice(2).join(' ');
        console.log(tospam)
        let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
       var interval = setInterval(function() {
           msg.channel.send(tospam).then(m => {
               m.delete()
           });
           timesRun += 1
           if (timesRun === messagecount) {
               clearInterval(interval)
           }
       }, 1)
       msg.channel.send(interval.length);
        } catch (err) {
        console.log(err)
        }
        } else
//PM
    if (msg.content.startsWith(prefix + "pmspam")) {
        try {
        var usertospam = msg.mentions.users.first();
        var timesRun = 0;
        var numberspam = suffix[1];
        console.log(numberspam)
        var tospam = msg.content.split(' ').slice(3).join(' ');
        console.log(tospam)
        let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
       var interval = setInterval(function() {
           usertospam.send(tospam)
           timesRun += 1
           if (timesRun === messagecount) {
               clearInterval(interval)
           }
       }, 1)
       usertospam.send(interval.length);
        } catch (err) {
msg.channel.send("Error, user not found.")
        }
    } else
   //PMDELETE
      if (msg.content.startsWith(prefix + "dpmspam")) {
        try {
        var usertospam = msg.mentions.users.first();
        var timesRun = 0;
        var numberspam = suffix[1];
        console.log(numberspam)
        var tospam = msg.content.split(' ').slice(3).join(' ');
        console.log(tospam)
        let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
       var interval = setInterval(function() {
           usertospam.send(tospam).then(m => {
               m.delete()
           });
           timesRun += 1
           if (timesRun === messagecount) {
               clearInterval(interval)
           }
       }, 1)
       usertospam.send(interval.length);
        } catch (err) {
msg.channel.send("Error, user not found.")
        }
    } else
    //CHANNEL SPAM
    if (msg.content.startsWith(prefix + "cspam")) {
        try {
        var channel = msg.mentions.channels.first();
        var timesRun = 0;
        var numberspam = suffix[1];
        console.log(numberspam)
        var tospam = msg.content.split(' ').slice(2).join(' ');
        console.log(tospam)
        let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
       var interval = setInterval(function() {
          bot.channels.get(channel.id).send(tospam);
           timesRun += 1
           if (timesRun === messagecount) {
               clearInterval(interval)
           }
       }, 1)
      bot.channels.get(channel.id).send(interval.length);
        } catch(err) {
            console.log(err)
        }
    }
});

bot.on('message', function() {
    if (message.content === "$loop") { 
      var interval = setInterval (function () {
        message.channel.send("123")
      }, 1 * 1000); 
    }
});

// Check every 30 seconds for changes
setInterval(function() {
  console.log('Getting stats update..')
  
  bot.channels.get("663170416788897793").setName(`» | Serwery: ${bot.guilds.size}/2`)
  bot.channels.get("663170593180352512").setName(`» | Użytkownicy: ${bot.users.size}`)
  }, 30000)

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

bot.on ("guildMemberAdd", member => {  

var role = member.guild.roles.find ("name", "» | Zarejestrowany/a");
    member.addRole (role);
});

bot.on ("guildMemberRemove", member => {

}) ; 

// Wiadomość powitalna.

bot.on("guildMemberAdd", function(member){
    member.guild.channels.find("name", "🌠┃witamy").send("(**SYSTEM**) Powitajmy użytkownika o nazwie :) @"  +  member.user.username )
});

bot.on("guildMemberRemove", function(member){
    member.guild.channels.find("name", "🌠┃zegnamy").send("(**SYSTEM**) Zegnamy użytkownika o nazwie :( @"  +  member.user.username )
});

bot.login(process.env.token);
