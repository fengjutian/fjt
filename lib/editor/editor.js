// const path = require("path")
// const Koa = require('koa'); // 引入 koa
// const router = require('koa-router')(); // 引入 koa-router
// const bodyParser = require('koa-body-parser'); // 引入 koa-body-parser
// // const views = require("koa-views");
// const serve = require("koa-static")
// const fs = require("fs");
// const sendfile = require('koa-sendfile')
// const app = new Koa(); // 起一个 koa 服务器

// app.use(ctx => {
//   ctx.set ('Content-Type', 'text/javascript')
//   const html = fs.readFileSync("./index.html", "binary");
//   ctx.body = html;
// }).listen(3000);

// app.use(async (ctx, next) => {
//   ctx.set ('Content-Type', 'text/javascript')
//   const stats = await sendfile(ctx, './index.html')
//   console.log(stats)
//   if (!ctx.status) ctx.throw(404)
// }).listen(3000);

// console.log('__dirname', __dirname)



const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const serve = require('koa-static');
const path = require("path")

// 1.主页静态网页 把静态页统一放到public中管理
const home = serve(path.join(__dirname)+'/public/', {
  setHeadears:(res,path,stats)=>{
    console.log(1111, res,path)
    res.setHeader('Content-Type', 'text/javascript')
  }
});

// 2.hello接口
const hello = ctx => {
  ctx.response.body = 'Hello';
};

// 3.分配路由
app.use(home); 

//  ctx.set ('Content-Type', 'text/javascript')
app.use(route.get('/', hello), {
  setHeadears:(res,path,stats)=>{
    console.log(1111, res,path)
    res.setHeader('Content-Type', 'text/javascript')
  }});

app.listen(3000);
