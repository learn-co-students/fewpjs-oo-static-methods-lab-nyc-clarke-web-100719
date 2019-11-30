class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, '')
  }

  static titleize(string) {
    let nonCapitalWords = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']
    let arrayString = string.split(" ")
    for (const index in arrayString) {
      if (index === "0") {
        arrayString[index] = this.capitalize(arrayString[index])
      } else {
        if (!nonCapitalWords.includes(arrayString[index])) {
          arrayString[index] = this.capitalize(arrayString[index])
        }
      }
    }
    return arrayString.join(" ")
  }
}