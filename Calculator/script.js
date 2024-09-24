// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Append character to display
function appendToDisplay(value) {
    let display = document.getElementById('display');

    if (value === '÷') {
        display.value += '/';
    } else if (value === '%') {
        display.value = (parseFloat(display.value) / 100).toString();
    } else {
        display.value += value;
    }
}

// Calculate the result
function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}