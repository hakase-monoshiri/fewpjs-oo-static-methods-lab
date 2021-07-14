class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {

    // the, a, an, but, of, and, for, at, by, and from

    const wordsArray = string.split(" ");

    const firstWord = this.capitalize(wordsArray[0]);

    const finalArray = wordsArray.map(function(word) {
      switch (word) {
        case "the":
        case "a":
        case "an":
        case "but":
        case "of":
        case "and":
        case "for":
        case "at":
        case "by":
        case "from":
          return word;
          break;
        default: 
          return this.capitalize(word);
          break;
      }
    }, this);

    finalArray[0] = firstWord;

    debugger

    return finalArray.join(" ")

  }
}