const Discord = require("discord.js");

exports.run = (client, message) => {
  let üye = new Discord.MessageEmbed()
    .setAuthor("Sunucu Üye Durumu")
    .setColor("AQUA")
   .addField("**Toplam Kullanıcı**", message.guild.memberCount, true )
    .addField("**Çevrimiçi Olan Kullanıcılar**", message.guild.members.cache.filter(py => py.presence.status === 'online').size, true)
  .addField("**Boşta Olan Kullanıcılar**", message.guild.members.cache.filter(py => py.presence.status === 'idle').size, true)
.addField("**Rahatsız Etmeyinde Olan Kullanıcılar**", message.guild.members.cache.filter(py => py.presence.status === 'dnd').size, true)
.addField("**Çevrimdışı Olan Kullanıcılar**" , message.guild.members.cache.filter(py => py.presence.status === 'offline').size, true)

    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["kullanıcı-durum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "kullanıcı-durum",
  description: "",
  usage: ""
};
