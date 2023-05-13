// select all calculator buttons
const buttons = document.querySelectorAll('.button');

// select the screen that displays the calculator operation and result
const operationScreen = document.querySelector('.calc-operation');
const resultScreen = document.querySelector('.calc-typed');

// initialize variables for the calculator operation and result
let operation = '';
let result = '';

// add event listeners to all calculator buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerText;

        if (buttonValue === 'C') {
            // clear the operation and result screens
            operation = '';
            result = '';
        } else if (buttonValue === '<') {
            // remove the last character from the operation screen
            operation = operation.slice(0, -1);
        } else if (buttonValue === '=') {
            // evaluate the current operation and display the result
            try {
                result = eval(operation);
            } catch (error) {
                result = 'Error';
            }
        } else {
            // add the button value to the operation screen
            operation += buttonValue;
        }

        // update the operation and result screens
        operationScreen.innerText = operation;
        resultScreen.innerText = result;
    });
});
