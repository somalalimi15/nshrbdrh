const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
[ Welcome To Royal Games. ] ,
صوتولي على المتسآابقق رقم 
: 15 : وانشرهه لاخوياكممم , 
[ https://discord.gg/9XDCb65 ] ,
[ https://images-ext-1.discordapp.net/external/5j2inxAmKsGZRr8oGuoeKCynVBzqItDw-eSyBA4mHpM/https/media3.giphy.com/media/3o6Zt6zRQw8yStXfxe/giphy.gif?width=432&height=324 ]
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
[ Welcome To Royal Games. ] ,
صوتولي على المتسآابقق رقم 
: 15 : وانشرهه لاخوياكممم , 
[ https://discord.gg/9XDCb65 ] ,
[ https://images-ext-1.discordapp.net/external/5j2inxAmKsGZRr8oGuoeKCynVBzqItDw-eSyBA4mHpM/https/media3.giphy.com/media/3o6Zt6zRQw8yStXfxe/giphy.gif?width=432&height=324 ]
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);


