//Logic Challenge - Mengelompokkan Hewan

function groupAnimals(animals) {
  var result = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];     
  for (var i = 0; i < animals.length; i++) {
    switch (animals[i][0]) {
      case 'a':
          result[0].push(animals[i]);
          break;
      case 'b':
          result[1].push(animals[i]);
          break;
      case 'c':
          result[2].push(animals[i]);
          break;
      case 'd':
          result[3].push(animals[i]);
          break;
      case 'e':
          result[4].push(animals[i]);
          break;
      case 'f':
          result[5].push(animals[i]);
          break;
      case 'g':
          result[6].push(animals[i]);
          break;
      case 'h':
          result[7].push(animals[i]);
          break;
      case 'i':
          result[8].push(animals[i]);
          break;
      case 'j':
          result[9].push(animals[i]);
          break;
      case 'k':
          result[10].push(animals[i]);
          break;
      case 'l':
          result[11].push(animals[i]);
          break;
      case 'm':
          result[12].push(animals[i]);
          break;
      case 'n':
          result[13].push(animals[i]);
          break;
      case 'o':
          result[14].push(animals[i]);
          break;
      case 'p':
          result[15].push(animals[i]);
          break;
      case 'q':
          result[16].push(animals[i]);
          break;
      case 'r':
          result[17].push(animals[i]);
          break;
      case 's':
          result[18].push(animals[i]);
          break;
      case 't':
          result[19].push(animals[i]);
          break;
      case 'u':
          result[20].push(animals[i]);
          break;
      case 'v':
          result[21].push(animals[i]);
          break;
      case 'w':
          result[22].push(animals[i]);
          break;
      case 'x':
          result[23].push(animals[i]);
          break;
      case 'y':
          result[24].push(animals[i]);
          break;
      case 'z':
          result[25].push(animals[i]);
          break;
    }
  }
  for (var i = result.length-1; i >= 0; i--) {
      if (result[i].length === 0) {
      result.splice(i, 1 );
      } 
  }
  return result;              
}
      
      // TEST CASES
      console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
      // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
      console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
      // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]