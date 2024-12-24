function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    document.querySelectorAll('.sidebar ul li').forEach(li => {
        li.classList.remove('active');
    });
    document.querySelector(`.sidebar ul li[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

function calculateFactorial() {
    let num = parseInt(document.getElementById('factorialInput').value);
    if (num < 0) {
        document.getElementById('factorialResult').innerText = 'Factorial is not defined for negative numbers';
        return;
    }
    let result = 1;
    let steps = `${num}! = `;
    for (let i = num; i > 0; i--) {
        result *= i;
        steps += i > 1 ? `${i} × ` : `${i} = `;
    }
    steps += result;
    document.getElementById('factorialResult').innerText = steps;
}

function showAreaForm(shape) {
    document.querySelectorAll('.areaForm').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(shape + 'Form').style.display = 'block';
}

function calculateCircleArea() {
    let radius = parseFloat(document.getElementById('circleRadius').value);
    let area = Math.PI * radius * radius;
    document.getElementById('circleAreaResult').innerText = `Area of Circle: ${area.toFixed(2)}`;
}

function showPerimeterForm(shape) {
    document.querySelectorAll('.perimeterForm').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(shape + 'PerimeterForm').style.display = 'block';
}

function calculateSquarePerimeter() {
    let side = parseFloat(document.getElementById('squareSide').value);
    let perimeter = 4 * side;
    document.getElementById('squarePerimeterResult').innerText = `Perimeter of Square: ${perimeter.toFixed(2)}`;
}
