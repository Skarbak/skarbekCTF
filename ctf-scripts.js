// Function to create navigation controls for CTF writeup pages
function createCTFNavigation() {
    // Create navigation buttons container
    const navContainer = document.createElement('div');
    navContainer.id = 'section-nav';
    navContainer.style.position = 'fixed';
    navContainer.style.top = '20px';
    navContainer.style.right = '20px';
    navContainer.style.backgroundColor = '#2a2a2a';
    navContainer.style.padding = '10px';
    navContainer.style.borderRadius = '5px';
    navContainer.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    navContainer.style.zIndex = '1000';
    
    // Create title for navigation
    const navTitle = document.createElement('h3');
    navTitle.textContent = 'Jump to Section';
    navTitle.style.marginTop = '0';
    navTitle.style.marginBottom = '10px';
    navTitle.style.color = '#ffffff';
    navContainer.appendChild(navTitle);
    
    // Get all sections
    const sections = document.querySelectorAll('.section');
    
    // Create button for each section
    sections.forEach(section => {
        const button = document.createElement('button');
        button.textContent = section.querySelector('h2').textContent;
        button.style.display = 'block';
        button.style.width = '100%';
        button.style.marginBottom = '5px';
        button.style.padding = '8px 12px';
        button.style.backgroundColor = '#3498db';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';
        button.style.transition = 'background-color 0.3s';
        
        button.onmouseover = function() {
            this.style.backgroundColor = '#2980b9';
        };
        button.onmouseout = function() {
            this.style.backgroundColor = '#3498db';
        };
        
        button.onclick = function() {
            // Hide all sections
            sections.forEach(s => s.style.display = 'none');
            // Show selected section
            section.style.display = 'block';
            // Scroll to the section
            section.scrollIntoView({ behavior: 'smooth' });
        };
        
        navContainer.appendChild(button);
    });
    
    // Add "Show All" button
    const showAllButton = document.createElement('button');
    showAllButton.textContent = 'Show All Sections';
    showAllButton.style.display = 'block';
    showAllButton.style.width = '100%';
    showAllButton.style.marginTop = '10px';
    showAllButton.style.padding = '8px 12px';
    showAllButton.style.backgroundColor = '#2ecc71';
    showAllButton.style.color = 'white';
    showAllButton.style.border = 'none';
    showAllButton.style.borderRadius = '4px';
    showAllButton.style.cursor = 'pointer';
    showAllButton.style.transition = 'background-color 0.3s';
    
    showAllButton.onmouseover = function() {
        this.style.backgroundColor = '#27ae60';
    };
    showAllButton.onmouseout = function() {
        this.style.backgroundColor = '#2ecc71';
    };
    
    showAllButton.onclick = function() {
        sections.forEach(s => s.style.display = 'block');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    navContainer.appendChild(showAllButton);

    // Add "Back to CTF's" button
    const backButton = document.createElement('button');
    backButton.textContent = 'Back to CTF\'s';
    backButton.style.display = 'block';
    backButton.style.width = '100%';
    backButton.style.marginTop = '10px';
    backButton.style.padding = '8px 12px';
    backButton.style.backgroundColor = '#e74c3c';
    backButton.style.color = 'white';
    backButton.style.border = 'none';
    backButton.style.borderRadius = '4px';
    backButton.style.cursor = 'pointer';
    backButton.style.transition = 'background-color 0.3s';
    
    backButton.onmouseover = function() {
        this.style.backgroundColor = '#c0392b';
    };
    backButton.onmouseout = function() {
        this.style.backgroundColor = '#e74c3c';
    };
    
    backButton.onclick = function() {
        window.location.href = 'ctf.html';
    };
    
    navContainer.appendChild(backButton);
    
    // Add navigation to the body
    document.body.appendChild(navContainer);
    
    // Initially hide all sections except the first one
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a CTF writeup page (has sections)
    if (document.querySelector('.section')) {
        createCTFNavigation();
    }
});