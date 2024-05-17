let timeLeft = 600; // 10 minutes in seconds
let timerId;

// Function to start the timer
function startTimer() {
    timerId = setInterval(updateTimer, 1000);
}

// Function to update the timer
function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('time').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    } else {
        clearInterval(timerId);
        enableInput();
    }
}

// Function to enable input for the user
function enableInput() {
    document.getElementById('userInput').disabled = false;
    document.getElementById('submitBtn').disabled = false;
}

// Function to submit the user's input
document.getElementById('submitBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput && userInput.length <= 50) {
        // Append the user input to the story
        const storyText = document.getElementById('storyText');
        const newSentence = document.createElement('p');
        newSentence.textContent = userInput;
        storyText.appendChild(newSentence);

        // Reset input field and timer
        document.getElementById('userInput').value = '';
        document.getElementById('userInput').disabled = true;
        document.getElementById('submitBtn').disabled = true;
        timeLeft = 600;
        startTimer();
    }
});

// Initial call to start the timer
startTimer();
