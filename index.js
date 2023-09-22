import analyzer from './analyzer.js';

const textinput = document.querySelector('textarea[name="user-input"]');
const wordCount = document.querySelector('li[data-testid="word-count"]');
const characterCount = document.querySelector('li[data-testid="character-count"]');
const charactersNoSpaces = document.querySelector('li[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('li[data-testid="number-count"]');
const numberSum = document.querySelector('li[data-testid="number-sum"]');
const averageWordLength = document.querySelector('li[data-testid="word-length-average"]');

wordCount.textContent = "Words: 0";
characterCount.textContent = "Characters: 0";
charactersNoSpaces.textContent = "Characters excluding spaces: 0";
numberCount.textContent = "Numbers: 0";
numberSum.textContent = "Numbers Sum: 0";
averageWordLength.textContent = "Average word length: 0";

textinput.addEventListener("input", function() {   
  const text = textinput.value
  wordCount.textContent = "Words: " + analyzer.getWordCount(text) ;
  characterCount.textContent = "Characters: " + analyzer.getCharacterCount(text);
  charactersNoSpaces.textContent ="Characters excluding spaces: " + analyzer.getCharacterCountExcludingSpaces(text);
  averageWordLength.textContent= "Average word length: " + analyzer.getAverageWordLength(text);
  numberCount.textContent = "Numbers: " + analyzer.getNumberCount(text);
  numberSum.textContent = "Numbers Sum: " + analyzer.getNumberSum(text);
});

document.getElementById("reset-button").addEventListener("click", function () {
  textinput.value= "";
  wordCount.textContent = "Words: 0";
  characterCount.textContent = "Characters: 0";
  charactersNoSpaces.textContent = "Characters excluding spaces: 0";
  numberCount.textContent = "Numbers: 0";
  numberSum.textContent = "Numbers Sum: 0";
  averageWordLength.textContent = "Average word length: 0"

})