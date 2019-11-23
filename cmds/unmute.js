module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Nie masz premii `Zarządzaj wiadomościami '")

        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.sendMessage("Podaj użytkownika lub identyfikator, aby wyciszyć!");

        let role = message.guild.roles.find(r => r.name === "» | Kara: Mute")
        
        if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Ten użytkownik nie jest wyciszony!");

        await toMute.removeRole(role);
        message.channel.sendMessage("Użytkownik został odciszony!");

        message.delete();

     }
    
        module.exports.help = {
            name: "unmute"
        }
