const analyzer = {
  getWordCount: (text) => {
    text = text.trim();
    if (text === "" || !/[a-zA-Z0-9]/.test(text)) {
      return 0;
    }
    const words = text.split(/\s+/);
    return words.length;
    //return palabras.length;

    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {

    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    if (text === "") {
      return 0;
    } else {
      const characters = text.match(/[a-zA-Z0-9]/g);

      if (characters === null) {
        return 0;
      }
      return characters.length;
    }
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {

    if (!text.match(/[a-zA-Z0-9]/)) {
      return 0
    }
    const words = text.split(/\s+/); //arreglo con palabras separadas de a una
    let lengthSum = 0;

    for (let i = 0; i < words.length; i++) {
      const length = words.length;
      lengthSum += length;
    }
    const averageLength = lengthSum / words.length;
    return parseFloat(averageLength.toFixed(2))
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g)
    if (numbers === null) {
      return 0;
    } else {
      return numbers.length;
      //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    }
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    let sum = 0;
    if (numbers === null) {
      return 0;
    }
    for (let i = 0; i < numbers.length; i++) {
      sum += parseFloat(numbers[i]);
    }
    return sum
  }

}
  ;
export default analyzer;
