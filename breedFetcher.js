const request = require('request');

const myArgs = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + myArgs, function(error, response, body) {
  if (error) {
    console.error("you've made a booboo");
    process.exit(1);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Not a kitty cat");
  } if (data.length > 0) {
    console.log(data);
  }
});



