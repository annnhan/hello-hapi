/**
 * Created by an.han on 16/11/27.
 */

module.exports = {
  log: {
    reporters: {
      console: [
        {
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{log: '*', request: '*', response: '*'}]
        },
        {
          module: 'good-console'
        },
        'stdout'
      ]
    }
  }
}