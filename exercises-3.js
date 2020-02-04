function dataHandling(a){
    var res = []
    for (var i = 0; i < input.length; i++)
    {
        res += ' No id: ' + input[i][0]
        res += ' Nama: ' + input[i][1]
        res += ' Aalamat: ' + input[i][2]   
    }
    return res
}

var input = [
    ['0001','muhammad jumadi','jakarta'],
    ['0002','muhammad ali','jakarta']
]

console.log(dataHandling(input))