let memory = 0;
let isDegreeMode = true;  // By default, we'll assume Degree mode for trigonometry

function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function backspace() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function calculateResult() {
    let expression = document.getElementById("display").value;

    try {
        // Replace custom operators with valid JavaScript operators
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
        expression = expression.replace(/\^/g, '**');

        // Handle percentage
        expression = expression.replace(/(\d+(\.\d+)?)%/g, (match, p1) => {
            return '(' + p1 + '*0.01)';
        });

        // Replace constants
        expression = expression.replace(/π/g, 'Math.PI').replace(/e/g, 'Math.E');

        // Replace functions with JavaScript Math functions
        expression = parseFunctions(expression);

        // Evaluate the expression
        let result = eval(expression);

        if (result === undefined) {
            throw new Error('Result is undefined');
        }

        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error";
        console.error(e);
    }
}

function parseFunctions(expression) {
    // Handle nth roots y√x
    expression = expression.replace(/(\d+(\.\d+)?)√(\d+(\.\d+)?)/g, (match, y, p1, x) => {
        return 'Math.pow(' + x + ', 1/' + y + ')';
    });

    // Handle cube roots ∛x or 3√x
    expression = expression.replace(/(∛|3√)(\d+(\.\d+)?)/g, (match, p1, x) => {
        return 'Math.cbrt(' + x + ')';
    });

    // Handle square roots √x
    expression = expression.replace(/√(\d+(\.\d+)?)/g, (match, x) => {
        return 'Math.sqrt(' + x + ')';
    });

    // Handle exponents like e^(x)
    expression = expression.replace(/e\^\(/g, 'Math.exp(');
    expression = expression.replace(/10\^\(/g, 'Math.pow(10,');

    // Handle logarithms
    expression = expression.replace(/ln\(/g, 'Math.log(');
    expression = expression.replace(/log\(/g, 'Math.log10(');

    // Handle trigonometric functions
    const trigFunctions = ['sin', 'cos', 'tan', 'asin', 'acos', 'atan'];

    trigFunctions.forEach(func => {
        const regex = new RegExp(func + '\\(', 'g');
        expression = expression.replace(regex, function (match) {
            return func + '_custom(';
        });
    });

    // Handle factorials
    expression = expression.replace(/(\d+(\.\d+)?)!/g, 'factorial($1)');

    return expression;
}

// Trigonometric functions handling degree/radian modes
function sin_custom(x) {
    return Math.sin(convertToRadians(x));
}

function cos_custom(x) {
    return Math.cos(convertToRadians(x));
}

function tan_custom(x) {
    return Math.tan(convertToRadians(x));
}

function asin_custom(x) {
    return convertToDegrees(Math.asin(x));
}

function acos_custom(x) {
    return convertToDegrees(Math.acos(x));
}

function atan_custom(x) {
    return convertToDegrees(Math.atan(x));
}

function convertToRadians(angle) {
    return isDegreeMode ? angle * (Math.PI / 180) : angle;
}

function convertToDegrees(angle) {
    return isDegreeMode ? angle * (180 / Math.PI) : angle;
}

// Factorial function
function factorial(n) {
    n = Math.floor(n);
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Math functions
function insertFunction(func) {
    appendToDisplay(func + '(');
}

function powerY() {
    appendToDisplay('^');
}

function expFunction() {
    appendToDisplay('e^(');
}

function tenPower() {
    appendToDisplay('10^(');
}

function yRootX() {
    appendToDisplay('√');
}

function cubeRoot() {
    appendToDisplay('∛');
}

function squareRoot() {
    appendToDisplay('√');
}

function reciprocal() {
    let currentValue = document.getElementById("display").value;
    if (currentValue === '') return;
    document.getElementById("display").value = '1/(' + currentValue + ')';
}

function factorialButton() {
    appendToDisplay('!');
}

// Memory functions
function storeMemory() {
    memory = parseFloat(document.getElementById("display").value);
    document.getElementById("display").value = "";
}

function subtractMemory() {
    memory -= parseFloat(document.getElementById("display").value);
    document.getElementById("display").value = "";
}

function recallMemory() {
    document.getElementById("display").value = memory;
}

// Handle switching between degrees and radians
document.getElementById("deg").addEventListener('change', () => {
    isDegreeMode = true;
});

document.getElementById("rad").addEventListener('change', () => {
    isDegreeMode = false;
});

function goBack() {
    window.location.href = 'index.html';
}
