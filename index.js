const telegramBot = require("node-telegram-bot-api");
const TOKEN = '1246630721:AAGu9KzYNP4Te5DoaScSFJDJ7qmsm2aIw_4';
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const bot = new telegramBot(TOKEN);
bot.setWebHook(`https://mmozgov-heroku-test-bot.herokuapp.com/bot${TOKEN}`);

const app = new Koa();

const router = new Router();
router.post(`/bot${TOKEN}`, ctx => {
    const { body } = ctx.request;

    bot.processUpdate(body);
    ctx.status = 200;
});

app.use(bodyParser());
app.use(router.routes());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App is listening on ${port}`);
})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `${msg.from.username} says: ${msg.text}`);
    console.log(`${msg.from.username} says: ${msg.text}`);
});
