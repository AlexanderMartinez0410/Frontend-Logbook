// Shared Back to Home Component
// This script adds a floating "Back to Home" button to any project page
// Include this script in each project's index.html: <script src="../../back-home.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    // Create the back button element
    const backButton = document.createElement('a');
    backButton.href = '../../index.html'; // Adjust path as needed
    backButton.className = 'back-home-btn';
    backButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Home
    `;
    backButton.title = 'Back to Frontend Logbook';

    // Style the button
    const style = document.createElement('style');
    style.textContent = `
        .back-home-btn {
            position: fixed;
            top: 20px;
            left: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 16px;
            background: var(--btn-bg, #14B8A6);
            color: var(--btn-color, #0F172A);
            text-decoration: none;
            border-radius: 20px;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: 14px;
            box-shadow: 0 4px 12px var(--btn-shadow, rgba(20, 184, 166, 0.3));
            transition: all 0.3s ease;
            z-index: 1000;
        }
        .back-home-btn:hover {
            background: var(--btn-hover-bg, #0EA5A4);
            transform: translateY(-2px);
            box-shadow: 0 6px 16px var(--btn-shadow-hover, rgba(20, 184, 166, 0.4));
        }
        .back-home-btn svg {
            transition: transform 0.3s ease;
        }
        .back-home-btn:hover svg {
            transform: translateX(-2px);
        }
        @media (max-width: 768px) {
            .back-home-btn {
                top: 10px;
                left: 10px;
                padding: 8px 12px;
                font-size: 12px;
            }
        }
    `;

    // Function to get luminance
    function getLuminance(color) {
        const rgb = color.match(/\d+/g);
        if (!rgb) return 0.5;
        const r = parseInt(rgb[0]), g = parseInt(rgb[1]), b = parseInt(rgb[2]);
        return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }

    // Detect background and set colors
    const bodyBg = getComputedStyle(document.body).backgroundColor;
    const rgbMatch = bodyBg.match(/\d+/g);
    const root = document.documentElement;

    if (rgbMatch && rgbMatch.length >= 3) {
        const r = parseInt(rgbMatch[0]), g = parseInt(rgbMatch[1]), b = parseInt(rgbMatch[2]);
        
        // Button background: same color with 20% opacity
        const btnBg = `rgba(${r}, ${g}, ${b}, 0.2)`;
        
        // Hover background: same color with 30% opacity
        const hoverBg = `rgba(${r}, ${g}, ${b}, 0.3)`;
        
        // Text color based on original background luminance
        const originalLuminance = getLuminance(bodyBg);
        const textColor = originalLuminance > 0.5 ? '#000' : '#fff';
        
        // Shadows with low opacity
        const shadow = `rgba(${r}, ${g}, ${b}, 0.1)`;
        const shadowHover = `rgba(${r}, ${g}, ${b}, 0.2)`;
        
        // Set CSS variables
        root.style.setProperty('--btn-bg', btnBg);
        root.style.setProperty('--btn-color', textColor);
        root.style.setProperty('--btn-hover-bg', hoverBg);
        root.style.setProperty('--btn-shadow', shadow);
        root.style.setProperty('--btn-shadow-hover', shadowHover);
    } else {
        // Fallback to original colors if background is not RGB
        root.style.setProperty('--btn-bg', 'rgba(20, 184, 166, 0.2)');
        root.style.setProperty('--btn-color', '#0F172A');
        root.style.setProperty('--btn-hover-bg', 'rgba(20, 184, 166, 0.3)');
        root.style.setProperty('--btn-shadow', 'rgba(20, 184, 166, 0.1)');
        root.style.setProperty('--btn-shadow-hover', 'rgba(20, 184, 166, 0.2)');
    }

    // Append to body
    document.head.appendChild(style);
    document.body.appendChild(backButton);
});