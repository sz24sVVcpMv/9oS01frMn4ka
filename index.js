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
      
        message.author.send(`!gb youtube - הערוץ של גל
gbinsta - האינסטגרם של גל
gbtwitter - הטוויטר של גל
gbcreator - היוצרים של הבוט
      --Staff Commands--
 gbmute - מיוט למי שעובר על החוק
 gbkick - קיק למי שעובר על החוק
 gbban - באן למי שעובר על החוק`);
    }


});
client.login(process.env.BOT_TOKEN);
