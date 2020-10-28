// https://github.com/17teen
// Discord: 7teen#1464

const { Client, RichEmbed, MessageAttachment, Attachment } = require('discord.js');
const Discord = require('discord.js');
const randompuppy = require("random-puppy");
const { red, green, blue, yellow, cyan } = require('chalk');
const bot = new Client();
const settings = require('./settings.json');
const figlet = require("figlet");

// prefix
const prefix = settings.prefix;
// user ID
const myID = settings.ID;
// token
const token = settings.token;
// founder
const founder = "7teen#1464"; // if you change this you're a skid ;)

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

// backslash
const backslash = String.raw` \ `;

console.log(red(title))

console.log(``);
console.log(green(`                                          Made by 7teen#1646`));
console.log(``);
console.log(``);
console.log(yellow('               + ================================================================================== +'));
console.log(cyan(`               |                 [i] :: ${prefix}help                :: Displays commands.                  |`));
console.log(cyan(`               |                 [i] :: ${prefix}ping                :: Displays your ping.                 |`));
console.log(yellow('               + ================================FUN CMDS========================================== +'));
console.log(cyan(`               |                 [i] :: ${prefix}embed     [content] :: Send a message in a embed.          |`));
console.log(cyan(`               |                 [i] :: ${prefix}ascii     [content] :: Send a message in a embed.          |`));
console.log(cyan(`               |                 [i] :: ${prefix}meme                :: Sends memes.                        |`));
console.log(cyan(`               |                 [i] :: ${prefix}love      [mention] :: Percentage of love upon a user.     |`));
console.log(cyan(`               |                 [i] :: ${prefix}8ball     [content] :: Answers a question.                 |`));
console.log(cyan(`               |                 [i] :: ${prefix}rate      [mention] :: Rates a user.                       |`));
console.log(cyan(`               |                 [i] :: ${prefix}pp        [mention] :: Rates a user's pp.                  |`));
console.log(cyan(`               |                 [i] :: ${prefix}hug       [mention] :: Hugs user in a embed.               |`));
console.log(cyan(`               |                 [i] :: ${prefix}kiss      [mention] :: Kisses user in a embed.             |`));
console.log(cyan(`               |                 [i] :: ${prefix}fold      [mention] :: Folds user in a embed.              |`));
console.log(cyan(`               |                 [i] :: ${prefix}poll      [content] :: Poll is created in an embed.        |`));
console.log(yellow('               + ================================GENERAL CMDS====================================== +'));
console.log(cyan(`               |                 [i] :: ${prefix}stealav   [mention] :: Steal user avatar.                  |`));
console.log(cyan(`               |                 [i] :: ${prefix}av        [mention] :: User avatar is displayed.           |`));
console.log(cyan(`               |                 [i] :: ${prefix}whois     [mention] :: User info is displayed.             |`));
console.log(cyan(`               |                 [i] :: ${prefix}purge               :: Deletes 100 messages you sent.      |`));
console.log(cyan(`               |                 [i] :: ${prefix}restart             :: Restarts the bot.                   |`));
console.log(yellow('               + ================================SERVER CMDS======================================= +'));
console.log(cyan(`               |                 [i] :: ${prefix}sinfo               :: Server info is displayed.           |`));
console.log(cyan(`               |                 [i] :: ${prefix}mc                  :: Server membercount is displayed.    |`));
console.log(cyan(`               |                 [i] :: ${prefix}sicon               :: Server icon is displayed.           |`));
console.log(cyan(`               |                 [i] :: ${prefix}sinvback            :: Server icon is displayed.           |`));
console.log(yellow('               + ================================STATUS CMDS======================================= +'));
console.log(cyan(`               |                 [i] :: ${prefix}streaming [content] :: Status                              |`));
console.log(cyan(`               |                 [i] :: ${prefix}watching  [content] :: Status                              |`));
console.log(cyan(`               |                 [i] :: ${prefix}listening [content] :: Status                              |`));
console.log(cyan(`               |                 [i] :: ${prefix}playing   [content] :: Status                              |`));
console.log(yellow('               + ================================MASS DM CMDS====================================== +'));
console.log(cyan(`               |                 [i] :: ${prefix}dm        [content] :: Mass DM in a Guild.                 |`));
console.log(cyan(`               |                 [i] :: ${prefix}fdm       [content] :: Mass DM friendlist .                |`));
console.log(yellow('               + ================================OTHER CMDS======================================== +'));
console.log(cyan(`               ${backslash}               [i] :: ${prefix}spam [ID] [content] :: Spam a users DM.                   /`));

