#!/usr/bin/env node
'use strict';

const Bird = require('bird-foo');
const Cow = require('cow-foo');
const feedCow = require('cow-foo/feed-cow');

const feedBird = require('./lib/feed-bird');
const eatLunch = require('./lib/eat-lunch');


function main(cb) {
  const cow = new Cow();
  feedCow(cow, function() {
    var bird = new Bird();
    if(bird == 'pigeon') {
      feedBird(bird, 'seed', function() {
        eatLunch(function() {
          cb();
        });
      });
    } else {
      feedBird(bird, 'corn', function() {
        eatLunch(function() {
          cb();
        });
      });
    }
  });
}

if (require.main === module) {
  main(function(){
    console.log('Done!');
  });
}

module.exports = main;
