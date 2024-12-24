document.addEventListener("DOMContentLoaded", function() {
    initializePage();
});

function selectAreaOption(option) {
    document.getElementById('areaOptions').value = option;
    showAreaForm(option);
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
    document.querySelectorAll('.sidebar ul li').forEach(item => {
        item.classList.remove('active');
    });
    if (sectionId === 'find_area') {
        document.getElementById('findAreaMenu').classList.add('active');
    } else if (sectionId === 'find_perimeter') {
        document.getElementById('findPerimeterMenu').classList.add('active');
    }
}

function showAreaForm(shape) {
    document.querySelectorAll('.areaForm').forEach(form => {
        form.style.display = 'none';
    });
    console.log(`Showing form: ${shape}Form`);
    const targetForm = document.getElementById(shape + 'Form');
    if (targetForm) {
        targetForm.style.display = 'block';
    } else {
        console.error(`Form not found: ${shape}Form`);
    }
}

// Circle Area Calculation
function calculateCircleArea() {
    let radius = parseFloat(document.getElementById('circleRadius').value);
    let unit = document.getElementById('circleAreaUnit').value;
    let area = Math.PI * radius * radius;
    document.getElementById('circleAreaResult').innerText = `Area of Circle: ${area.toFixed(2)} ${unit}`;
}

// Rectangle Area Calculation
function calculateRectangleArea() {
    let length = parseFloat(document.getElementById('rectangleLength').value);
    let width = parseFloat(document.getElementById('rectangleWidth').value);
    let unit = document.getElementById('rectangleAreaUnit').value;
    let area = length * width;
    document.getElementById('rectangleAreaResult').innerText = `Area of Rectangle: ${area.toFixed(2)} ${unit}`;
}

// Square Area Calculation
function calculateSquareArea() {
    let side = parseFloat(document.getElementById('squareSide').value);
    let unit = document.getElementById('squareAreaUnit').value;
    let area = side * side;
    document.getElementById('squareAreaResult').innerText = `Area of Square: ${area.toFixed(2)} ${unit}`;
}

// Triangle Area Calculation
function calculateTriangleArea() {
    let base = parseFloat(document.getElementById('triangleBase').value);
    let height = parseFloat(document.getElementById('triangleHeight').value);
    let unit = document.getElementById('triangleAreaUnit').value;
    let area = 0.5 * base * height;
    document.getElementById('triangleAreaResult').innerText = `Area of Triangle: ${area.toFixed(2)} ${unit}`;
}
// Circular Sector Area Calculation
function calculateCircularSectorArea() {
    let radius = parseFloat(document.getElementById('sectorRadius').value);
    let angle = parseFloat(document.getElementById('sectorAngle').value);
    let unit = document.getElementById('sectorAreaUnit').value;
    let area = 0.5 * radius * radius * angle;
    document.getElementById('circularSectorAreaResult').innerText = `Area of Circular Sector: ${area.toFixed(2)} ${unit}`;
}

// Rhombus Area Calculation
function calculateRhombusArea() {
    let d1 = parseFloat(document.getElementById('rhombusDiagonal1').value);
    let d2 = parseFloat(document.getElementById('rhombusDiagonal2').value);
    let unit = document.getElementById('rhombusAreaUnit').value;
    let area = 0.5 * d1 * d2;
    document.getElementById('rhombusAreaResult').innerText = `Area of Rhombus: ${area.toFixed(2)} ${unit}`;
}

// Parallelogram Area Calculation
function calculateParallelogramArea() {
    let base = parseFloat(document.getElementById('parallelogramBase').value);
    let height = parseFloat(document.getElementById('parallelogramHeight').value);
    let unit = document.getElementById('parallelogramAreaUnit').value;
    let area = base * height;
    document.getElementById('parallelogramAreaResult').innerText = `Area of Parallelogram: ${area.toFixed(2)} ${unit}`;
}

// Trapezoid Area Calculation
function calculateTrapezoidArea() {
    let a = parseFloat(document.getElementById('trapezoidBase1').value);
    let b = parseFloat(document.getElementById('trapezoidBase2').value);
    let height = parseFloat(document.getElementById('trapezoidHeight').value);
    let unit = document.getElementById('trapezoidAreaUnit').value;
    let area = 0.5 * (a + b) * height;
    document.getElementById('trapezoidAreaResult').innerText = `Area of Trapezoid: ${area.toFixed(2)} ${unit}`;
}

// Hexagon Area Calculation
function calculateHexagonArea() {
    let side = parseFloat(document.getElementById('hexagonSide').value);
    let unit = document.getElementById('hexagonAreaUnit').value;
    let area = ((3 * Math.sqrt(3)) / 2) * (side * side);
    document.getElementById('hexagonAreaResult').innerText = `Area of Hexagon: ${area.toFixed(2)} ${unit}`;
}

// Octagon Area Calculation
function calculateOctagonArea() {
    let side = parseFloat(document.getElementById('octagonSide').value);
    let unit = document.getElementById('octagonAreaUnit').value;
    let area = 2 * (1 + Math.sqrt(2)) * (side * side);
    document.getElementById('octagonAreaResult').innerText = `Area of Octagon: ${area.toFixed(2)} ${unit}`;
}

// Polygon Area Calculation
function calculatePolygonArea() {
    let side = parseFloat(document.getElementById('polygonSide').value);
    let numberOfSides = parseFloat(document.getElementById('polygonNumberOfSides').value);
    let unit = document.getElementById('polygonAreaUnit').value;
    let area = (numberOfSides * Math.pow(side, 2)) / (4 * Math.tan(Math.PI / numberOfSides));
    document.getElementById('polygonAreaResult').innerText = `Area of Polygon: ${area.toFixed(2)} ${unit}`;
}

// Sphere Area Calculation
function calculateSphereArea() {
    let radius = parseFloat(document.getElementById('sphereRadius').value);
    let unit = document.getElementById('sphereAreaUnit').value;
    let area = 4 * Math.PI * Math.pow(radius, 2);
    document.getElementById('sphereAreaResult').innerText = `Area of Sphere: ${area.toFixed(2)} ${unit}`;
}

// Cuboid Area Calculation
function calculateCuboidArea() {
    let length = parseFloat(document.getElementById('cuboidLength').value);
    let width = parseFloat(document.getElementById('cuboidWidth').value);
    let height = parseFloat(document.getElementById('cuboidHeight').value);
    let unit = document.getElementById('cuboidAreaUnit').value;
    let area = 2 * (length * width + length * height + width * height);
    document.getElementById('cuboidAreaResult').innerText = `Surface Area of Cuboid: ${area.toFixed(2)} ${unit}`;
}

// Cylinder Area Calculation
function calculateCylinderArea() {
    let radius = parseFloat(document.getElementById('cylinderRadius').value);
    let height = parseFloat(document.getElementById('cylinderHeight').value);
    let unit = document.getElementById('cylinderAreaUnit').value;
    let area = 2 * Math.PI * radius * (height + radius);
    document.getElementById('cylinderAreaResult').innerText = `Surface Area of Cylinder: ${area.toFixed(2)} ${unit}`;
}

// Cone Area Calculation
function calculateConeArea() {
    let radius = parseFloat(document.getElementById('coneRadius').value);
    let slantHeight = parseFloat(document.getElementById('coneSlantHeight').value);
    let unit = document.getElementById('coneAreaUnit').value;
    let area = Math.PI * radius * (radius + slantHeight);
    document.getElementById('coneAreaResult').innerText = `Surface Area of Cone: ${area.toFixed(2)} ${unit}`;
}
