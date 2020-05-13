
const telegramBot = require("node-telegram-bot-api");
const TOKEN = process.env.BOT_TOKEN;
require('dotenv').config()
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const bot = new telegramBot(TOKEN);

const app = new Koa();

const router = new Router();
router.post(`/bot${TOKEN}`, ctx => {
    const { body } = ctx.request;
    bot.processUpdate(body);
    ctx.status = 200;
});

app.use(bodyParser());
app.use(router.routes());

module.exports = {
    bot,
    app
}

console.log(module.exports);
