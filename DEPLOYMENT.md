# Deployment Guide - AI Prompt Generator Smoke Test Landing Page

This guide provides detailed step-by-step instructions for building and deploying the AI Prompt Generator smoke test landing page.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Setting Up Google Sheets Integration](#setting-up-google-sheets-integration)
4. [Deployment Option 1: GitHub Pages](#deployment-option-1-github-pages)
5. [Deployment Option 2: Vercel](#deployment-option-2-vercel)
6. [Testing Your Deployment](#testing-your-deployment)
7. [Monitoring and Analytics](#monitoring-and-analytics)

---

## Prerequisites

Before you begin, ensure you have:
- A GitHub account
- A Google account (for Google Sheets integration)
- Basic understanding of Git commands
- (Optional) A Vercel account for Vercel deployment

---

## Project Structure

```
prompt-generator-smoke-test/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   └── style.css      # Styling for the page
│   ├── js/
│   │   └── script.js      # Click tracking functionality
│   └── images/            # (optional) Image assets
├── DEPLOYMENT.md          # This file
├── README.md              # Project overview
└── .gitignore            # Git ignore rules
```

---

## Setting Up Google Sheets Integration

To track user interest in a Google Sheet, follow these steps:

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "AI Prompt Generator - Interest Tracking"
3. In the first row, add these headers:
   - Column A: `Timestamp`
   - Column B: `Action`
   - Column C: `Button Name`
   - Column D: `User Agent`
   - Column E: `Screen Resolution`
   - Column F: `Referrer`

### Step 2: Create Google Apps Script

1. In your Google Sheet, click `Extensions` → `Apps Script`
2. Delete any code in the script editor
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.action || 'Click',
      data.buttonName || 'Unknown',
      data.userAgent || 'Unknown',
      data.screenResolution || 'Unknown',
      data.referrer || 'Direct'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Google Apps Script is running');
}
```

4. Click `Save` (💾 icon)
5. Click `Deploy` → `New deployment`
6. Click the gear icon ⚙️ next to "Select type" and choose `Web app`
7. Configure the deployment:
   - Description: "AI Prompt Generator Click Tracker"
   - Execute as: "Me"
   - Who has access: "Anyone"
8. Click `Deploy`
9. **Copy the Web App URL** - you'll need this!
10. Click `Authorize access` and grant the necessary permissions

### Step 3: Update the JavaScript Configuration

1. Open `assets/js/script.js`
2. Find the `CONFIG` object at the top of the file
3. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with your Web App URL
4. Set `enableTracking: true`

```javascript
const CONFIG = {
    googleScriptURL: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
    enableTracking: true
};
```

---

## Deployment Option 1: GitHub Pages

GitHub Pages is the simplest way to host your static landing page for free.

### Step 1: Prepare Your Repository

1. Ensure all your changes are committed:
```bash
git add .
git commit -m "Add smoke test landing page"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on `Settings`
3. Scroll down to the `Pages` section (left sidebar under "Code and automation")
4. Under "Source", select:
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
5. Click `Save`

### Step 3: Access Your Site

1. GitHub will provide a URL like: `https://yourusername.github.io/prompt-generator-smoke-test/`
2. It may take a few minutes for the site to be available
3. Once ready, you'll see a message: "Your site is published at [URL]"

### Step 4: Custom Domain (Optional)

1. Purchase a domain from a domain registrar
2. In your repository's `Settings` → `Pages`, add your custom domain
3. Follow GitHub's instructions to configure DNS records with your registrar
4. Create a `CNAME` file in your repository root with your domain name

---

## Deployment Option 2: Vercel

Vercel offers excellent performance, automatic deployments, and analytics.

### Step 1: Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

### Step 2: Deploy via Vercel Website

1. Go to [Vercel](https://vercel.com)
2. Sign up or log in (can use GitHub account)
3. Click `Add New` → `Project`
4. Import your GitHub repository
5. Configure project:
   - Framework Preset: `Other` (it's a static site)
   - Root Directory: `./`
   - Build Command: Leave empty (no build needed)
   - Output Directory: Leave empty
6. Click `Deploy`

### Step 3: Deploy via Vercel CLI

Alternatively, deploy from your terminal:

```bash
# Navigate to your project directory
cd /path/to/prompt-generator-smoke-test

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy: Yes
# - Which scope: Your account
# - Link to existing project: No
# - Project name: prompt-generator-smoke-test
# - Directory: ./
# - Override settings: No
```

### Step 4: Production Deployment

After the initial deployment:

```bash
vercel --prod
```

### Step 5: Access Your Site

Vercel will provide a URL like: `https://prompt-generator-smoke-test.vercel.app`

### Step 6: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click `Settings` → `Domains`
3. Add your custom domain
4. Follow the instructions to configure DNS

---

## Testing Your Deployment

### Manual Testing Checklist

1. **Navigation**
   - [ ] All navigation links work
   - [ ] Smooth scrolling to sections works

2. **Buttons**
   - [ ] "Get Early Access" button shows modal
   - [ ] "Learn More" button scrolls to features
   - [ ] "Join Waitlist" button shows modal

3. **Modal**
   - [ ] Modal appears on button click
   - [ ] Modal can be closed with X button
   - [ ] Modal can be closed by clicking outside

4. **Click Tracking**
   - [ ] Open browser console (F12)
   - [ ] Click various buttons
   - [ ] Verify clicks are logged in console
   - [ ] Check localStorage: `localStorage.getItem('promptGeneratorClicks')`

5. **Responsive Design**
   - [ ] Test on mobile (Chrome DevTools → Device Toolbar)
   - [ ] Test on tablet view
   - [ ] Test on desktop

6. **Google Sheets Integration** (if configured)
   - [ ] Click buttons
   - [ ] Check Google Sheet for new rows
   - [ ] Verify all data fields are populated

### Browser Testing

Test on multiple browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if available)

### Performance Testing

1. Use Lighthouse in Chrome DevTools:
   - Right-click → Inspect → Lighthouse tab
   - Run audit for Performance, Accessibility, SEO
   - Aim for scores above 90

---

## Monitoring and Analytics

### View Collected Data

#### Option 1: Export from Browser
Press `Ctrl + Shift + E` on the landing page to export click data as JSON.

#### Option 2: Check Google Sheets
View real-time data in your Google Sheet.

#### Option 3: Browser Console
```javascript
// View all stored clicks
JSON.parse(localStorage.getItem('promptGeneratorClicks'))

// View total click count
localStorage.getItem('totalClicks')
```

### Optional: Add Google Analytics

1. Create a Google Analytics account
2. Get your tracking ID (e.g., `G-XXXXXXXXXX`)
3. Add this code before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## Troubleshooting

### Common Issues

**1. GitHub Pages shows 404**
- Check that the branch and folder are correct in Settings → Pages
- Ensure `index.html` is in the root directory
- Wait a few minutes for propagation

**2. Google Sheets not updating**
- Verify the Web App URL in `script.js` is correct
- Check Apps Script permissions were granted
- Ensure `enableTracking` is set to `true`
- Check browser console for errors

**3. Modal not appearing**
- Check browser console for JavaScript errors
- Verify `script.js` is loaded (check Network tab in DevTools)
- Clear browser cache and reload

**4. Styles not loading**
- Check the path to `style.css` in `index.html`
- Verify file structure is correct
- Clear browser cache

---

## Updating Your Site

### GitHub Pages
Simply push changes to your main branch:
```bash
git add .
git commit -m "Update landing page"
git push origin main
```

### Vercel
Vercel auto-deploys on git push, or manually:
```bash
vercel --prod
```

---

## Next Steps

After deployment:

1. **Share the URL** with your target audience
2. **Monitor click data** in Google Sheets
3. **Gather feedback** from early visitors
4. **Iterate on design** based on data
5. **Consider A/B testing** different headlines or CTAs
6. **Plan the full product development** based on interest level

---

## Support

For issues or questions:
- Check the browser console for errors
- Review this deployment guide
- Verify all file paths are correct
- Ensure all code changes were saved and committed

---

## Security Notes

- The Google Apps Script is public but only accepts POST requests
- No sensitive user data is collected (no email, name, etc.)
- Data is anonymized (only user agent, screen size, referrer)
- Users can clear localStorage to remove their data

---

**Congratulations!** Your AI Prompt Generator smoke test landing page is now live! 🎉
