function countDown(n){
    count = []
    for(var i = n; i > 0; i-- ){
      count.push(i);
    }
    return count;
}

function countUp(n){
  count = []
    for(var i = 1; i <= n ; i++ ){
      count.push(i);
    }
    return count;
}
// Only change code below this linen
function countup(n){

  if (n < 1) {
    return [];
  } else {
    var a = countup(n-1)
    a.push(n);
    return a;
  }
}

function countdown(n){
   var b = function count(n){
    if (n < 1){
      return [];
    }else{
      b = 10;
      var a = count(n-1);
      a.push(n);
      return a; 
    }
   }
   return b(n).reverse();
}
// function countdown(n){
//   return count(n).reverse();
// }

// Only change code above this line
console.log(countdown(10));