const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      console.log("This is error", err);
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
});

describe('fetchBreedDescription', () => {
  it('returns a string description if given argument is not a valid cat breed/non-existant', (done) => {
    fetchBreedDescription('Snoopy', (err, desc) => {
      assert.equal(err, "Not a kitty cat");
      // console.log("Here", err)
      const expectDesc = null;
      assert.equal(expectDesc, desc);

      done();
    });
  });
});