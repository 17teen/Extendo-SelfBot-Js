// https://github.com/17teen
// Discord: 7teen#1464

const { Client, RichEmbed, MessageAttachment, Attachment} = require('discord.js');
const Discord = require('discord.js');
const { red, green, blue, yellow, cyan } = require('chalk');
const bot = new Client();
const settings = require('./settings.json');

const title = String.raw`
                     ________  __    __  ________  ________  __    __  _______    ______        
                    /        |/  |  /  |/        |/        |/  \  /  |/       \  /      \       
                    $$$$$$$$/ $$ |  $$ |$$$$$$$$/ $$$$$$$$/ $$  \ $$ |$$$$$$$  |/$$$$$$  |      
                    $$ |__    $$  \/$$/    $$ |   $$ |__    $$$  \$$ |$$ |  $$ |$$ |  $$ |      
                    $$    |    $$  $$<     $$ |   $$    |   $$$$  $$ |$$ |  $$ |$$ |  $$ |      
                    $$$$$/      $$$$  \    $$ |   $$$$$/    $$ $$ $$ |$$ |  $$ |$$ |  $$ |      
                    $$ |_____  $$ /$$  |   $$ |   $$ |_____ $$ |$$$$ |$$ |__$$ |$$ \__$$ |      
                    $$       |$$ |  $$ |   $$ |   $$       |$$ | $$$ |$$    $$/ $$    $$/       
                    $$$$$$$$/ $$/   $$/    $$/    $$$$$$$$/ $$/   $$/ $$$$$$$/   $$$$$$/        
                                                                                                           
`;

console.log(red(title))

console.log(``);
console.log(green(`                                          Made by 7teen#1646`));
console.log(``);
console.log(``);
console.log(yellow('               + ============================================================================ +'));
console.log(cyan(`               |                 [i] :: ${settings.prefix}ping :: Displays your ping                           |`));
console.log(cyan(`               |                 [i] :: ${settings.prefix}purge [100]:: Deletes 100 messages you sent.         |`));
console.log(cyan(`               |                 [i] :: ${settings.prefix}embed [content] :: Send a message in a embed.        |`));
console.log(cyan(`               |                 [i] :: ${settings.prefix}restart :: Restarts the bot                          |`));
console.log(cyan(`               |                 [i] :: ${settings.prefix}spam [ID] [content] :: Spam a users DM               |`));
console.log(cyan(`               |                 [i] :: ${settings.prefix}streaming [content] :: Status                        |`));
console.log(cyan(`               |                 [i] :: ${settings.prefix}watching  [content] :: Status                        |`));
console.log(cyan(`               |                 [i] :: ${settings.prefix}listening [content] :: Status                        |`));
console.log(cyan(`               |                 [i] :: ${settings.prefix}playing   [content] :: Status                        |`));
console.log(cyan(`               |                 [i] :: ${settings.prefix}dm        [content] :: Mass DM in a Guild            |`));
console.log(cyan(`               |                 [i] :: ${settings.prefix}fdm       [content] :: Mass DM friendlist            |`));

bot.on('ready', ()=>{
    console.log(yellow('               + ============================================================================ +'));
    console.log(green(`               |                 [SELF BOT] :: ${bot.user.tag} is online and ready                 |`));
    console.log(green(`               |                 [SELF BOT] :: Prefix: ${settings.prefix}                                      |`));
    console.log(yellow('               + ============================================================================ +'));
});

bot.on('message', async(msg)=>{
    if(msg.author.id !== settings.ID) {
        return;
    }
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(settings.prefix.length);
    let args = msg.content.split(" ").slice(1);
    if(msg.content.startsWith(settings.prefix) && msg.author.id === settings.ID){
        console.log(cyan(`[COMMAND RAN] :: ${msg.content}`));
    }

    if(cmd === 'ping'){
        msg.edit(`:ping_pong: pong! your ping is: *${bot.ping.toFixed()}ms*`);
    }
    if(cmd === 'purge'){
        msg.channel.fetchMessages({ limit: 100 }).then(msgs=>msgs.filter(m => m.author.id === bot.user.id).map(r => r.delete()))
    }
    if(cmd === 'embed'){
        let eContent = args.slice(0).join(" ");
        msg.edit("", { embed: new RichEmbed().setColor(`${settings.color}`).setDescription(eContent).setFooter('Made By: 7teen#1464')});
    }
    if(cmd === 'restart'){
        process.exit();
    }
    if(cmd === 'spam'){
        let user = (args[0]);
        let mContent = args.slice(1).join(" ");
        bot.setInterval(()=>{
            bot.users.get(user).send(mContent);
        }, 1500);
        console.log(red(`[CMD INFOMATION] :: YOU MUST RESTART THE BOT IN ORDER TO STOP THE SPAM`));
    }
    // Streaming 
    if(cmd === 'streaming'){
        let content = args.slice(0).join(" ");
        bot.user.setActivity(`${content}`, {type: "STREAMING", url: "https://www.twitch.tv/ayoohennio"});
        msg.delete();
    }
    // Watching
    if(cmd === 'watching'){
        let content = args.slice(0).join(" ");
        bot.user.setActivity(`${content}`, {type: "WATCHING"});
        msg.delete();
    }
    // Listening
    if(cmd === 'listening'){
        let content = args.slice(0).join(" ");
        bot.user.setActivity(`${content}`, {type: "LISTENING"});
        msg.delete();
    }
    // Playing
    if(cmd === 'playing'){
        let content = args.slice(0).join(" ");
        bot.user.setActivity(`${content}`, {type:"PLAYING"});
        msg.delete();
    }
    // Mass DM Server (CAN GET YOUR ACCOUNT DISABLED)
    if(cmd === 'dm'){
            let argresult = args.slice(0).join(" ");
            msg.guild.members.forEach(member => { // Looping through each member of the guild.  // mass dm
                // Trying to send a message to the member.
                // This method might fail because of the member's privacy settings, so we're using .catch
                member.send(argresult).catch(e => console.error(red(`Couldn't DM member ${member.user.tag}`))).then(console.log(green(`DM'd ${member.user.tag}`)));
              });
              msg.delete();
        }
    // Mass DM Friends List (CAN GET YOUR ACCOUNT DISABLED)
    if(cmd === 'fdm'){
        let argresult = args.slice(0).join(" ");
        bot.user.friends.forEach(friends => { // Looping through each member of the guild.  // mass dm
            // Trying to send a message to the member.
            // This method might fail because of the member's privacy settings, so we're using .catch
            friends.send(argresult).catch(e => console.error(red(`Couldn't DM member ${friends.username}`))).then(console.log(green(`DM'd ${friends.username}`)));
          });
          msg.delete();

    }

});

bot.login(settings.token);