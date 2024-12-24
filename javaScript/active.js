document.addEventListener("DOMContentLoaded", function() {
    initializePage();
});

function initializePage() {
    // Initialize to show the Find Area section by default
    showSection('find_area');
    selectAreaOption('circle');
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    // Remove active class from all menu items
    document.querySelectorAll('.sidebar ul li').forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to the corresponding menu item
    if (sectionId === 'find_area') {
        document.getElementById('findAreaMenu').classList.add('active');
    } else if (sectionId === 'find_perimeter') {
        document.getElementById('findPerimeterMenu').classList.add('active');
    } else if (sectionId === 'find_volume') {
        document.getElementById('findVolumeMenu').classList.add('active');
    }
}

function selectAreaOption(option) {
    document.getElementById('areaOptions').value = option;
    showAreaForm(option);
}

function selectPerimeterOption(option) {
    document.getElementById('perimeterOptions').value = option;
    showPerimeterForm(option);
}

function selectVolumeOption(option) {
    document.getElementById('volumeOptions').value = option;
    showVolumeForm(option);
}

function showAreaForm(shape) {
    document.querySelectorAll('.areaForm').forEach(form => {
        form.style.display = 'none';
    });
    const targetForm = document.getElementById(shape + 'Form');
    if (targetForm) {
        targetForm.style.display = 'block';
    } else {
        console.error(`Form not found: ${shape}Form`);
    }
}

function showPerimeterForm(shape) {
    document.querySelectorAll('.perimeterForm').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(shape + 'PerimeterForm').style.display = 'block';
}

function showVolumeForm(shape) {
    document.querySelectorAll('.volumeForm').forEach(form => {
        form.style.display = 'none';
    });
    document.getElementById(shape + 'VolumeForm').style.display = 'block';
}
