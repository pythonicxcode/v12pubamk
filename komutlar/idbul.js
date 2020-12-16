const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args,) => {

let pythonıc = message.mentions.users.first() || message.author;

message.channel.send(`ID: **${pythonıc.id}**`)


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['İd', 'İD', 'ID'],
  permLevel: 0
};

exports.help = {
  name: 'id',
  description: '',
  usage: ''
};
