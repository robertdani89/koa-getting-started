const Koa = require('koa');
const app = new Koa();

// logger
app.use(async (ctx, next) => {
    ctx.state.foo = "foo"
    await next();
    console.log(ctx.state.foo)
    const rt = ctx.response.get('X-Response-Time');
});

// x-response-time
app.use(async (ctx, next) => {
    console.log(ctx.state.foo)
    const start = Date.now();
    await next();
    console.log(ctx.state.foo)
    const ms = Date.now() - start;
});


// response
app.use(async ctx => {
    console.log(ctx.state.foo)
    ctx.state.foo = "new foo"
    ctx.body = 'State!';
});

app.listen(3000);