const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.classList.contains('clear')) {
            display.value = ''; // Clear display
        } 
        else if (button.classList.contains('delete')) {
            display.value = display.value.slice(0, -1); // Delete last character
        } 
        else if (button.classList.contains('equals')) {
            try {
                display.value = eval(display.value); // Evaluate expression
            } 
            catch (error) {
                display.value = 'Error';
            }
        } 
        else {
            display.value += value; // Add number/operator to display
        }
    });
});
