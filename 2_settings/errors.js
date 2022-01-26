const Koa = require('koa');
const app = new Koa();

app.on('error', (err, ctx) => {
    console.error('server error', err.message)
    //ctx.body = "we failed" //this will not work
});

app.use(async ctx => {
    console.log('response');
    ctx.body = 'Hello World';
    const err = new Error('name required');
    err.status = 400;
    err.expose = true;
    throw err;
});

app.listen(3000);