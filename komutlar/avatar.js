const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let target = message.mentions.users.first() || message.author;
message.channel.send(new Discord.MessageEmbed()
.setAuthor(target.tag, target.displayAvatarURL({ dynamic: true }))
.setTitle('Avatar')
.setImage(target.displayAvatarURL({ dynamic: true, size: 512 })));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar'
};
