const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// forEach() method calls a function for each element in an array.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.classList.contains('clear')) {
            display.value = ''; 
        } 
        else if (button.classList.contains('delete')) {
            display.value = display.value.slice(0, -1); 
        } 
        else if (button.classList.contains('equals')) {
            try {
                display.value = eval(display.value); 
            } 
            catch (error) {
                display.value = 'Error';
            }
        } 
        else {
            display.value += value; 
        }
    });
});



/*
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const action = button.classList[0]; 
        const value = button.getAttribute('data-value');

        switch (action) {
            case 'clear':
                display.value = '';
                break;
            case 'delete':
                display.value = display.value.slice(0, -1);
                break;
            case 'equals':
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
                break;
            default:
                display.value += value;
        }
    });
});
*/


