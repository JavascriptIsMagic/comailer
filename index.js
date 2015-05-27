'use strict';
try {
  //require('coffee-script/register');
  module.exports = require('./lib/comailer');
} catch (error) {
  module.exports = require('./build/comailer');
}
