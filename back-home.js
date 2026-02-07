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
            background: #14B8A6;
            color: #0F172A;
            text-decoration: none;
            border-radius: 20px;
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
            transition: all 0.3s ease;
            z-index: 1000;
        }
        .back-home-btn:hover {
            background: #0EA5A4;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(20, 184, 166, 0.4);
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

    // Append to body
    document.head.appendChild(style);
    document.body.appendChild(backButton);
});