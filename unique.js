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
  for (var jj = 0; jj < numbers.length; jj++){
    numbers[jj] = parseFloat(numbers[jj]);
  }
  var result = numbers.concat(Object.keys(myObj));
  return result;
}
module.exports = uniqueItems;
