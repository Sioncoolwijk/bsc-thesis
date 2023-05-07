function gptGenerate() {

    const givenText = document.getElementById('givenText');
    const outputText = document.getElementById('textInput');    
    const myButton = document.getElementById('exampleButton');

    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: givenText.innerText
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
            }
        }

        typeCharacter(); // Start the typing effect
    })

    // Disable button with a slight delay
    setTimeout(disableButton, 1000)
    function disableButton() {
        myButton.disabled = true;

        setTimeout(() => {
            exampleButton.disabled = false;
        }, 3000);
    }

};
