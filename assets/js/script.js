// Click tracking and interest capture functionality
// This smoke test captures user interest for the AI Prompt Generator tool

// Configuration for Google Apps Script Web App (you'll need to deploy your own)
const CONFIG = {
    // Replace this URL with your deployed Google Apps Script Web App URL
    // Instructions in DEPLOYMENT.md
    googleScriptURL: 'YOUR_GOOGLE_SCRIPT_URL_HERE',
    enableTracking: false // Set to true once you configure Google Script
};

// Track user interactions
let clickCount = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateClickCounter();
    trackPageView();
});

// Initialize all event listeners
function initializeEventListeners() {
    // CTA Buttons
    const getEarlyAccessBtn = document.getElementById('getEarlyAccessBtn');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const joinWaitlistBtn = document.getElementById('joinWaitlistBtn');
    const modal = document.getElementById('interestModal');
    const closeBtn = document.querySelector('.close');

    // Button click handlers
    if (getEarlyAccessBtn) {
        getEarlyAccessBtn.addEventListener('click', function() {
            trackClick('Get Early Access Button');
            showModal();
        });
    }

    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            trackClick('Learn More Button');
            scrollToSection('features');
        });
    }

    if (joinWaitlistBtn) {
        joinWaitlistBtn.addEventListener('click', function() {
            trackClick('Join Waitlist Button');
            showModal();
        });
    }

    // Modal close handlers
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            trackClick('Navigation Link: ' + targetId);
        });
    });
}

// Track clicks and save to Google Doc (or localStorage for demo)
function trackClick(buttonName) {
    clickCount++;
    
    const clickData = {
        timestamp: new Date().toISOString(),
        buttonName: buttonName,
        userAgent: navigator.userAgent,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || 'Direct'
    };

    // Store locally
    saveClickLocally(clickData);
    
    // Send to Google Sheets if configured
    if (CONFIG.enableTracking && CONFIG.googleScriptURL !== 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
        sendToGoogleSheets(clickData);
    } else {
        console.log('Click tracked locally:', clickData);
    }

    // Update the counter display
    updateClickCounter();
}

// Save click data to localStorage
function saveClickLocally(clickData) {
    try {
        let clicks = JSON.parse(localStorage.getItem('promptGeneratorClicks')) || [];
        clicks.push(clickData);
        localStorage.setItem('promptGeneratorClicks', JSON.stringify(clicks));
        localStorage.setItem('totalClicks', clickCount.toString());
    } catch (e) {
        console.error('Error saving to localStorage:', e);
    }
}

// Send click data to Google Sheets via Apps Script
async function sendToGoogleSheets(clickData) {
    try {
        const response = await fetch(CONFIG.googleScriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clickData)
        });
        
        console.log('Data sent to Google Sheets');
    } catch (error) {
        console.error('Error sending to Google Sheets:', error);
        // Fallback to local storage if remote fails
        console.log('Data saved locally as fallback');
    }
}

// Track page views
function trackPageView() {
    const pageViewData = {
        timestamp: new Date().toISOString(),
        action: 'Page View',
        userAgent: navigator.userAgent,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || 'Direct'
    };
    
    // Store locally
    saveClickLocally(pageViewData);
    
    // Send to Google Sheets if configured
    if (CONFIG.enableTracking && CONFIG.googleScriptURL !== 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
        sendToGoogleSheets(pageViewData);
    }
}

// Update click counter display
function updateClickCounter() {
    const counterElement = document.getElementById('interestedCount');
    if (counterElement) {
        // Get stored count or use current session count
        const storedCount = localStorage.getItem('totalClicks') || '0';
        counterElement.textContent = storedCount;
    }
}

// Show modal
function showModal() {
    const modal = document.getElementById('interestModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('interestModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Export click data (useful for manual review)
function exportClickData() {
    try {
        const clicks = localStorage.getItem('promptGeneratorClicks');
        if (clicks) {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(clicks);
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", "prompt_generator_clicks.json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        } else {
            alert('No click data available to export');
        }
    } catch (e) {
        console.error('Error exporting data:', e);
    }
}

// Add keyboard shortcuts for demo purposes
document.addEventListener('keydown', function(e) {
    // Press 'E' to export data (for admins)
    if (e.key === 'E' && e.shiftKey && e.ctrlKey) {
        exportClickData();
    }
});

// Console message for developers
console.log('%c🚀 AI Prompt Generator Smoke Test', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cThis is a smoke test to gauge interest in the AI Prompt Generator tool.', 'font-size: 12px; color: #cbd5e1;');
console.log('%cPress Ctrl+Shift+E to export click data', 'font-size: 12px; color: #8b5cf6;');
