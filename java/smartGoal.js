let count = 0;
let maxGoal = 12;

const counterDisplay = document.querySelector('#counter-value');
const increaseBtn = document.querySelector('#increase-btn');
const decreaseBtn = document.querySelector('#decrease-btn');
const resetBtn = document.querySelector('#reset-btn');
const messageDisplay = document.querySelector('#message');

// Function to update the UI styles based on the count value
function updateUI() {
    // Display the current count text
    counterDisplay.textContent = count;

    // Check conditions
    if (count === maxGoal) {
        counterDisplay.style.color = '#28a745'; // Green color
        messageDisplay.textContent = "Great job! You reached your goal! 💧";
    } else if (count > 0 && count < maxGoal) {
        counterDisplay.style.color = '#007bff'; // Blue color
        messageDisplay.textContent = "Keep going, stay hydrated!";
    } else {
        counterDisplay.style.color = '#dc3545'; // Default dark grey
        messageDisplay.textContent = "progress has'n started yet";
    }
}

// Increase Button Click
increaseBtn.addEventListener('click', function() {
    count = count + 1;
    updateUI(); // Call our reusable function to update everything
});

// Decrease Button Click
decreaseBtn.addEventListener('click', function() {
    // Only decrease if count is greater than 0 (prevent negative numbers)
    if (count > 0) {
        count = count - 1;
    }
    updateUI();
});

// Reset Button Click
resetBtn.addEventListener('click', function() {
    count = 0;
    updateUI();
});