const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {

const pythonic1 = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**");

return message.author.send(pythonic1);
 
}
  if (message.channel.type !== "dm") {

const pythonic1 = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Polis Geliyor!!!!")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("")
      .setImage("http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif");

return message.channel.send(pythonic1);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ara155'],
  permLevel: 0
};

exports.help = {
  name: "ara155",
  description: "pythonic",
  usage: "ara155"
};
