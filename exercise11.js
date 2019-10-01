//Logic Challenge - Tentukan Deret Aritmatika

function tentukanDeretAritmatika(arr) {
    var minus = [];
    for (var i = arr.length-1; i >0; i--) {
        var min = arr[i] - arr[i-1];
        minus.push(min);
    }
    for(var i = 1; i < minus.length; i++) {
        if(minus[i] !== minus[0]) {
            return false;
        } else {
            return true;
        }
    }    
}
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false