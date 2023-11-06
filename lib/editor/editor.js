const path = require("path")
const Koa = require('koa'); // 引入 koa
const router = require('koa-router')(); // 引入 koa-router
const bodyParser = require('koa-body-parser'); // 引入 koa-body-parser
const views = require("koa-views");
const app = new Koa(); // 起一个 koa 服务器


app.use(bodyParser());
// app.use(views(path.join(__dirname,"./"),{extension:'html'}))

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: '文本编辑器'
    })
})

app.use(router.routes());

app.listen(1129); // 设置服务器的端口
console.log('编辑器服务启动');
