// This script generates project cards from an array, updates progress, and handles interactions

// Project data array - Add new projects here as you complete them
const projects = [
    {
        day: 1,
        title: "Social Links Profile",
        description: "A responsive social links profile built with HTML and CSS, focusing on hover states and modern design.",
        link: "./Social links profile/index.html",
        image: "./Social links profile/assets/images/desktop.png",
        status: "completed"
    },
    {
        day: 2,
        title: "Recipe Page",
        description: "A semantic HTML recipe page focusing on appropriate HTML elements for content structure, ensuring proper markup for readability and accessibility.",
        link: "./Recipe page/index.html",
        image: "./Recipe page/assets/images/imagenFinal.png",
        status: "completed"
    },
    {
        day: 3,
        title: "Blog preview card",
        description: "A blog preview card component that highlights the importance of semantic HTML and accessibility, using appropriate tags and ARIA attributes to enhance user experience.",
        link: "./Blog preview card/index.html",
        image: "./Blog preview card/design/desktop-design.jpg",
        status: "completed"
    },
    // Add more projects as you progress
];

// DOM elements
const projectsGrid = document.getElementById('projectsGrid');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const currentYearSpan = document.getElementById('currentYear');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    updateProgress();
    setCurrentYear();
    addGlowEffect();
});

// Render project cards dynamically
function renderProjects() {
    projectsGrid.innerHTML = ''; // Clear existing content

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = `project-card ${project.status}`;

        card.innerHTML = `
            <div class="card-header">
                <span class="day-number">Day ${project.day}</span>
                <span class="status ${project.status}">${project.status.replace('-', ' ')}</span>
            </div>
            <div class="card-content">
                <img src="${project.image}" alt="${project.title} Preview">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" ${project.status === 'locked' ? 'onclick="return false;"' : 'target="_blank"'}>
                    ${project.status === 'completed' ? 'View Project' : project.status === 'in-progress' ? 'Work in Progress' : 'Locked'}
                </a>
            </div>
        `;

        // Add entrance animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        projectsGrid.appendChild(card);

        // Trigger animation
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, projects.indexOf(project) * 100);
    });
}

// Update progress bar and text
function updateProgress() {
    const completed = projects.filter(p => p.status === 'completed').length;
    const total = "∞"; // Infinite projects
    const percentage = completed > 0 ? 100 : 0; // Show full progress if any completed

    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `Progress: ${completed} / ${total} Projects`;
}

// Set current year in footer
function setCurrentYear() {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Add subtle glow effect to buttons on hover
function addGlowEffect() {
    document.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('status') && e.target.classList.contains('completed')) {
            e.target.style.boxShadow = '0 0 10px rgba(20, 184, 166, 0.5)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('status')) {
            e.target.style.boxShadow = '';
        }
    });
}

// Utility function to add new projects (for future use)
function addProject(project) {
    projects.push(project);
    renderProjects();
    updateProgress();
}

// Console log for debugging
console.log('Frontend Logbook initialized. Keep coding!');
