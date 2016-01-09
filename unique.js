function uniqueItems (array) {
  var myObj = {};
  var nums = {};
  for (var ii = 0; ii < array.length; ii++){
    if (typeof array[ii] !== 'number'){
      if(!myObj.hasOwnProperty(array[ii])){
        myObj[array[ii]] = 0;
      }
    } else {
      if(!nums.hasOwnProperty(array[ii])){
        nums[array[ii]] = 0;
      }
    }
  }
  var numbers = Object.keys(nums);
  for (var ii = 0; ii < numbers.length; ii++){
    numbers[ii] = parseFloat(numbers[ii]);
  }
  var result = numbers.concat(Object.keys(myObj));
  return result;
}
module.exports = uniqueItems;
