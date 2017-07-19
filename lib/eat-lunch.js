'use strict';

module.exports = function(cb) {
  console.log('Eating lunch...');
  setTimeout(cb, 1000);
};
