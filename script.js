const textBefore = document.querySelector(".text-before")
const textAfter = document.querySelector(".text-after")
const keys = document.querySelectorAll(".key")


// clear the data 
function clearData() {
    textAfter.textContent = '';
    textBefore.textContent = '';
}

const clear = document.querySelector('.clear')
    clear.addEventListener('click', () => {
    clearData()
})

// function for deletation of a number
function del() {
    textBefore.textContent = textBefore.textContent.slice(0, -1)
}

const dele = document.querySelector('.del')
dele.addEventListener('click', () => {
    del()
})

function updateDisplay(keyValue) {
    if(keyValue === '*' || keyValue === '/' || keyValue === '-' || keyValue === '+'){
        textBefore.textContent += ' ' + keyValue + ' ';
    }else{
        textBefore.textContent += keyValue;
    }
}
// function to write and update text.
keys.forEach((keys) => {
    keys.addEventListener('click', () => {
        let a = keys.getAttribute('data-key')
        updateDisplay(a)
    })
})
// Equals button function
const equal = document.getElementById('equal')
equal.addEventListener('click', () => {
    try {
        const calculation = calculate(textBefore.textContent);
        textAfter.textContent = textBefore.textContent; // Store the expression
        textBefore.textContent = calculation; // Display the result
    } catch (e) {
        textBefore.textContent = "Syntax Error"; // Handle errors
    }
})

// Function for calculation
function calculate(expression) {
    try {
        return Function('"use strict"; return (' + expression + ')')();
    } catch (e) {
        return "Syntax Error";
    }
}