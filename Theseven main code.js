const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot is online!');
});

client.on('message', (message) => {
  if (message.content.startsWith('!bye')) {
    message.channel.send('Goodbye!');
  }
});

client.login(process.env.DISCORD_TOKEN);
