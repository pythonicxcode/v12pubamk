const Discord = require("discord.js");

exports.run = (client, message) => {

const Embedpythonic1 = new Discord.MessageEmbed()

      .setAuthor("Taksim Dayı")//pythonic1
      .setColor(3447003)
      .setTimestamp()
      .setDescription("")
      .setURL("https://cdn.discordapp.com/attachments/757801669839814677/758308330585325619/taksim.gif")
      .setImage(`https://cdn.discordapp.com/attachments/757801669839814677/758308330585325619/taksim.gif`);

return message.channel.send(Embedpythonic1);

};
exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["dayı", "taksim"],
  permLevel: 0
};
exports.help = {
  name: "taksim",
  description: "taksim dayı resmi atar",
  usage: "taksimdayı"
};
