const Discord = require("discord.js");

exports.run = function(client, message, args) {

const pythonic1 = message.mentions.users.first();

if (!pythonic1) return message.reply("Beşlik Çakacağın Kişiyi Etiketlemelisin");

const Embedpythonic1 = new Discord.MessageEmbed()

    .setDescription(
      `${pythonic1} ` + `ve **${message.author.username}** Beşlik Çaktı`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748956281930383520/tenor_3.gif"
    )
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)

 return message.channel.send(Embedpythonic1);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["beşlikçak"],
  permLevel: 0
};
exports.help = {
  name: "beşlikçak",
  description: "Etiketlediğiniz Kişiyle Beşlik Çakarsınız",
  usage: ""
};
