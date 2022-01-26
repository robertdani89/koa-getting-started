const Koa = require('koa');
const app = new Koa();

// const value = true
const value = false

// response
app.use(async ctx => {
    ctx.assert(value, 400, 'Assert fired');
    ctx.body = 'All good';
});

app.listen(3000);