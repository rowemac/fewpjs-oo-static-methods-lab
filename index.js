class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    string = string[0].toUpperCase() + string.slice(1)
    let wordsArray = string.split(" ")
    let lowerCaseWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
 

    for(let i = 0; i < wordsArray.length; i++) {
      if(!(lowerCaseWords.includes(wordsArray[i]))) {
        wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
      }
    }
    return wordsArray.join(" ")
  }
    


}