const Discord = require("discord.js");

exports.run = (client, message, args) => {

let pythonic1 = args.slice(0).join("+");
if (!pythonic1) return message.channel.send("Lütfen Bişey Yaz");
let link ="https://dynamic.brandcrowd.com/asset/logo/055241ff-dc4f-4743-90be-1c9caa0c900b/logo?v=4&text=" + pythonic1;

const Embedpythonic1 = new Discord.MessageEmbed()

.setImage(link);

return message.channel.send(Embedpythonic1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ejderha'],
  permLevel: 0
};

exports.help = {
  name: "ejderha",
  description: "Ejderha Logosu Yaparsınız",
  usage: "ejderha <yazı>"
};
