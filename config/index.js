/**
 * Created by an.han on 16/11/27.
 */

const dev = require('./dev');
const pro = require('./pro');
const production = process.env.PRO == 1;

module.exports = Object.assign({
  production: production,
}, production ? pro : dev);