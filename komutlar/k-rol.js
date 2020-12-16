const discord = require('discord.js')
const db = require('quick.db')
//pythonic
exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);
//pythonic
if(args[0] === "sıfırla") {//pythonic//pythonic//pythonic//pythonic//pythonic//pythonic//pythonic//pythonic//pythonic
const sıfırlandı = new discord.MessageEmbed()//pythonic//pythonic//pythonic//pythonic//pythonic//pythonic//pythonic//pythonic
.setAuthor(client.user.username, client.user.avatarURL())  //pythonic//pythonic//pythonic//pythonic//pythonic//pythonic//pythonic
.setTitle(`${client.user.username} - Alınacak Rolü Sıfırla `)
.setColor('BLACK')//pythonic//pythonic//pythonic//pythonic//pythonic//pythonic
.setDescription(`Kayıt Olunca Otomatik Alınacak Rol Sıfırlandı ! `)//pythonic//pythonic//pythonic//pythonic//pythonic
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)//pythonic//pythonic//pythonic//pythonic
message.channel.send(sıfırlandı)//pythonic//pythonic//pythonic
db.delete(`alınacakrol_${message.guild.id}`)//pythonic//pythonic
return;
}
//pythonic
let rol = message.mentions.roles.first();   //pythonic
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())  //pythonic//pythonic//pythonic//pythonic//pythonic
.setTitle(`${client.user.username} - Alınacak Rol Ayarla `)//pythonic//pythonic//pythonic//pythonic
.setColor('BLACK')
.setDescription(`Kayıt Olunca Alınacak Rolü Belirtiniz ! `)//pythonic//pythonic//pythonic
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)//pythonic
message.channel.send(ayarlanmadı)//pythonic//pythonic
}
db.set(`alınacakrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle(`${client.user.username} - Alınacak Rol Ayarlandı `)
.setColor('BLACK')//pythonic//pythonic//pythonic//pythonic//pythonic
.setDescription(`Kayıt Olunca Otomatik Alınacak Rol Başarıyla ${rol} Olarak Ayarlandı ! `)//pythonic//pythonic//pythonic//pythonic
.setThumbnail(client.user.avatarURL())
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)//pythonic//pythonic//pythonic
message.channel.send(ayarlandı)

}
exports.conf = {//pythonic//pythonic
  enabled: true,
  guildonly: false,
  aliases: ['alınacak-rol', 'arol', 'a-rol'],
  permlevel: 0//pythonic
}
exports.help = {
  name: 'alınacak-rol',
  description: 'Kayıt Olunca Alınacak Rolü Ayarlar',
  usage: '!alınacak-rol @rol'
}//pythonic
