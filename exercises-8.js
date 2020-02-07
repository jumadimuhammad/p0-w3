function pasanganTerbesar(num) {
    // you can only write your code here!
    var stringNum = String(num)
    var a = 0
    var b = 0


    for (var i = 0; i < stringNum.length; i ++)
    {
        a = stringNum[i] + stringNum[i+1]
        console.log(a)
        if (a > b){
            b = a
        }

    }
    console.log('ini adalah ' +b)
  }
  
  // TEST CASES
  pasanganTerbesar(134933)
 // console.log(pasanganTerbesar(641573)); // 73
  //console.log(pasanganTerbesar(12783456)); // 83
  //console.log(pasanganTerbesar(910233)); // 91
  //console.log(pasanganTerbesar(71856421)); // 85
  //console.log(pasanganTerbesar(79918293)); // 99