const Koa = require('koa');
const app = module.exports = new Koa();

// logger
app.use(async (ctx, next) => {
    console.log('logger 1');
    await next();
    console.log('logger 2');
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
    console.log('x-response-time 1');
    const start = Date.now();
    await next();
    console.log('x-response-time 2');
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});


// response
app.use(async ctx => {
    console.log('response');
    ctx.body = 'Hello World';
});

if (!module.parent) app.listen(3000);