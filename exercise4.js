function dataHandling2(input) {
  
  input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
  console.log(input);

  var ttl1 = input[3].split("/");
  switch (Number(ttl1[1])) {
    case 01:
      return "Januari";
      break;
    case 02:
      return "Februari";
      break;
    case 03:
      return "Maret";
      break;
    case 04:
      return "April";
      break;
    case 05:
      return "Mei";
      break;
    case 06:
      return "Juni";
      break;
    case 07:
      return "Juli";
      break;
    case 08:
      return "Agustus";
      break;
    case 09:
      return "September";
      break;
    case 10:
      return "Oktober";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "Desember";
  }
  console.log(Number(ttl1[1]));

  console.log(ttl1.sort(function(a, b){return b-a}));
  
  var ttl2 = input[3].split("/");
  console.log(ttl2.join("-"));
  
  console.log(input[1].slice(0,15));
}

dataHandling2(["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]);