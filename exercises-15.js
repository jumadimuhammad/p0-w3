function groupAnimals(animals) {
    // you can only write your code here!

    var res = []

    animals.sort()
    for(var i = 0; i < animals.length; i ++){

        var check = false

        for (var j = 0; j < res.length; j++){
            if (res[j][0][0] == animals[i][0]){
                check = true
                res[j].push(animals[i])
            }
        }
        if (!check){
            res.push([animals[i]])
        }
        
    }
    return res

  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]