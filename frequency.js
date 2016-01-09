var unique = require ('./unique');

function mostCommonChar (array){
  var frequencyResult = 0;
  var myChars = {};
  for (var ii = 0; ii < array.length; ii++){
    var word = array[ii];
    var chars = word.split('');
    var uniqueChars = unique(chars);
    for (var jj = 0; jj < uniqueChars.length; jj++){
      if (!myChars.hasOwnProperty( uniqueChars[jj] ) ){
        myChars[ uniqueChars[jj] ] = 1;
      } else {
        myChars[ uniqueChars[jj] ] ++;
      }
    }
  }
  var chars = Object.keys(myChars);
  var resultChar = '';
  var highestFrequency = 0;
  for (var kk = 0; kk < chars.length; kk++){
    if (myChars[ chars[kk] ] > highestFrequency){
      highestFrequency = myChars[ chars[kk] ];
      resultChar = chars[kk];
    }
  }
  return resultChar;
}
module.exports = mostCommonChar;
