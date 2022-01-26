const Koa = require('koa');
const app = new Koa();

// response
app.use(async ctx => {
    // ctx.throw(400);
    ctx.throw(400, 'name required');
    // ctx.throw(400, 'name required', { user: user });
});

app.listen(3000);