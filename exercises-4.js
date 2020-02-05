/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

function dataHandling2(a){
  
   a.splice(1,4,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung','21/05/1989','pria','SMA International Metro')
   console.log(a)

   var arr = a.slice(3,4)
   var bulan =arr[0].split('/')
   var bulan1 =arr[0].split('/')
   var bul = bulan.slice(1,2)

   switch(Number(bul)){
      case 01:{
         console.log('Januari')
         break
      }
      case 05:{
         console.log('Mei')
         break
      }
      default:{
         console.log('Data tidak valid')
      }
   }
   
   var bulanSort = bulan.sort(function(a,b){
      return b - a
   })
   console.log(bulanSort)

   console.log(bulan1.join('-'))
   
   var nama = a.slice(1,2)
   var nam = nama[0].split('')
   namBaru = nam.slice(0,15)
   console.log(namBaru.join(''))

}
var input = ['001','Roman Alamsyah','Bandar Lampung','21/05/1989/','Membaca']
dataHandling2(input)