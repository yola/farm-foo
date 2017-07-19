module.exports = function(bird, food, cb) {
  console.log(`Feeding ${bird} to the ${food}...`);
  setTimeout(cb, 500);
};
