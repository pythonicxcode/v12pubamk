const Discord = module.require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const python = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Rastgele kullanıcı;')
    .setDescription(message.guild.members.cache.random().displayName)
    .setThumbnail(message.author.avatarURL())
    .setFooter('python')
    .setTimestamp()
    message.channel.send(python).then(msg => {msg.delete(7000)});
}

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['r'],
  permLevel: 0
};

exports.help = {
  name: 'r'
};
