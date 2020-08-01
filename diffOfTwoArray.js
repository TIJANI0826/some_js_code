function diffArray(arr1, arr2) {
    var newArr = [];
    var startArray;
    var secondArray;
    if(arr1.length > arr2.length){ 
      startArray = arr1.slice();
      secondArray = arr2.slice();
    }
    else if(arr1.length > arr2.length){
      startArray = arr2.slice();
      secondArray = arr2.slice();
    }
    startArray.filter(function(element){
      if(startArray[element]===secondArray[element]){
        newArr.push(element)
      };
    });
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  