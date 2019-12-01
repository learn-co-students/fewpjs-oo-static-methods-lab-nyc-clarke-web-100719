class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-\s']+/g, '')
  }
  static titleize(str){
    const noInclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let words = str.split(' ')
    for(let i = 0; i < words.length; i++){
      if(i === 0) result.push(this.capitalize(words[0]))
      else{
        noInclude.includes(words[i])?result.push(words[i]):result.push(this.capitalize(words[i]))
      }
    }
    return result.join(' ')
  }
}