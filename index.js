const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot is Online!`);
  client.user.setGame("gbhelp | Gal Cohen Bot Official");
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let prefix = process.env.BOT_PREFIX;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
    if (cmd === `${prefix}help`){
  message.reply('קיבלת בפרטי פקודות שוות :mailbox_with_mail:');
      
        message.author.send(`gbyoutube - הערוץ של גל
gbinsta - האינסטגרם של גל
gbtwitter - הטוויטר של גל
gbcreator - היוצרים של הבוט
gbreport - מישהו עובר על החוקים? דווח עליו!
      --Staff Commands--
 gbmute - מיוט למי שעובר על החוק
 gbkick - קיק למי שעובר על החוק
 gbban - באן למי שעובר על החוק`);
    }
  if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "incidents");
    if(!kickChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }
  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "incidents");
    if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }
  if (cmd === `${prefix}youtube`){
  message.reply('https://www.youtube.com/channel/UCf9BTfc8WP5hnxJc7u4mFUQ');
}
if (cmd === `${prefix}insta`){
message.reply('https://www.instagram.com/galcohenofficial');
  }
if (cmd === `${prefix}twitter`){
message.reply('https://twitter.com/gal_cohen2002?lang=he');
}
if (cmd === `${prefix}creator`){
  message.reply('bot created by **🌟𝑶𝒓𝒊 | 𝓝𝓲𝓬𝓮𝓖𝓪𝓶𝓮𝓼🌟⚒#2030** **KarPo#0807** **𝙎𝙝𝙖𝙝𝙖𝙧 | 𝙏𝙝𝙚𝘼𝙣𝙩#0139**')
}
if (cmd === `${prefix}invite`){
  message.reply('https://discord.gg/prsMxYW');
}
});
client.login(process.env.BOT_TOKEN);
