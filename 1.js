const paragraphs = Array.from(document.querySelectorAll("li > p")).map(el => el.innerText);

function blinkText(paragraphs) {
    let currentParagraphIndex = 0;
    let currentLetterIndex = 0;
    let currentParagraph = paragraphs[currentParagraphIndex];
    const paragraphElement = document.getElementById('my-paragraph');
    const waitTime = 300; // wait for 5 seconds before switching to the next paragraph

    function showNextLetter() {
        const currentLetter = currentParagraph.charAt(currentLetterIndex);
        const newText = paragraphElement.innerHTML + currentLetter;
        paragraphElement.innerHTML = newText;

        currentLetterIndex++;
        if (currentLetterIndex >= currentParagraph.length) {
            // If we're done showing the current paragraph, wait for 5 seconds
            setTimeout(() => {
                currentLetterIndex = 0;
                currentParagraphIndex++;
                if (currentParagraphIndex >= paragraphs.length) {
                    currentParagraphIndex = 0;
                }
                currentParagraph = paragraphs[currentParagraphIndex];
                paragraphElement.innerHTML = ""; // clear the paragraph
                setTimeout(showNextLetter, waitTime); // wait for 5 seconds before showing the next paragraph
            }, waitTime);
        } else {
            setTimeout(showNextLetter, 65); // show the next letter after a short delay
        }
    }

    showNextLetter(); // start showing the first letter
}

blinkText(paragraphs);