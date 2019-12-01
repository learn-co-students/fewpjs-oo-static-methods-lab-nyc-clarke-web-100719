class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^-,'\w\s]+/g, '');
  }

  static titleize(string) {
    let exceptionsArr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newArr = [];
    let sentence = string.split(" ");
    sentence.forEach(function(word){
      if (exceptionsArr.includes(word)) {
        newArr.push(word);
      } else {
        newArr.push(Formatter.capitalize(word));
      }
    })
    return Formatter.capitalize(newArr.join(" "))
  }
}