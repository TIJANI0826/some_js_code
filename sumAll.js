function sumAll(arr) { 
    let start;
    let stop;
    if ( arr[0] < arr[1]){
      start = arr[0];
      stop = arr[1];
    }else if( arr[0] > arr[1]) {
      start = arr[1]
      stop = arr[0]
    }
    let sum = 0;
    for (let i=start;i <= stop;i++){
      sum += i;
    }
    return sum;
  }
  
  console.log(sumAll([1, 4]));