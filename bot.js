const telegramBot = require("node-telegram-bot-api");
require('dotenv').config();
const TOKEN = process.env.BOT_TOKEN;

const bot = new telegramBot(TOKEN);

bot.setWebHook(`https://mmozgov_heroku_test_bot.herokuapp.com/bot${TOKEN}`);

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `${msg.from.username} says: ${msg.text}`);
    console.log(`${msg.from.username} says: ${msg.text}`);
});

module.exports = bot;