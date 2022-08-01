const path = require('path');

module.exports = appInfo => {

  const config = exports = {
    keys: appInfo.name + '_1659346764308_4537',
    middleware: [],
    static: {
      prefix: '/static/',
      dir: path.join(appInfo.baseDir, 'app/static')
    },
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    }
  };

  return {
    ...config,
  };

};
