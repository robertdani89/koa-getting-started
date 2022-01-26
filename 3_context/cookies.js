const Koa = require('koa');
const app = new Koa();

const TEMP_COOKIE_NAME = "my_temp_cookie"

// response
app.use(async ctx => {
    console.log(ctx.cookies.get(TEMP_COOKIE_NAME))
    const randomNumber = Math.floor(Math.random() * 10000000000)
    ctx.cookies.set(TEMP_COOKIE_NAME, randomNumber.toString())
    ctx.body = 'Cookies!';
});

app.listen(3000);