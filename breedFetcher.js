const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    // tip for self - use callback(error); the way you would console.log() to see whats happening throughout the function
    //declare empty variable to reassign later
    let msg = null;
    if (error) {
      //if error - add message to msg variable
      msg = "You've made a booboo";
    }
    //parse the info being passed in
    const data = JSON.parse(body);
    if (data.length === 0) {
      // if data empty (nothing to return becasue it is not a cat) re-assign msg
      msg = "Not a kitty cat";
      callback(msg, null);
    } if (data.length > 0) {
      //if data exists return the description
      callback(msg, data[0].description);
    }
  });
};

module.exports = {fetchBreedDescription};

