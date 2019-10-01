var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]; 

function dataHandling2(input) {

  input.splice(1,1, 'Roman Alamsyah Elsharawy');
  input.splice(2, 1, 'Provinsi Bandar Lampung');
  input.splice(4,1);
  input.splice(4, 2, 'Pria', 'SMA Internasional Metro');
  console.log(input);

  var ttl1 = input[3].split("/");
  switch (ttl1[1]) {
    case '01':
      console.log("Januari");
      break;
    case '02':
      console.log("Februari");
      break;
    case '03':
      console.log("Maret");
      break;
    case '04':
      console.log("April");
      break;
    case '05':
      console.log("Mei");
      break;
    case '06':
      console.log("Juni");
      break;
    case '07':
      console.log("Juli");
      break;
    case '08':
      console.log("Agustus");
      break;
    case '09':
      console.log("September");
      break;
    case '10':
      console.log("Oktober");
      break;
    case '11':
      console.log("November");
      break;
    case '12':
      console.log("Desember");
  }

  console.log(ttl1.sort(function(a, b){return b-a}));
  
  var ttl2 = input[3].split("/");
  console.log(ttl2.join("-"));
  
  console.log(input[1].slice(0,15));
}

dataHandling2(input);