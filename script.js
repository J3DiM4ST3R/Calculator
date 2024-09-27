// Get the display element
const display = document.getElementById('display');

// Function to append a number or symbol to the display
function appendNumber(number) {
    display.value += number;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value); // Use eval with caution
    } catch (error) {
        display.value = 'Error';
    }
}
