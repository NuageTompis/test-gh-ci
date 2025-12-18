const isOdd = require("is-odd");

const run = () => {
  const values_to_test = [3, 6];
  const results = values_to_test.map((v) => isOdd(v));
  for (i = 0; i < results.length; i++) {
    console.log(`is ${values_to_test[i]} odd ? `, results[i] ? "yes" : "no");
  }
};

module.exports = {
  run,
};
