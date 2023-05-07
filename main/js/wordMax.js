
/* 
The idea for this code is to put constraints (amount of words and characters per word) on the input data from the participant.
So that the amount of tokens that can are used in the API do not add up to a high extent.
Source for a part of this code: https://stackoverflow.com/questions/25148479/how-can-i-limit-words-not-characters-in-textarea-html
*/


$('textarea[name=textInput]').keyup(function(){
    // Get value of textarea
    var str = $('textarea[name=textInput]').val();
    // Check if value has more than 20 words
    if (str.split(' ').length > 500) {
        // Create string with first 500 words
        var str_new = str.split(' ').splice(0, 500).join(' ');
        // Overwrite the content with the first 500 words
        $('textarea[name=textInput]').val(str_new);
    } else {
        // Check if any word has more than 35 characters
        var words = str.split(' ');
        var updatedWords = [];
        for (var i = 0; i < words.length; i++) {
            if (words[i].length > 35) {
                updatedWords.push(words[i].substring(0, 35));
            } else {
                updatedWords.push(words[i]);
            }
        }
        // Update the textarea value with truncated words
        $('textarea[name=textInput]').val(updatedWords.join(' '));
    }
});
