const telegramBot = require("node-telegram-bot-api");
const TOKEN = '1246630721:AAGu9KzYNP4Te5DoaScSFJDJ7qmsm2aIw_4';

const bot = new telegramBot(TOKEN, {
    polling: true
});

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `${msg.from.username} says: ${msg.text}`);
    console.log(`${msg.from.username} says: ${msg.text}`);
});
