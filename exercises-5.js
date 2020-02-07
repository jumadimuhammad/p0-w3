function palindrome(kata){

    var res = ''
    
    for (var i = kata.length-1; i >= 0; i--){
        res += kata[i]
        if (res == kata){
            var hasil = true
        }else{
            hasil = false
        }
    }
    return hasil
}

console.log(palindrome('katak')) //true
console.log(palindrome('blanket')) //false
console.log(palindrome('civic')) // true
console.log(palindrome('kasur rusak')) //true
console.log(palindrome('mister')) //false
console.log(palindrome('titit')) 