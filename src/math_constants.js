/*
 * Simple math
 * 
 */

var math = require('../math.js');  // Cool stuff

function print (value) {
    console.log(math.format(value));
}

console.log('math constants');
  print(math.round(math.e, 3));           
  print(math.atan2(3, -3) / math.pi);     
  print(math.log(10000, 10));             
  print(math.sqrt(-4));                   
