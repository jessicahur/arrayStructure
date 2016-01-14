var myArray = Object.create(null);

myArray.push = function (array, elem) {
  var lastIndex = array.length;
  array[lastIndex] = elem;
  return array.length;
};

myArray.pop = function (array) {
  var lastIndex = (array.length-1);
  var poppedItem = array[lastIndex];
  array.length = array.length-1;
  return poppedItem;
};

myArray.shift = function (array) {
  if (array.length > 0){
    var elem = array[0];
    for (var ii = 0; ii < array.length-1; ii++){
      array[ii] = array[ii+1];
    }
    array.length = array.length-1;
    return elem;
  }
};

myArray.unshift = function (array, elem) {
  array.length = array.length+1;
  for (var ii = array.length -1; ii >0; ii--){
    array[ii] = array[ii-1];
  }
  array[0] = elem;
  return array.length;
};
module.exports = myArray;
