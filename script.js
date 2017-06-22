var Arr = ['assddd', 'bbbqeb', 'eefeefe', 'uyuyuyyuyuyuyu']
var finalArr = {};
var charcount = {},
    cntr  = 0;


for (var i = 0; i < Arr.length; i++) {

  var string = Arr[i];

  for (var j = 0; j < string.length; j++) {

    var mykey = string.charAt(j);
    if (mykey in charcount === true) {
      charcount[mykey] += 1;
    } else {
      charcount[mykey] = 1;
    }
    

  }

  var val = Object.values(charcount);
 
  var max = val.reduce(function(a, b) { return a > b ? a : b });
  
  finalArr[string] = max;

  //var charcount = {};
}

var x=Object.keys(finalArr).reduce(function(a, b){ return a > b ? a : b })
document.write(x);