/**
 * Created by an.han on 16/11/27.
 */

module.exports = {
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply.view(
      `${request.client}/index`,
      {title: 'hello', msg: 'hello world .....'},
      {layout: request.client}
    );
  }
}