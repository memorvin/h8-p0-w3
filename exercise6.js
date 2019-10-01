// Logic Challenge - Number Palindrome

function angkaPalindrome(num) {
    for (var i = num + 1; i != copy; i++) {
      var str = String(i);
      var arr = str.split('');
      var reverse = arr.reverse();
      var copy = ''
      copy += arr.join('');
    if (i == copy) {
      break;}
    } 
  return i;
}
    
    // TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001