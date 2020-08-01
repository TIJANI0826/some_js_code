function myReplace(str, before, after) {
  if(before[0] == before[0].toUpperCase()){
    after = after[0].toUpperCase() + after.substr(1);
  }
    
    return str.replace(before,after);
  }
  
  console.log(myReplace("Let us go to the store", "store", "mall"));
  