bot.on('ready', () => {
    console.log(yellow('                 + ============================================================================== +'));
    console.log(green(`                 |                 [SELF BOT] :: ${bot.user.tag} is online and ready                   |`));
    console.log(green(`                 |                 [SELF BOT] :: Prefix: ${prefix}                                        |`));
    console.log(yellow('                 + ============================================================================== +'));
    bot.user.setActivity(`EXTENDO V2`, { type: "PLAYING" }); // This is a confirmation that your self bot is on. Remove this line if your activity is set to this command.
});

bot.on('message', message => {
    if (message.author.id !== myID) {
        return;
    }


    if (message.content.startsWith(prefix) && message.author.id === myID) {
        console.log(cyan(`[COMMAND RAN] :: ${message.content}`));
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    if (message.content.startsWith(prefix + 'help')) {
        const helpembed = new RichEmbed()
            .setTitle(`𝙀𝙓𝙏𝙀𝙉𝘿𝙊 𝙎𝙀𝙇𝙁𝘽𝙊𝙏`)
            .setDescription(`\`FUN\` - \`embed [content]\`, \`love [mention]\`, \`rate [mention]\`, \`pp [mention]\`, \`8ball\`, \`rmeme\`, \`hug\`, \`kiss\`, \`fold\`, \`poll\`, \`ascii [content]\` \n \n \`GENERAL\` - \`stealav [mention]\`, \`av [mention]\`, \`whois [mention]\`, \`purge\`, \`restart\` \n \n \`SERVER\` - \`sinfo\`, \`mc\`, \`sicon\`, \`sinvback\`  \n \n \`STATUS\` - \`streaming\`, \`watching\`, \`listening\`, \`playing\` \n \n \`MASS\` -\`dm\` - **Mass DMs Server**  \`fdm\` - **Mass DMs Friends List** \n \n \`OTHERS\` - \`spam\` **[ID] [CONTENT]** \n \n \`ABOUT\``)
            .setImage("https://media4.giphy.com/media/PVpJ8v1meXfQHwXFWA/giphy.gif")
            .setColor("RANDOM")
            .setFooter(`© Extendo Selfbot | prefix: ${prefix}`);
        message.channel.send(helpembed);
        message.delete();
    }

    // FUN EMBED
    if (message.content.startsWith(prefix + 'fun')) {
        const helpembed = new RichEmbed()
            .setTitle(`𝙀𝙓𝙏𝙀𝙉𝘿𝙊 𝙎𝙀𝙇𝙁𝘽𝙊𝙏: 𝙁𝙐𝙉`)
            .setDescription(`\`embed [content]\`, \`love [mention]\`, \`rate [mention]\`, \`pp [mention]\`, \`8ball\`, \`rmeme\`, \`hug\`, \`kiss\`, \`fold\`, \`poll\`, \`ascii [content]\` `)
            .setColor("RANDOM")
            .setImage("https://media4.giphy.com/media/PVpJ8v1meXfQHwXFWA/giphy.gif")
            .setFooter(`© Extendo Selfbot | prefix: ${prefix}`);
        message.channel.send(helpembed);
        message.delete();
    }

    // GENERAL EMBED
    if (message.content.startsWith(prefix + 'general')) {
        const helpembed = new RichEmbed()
            .setTitle(`𝙀𝙓𝙏𝙀𝙉𝘿𝙊 𝙎𝙀𝙇𝙁𝘽𝙊𝙏: 𝙂𝙀𝙉𝙀𝙍𝘼𝙇`)
            .setDescription(`\`stealav [mention]\` \n \`av [mention]\` \n \`whois [mention]\` \n \`purge\` \n \`restart\``)
            .setColor("RANDOM")
            .setImage("https://media4.giphy.com/media/PVpJ8v1meXfQHwXFWA/giphy.gif")
            .setFooter(`© Extendo Selfbot | prefix: ${prefix}`);
        message.channel.send(helpembed);
                message.delete();
    }

    // SERVER EMBED
    if (message.content.startsWith(prefix + 'server')) {
        const helpembed = new RichEmbed()
            .setTitle(`𝙀𝙓𝙏𝙀𝙉𝘿𝙊 𝙎𝙀𝙇𝙁𝘽𝙊𝙏: 𝙎𝙀𝙍𝙑𝙀𝙍`)
            .setDescription(`\`sinfo\` - **Server Info** \n \`mc\`  - **Server Membercount** \n \`sicon\`  - **Server Icon** \n \`sinvback\` - **invite Background of Server** `)
            .setColor("RANDOM")
            .setImage("https://media4.giphy.com/media/PVpJ8v1meXfQHwXFWA/giphy.gif")
            .setFooter(`© Extendo Selfbot | prefix: ${prefix}`);
        message.channel.send(helpembed);
        message.delete();
    }

    // STATUS EMBED
    if (message.content.startsWith(prefix + 'status')) {
        const helpembed = new RichEmbed()
            .setTitle(`𝙀𝙓𝙏𝙀𝙉𝘿𝙊 𝙎𝙀𝙇𝙁𝘽𝙊𝙏: 𝙎𝙏𝘼𝙏𝙐𝙎`)
            .setDescription(`\`streaming\` \n \`watching\` \n \`listening\` \n \`playing\``)
            .setColor("RANDOM")
            .setImage("https://media4.giphy.com/media/PVpJ8v1meXfQHwXFWA/giphy.gif")
            .setFooter(`© Extendo Selfbot | prefix: ${prefix}`);
        message.channel.send(helpembed);
        message.delete();
    }

    // MASS EMBED
    if (message.content.startsWith(prefix + 'mass')) {
        const helpembed = new RichEmbed()
            .setTitle(`𝙀𝙓𝙏𝙀𝙉𝘿𝙊 𝙎𝙀𝙇𝙁𝘽𝙊𝙏: 𝙈𝘼𝙎𝙎`)
            .setDescription(`\`dm\` - **Mass DMs Server** \n \`fdm\` - **Mass DMs Friends List**`)
            .setColor("RANDOM")
            .setImage("https://media4.giphy.com/media/PVpJ8v1meXfQHwXFWA/giphy.gif")
            .setFooter(`© Extendo Selfbot | prefix: ${prefix}`);
        message.channel.send(helpembed);
        message.delete();
    }

    // OTHERS EMBED
    if (message.content.startsWith(prefix + 'others')) {
        const helpembed = new RichEmbed()
            .setTitle(`𝙀𝙓𝙏𝙀𝙉𝘿𝙊 𝙎𝙀𝙇𝙁𝘽𝙊𝙏: 𝙊𝙏𝙃𝙀𝙍𝙎`)
            .setDescription(`\`spam\` **[ID] [CONTENT]**`)
            .setColor("RANDOM")
            .setImage("https://media4.giphy.com/media/PVpJ8v1meXfQHwXFWA/giphy.gif")
            .setFooter(`© Extendo Selfbot | prefix: ${prefix} | More coming soon...`);
        message.channel.send(helpembed);
                message.delete();
    }

    // ABOUT EMBED
    if (message.content.startsWith(prefix + 'about')) {
        const helpembed = new RichEmbed()
            .setTitle(`𝙀𝙓𝙏𝙀𝙉𝘿𝙊 𝙎𝙀𝙇𝙁𝘽𝙊𝙏: 𝘼𝘽𝙊𝙐𝙏`)
            .setDescription(`**Founder:** \n \`7teen#1646\` \n \n **Self-Bot Description:** \n \`Creation Date:\` 25/10/2020 \n \`Language:\` JavaScript \n \`Operating System:\` Windows , macOS`)
            .setColor("RANDOM")
            .setImage("https://media4.giphy.com/media/PVpJ8v1meXfQHwXFWA/giphy.gif")
            .setFooter(`© Extendo Selfbot | prefix: ${prefix} `);
        message.channel.send(helpembed);
        message.delete();
    }
    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.send("***Ping?***").then((m) => {
            m.edit(`***Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms.***`);
        });
        message.delete();
    }

    /////////////////////////////////////////////////////////////FUN CMDS//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Put message in embed
    if (message.content.startsWith(prefix + 'embed')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        message.edit("", { embed: new RichEmbed().setColor(`RANDOM`).setDescription(argresult).setFooter('Made By: ' + founder) });
    }

    // Ascii text
    if(message.content.startsWith(prefix + 'ascii')){
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');

        if(!argresult){
            return
        }

        figlet.text(argresult, function(err, data){
            if(err){
                console.log(red("ERROR: ASCII WASN'T DISPLAYED !"))
            }
            if(data.length > 2000) {
                return console.log(yellow("WARNING: CHARACTER LIMIT REACHED! USE A MAXIMUM OF 2000 CHARACTERS"))
            }
            message.channel.send('```' + data + '```')
        })
        message.delete();
    }

    // Meme CMd

    if(message.content.startsWith(prefix + 'meme')){
        const subredddits = ["dankmeme", "meme", "me_irl", "ksi", "muchdank", "FlyingKitty", "memes"];
        // Grab a random property from the array
        const random = subredddits[Math.floor(Math.random() * subredddits.length)];

        // Get a random image from the subreddit page
        const image = randompuppy(random).then((image) => {
            const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(image)
            .setTitle(`From /r/${random}`)
            .setFooter(`© Extendo Selfbot | prefix: ${prefix} | Made By ${founder}`)
            .setURL(`https://reddit.com/r/${random}`);
        message.channel.send(embed);
        });
        message.delete();
    }



    // Love/Affinity CMD
    if (message.content.startsWith(prefix + 'love')) {
        let user = message.mentions.users.first();

        // love is the percentage
        // loveIndex is a number from 0 to 10, based on that love variable
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💝".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        if (!user) {
            const embed = new RichEmbed()
                .setTitle("𝘼𝙁𝙁𝙄𝙉𝙄𝙏𝙔")
                .setColor("#ffb6c1")
                .addField(`☁ **${message.author.username}** loves **${message.author.username}** this much:`,
                    `💟 ${Math.floor(love)}%\n\n${loveLevel}`)
                .setThumbnail(message.author.avatarURL);

            message.channel.send(embed);

        } else {

            const embed = new RichEmbed()
                .setTitle("𝘼𝙁𝙁𝙄𝙉𝙄𝙏𝙔")
                .setColor("#ffb6c1")
                .addField(`☁ **${message.author.username}** loves **${user.username}** this much:`,
                    `💟 ${Math.floor(love)}%\n\n${loveLevel}`)
                .setThumbnail(user.avatarURL);

            message.channel.send(embed);
        }
        message.delete();
    }

    // 8ball
    if (message.content.startsWith(prefix + '8ball')) {
        let args = message.content.split(" ").slice(1);
        message.delete();
        if (!args[2]) {
            return message.channel.send('Did you even ask a question??? :joy:')
        }
        let number1 = Math.floor(Math.random() * 6);
        if (number1 == 0) {
            return message.channel.send('Yeah')
        }
        if (number1 == 1) {
            return message.channel.send('Nah')
        }
        if (number1 == 2) {
            return message.channel.send('Mmmm, maybe')
        }
        if (number1 == 3) {
            return message.channel.send('Lol yeah :joy:')
        }
        if (number1 == 4) {
            return message.channel.send('No.')
        }
        if (number1 == 5) {
            return message.channel.send('Why is that even a question :joy:...OFC!')
        }
    }

    // Rate User CMD

    if (message.content.startsWith(prefix + 'rate')) {
        let user = message.mentions.users.first();
        let number2 = Math.floor(Math.random() * 101);
        message.delete();
        if (!user) {
            let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
            const rate1 = new RichEmbed()
                .setDescription(`***I would rate myself a ${number2}/100***`)
                .setColor(`${color}`)
            message.channel.send(rate1)
        }
        if (user) {
            const rate2 = new RichEmbed()
                .setDescription(`***I would rate ${user.username} a ${number2}/100***`)
                .setColor("RANDOM")
            return message.channel.send(rate2)
        }

    }

        // Rate PP CMD
        if(message.content.startsWith(prefix + 'pp')){
            message.delete();
            let users  = message.mentions.users.first();
    
            let number4 = Math.floor(Math.random() * 13);
    
            if(!users){
                let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
                        const ppemmbed = new RichEmbed()
                        .setDescription(`***Your pp is `+ number4 +` inches ***`)
                        .setColor(`${color}`)
                        message.channel.send(ppemmbed)
            } else {
    
                    let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
                    const ppemmbed2 = new RichEmbed()
                    .setDescription(`***${users}'s pp is ${number4} inches***`)
                    .setAuthor(`${users.username}#${users.discriminator} `, users.displayAvatarURL)
                    .setColor(`${color}`)
                    return message.channel.send(ppemmbed2)
            }
        }
    


    // Hug CMD
    if (message.content.startsWith(prefix + 'hug')) {
        let user = message.mentions.users.first();
        if (!user) {
            let maxImageNumber1 = 7; // when more pictures added update this number
            let lol = Math.floor(Math.random() * (maxImageNumber1 - 1 + 1)) + 1;
            let imageName1 = `${lol}.gif`
            let imagePath1 = `Fun Images/hug/${imageName1}`

            let file1 = new Attachment(imagePath1);
            let embed1 = new RichEmbed()
            embed1.setImage(`attachment://${imageName1}`)
            embed1.setDescription(`**${message.author.username}** hugged their clone`)
            embed1.setColor('RANDOM')
            message.channel.send({ files: [file1], embed: embed1 });
        }

        if (user) {
            let maxImageNumber1 = 7; // when more pictures added update this number
            let lol = Math.floor(Math.random() * (maxImageNumber1 - 1 + 1)) + 1;
            let imageName1 = `${lol}.gif`
            let imagePath1 = `Fun Images/hug/${imageName1}`

            let file1 = new Attachment(imagePath1);
            let embed1 = new RichEmbed()
            embed1.setImage(`attachment://${imageName1}`)
            embed1.setDescription(`**${message.author.username}** hugged **${user.username}**`)
            embed1.setColor('RANDOM')
            message.channel.send({ files: [file1], embed: embed1 });
        }
        message.delete();
    }

    // Kiss CMD

    if (message.content.startsWith(prefix + 'kiss')) {
        let user = message.mentions.users.first();
        if (!user) {
            let maxImageNumber1 = 4;
            let lol1 = Math.floor(Math.random() * (maxImageNumber1 - 1 + 1)) + 1;
            let imageName1 = `${lol1}.gif`
            let imagePath1 = `Fun Images/kiss/${imageName1}`

            let file2 = new Attachment(imagePath1);
            let embed2 = new RichEmbed()
            embed2.setImage(`attachment://${imageName1}`)
            embed2.setDescription(`**${message.author.username}** kissed their reflection`)
            embed2.setColor('RANDOM')
            message.channel.send({ files: [file2], embed: embed2 });
        }

        if (user) {

            let maxImageNumber1 = 4; // increase the number when you put more images in the folder
            let lol1 = Math.floor(Math.random() * (maxImageNumber1 - 1 + 1)) + 1;
            let imageName1 = `${lol1}.gif`
            let imagePath1 = `Fun Images/kiss/${imageName1}`

            let file2 = new Attachment(imagePath1);
            let embed2 = new RichEmbed();
            embed2.setImage(`attachment://${imageName1}`)
            embed2.setDescription(`**${message.author.username}** kissed **${user.username}**`)
            embed2.setColor('RANDOM')
            message.channel.send({ files: [file2], embed: embed2 });
        }
        message.delete();
    }

    // KO/fold CMD
    if (message.content.startsWith(prefix + 'fold')) {
        let user = message.mentions.users.first();
        if (!user) {

            let maxImageNumber1 = 11; // increase the number when you put more images in the folder
            let lol3 = Math.floor(Math.random() * (maxImageNumber1 - 1 + 1)) + 1;
            let imageName1 = `${lol3}.gif`
            let imagePath1 = `Fun Images/ko/${imageName1}`

            let file3 = new Attachment(imagePath1);
            let embed3 = new RichEmbed();
            embed3.setImage(`attachment://${imageName1}`)
            embed3.setDescription(`**${message.author.username}** folded themself`)
            embed3.setColor('RANDOM')
            message.channel.send({ files: [file3], embed: embed3 });

        }

        if (user) {

            let maxImageNumber1 = 11; // increase the number when you put more images in the folder
            let lol3 = Math.floor(Math.random() * (maxImageNumber1 - 1 + 1)) + 1;
            let imageName1 = `${lol3}.gif`
            let imagePath1 = `Fun Images/ko/${imageName1}`

            let file3 = new Attachment(imagePath1);
            let embed3 = new RichEmbed();
            embed3.setImage(`attachment://${imageName1}`)
            embed3.setDescription(`**${message.author.username}** folded **${user.username}**`)
            embed3.setColor('RANDOM')
            message.channel.send({ files: [file3], embed: embed3 });
        }
        message.delete();
    }

        // Kill cmd

        if(message.content.startsWith(prefix + 'kill')){
            let args = message.content.split(" ").slice(1);
    
            message.delete();
            let user = message.mentions.users.first();
            if(!user){
                return message.channel.send(`aye bro you good? offing yourself isn't the way :pensive:`)
            }
            let number3 = Math.floor(Math.random() * 9);
            if (number3 == 0){
                let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
                const kill1 = new RichEmbed()
                .setAuthor(`${user.username}#${user.discriminator} `, user.displayAvatarURL)
                .setDescription(`***${message.author.username} just murked ${user.username} :joy:***`)
                .setColor(color)
                 message.channel.send(kill1)
            }
            if (number3 == 1){
                let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
                const kill1 = new RichEmbed()
                .setAuthor(`${user.username}#${user.discriminator} `, user.displayAvatarURL)
                .setDescription(`***${message.author.username} Faded ${user.username} :sleeping:***`)
                .setColor(`${color}`)
                return message.channel.send(kill1)
            }
            if (number3 == 2){
                let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
                const kill2 = new RichEmbed()
                .setAuthor(`${user.username}#${user.discriminator} `, user.displayAvatarURL)
                .setDescription(`***${message.author.username} Rocked ${user.username} jaw :skull:***`)
                .setColor(`${color}`)
                return message.channel.send(kill2)
            }
            if (number3 == 3){
                let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
                const kill3 = new RichEmbed()
                .setAuthor(`${user.username}#${user.discriminator} `, user.displayAvatarURL)
                .setDescription(`***${message.author.username} made ${user.username} sleep :joy::man_shrugging:***`)
                .setColor(`${color}`)
                return message.channel.send(kill3)
            }
            if (number3 == 4){
                let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
                const kill4 = new RichEmbed()
                .setAuthor(`${user.username}#${user.discriminator} `, user.displayAvatarURL)
                .setDescription(`***${message.author.username} Bust a cap on ${user.username} :skull::gun:***`)
                .setColor(`${color}`)
                return message.channel.send(kill4)
            }
            if (number3 == 5){
                let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
                const kill5 = new RichEmbed()
                .setAuthor(`${user.username}#${user.discriminator} `, user.displayAvatarURL)
                .setDescription(`***${message.author.username}***  **DOMINATED** ***${user.username} :grimacing:***`)
                .setColor(`${color}`)
                return message.channel.send(kill5)
            }
            if (number3 == 6){
                let color = ((1 << 24)
                 * Math.random() | 0).toString(16); //Generates random hex value.
                const kill6 = new RichEmbed()
                .setAuthor(`${user.username}#${user.discriminator} `, user.displayAvatarURL)
                .setDescription(`***${message.author.username} tried to be slick but ${user.username} stay strapped wit a glokky***`)
                .setColor(`${color}`)
                .setFooter("A boomerang returns back to the person that throws it...")
                return message.channel.send(kill6)
            }
            if (number3 == 7){
                let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
                const kill7 = new RichEmbed()
                .setAuthor(`${user.username}#${user.discriminator} `, user.displayAvatarURL)
                .setDescription(`***${message.author.username} attempted a lick on ${user.username} but failed :clown:***`)
                .setColor(`${color}`)
                .setFooter("Learn to see. Realize that everything connects to everything else.")
                return message.channel.send(kill7)
            }
            if (number3 == 8){
                let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
                const kill8 = new RichEmbed()
                .setAuthor(`${user.username}#${user.discriminator} `, user.displayAvatarURL)
                .setDescription(`***${message.author.username} just attempted a robbery on ${user.username} but ${user.username} kept a switch blade and sliced ${message.author.username}***`)
                .setColor(`${color}`)
                .setFooter("Men are not punished for their sins, but by them.")
                return message.channel.send(kill8)
            }
        }

    // Poll
    if (message.content.startsWith(prefix + 'poll')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');

        if (!argresult) {
            message.delete().then(message.channel.send(`*Missing args | \`${prefix}poll [name of poll]\`*`))
        } else {
            const pollembed = new RichEmbed()
                .setTitle(`**Poll:**`)
                .setDescription(argresult)
                .setFooter(`React !`)
                .setColor('RANDOM')
            message.channel.send(pollembed).then(embedMessage => {
                embedMessage.react("👍");
                embedMessage.react("👎");
            });
            message.delete();
        }
    }

    /////////////////////////////////////////////////////////////GENERAL CMDS//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Steal Users Profile
    if (message.content.startsWith(prefix + 'stealav')) {
        let user = message.mentions.users.first();
        let getpfp = user.avatarURL

        if (user) {
            bot.user.setAvatar(getpfp);
        } else {
            return
        }
        message.delete();
    }

    // User Avatar
    if (message.content.startsWith(prefix + 'av')) {
        const whois = message.mentions.users.first();

        if (!whois) {
            let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
            const embed13 = new RichEmbed()
                .setColor(`#${color}`)
                .setTitle('**𝘼𝙫𝙞**')
                .setAuthor(`${message.author.username}#${message.author.discriminator} `, message.author.displayAvatarURL)
                .setImage(message.author.displayAvatarURL)
                .setFooter(`Requested By ${message.author.username}#${message.author.discriminator}`)
            message.channel.send(embed13);
        }
        if (whois) {

            // const member = msg.guild.member(whois);

            let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.

            const embed13 = new RichEmbed()
                .setColor(`#${color}`)
                .setTitle('**𝘼𝙫𝙞**')
                .setAuthor(`${whois.username}#${whois.discriminator} `, whois.displayAvatarURL)
                .setImage(whois.displayAvatarURL)
                .setFooter(`Requested By ${message.author.username}#${message.author.discriminator}`)
            message.channel.send(embed13);
        }
        message.delete();
    }

    // User Info
    if (message.content.startsWith(prefix + 'whois')) {

        const whois = message.mentions.users.first();
        const person = message.guild.member(message.author)
        const member = message.guild.member(message.mentions.users.first());
        const member2 = message.member || message.guild.members.find("user", whois)

        if (!whois) {
            let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
            const embed13 = new RichEmbed()
                .setColor(`#${color}`)
                .setThumbnail(message.author.avatarURL)
                .addField("Joined The Server On:", `${person.joinedAt}`, true)
                .addField("Account Created:", `${message.author.createdAt}`, true)
                .addField("ID:", `${message.author.id}`, true)
                .addField("Status:", `${message.author.presence.status}`, true)
                .addField("In Server", message.guild.name, true)
                .addField("Nickname:", `${person.nickname !== null ? `${person.nickname}` : 'None'}`, true)
                .addField("Roles:", person.roles.filter(r => r.id !== message.guild.id).map(r => r).join(", ") || 'none')
                .setAuthor(`${message.author.username}#${message.author.discriminator} `, message.author.displayAvatarURL)
                .setThumbnail(message.author.displayAvatarURL)
                .setFooter(`Requested By ${message.author.username}#${message.author.discriminator}`)
            message.channel.send(embed13);
        } else {


            let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.




            const embed13 = new RichEmbed()
                .setColor(`#${color}`)
                .setThumbnail(message.author.avatarURL)
                .addField("Joined The Server On:", `${whois.joinedAt}`, true)
                .addField("Account Created:", `${whois.createdAt}`, true)
                .addField("ID:", `${whois.id}`, true)
                .addField("Status:", `${whois.presence.status}`, true)
                .addField("In Server", message.guild.name, true)
                .addField("Nickname:", `${whois.nickname !== null ? `${whois.nickname}` : 'None'}`, true)
                .addField("Roles:", member2.roles.filter(r => r.id !== message.guild.id).map(r => r).join(", ") || 'none')
                .setAuthor(`${whois.username}#${whois.discriminator} `, whois.displayAvatarURL)
                .setThumbnail(whois.displayAvatarURL)
                .setFooter(`Requested By ${message.author.username}#${message.author.discriminator}`)
            message.channel.send(embed13);
        }
        message.delete();
    }
    // Purge CMD

    if (message.content.startsWith(prefix + 'purge')) {
        message.channel.fetchMessages({ limit: 100 }).then(msgs => msgs.filter(m => m.author.id === bot.user.id).map(r => r.delete()))
    }

    // Restart 
    if (message.content.startsWith(prefix + 'restart')) {
        process.exit();
    }

    /////////////////////////////////////////////////////////////SERVER CMDS//////////////////////////////////////////////////////////////////////////////////////////////////////////////  

    // Server Info
    if (message.content.startsWith(prefix + 'sinfo')) {
        let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
        const serverinfo = new RichEmbed()
            .addField("**Region:**", message.guild.region, true)
            .addField("**Created:**", message.guild.createdAt, true)
            .addField("**Joined:**", message.guild.joinedAt, true)
            .addField("**Members:** ", message.guild.memberCount, true)
            .addField("**Bots:**", message.guild.members.filter(member => member.user.bot).size, true)
            .addField("**Channels:**", message.guild.channels.size, true)
            .addField("**Owner:**", message.guild.owner, true)
            .setAuthor(`${message.guild.name}`, message.guild.iconURL)
            .setColor(`#${color}`)
            .setThumbnail(message.guild.iconURL)
        message.channel.send(serverinfo);
        message.delete();
    }

    // Server Member Count
    if (message.content.startsWith(prefix + 'mc')) {


        let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.

        const membercount = new RichEmbed()
            .addField("**Members:** ", message.guild.members.filter(member => !member.user.bot).size, true)
            .addField("**Bots:**", message.guild.members.filter(member => member.user.bot).size, true)
            .addField("**Total:**", message.guild.members.size, true)
            .setAuthor(`${message.guild.name}`, message.guild.iconURL)
            .setColor(`#${color}`)
        message.channel.send(membercount);
        message.delete();
    }

    // Server Icon
    if (message.content.startsWith(prefix + 'sicon')) {
        let color = ((1 << 24) * Math.random() | 0).toString(16); //Generates random hex value.
        const iconserver = new RichEmbed()
            .setAuthor(`${message.guild.name}`)
            .setImage(message.guild.iconURL)
            .setColor(`${color}`)
        message.channel.send(iconserver)
        message.delete();
    }

    // Server Invite Background
    if (message.content.startsWith(prefix + 'sinvback')) {
        if(!message.guild.splashURL) return console.log(`Server: ${message.guild.name} | does not have a Invite Background.`)
        const invitebackground = new RichEmbed()
        invitebackground.setTitle(`${message.guild.name}'s Invite Background`)
        invitebackground.setImage(`${message.guild.splashURL}`)
        invitebackground.setFooter(`Invite Background | 7teen#1464`)
        invitebackground.setColor(`RANDOM`);
        message.channel.send(invitebackground);
        message.delete();
    }

    // No Server Banner Property In this Version of JS :/


    /////////////////////////////////////////////////////////////STATUS CMDS//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Streaming 
    if (message.content.startsWith(prefix + 'streaming')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        bot.user.setActivity(`${argresult}`, { type: "STREAMING", url: "https://www.twitch.tv/ayoohennio" });
        message.delete();
    }
    // Watching
    if (message.content.startsWith(prefix + 'watching')) {
        message.delete();
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(" ");
        bot.user.setActivity(`${argresult}`, { type: "WATCHING" });
    }
    // Listening
    if (message.content.startsWith(prefix + 'listening')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        bot.user.setActivity(`${argresult}`, { type: "LISTENING" });
        message.delete();
    }
    // Playing
    if (message.content.startsWith(prefix + 'playing')) {
        let args = message.content.split(" ").slice(1);
        var argresult = args.join(' ');
        bot.user.setActivity(`${argresult}`, { type: "PLAYING" });
        message.delete();
    }


    /////////////////////////////////////////////////////////////MASS DM CMDS//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Mass DM Server (CAN GET YOUR ACCOUNT DISABLED)
    if (message.content.startsWith(prefix + 'dm')) {
        let args = message.content.split(" ").slice(1);
        let argresult = args.slice(0).join(" ");
        message.guild.members.forEach(member => { // Looping through each member of the guild.  // mass dm
            // Trying to send a message to the member.
            // This method might fail because of the member's privacy settings, so we're using .catch
            member.send(argresult).catch(e => console.error(red(`Couldn't DM member ${member.user.tag}`))).then(console.log(green(`DM'd ${member.user.tag}`)));
        });
        message.delete();
    }
    // Mass DM Friends List (CAN GET YOUR ACCOUNT DISABLED)
    if (message.content.startsWith(prefix + 'fdm')) {
        let args = message.content.split(" ").slice(1);
        let argresult = args.slice(0).join(" ");
        bot.user.friends.forEach(friends => { // Looping through each member of the guild.  // mass dm
            // Trying to send a message to the member.
            // This method might fail because of the member's privacy settings, so we're using .catch
            friends.send(argresult).catch(e => console.error(red(`Couldn't DM member ${friends.username}`))).then(console.log(green(`DM'd ${friends.username}`)));
        });
        message.delete();
    }

    /////////////////////////////////////////////////////////////OTHER CMDS//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Spam User
    if (message.content.startsWith(prefix + 'spam')) {
        let args = message.content.split(" ").slice(1);
        let user = (args[0]);
        let mContent = args.slice(1).join(" ");
        bot.setInterval(() => {
            bot.users.get(user).send(mContent);
        }, 1500);
        console.log(red(`[CMD INFOMATION] :: YOU MUST RESTART THE BOT IN ORDER TO STOP THE SPAM`));
        message.delete();
    }

});

bot.login(token);
