//Logic Challenge - Tentukan Deret Geometri

function tentukanDeretGeometri(arr) {
    var minus = [];
    for (var i = arr.length-1; i >0; i--) {
        var min = arr[i] / arr[i-1];
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
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false