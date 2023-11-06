import express from 'express';
import open from 'open';
import serveIndex from 'serve-index';

/**
 * 启动服务
 */
export const service = () => {
  const app = express();

  app.use(express.static('./'));
  app.use(serveIndex('./',{ 'icons': true }));

  const server = app.listen(9000, () => {
      console.log('server', server.address())
      let host = server.address().address;
      let port = server.address().port;
      console.log(host, port);
      open('http://127.0.0.1:' + port);
  })
}
