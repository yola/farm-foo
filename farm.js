#!/usr/bin/env node
'use strict';

const Cow = require('cow-foo');
const feedCow = require('cow-foo/feed-cow');

const eatLunch = require('./lib/eat-lunch');


function main(cb) {
  const cow = new Cow();
  feedCow(cow, function() {
    eatLunch(function() {
      cb();
    });
  });
}

if (require.main === module) {
  main(function(){
    console.log('Done!');
  });
}

module.exports = main;
