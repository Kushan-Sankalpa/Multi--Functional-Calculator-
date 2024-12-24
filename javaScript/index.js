
    document.addEventListener('DOMContentLoaded', function () {
        const heading = document.getElementById('gradual-heading');
        const text = heading.innerText;
        heading.innerHTML = ''; // Clear the original text

        // Create spans for each character, handle spaces, and apply animation
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.innerText = char === ' ' ? '\u00A0' : char; // Use non-breaking space for spaces
            span.style.opacity = 0;
            span.style.transform = 'translateX(-20px)'; // Start with the text slightly offset
            span.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`; // Delay based on character index
            heading.appendChild(span);
        });

        // Trigger the animation to make each span appear gradually
        setTimeout(() => {
            heading.querySelectorAll('span').forEach(span => {
                span.style.opacity = 1;
                span.style.transform = 'translateX(0)'; // Move the character into position
            });
        }, 100);
    });




