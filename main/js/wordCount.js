
/* This script keeps track of the amount of words in the text area and displays it in a counter*/

function wordCounter(str) {
    if (!str || typeof str !== 'string') {
      return 0;
    }

    const words = str.trim().split(/\s+/);
    return words.length;
  }

function countWords() {
    const textInput = document.getElementById("textInput");
    const wordCountElement = document.getElementById("wordCount");
    const wordCount = wordCounter(textInput.value);
    wordCountElement.textContent = wordCount;
  }

  const textInput = document.getElementById("textInput");
  textInput.addEventListener("input", countWords);