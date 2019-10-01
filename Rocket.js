/*
==============
Square Number
==============
Instruksi
=========
Buatlah sebuah function bernama squareNumber yang menjalankan proses dengan 
menggunakan looping (boleh dengan while atau for) dan menerima dua parameter 
bernama num dan sort.
Buatlah sebuah angka dengan pola pemunculan sesuai dengan parameter yang diberikan:
contoh 1 (squareNumber(3, ascending)):
1 2 3
4 5 6
7 8 9

contoh 2 (squareNumber(3, descending)):
9 8 7
6 5 4
3 2 1

contoh 3 (squareNumber(1, ascending)):
1

Note: Output harus sesuai dengan contoh yang diberikan!
*/

function squareNumber(num, sort) {
  var num2 = num*num;
  var arr = [];
  if (sort == 'ascending') {
    for(var i = 1; i <= num2; i++) {
      arr.push(i);
    }
  } else if (sort == 'descending') {
    for(var i = num2; i > 0; i--) {
      arr.push(i);
    }
  }
  var start = 0;
  var end = start + num;
  for (var i = 0; i < num; i++) {
    var result = '';
    for (var j = start; j < end; j++) {
      result += String(arr[j]) + ' ';
    }
    start = end;
    end = start + num;
    console.log(result.trim());
  }
}

squareNumber(4, 'ascending');
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16

squareNumber(6, 'descending');
// 36 35 34 33 32 31
// 30 29 28 27 26 25
// 24 23 22 21 20 19
// 18 17 16 15 14 13
// 12 11 10 9 8 7
// 6 5 4 3 2 1