/* -------------------------------
   Part 2: Counter Functions
---------------------------------*/
// Global variable
let clickCount = 0;

// Function to increment counter
function incrementCounter(amount) {
    let newCount = clickCount + amount; // local variable
    clickCount = newCount; // update global variable
    return newCount;
}

// Function to update DOM display
function updateCounterDisplay() {
    const counterEl = document.getElementById('counter');
    counterEl.textContent = `Clicks: ${clickCount}`;
}

// Event listener for counter button
document.getElementById('incrementButton').addEventListener('click', function() {
    incrementCounter(1);
    updateCounterDisplay();
});

/* -------------------------------
   Part 3: Popup Toggle
---------------------------------*/
// Function to toggle CSS animation
function toggleAnimation(elementId, className) {
    const element = document.getElementById(elementId);
    element.classList.toggle(className);
}

// Event listener for popup button
document.getElementById('popupButton').addEventListener('click', function() {
    toggleAnimation('popup', 'show');
});

/* -------------------------------
   Part 3: Additional Example
   - Button triggers bouncing box faster
---------------------------------*/
document.getElementById('myButton').addEventListener('click', function() {
    const box = document.querySelector('.box');
    box.style.animationDuration = '0.5s'; // make it bounce faster temporarily
    setTimeout(() => {
        box.style.animationDuration = '2s'; // revert back
    }, 1000);
});
