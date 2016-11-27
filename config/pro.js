/**
 * Created by an.han on 16/11/27.
 */

const path = require('path');
module.exports = {
  log: {
    reporters: {
      file: [
        {
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{log: '*', error: '*'}]
        },
        {
          module: 'good-squeeze',
          name: 'SafeJson',
          args: [null, {separator: '\n'}]
        },
        {
          module: 'rotating-file-stream',
          args: [
            'app.log',
            {
              size: '10M',
              path: path.resolve(__dirname, '../log'),
              interval: '1d'
            }
          ]
        }
      ]
    }
  }
}