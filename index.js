
require('dotenv').config()
const TOKEN = process.env.BOT_TOKEN;

const { bot } = require('./app');
bot.setWebHook(`https://mmozgov_heroku_test_bot.herokuapp.com/bot${TOKEN}`);

const { app } = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is listening on ${port}`);
})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `${msg.from.username} says: ${msg.text}`);
    console.log(`${msg.from.username} says: ${msg.text}`);
});
