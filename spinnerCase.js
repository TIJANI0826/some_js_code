function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    str = str.replace(/[^a-zA-Z0-9-]|[a-z][A-Z]/g, function(x) {
      if (x.match(/[a-z][A-Z]/)) {
          return x[0] + "-" + x[1];
          } else {
          return "-";
          }
    });
    return str.replace(/[A-Z]/g, function(x){
      return x.toLowerCase();
    });
  }
  console.log(spinalCase("This_Spinal_Cord"))
// hyphenated example converts BorderTop to border-top
//   function styleHyphenFormat(propertyName) {
//     function upperToHyphenLower(match, offset, string) {
//       return (offset > 0 ? '-' : '') + match.toLowerCase();
//     }
//     return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
//   }