const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx; // is the Context
    ctx.request; // is a Koa Request
    ctx.response; // is a Koa Response
    ctx.body = "Context!"
});

app.listen(3000);
