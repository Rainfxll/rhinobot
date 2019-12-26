module.exports.run = async (bot, message, args) => {
    
    if(message.author.id === "632975599119630356") return
    if(message.author.id === "485494651835383828") return
    
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);

}

module.exports.help = {
    name: "say"
}
