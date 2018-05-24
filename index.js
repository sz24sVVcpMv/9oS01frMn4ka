const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
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
!gb insta - האינסטגרם של גל
!gb twitter - הטוויטר של גל
!gb creator - היוצרים של הבוט
      --Staff Commands--
 !gb mute - מיוט למי שעובר על החוק
 !gb kick - קיק למי שעובר על החוק
 !gb ban - באן למי שעובר על החוק`);
    }


});
bot.login(process.env.BOT_TOKEN);
