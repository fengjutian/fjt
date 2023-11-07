const path = require("path")
const Koa = require('koa'); // 引入 koa
const router = require('koa-router')(); // 引入 koa-router
const bodyParser = require('koa-body-parser'); // 引入 koa-body-parser
// const views = require("koa-views");
const serve = require("koa-static")
const fs = require("fs");
const app = new Koa(); // 起一个 koa 服务器

app.use(ctx => {
  ctx.set ('Content-Type', 'text/javascript')
  const html = fs.readFileSync("./index.html", "binary");
  ctx.body = html;

}).listen(3000);

console.log('编辑器服务启动');
