/**
 * Created by an.han on 16/11/27.
 */

'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const client = require('./utils/client');
const route = require('./utils/route');
const config = require('./config');

const server = new Hapi.Server();
server.connection({port: 3000});
server.register(Inert, () => {
});

server.app.config = config;
server.app.dirname = __dirname;

// 获取客户端平台
server.ext('onRequest', function (request, reply) {
  request.client = client(request);
  return reply.continue();
});

// 使用模板
server.register(require('vision'), (err) => {
  if (err) {
    return console.error(err);
  }
  server.views({
    engines: {
      hbs: require('handlebars')
    },
    relativeTo: __dirname,
    path: './view',
    layoutPath: './view/layout',
    helpersPath: './view/helper'
  });
});

// 日志配置
server.register({register: require('good'), options: config.log}, (err) => {
  if (err) {
    return console.error(err);
  }
});


// 添加路由
route(server);

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});

