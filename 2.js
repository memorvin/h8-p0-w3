/**
 * ==========
 * Snake Eyes
 * ==========
 * 
 * [Instruction]
 * 1. Buatlah program yang akan menjumlahkan nilai yang keluar dari 2 buah dadu dengan nilai 1-6
 * 2. Jika nilai dadu sama maka nilai salah satunya bertambah 1
 * 3. Namun jika nilai dadu yang ditambah jadi bernilai > 6 maka dadu tersebut nilainya menjadi 1
 * 4. Jika kedua dadu bernilai 6 maka yang dirubah menjadi 1 hanya salah satunya saja
 * 
 * [Example]
 * 1.
 * var dadu1 = 3
 * var dadu2 = 5
 * @output = 8
 * 
 * 2.
 * var dadu1 = 6
 * var dadu2 = 6
 * => karena nilai sama dan keduanya bernilai 6, maka salah satu dadunya menjadi 1
 * @output = 7
 */

var dadu1 = 4
var dadu2 = 6
// Write your code here

function dadu(dadu1, dadu2) {
  var result = dadu1 + dadu2;
  if (dadu1 === dadu2) {
    if(dadu1 === 6 && dadu2 === 6) {
      result -= 5;
    } else {
      result += 1;
    }
  }
return result;
}

console.log(dadu(3,3));