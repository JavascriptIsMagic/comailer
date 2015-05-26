'use strict';
//require('coffee-script/register');
try {
  module.exports = require('./lib/comailer.coffee');
} catch (error) {
  module.exports = require('./build/comailer.js');
}
