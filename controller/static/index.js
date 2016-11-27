/**
 * Created by an.han on 16/11/27.
 */

const path = require('path');
module.exports = {
  method: 'GET',
  path: '/static/{param*}',
  handler: {
    directory: {
      path: path.resolve(__dirname, '../../static'),
    }
  }
}