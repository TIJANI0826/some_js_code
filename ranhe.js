// A funtion to creata an array of numbers of range startNum to endNum 
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum){
    return []
  }else{
      var a = rangeOfNumbers(startNum,endNum-1);
      a.push(endNum);
      return a ;

  }
};
// A funtion to creata an array of numbers of range endNum to startNum in reverse order (i.e ) 
function reverseRangeOfNumbers(endNum,startNum){
    return rangeOfNumbers(startNum,endNum).reverse();
}
console.log(rangeOfNumbers(5,9));
