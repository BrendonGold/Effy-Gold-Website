// scripts.js

// Automatically update the current year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }
});
