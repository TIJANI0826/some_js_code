// from()
console.log("use from() converting a string into an array")
var s = 1234
var strArray = Array.from(String(s));
console.log(strArray);
console.log("");
console.log("");

// concat
console.log("use concat() using to add join two arrays")
var ab = ["A","B"];
var ab1 = ["C","D"];
var concata = ab.concat(ab1)
console.log(concata)
console.log(ab.constructor)
console.log("");
console.log("");

//copyWithin
console.log("use copyWithin() to copy within an array")
var fruits = ["Banana","Mango","Apple","Orange","Guava"]
console.log(fruits.copyWithin(3,2))
console.log("");
console.log("");

//entries
console.log("use array.entries() for listing each position and the items in a array")
var f = fruits.entries()

for (x of f){
    console.log(x)
    }
console.log("");
console.log("");
    
// every()
console.log("use array.every(function) to check if a function is true for all element in an array ")
var age = [32,33,16,40]

function checkAdult(age){
   return age >= 18;
   }
console.log(age.every(checkAdult))
console.log("");
console.log("");


//fill
console.log("use array.fill('String',start) to fill the array with a String ")
var fillFruits = fruits.fill("Mango")
console.log(fillFruits)
console.log("");
console.log("");


//filter
console.log("use array.filter(function) returns a list with elements that are true for the function ")
var filterAge = age.filter(checkAdult)
console.log(filterAge)
console.log("");
console.log("");


//find()
console.log("use array.find(function) returns the first item that is true for a function")
var findAge = age.find(checkAdult)
console.log(findAge)
console.log("");
console.log("");


//findeIndex()
console.log("use array.findIndex(function) returns the position of the first item that is true for a function")
console.log(age.findIndex(checkAdult))
console.log("");
console.log("");


function lis(item,index){
    console.log(item ,index)
    }
// forEach()
console.log("use array.forEach(function) returns each item in the array")    
console.log(age.forEach(lis))
console.log("");
console.log("");

//includes()
console.log("use array.includes('ab') returns true if ab is in the array")
console.log(fruits.includes("PawPaw"))
console.log(age.includes(32))
console.log("");
console.log("");

//indexOf() gets the index of first occurrence of a an element
console.log("use array.indexOf('ab') gets the first position(index) of ab")
console.log(fruits.indexOf("Mango"))
console.log("");
console.log("");

var a = "23"
// isArray()
console.log("use Array.isArray(a) checks if a is an array")
console.log(Array.isArray(a))
console.log("");
console.log("");

//join()
console.log("use array.join() converts an array into string with default comma")
console.log(fruits.join())
console.log("");
console.log("");

//keys()
console.log("use array.keys() to list the positions of each element in an Array")
var fk = fruits.keys()
for (x of fk){
 console.log(x)
 }
console.log("");
console.log("");
 
//length
console.log("use array.length returns the length of an array")
console.log(fruits.length)
console.log("");
console.log("");

//lastIndexOf() gets the index of the last occurence of an item from a start position
console.log("use array.lastIndexOf('ab') gets the index of the last occurence of an item from a start position")
console.log(fruits.lastIndexOf("Mango"))
console.log("");
console.log("");

function square(item){
 return item * item
}
//map()
console.log("use array.map(function) executes the function on each element")
 console.log(age.map(square))
console.log("");
console.log("");
 
//pop()
console.log("use array.pop() removes the last element in an array")
console.log(fruits.pop())
console.log("");
console.log("");

//shift()
console.log("use array.shift() removes the first element in an array")
console.log(age.shift())
console.log("");
console.log("");

//making all age cubed using prototype
console.log("use Array.prototype.var_name = function(){} then array.var_name to add new method to an Array");
Array.prototype.myUCase = function(){
   for (i=0;i < this.length; i++){
      //this[i] = this[i].toUpperCase();
      this[i] *=this[i];
   }
};
age.myUCase();
console.log(age)
console.log("");
console.log("");


//push to add to the end of an array
console.log("use array.push() to add to the end of an array");
console.log(fruits.push("Apple"))
console.log("");
console.log("");

//unshift adds to the start of an array
console.log("use array.unshift() to add to the end of an array");
fruits.unshift("Kiwi")
console.log(fruits)
console.log("");
console.log("");




