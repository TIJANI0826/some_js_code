function translatePigLatin(str) {
    
    if(str.search('[aeiou]') == -1){
        return str + "ay";
    }
    if (str.search('[aeiou]') == 0){
         return str + "way"
    }
    else if(str.search('[aeiou]') != 0){
        return  str.substr(str.search('[aeiou]')) + str.substr(0,str.search('[aeiou]')) + "ay"
    }
    return str;
  }
  
  console.log(translatePigLatin("california"));
  