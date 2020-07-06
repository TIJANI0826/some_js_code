// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  
  //Only change code below this line
  function updateRecords(id, prop, value) {

    collection[id][prop] = value;
   /*
      If prop isn't "tracks" and value isn't empty (""), 
      update or set the value for that record album's property.
    */
   if (prop !== "tracks" && value !== ""){
    collection[id][prop] = (value);
   }
    /* If prop is "tracks" but the album doesn't have a "tracks" property,
    create an empty array before adding the 
    new value to the album's corresponding property.*/

    if (prop === "tracks"){
        if (collection[id].hasOwnProperty(prop) == false){
            collection[id] = {"tracks":[]};
            collection[id][prop].push(value) ;
        
        }else{
            collection[id][prop].push(value);
        }
    }
    /* If prop is "tracks" and value isn't empty (""),
     push the value onto the end of the album's 
     existing tracks array. */

    if (prop === "tracks" && value !== ""){
        collection[id][prop].push(value);
    }
    /** If value is empty (""), 
    delete the given prop property from the album.*/

    if (value === ""){
        delete collection[id][prop];
    }
    return collection;
}
// function updateRecords(id, prop, value) {
//     collection[id][prop] = value;
//     return collection;
// }
a = updateRecords(5439, "artist","");
console.log(a);