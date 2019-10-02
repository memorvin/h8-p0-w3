//Logic Challenge - Target Terdekat

function targetTerdekat(arr) {
    var indexO = [];
    var indexX = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            indexO.push(i);
        } else if (arr[i] === 'x') {
            indexX.push(i);
        }
    }     
    if (indexX.length === 0) {
        return 0;
    } else {
        var dist = 0;
        var distArr = [];
        for (var i = 0; i < indexX.length; i++) {
            dist = indexX[i] - indexO[0];
            distArr.push(Math.abs(dist));
        }
    }
    return Math.min.apply(null, distArr);
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2