// The global variable
var globalTitle = "This Is Spinal Tap"
// Only change code below this line
function urlSlug(title) {
    return title.trim().toLowerCase().split(/\s+/).join("-")
}
// Only change code above this line
console.log(urlSlug(globalTitle))