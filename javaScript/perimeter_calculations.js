document.addEventListener("DOMContentLoaded", function() {
    selectPerimeterOption('circle');
});

function selectPerimeterOption(option) {
    document.getElementById('perimeterOptions').value = option;
    showPerimeterForm(option);
}

function showPerimeterForm(shape) {
    document.querySelectorAll('.perimeterForm').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(shape + 'PerimeterForm').style.display = 'block';
}

// Circle Perimeter Calculation
function calculateCirclePerimeter() {
    let radius = parseFloat(document.getElementById('circleRadiusPerimeter').value);
    let unit = document.getElementById('circleUnit').value;
    let perimeter = 2 * Math.PI * radius;
    document.getElementById('circlePerimeterResult').innerText = `Circumference of Circle: ${perimeter.toFixed(2)} ${unit}`;
}

// Rectangle Perimeter Calculation
function calculateRectanglePerimeter() {
    let length = parseFloat(document.getElementById('rectanglePerimeterLength').value);
    let width = parseFloat(document.getElementById('rectanglePerimeterWidth').value);
    let unit = document.getElementById('rectangleUnit').value;
    let perimeter = 2 * (length + width);
    document.getElementById('rectanglePerimeterResult').innerText = `Perimeter of Rectangle: ${perimeter.toFixed(2)} ${unit}`;
}

// Square Perimeter Calculation
function calculateSquarePerimeter() {
    let side = parseFloat(document.getElementById('squareSide').value);
    let unit = document.getElementById('squareUnit').value;
    let perimeter = 4 * side;
    document.getElementById('squarePerimeterResult').innerText = `Perimeter of Square: ${perimeter.toFixed(2)} ${unit}`;
}




// Triangle Perimeter Calculation
function calculateTrianglePerimeter() {
    let a = parseFloat(document.getElementById('triangleSideA').value);
    let b = parseFloat(document.getElementById('triangleSideB').value);
    let c = parseFloat(document.getElementById('triangleSideC').value);
    let unit = document.getElementById('triangleUnit').value;
    let perimeter = a + b + c;
    document.getElementById('trianglePerimeterResult').innerText = `Perimeter of Triangle: ${perimeter.toFixed(2)} ${unit}`;
}

// Rhombus Perimeter Calculation
function calculateRhombusPerimeter() {
    let side = parseFloat(document.getElementById('rhombusSide').value);
    let unit = document.getElementById('rhombusUnit').value;
    let perimeter = 4 * side;
    document.getElementById('rhombusPerimeterResult').innerText = `Perimeter of Rhombus: ${perimeter.toFixed(2)} ${unit}`;
}

// Parallelogram Perimeter Calculation
function calculateParallelogramPerimeter() {
    let base = parseFloat(document.getElementById('parallelogramBase').value);
    let side = parseFloat(document.getElementById('parallelogramSide').value);
    let unit = document.getElementById('parallelogramUnit').value;
    let perimeter = 2 * (base + side);
    document.getElementById('parallelogramPerimeterResult').innerText = `Perimeter of Parallelogram: ${perimeter.toFixed(2)} ${unit}`;
}

// Trapezoid Perimeter Calculation
function calculateTrapezoidPerimeter() {
    let a = parseFloat(document.getElementById('trapezoidSideA').value);
    let b = parseFloat(document.getElementById('trapezoidSideB').value);
    let c = parseFloat(document.getElementById('trapezoidSideC').value);
    let d = parseFloat(document.getElementById('trapezoidSideD').value);
    let unit = document.getElementById('trapezoidUnit').value;
    let perimeter = a + b + c + d;
    document.getElementById('trapezoidPerimeterResult').innerText = `Perimeter of Trapezoid: ${perimeter.toFixed(2)} ${unit}`;
}

// Hexagon Perimeter Calculation
function calculateHexagonPerimeter() {
    let side = parseFloat(document.getElementById('hexagonSide').value);
    let unit = document.getElementById('hexagonUnit').value;
    let perimeter = 6 * side;
    document.getElementById('hexagonPerimeterResult').innerText = `Perimeter of Hexagon: ${perimeter.toFixed(2)} ${unit}`;
}

// Octagon Perimeter Calculation
function calculateOctagonPerimeter() {
    let side = parseFloat(document.getElementById('octagonSide').value);
    let unit = document.getElementById('octagonUnit').value;
    let perimeter = 8 * side;
    document.getElementById('octagonPerimeterResult').innerText = `Perimeter of Octagon: ${perimeter.toFixed(2)} ${unit}`;
}

// Polygon Perimeter Calculation
function calculatePolygonPerimeter() {
    let side = parseFloat(document.getElementById('polygonSide').value);
    let numberOfSides = parseFloat(document.getElementById('polygonNumberOfSides').value);
    let unit = document.getElementById('polygonUnit').value;
    let perimeter = numberOfSides * side;
    document.getElementById('polygonPerimeterResult').innerText = `Perimeter of Polygon: ${perimeter.toFixed(2)} ${unit}`;
}

// Sphere Perimeter Calculation
function calculateSpherePerimeter() {
    let radius = parseFloat(document.getElementById('sphereRadius').value);
    let unit = document.getElementById('sphereUnit').value;
    let perimeter = 2 * Math.PI * radius;
    document.getElementById('spherePerimeterResult').innerText = `Circumference of Sphere: ${perimeter.toFixed(2)} ${unit}`;
}

// Cuboid Perimeter Calculation
function calculateCuboidPerimeter() {
    let length = parseFloat(document.getElementById('cuboidLength').value);
    let width = parseFloat(document.getElementById('cuboidWidth').value);
    let height = parseFloat(document.getElementById('cuboidHeight').value);
    let unit = document.getElementById('cuboidUnit').value;
    let perimeter = 4 * (length + width + height);
    document.getElementById('cuboidPerimeterResult').innerText = `Sum of Edge Lengths of Cuboid: ${perimeter.toFixed(2)} ${unit}`;
}

// Cylinder Perimeter Calculation
function calculateCylinderPerimeter() {
    let radius = parseFloat(document.getElementById('cylinderRadius').value);
    let unit = document.getElementById('cylinderUnit').value;
    let perimeter = 2 * Math.PI * radius;
    document.getElementById('cylinderPerimeterResult').innerText = `Circumference of Cylinder Base: ${perimeter.toFixed(2)} ${unit}`;
}

// Cone Perimeter Calculation
function calculateConePerimeter() {
    let radius = parseFloat(document.getElementById('coneRadius').value);
    let unit = document.getElementById('coneUnit').value;
    let perimeter = 2 * Math.PI * radius;
    document.getElementById('conePerimeterResult').innerText = `Circumference of Cone Base: ${perimeter.toFixed(2)} ${unit}`;
}
