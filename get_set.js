// Only change code below this line 
// A temperature class
class Thermostat{
  constructor(fahrenheit){
    this._fahrenheit = fahrenheit;
  }
  //getter
  get temperature(){
    return  5/9 * (this._fahrenheit - 32);
  }
  //setter
  set temperature(updatedtemp){
    // const C =  5/9 * (updatedtemp - 32)
    this._fahrenheit = updatedtemp * 9.0 / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;

temp = thermos.temperature; // 26 in Celsius
console.log(temp);