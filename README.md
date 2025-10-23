# AI Prompt Generator - Smoke Test Landing Page

A professional static HTML smoke test landing page designed to gather market interest for an AI Prompt Generator tool. This page captures user interactions and saves data to track engagement and validate product-market fit.

## 🎯 Purpose

This smoke test landing page helps validate market interest in an AI Prompt Generator tool before full development. It provides:
- Professional presentation of the product concept
- User interaction tracking (click analytics)
- Interest capture via call-to-action buttons
- Data collection for market validation

## ✨ Features

- **Modern, Responsive Design**: Mobile-first design that works on all devices
- **Click Tracking**: Captures user interactions and saves to Google Sheets
- **Interest Capture**: Modal-based user engagement tracking
- **Analytics Ready**: Built-in tracking with localStorage fallback
- **Zero Dependencies**: Pure HTML, CSS, and vanilla JavaScript
- **Easy Deployment**: Ready for GitHub Pages or Vercel

## 🚀 Quick Start

### View the Site Locally

1. Clone the repository:
```bash
git clone https://github.com/andrefabre/prompt-generator-smoke-test.git
cd prompt-generator-smoke-test
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server installed)
npx http-server
```

Then visit `http://localhost:8000`

## 📁 Project Structure

```
prompt-generator-smoke-test/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   └── style.css      # Styling and responsive design
│   ├── js/
│   │   └── script.js      # Click tracking and interactions
│   └── images/            # Image assets (optional)
├── DEPLOYMENT.md          # Detailed deployment instructions
├── README.md              # This file
└── .gitignore            # Git ignore rules
```

## 🎨 Design Features

- **Dark Theme**: Modern dark UI inspired by professional portfolio designs
- **Gradient Accents**: Eye-catching purple/pink gradient highlights
- **Smooth Animations**: Subtle hover effects and transitions
- **Accessibility**: Semantic HTML and ARIA-friendly structure
- **SEO Optimized**: Meta tags and semantic structure for search engines

## 📊 Click Tracking

The landing page tracks user interactions in two ways:

### 1. Local Storage (Default)
- Automatically enabled
- Stores click data in browser's localStorage
- No external dependencies
- Export data with `Ctrl + Shift + E`

### 2. Google Sheets Integration (Optional)
- Real-time data collection
- Tracks: timestamp, button clicked, user agent, screen resolution, referrer
- See `DEPLOYMENT.md` for setup instructions

## 🌐 Deployment

This site can be deployed to multiple platforms. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

### Quick Deploy Options

#### GitHub Pages (Recommended for beginners)
1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Access at `https://yourusername.github.io/prompt-generator-smoke-test/`

#### Vercel (Recommended for production)
1. Connect GitHub repository to Vercel
2. Deploy with one click
3. Automatic deployments on git push

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions.

## 🛠️ Configuration

### Enable Google Sheets Tracking

1. Follow the setup instructions in [DEPLOYMENT.md](DEPLOYMENT.md)
2. Update `assets/js/script.js`:

```javascript
const CONFIG = {
    googleScriptURL: 'YOUR_GOOGLE_APPS_SCRIPT_URL',
    enableTracking: true
};
```

## 📈 Monitoring & Analytics

### View Click Data

**Browser Console:**
```javascript
// View all clicks
JSON.parse(localStorage.getItem('promptGeneratorClicks'))

// View total count
localStorage.getItem('totalClicks')
```

**Export Data:**
- Press `Ctrl + Shift + E` on the landing page
- Or check your Google Sheet (if configured)

### Metrics Tracked

- Button clicks (Get Early Access, Learn More, Join Waitlist)
- Page views
- Navigation interactions
- Timestamp
- User agent (browser info)
- Screen resolution
- Referrer source

## 🎓 Learning Resources

This project demonstrates:
- Static website development
- Responsive web design
- Click tracking implementation
- Google Apps Script integration
- Git workflow and deployment
- Modern CSS techniques (gradients, flexbox, grid)
- Vanilla JavaScript best practices

## 🔧 Customization

### Update Content
Edit `index.html` to change:
- Heading and descriptions
- Feature cards
- Call-to-action text
- Footer information

### Update Styling
Edit `assets/css/style.css` to modify:
- Color scheme (CSS variables in `:root`)
- Typography
- Layout and spacing
- Animations

### Update Tracking
Edit `assets/js/script.js` to:
- Add new buttons to track
- Customize tracked data
- Modify modal behavior

## 🧪 Testing

### Manual Testing
1. Open the page in different browsers
2. Click all buttons and verify modal appears
3. Check browser console for tracked events
4. Test responsive design in DevTools

### Test Click Tracking
1. Open browser console (F12)
2. Click various buttons
3. Run: `JSON.parse(localStorage.getItem('promptGeneratorClicks'))`
4. Verify data is being stored

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a smoke test project, but suggestions are welcome! Feel free to:
- Report bugs
- Suggest improvements
- Share your deployment experience

## 📧 Support

For questions or issues:
1. Check [DEPLOYMENT.md](DEPLOYMENT.md) for common issues
2. Review browser console for errors
3. Verify all configuration settings

## 🎉 Acknowledgments

- Design inspired by modern portfolio websites
- Concept based on AI-Driven Prompt Generator tools
- Built with vanilla HTML, CSS, and JavaScript

---

**Ready to launch?** Check out [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions!
