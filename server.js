// const Vue = require("vue");
const express = require('express');
const fs = require("fs");
const path = require("path");
// const resolve = (dir) => path.resolve(__dirname, dir);

require('./webpack.config.extend'); // to get process.env.REGION;
const deploymentRegion = process.env.REGION;

const server = express();
// const router = express.Router();
// const publicRoutes = require('./src/main');

// const serverBundle = fs.readFileSync(`./dist/${deploymentRegion}/server.bundle.js`, 'utf-8');
const bundle = require(`./dist/${deploymentRegion}/server.bundle.js`);
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync(`./dist/${deploymentRegion}/index.ssr.html`, 'utf-8'),
  // serverBundle,
});

// server.use('*', express.static('dist'));
server.use('/dist', express.static(path.join(__dirname, './dist')));
// server.use('*', express.static(path.join(__dirname, './dist')));

server.get('*', (req, res) => {
  bundle.default({ url: req.url }).then((app) => {
    const context = {
      title: 'ssrrrr',
      meta: `
        <meta name="description" content="Vue.js 服务端渲染指南">
      `
    }
    renderer.renderToString(app, context, (err, html) => {
      if (err) {
        res.status(500).end('Internal Server Error')
        return
      }
      // res.setHeader('Content-Type','text/html;charset=UTF-8'); // 避免亂碼
      // res.writeHead(200, {
      //   'Content-Type': 'text/html; charset=utf-8'
      // })
      res.end(html);
    });
  }).catch(errrr => {
    console.log(errrr)
  }) ;
//   // server.use(router.routes()); // 將路由註冊到APP
//   // const publicRoutes = require('./src/router');
//   // server.use(publicRoutes);
  
  
//   // const app = new Vue({
//   //   data: {
//   //     url: req.url
//   //   },
//   //   template: `<div>URL： {{ url }}</div>`
//   // })
});
 
const port = 3000

server.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    process.env.PORT ? console.log('伺服器已啟動在 port %s', port) : console.log('本機伺服器已啟動在 port %s . 打開 http://%s:%s/ 查看', port, '0.0.0.0', port);
  }
})