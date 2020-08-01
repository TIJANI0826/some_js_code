function destroyer(arr) {
    let a = arguments.length
    let arr2 = new Set([...arguments[0]]);
    arr3 = [...arr2]
    let dummyArray = [...arguments[0]];
    let finalArray = [];
    for(var i=1;i<arguments.length;i++){
        arr3.splice(arr3.indexOf(arguments[i]),1)
    }
    for(let i=0; i<dummyArray.length;i++){
        for(let j=0; j<arr3.length;j++){
           if(dummyArray[i] == arr3[j]){

            finalArray.push(arr3[j])
            }
        }
    }
    
    return finalArray;

  }
  
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
