// Automatically update the current year in the footer
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Load header links
function loadHeaderLinks() {
    const headerContainers = document.querySelectorAll('.header-container');
    if (headerContainers.length === 0) return; // Prevent fetching if no container exists

    fetch('partials/header.html')
        .then(response => response.text())
        .then(data => {
            headerContainers.forEach(container => {
                container.innerHTML = data;
            });
        })
        .catch(error => console.error('Error loading header links:', error));
}

// Load social links
function loadSocialLinks() {
    const socialContainers = document.querySelectorAll('.social-container');
    if (socialContainers.length === 0) return; // Prevent fetching if no container exists

    fetch('partials/social-links.html')
        .then(response => response.text())
        .then(data => {
            socialContainers.forEach(container => {
                container.innerHTML = data;
            });
        })
        .catch(error => console.error('Error loading social links:', error));
}

// Load newsletter content (only if on the newsletter page)
function initNewsletterPage() {
    const select = document.getElementById("newsletter-select");
    const contentDiv = document.getElementById("newsletter-content");

    if (!select || !contentDiv) return; // Prevent errors if elements are missing

    function loadNewsletter(selectedId) {
        if (selectedId) {
            fetch("newsletter-archive.html")
                .then(response => response.text())
                .then(data => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data, "text/html");
                    const newsletter = doc.getElementById(selectedId);

                    contentDiv.innerHTML = newsletter ? newsletter.innerHTML : "<p>Newsletter not found.</p>";
                })
                .catch(error => {
                    console.error("Error loading newsletters:", error);
                    contentDiv.innerHTML = "<p>Failed to load newsletter.</p>";
                });
        } else {
            contentDiv.innerHTML = "<p>Select a newsletter to display its content.</p>";
        }
    }

    select.addEventListener("change", function () {
        loadNewsletter(this.value);
    });

    // Automatically select the last option and load its content
    if (select.options.length > 0) {
        select.selectedIndex = 1;
        setTimeout(() => loadNewsletter(select.value), 0);
    }
}

// Run only if the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    loadHeaderLinks();
    loadSocialLinks();
    initNewsletterPage();
});
