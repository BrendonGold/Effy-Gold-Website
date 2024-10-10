// scripts.js

// Automatically update the current year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});

function loadSocialLinks() {
    // Select all elements with the class 'social-container'
    const socialContainers = document.querySelectorAll('.social-container');

    // Fetch the social-links.html file and insert its content into each container
    fetch('partials/social-links.html')
        .then(response => response.text())
        .then(data => {
            socialContainers.forEach(container => {
                container.innerHTML = data;
            });
        })
        .catch(error => console.error('Error loading social links:', error));
}

// Call the function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadSocialLinks);
