document.addEventListener("DOMContentLoaded", function() {
    selectVolumeOption('cuboid');
});

function selectVolumeOption(option) {
    document.getElementById('volumeOptions').value = option;
    showVolumeForm(option);
}

function showVolumeForm(shape) {
    document.querySelectorAll('.volumeForm').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(shape + 'VolumeForm').style.display = 'block';
}

// Volume Calculations

// Cuboid Volume Calculation
function calculateCuboidVolume() {
    let length = parseFloat(document.getElementById('cuboidLength').value);
    let width = parseFloat(document.getElementById('cuboidWidth').value);
    let height = parseFloat(document.getElementById('cuboidHeight').value);
    let unit = document.getElementById('cuboidVolumeUnit').value;
    let volume = length * width * height;
    document.getElementById('cuboidVolumeResult').innerText = `Volume of Cuboid: ${volume.toFixed(2)} ${unit}`;
}



// Cuboid Volume Calculation
function calculateCuboidVolume() {
    let length = parseFloat(document.getElementById('cuboidLength').value);
    let width = parseFloat(document.getElementById('cuboidWidth').value);
    let height = parseFloat(document.getElementById('cuboidHeight').value);
    let unit = document.getElementById('cuboidVolumeUnit').value;
    let volume = length * width * height;
    document.getElementById('cuboidVolumeResult').innerText = `Volume of Cuboid: ${volume.toFixed(2)} ${unit}`;
}

// Cube Volume Calculation
function calculateCubeVolume() {
    let side = parseFloat(document.getElementById('cubeSide').value);
    let unit = document.getElementById('cubeVolumeUnit').value;
    let volume = Math.pow(side, 3);
    document.getElementById('cubeVolumeResult').innerText = `Volume of Cube: ${volume.toFixed(2)} ${unit}`;
}

// Cylinder Volume Calculation
function calculateCylinderVolume() {
    let radius = parseFloat(document.getElementById('cylinderRadius').value);
    let height = parseFloat(document.getElementById('cylinderHeight').value);
    let unit = document.getElementById('cylinderVolumeUnit').value;
    let volume = Math.PI * Math.pow(radius, 2) * height;
    document.getElementById('cylinderVolumeResult').innerText = `Volume of Cylinder: ${volume.toFixed(2)} ${unit}`;
}

// Prism Volume Calculation
function calculatePrismVolume() {
    let baseArea = parseFloat(document.getElementById('prismBaseArea').value);
    let height = parseFloat(document.getElementById('prismHeight').value);
    let unit = document.getElementById('prismVolumeUnit').value;
    let volume = baseArea * height;
    document.getElementById('prismVolumeResult').innerText = `Volume of Prism: ${volume.toFixed(2)} ${unit}`;
}

// Sphere Volume Calculation
function calculateSphereVolume() {
    let radius = parseFloat(document.getElementById('sphereVolumeRadius').value);
    let unit = document.getElementById('sphereVolumeUnit').value;
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('sphereVolumeResult').innerText = `Volume of Sphere: ${volume.toFixed(2)} ${unit}`;
}

// Pyramid Volume Calculation
function calculatePyramidVolume() {
    let baseArea = parseFloat(document.getElementById('pyramidBaseArea').value);
    let height = parseFloat(document.getElementById('pyramidHeight').value);
    let unit = document.getElementById('pyramidVolumeUnit').value;
    let volume = (1 / 3) * baseArea * height;
    document.getElementById('pyramidVolumeResult').innerText = `Volume of Pyramid: ${volume.toFixed(2)} ${unit}`;
}

// Right Circular Cone Volume Calculation
function calculateConeVolume() {
    let radius = parseFloat(document.getElementById('coneRadius').value);
    let height = parseFloat(document.getElementById('coneHeight').value);
    let unit = document.getElementById('coneVolumeUnit').value;
    let volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    document.getElementById('coneVolumeResult').innerText = `Volume of Right Circular Cone: ${volume.toFixed(2)} ${unit}`;
}

// Square or Rectangular Pyramid Volume Calculation
function calculateSquarePyramidVolume() {
    let length = parseFloat(document.getElementById('squarePyramidLength').value);
    let width = parseFloat(document.getElementById('squarePyramidWidth').value);
    let height = parseFloat(document.getElementById('squarePyramidHeight').value);
    let unit = document.getElementById('squarePyramidVolumeUnit').value;
    let volume = (1 / 3) * length * width * height;
    document.getElementById('squarePyramidVolumeResult').innerText = `Volume of Square/Rectangular Pyramid: ${volume.toFixed(2)} ${unit}`;
}

// Ellipsoid Volume Calculation
function calculateEllipsoidVolume() {
    let a = parseFloat(document.getElementById('ellipsoidA').value);
    let b = parseFloat(document.getElementById('ellipsoidB').value);
    let c = parseFloat(document.getElementById('ellipsoidC').value);
    let unit = document.getElementById('ellipsoidVolumeUnit').value;
    let volume = (4 / 3) * Math.PI * a * b * c;
    document.getElementById('ellipsoidVolumeResult').innerText = `Volume of Ellipsoid: ${volume.toFixed(2)} ${unit}`;
}

// Tetrahedron Volume Calculation
function calculateTetrahedronVolume() {
    let side = parseFloat(document.getElementById('tetrahedronSide').value);
    let unit = document.getElementById('tetrahedronVolumeUnit').value;
    let volume = (Math.pow(side, 3) * Math.sqrt(2)) / 6;
    document.getElementById('tetrahedronVolumeResult').innerText = `Volume of Tetrahedron: ${volume.toFixed(2)} ${unit}`;
}
