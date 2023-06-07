const e = require("cors");

function gptGenerate(givenTextId, textAreaId, exampleButtonId, words, textUnderButton, clickedNotAllowed) {

    const givenText = document.getElementById(givenTextId);
    const outputText = document.getElementById(textAreaId);    
    const myButton = document.getElementById(exampleButtonId);
    const loadingText = document.getElementById(textUnderButton);

    document.getElementById('clicked-gpt').value = clickedNotAllowed;

    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: givenText.innerText,
            words: words
        })
    })
    .then(res => res.json())
    .then(data => {
        const content = data.completion.content;
        let currentIndex = 0;
        outputText.value = '';

        function typeCharacter() {
            if (currentIndex < content.length) {
                outputText.value += content.charAt(currentIndex);
                currentIndex++;
                setTimeout(typeCharacter, 10); // Adjust the delay (in milliseconds) to control the typing speed
                countWords();
                countWords2();
            }
        }

        typeCharacter(); // Start the typing effect
    })

    // Disable button with a slight delay
    disableButton();
    function disableButton() {
        myButton.disabled = true;

        setTimeout(() => {
            myButton.disabled = false;
        }, 30000);
    }

    // Show loading text
    showLoadingText();
    function showLoadingText() {
        loadingText.style.display = 'flex';

        setTimeout(() => {
            loadingText.style.display = 'none';
        }, 5000);
    }

};
