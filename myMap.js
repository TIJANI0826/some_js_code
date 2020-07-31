var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Only change code below this line
//   this.forEach(function(item){
//     newArray.push(callback(item))
// })
for(let i =0; i<this.length;i++){
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s)