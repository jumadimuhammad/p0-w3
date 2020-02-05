//contoh input
/*
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
*/
function dataHandling(a){
    var res = []
    for (var i = 0; i < a.length; i++)
    {
        console.log('No id :' + a[i][0])
        console.log('Nama lengkap: ' + a[i][1])
        console.log('TTL : ' + a[i][2] + ' ' + a[i][3])
        console.log('Hobbi : ' + a[i][4])

        console.log('\n')
        
    }
}

var input = [
    ['0001','Muhammad Jumadi','Jakarta','03/12/1998','Membaca'],
    ['0002','Roman ALamsyah','Bandar Lampung','21/05/1989','Membaca'],
    ['0003','Dika Sembiring','Medan','10/10/1992','Bermain Gitar'],
    ['0004','Winona','Ambon','25/12/1965','Memasak'],
    ['0005','Bintang Sanjaya','Martapura','6/4/1970','Berkebun']
]

dataHandling(input)