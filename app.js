
const operation = document.querySelectorAll('.operation');
const output = document.getElementById('output');
let counter = 0;
const limit = [11, -11];
operation.forEach(button => {
    button.addEventListener('click', (e) => {
        const operationType = e.target.getAttribute('id');
        calc(operationType);
        if (limit.includes(counter)) {
            counter = 0;
            showOutput(output)
        }
    })

})

const showOutput = (output) => output.innerText = counter;

const calc = (operationType) => {
    switch (operationType) {
        case 'add':
            counter++;
            showOutput(output)
            break;

        case 'subtract':
            counter--;
            showOutput(output)
            break;


    }

}