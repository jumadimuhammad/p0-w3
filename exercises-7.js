function hitungJumlahKata(kalimat) {
    var baru = kalimat.split(' ')
    console.log(baru)
    return baru.length
  }
  
  // TEST CASES
  console.log('jumlah kata :'+hitungJumlahKata('I have a dream')); // 4
  console.log('jumlah kata :'+hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log('jumlah kata :'+hitungJumlahKata('A song to sing')); // 4
  console.log('jumlah kata :'+hitungJumlahKata('I')); // 1
  console.log('jumlah kata :'+hitungJumlahKata('I believe I can code')); // 5