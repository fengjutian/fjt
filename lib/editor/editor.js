const path = require("path")
const Koa = require('koa'); // 引入 koa
const router = require('koa-router')(); // 引入 koa-router
const bodyParser = require('koa-body-parser'); // 引入 koa-body-parser
// const views = require("koa-views");
const serve = require("koa-static")
const fs = require("fs");
const app = new Koa(); // 起一个 koa 服务器

app.use(ctx => {

  const html = fs.readFileSync("./index.html", "binary");
  ctx.body = html;

  // const filePath = join(ctx.static, "install.html");
  // const htmlContent = fs.readFileSync(filePath);
  // ctx.type = "html";
  // ctx.body = htmlContent;

  // ctx.type = "html";
  // ctx.body = fs.readFileSync("index.html");
}).listen(3000);


// app.use(bodyParser());
// app.use(serve(__dirname+"./",{extensions:["html"]}))

// router.get('/', async (ctx, next) => {
//     // await ctx.render('index', {
//     //     title: '文本编辑器'
//     // })
// })

// app.use(router.routes());

// app.listen(1129); // 设置服务器的端口
console.log('编辑器服务启动');
