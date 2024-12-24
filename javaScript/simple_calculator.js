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
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}

function convertToPercentage() {
    let currentValue = document.getElementById("display").value;
    if (currentValue) {
        let percentageValue = parseFloat(currentValue) / 100;
        document.getElementById("display").value = percentageValue;
    }
}
function goBack() {
    window.location.href = 'index.html';
}
