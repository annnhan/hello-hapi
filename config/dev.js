/**
 * Created by an.han on 16/11/27.
 */

module.exports = {
  log: {
    reporters: {
      myConsoleReporter: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{log: '*', response: '*'}]
      }, {
        module: 'good-console'
      }, 'stdout'],
    }
  }
}