/* This script keeps track of the amount of words in the text area and displays it in a counter*/

function wordCounter2(str) {
    if (!str || typeof str !== 'string') {
      return 0;
    }

    const words = str.trim().split(/\s+/);
    return words.length;
  }

function countWords2() {
    const textInput2 = document.getElementById("textInput2");
    const wordCountElement = document.getElementById("wordCount2");
    const wordCount = wordCounter2(textInput2.value);
    wordCountElement.textContent = wordCount;
  }

const textInput2 = document.getElementById("textInput2");
textInput2.addEventListener("input", countWords2);