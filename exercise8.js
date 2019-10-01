//Logic Challenge - Pasangan Angka Terbesar

function pasanganTerbesar(num) {
    var str = String(num);
    var arr = [];
    for (i = 0; i < str.length-1; i++) {
        var pair = str[i] + str[i+1];
        arr.push(pair);
    }
    return Math.max.apply(null, arr);
}
  
// TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99