function diffArray(arr1, arr2) {
  var newArr = [];
  // convert both arrays to Sets
  let a = new Set([...arr1]);
  let b = new Set([...arr2]);

  //then find the set difference of arr1 and arr2
  let difference1 = [...a].filter(x => !b.has(x));
  
  //then find the set difference of arr1 and arr2
  let difference2 = [...b].filter(x => !a.has(x));
  newArr = [...difference1,...difference2]
  return newArr
  
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
