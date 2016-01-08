var assert = require('chai').assert;
var myArray = require('../array.js');

describe ('array reimplemented', function() {
  //push method
  it ('should push the new element to the end of the existing array', function() {
    var array = [1,2,3];
    myArray.push(array, 4);
    assert.deepEqual(array, [1,2,3,4],'it fails to push');
  });
  it ('should return the new length of the array', function () {
    var array = [1,2,3];
    var newLength = myArray.push(array, 4);
    assert.equal(newLength, 4,'it fails to push');
  });

  //pop method
  it('should return the popped item', function() {
    var array = [1,2,4];
    var pop = myArray.pop(array);
    assert.equal(pop, 4, 'it does not return the last item');
  });
  it('should change the content of the array', function() {
    var array = [1,2,3];
    myArray.pop(array);
    assert.deepEqual(array, [1,2], 'it does not alter the content of the array');
  });
  it('should return the length of the array to be one less', function() {
    var array = [1,2,3];
    myArray.pop(array);
    var arrayLength = array.length;
    assert.equal(arrayLength, 2, 'it fails to change the array length');
  });

  //shift method
  it('should return undefined for array of length zero', function() {
    var array = [];
    var result = myArray.shift(array);
    assert.equal(result, undefined, 'fails to return undefined');
  });
  it('should shift all of the remaining item up', function() {
    var array = [1,3,5];
    myArray.shift(array);
    assert.deepEqual(array, [3,5], 'it fails to shift all items up');
  });
  it('should return the first element in the array', function() {
    var array = [11,23,45];
    var shiftedElem = myArray.shift(array);
    assert.equal(shiftedElem, 11, 'it fails to return the first element in the array');
  });
});
