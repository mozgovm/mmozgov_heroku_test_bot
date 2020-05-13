
const TOKEN = process.env.BOT_TOKEN;
require('dotenv').config()
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

const router = new Router();
router.post(`/bot${TOKEN}`, ctx => {
    const { body } = ctx.request;
    bot.processUpdate(body);
    ctx.status = 200;
});

app.use(bodyParser());
app.use(router.routes());

module.exports = app;
