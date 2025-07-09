// Get the display element
const display = document.getElementById('display');

// Function to append a number or symbol to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append a function like sin( or log(
function appendFunction(func) {
    const display = document.getElementById("display");
    display.value += func;
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
        let expression = display.value
            .replace(/sin\(/g, "Math.sin(")
            .replace(/cos\(/g, "Math.cos(")
            .replace(/tan\(/g, "Math.tan(")
            .replace(/log\(/g, "Math.log10(")
            .replace(/sqrt\(/g, "Math.sqrt(")
            .replace(/\^/g, "**")
            .replace(/π/g, "Math.PI")
            .replace(/\be\b/g, "Math.E")
            .replace(/(\d+)%/g, "($1/100)");

        display.value = eval(expression); // Use eval with caution
    } catch (error) {
        display.value = 'Error';
    }
}

// Toggle scientific mode
const toggleButton = document.getElementById("toggle-mode");
const sciSection = document.querySelector(".sci-buttons");

if (toggleButton && sciSection) {
  toggleButton.addEventListener("click", () => {
    sciSection.classList.toggle("hidden");
    toggleButton.textContent = sciSection.classList.contains("hidden")
      ? "Scientific"
      : "Standard";
  });
}