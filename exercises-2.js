//input "hello world!"
//output
//"!dlrow olleh"


function balikString(str){
    var res = ''
    
    for (var i = str.length-1; i >= 0; i--){
        res += str[i]
    }
    return res
}
var a ='muhammad jumadi'
console.log(balikString(a))