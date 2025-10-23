# Quick Start Guide - AI Prompt Generator Smoke Test

## 🚀 What You Have

A fully functional static landing page for testing market interest in your AI Prompt Generator tool. The page includes:
- Professional design with dark theme
- Click tracking (localStorage + optional Google Sheets)
- Responsive mobile design
- Interest capture modal
- Deployment-ready files

## 📁 Files Created

```
├── index.html              # Main landing page
├── assets/
│   ├── css/style.css      # All styling
│   └── js/script.js       # Click tracking & interactions
├── DEPLOYMENT.md          # Detailed deployment guide
├── README.md              # Project documentation
└── .gitignore            # Git ignore rules
```

## ⚡ Quick Test Locally

1. **Clone the repo** (if not already done):
   ```bash
   git clone https://github.com/andrefabre/prompt-generator-smoke-test.git
   cd prompt-generator-smoke-test
   ```

2. **Open in browser**:
   - Just open `index.html` in your browser, OR
   - Use a local server:
     ```bash
     python3 -m http.server 8000
     # Then visit: http://localhost:8000
     ```

3. **Test the features**:
   - Click "Get Early Access" button → Modal should appear
   - Click "Learn More" → Should scroll to features
   - Check console (F12) → Should see click tracking messages
   - Press Ctrl+Shift+E → Export click data

## 🌐 Deploy (Choose One)

### Option A: GitHub Pages (Easiest)
1. Go to your repo on GitHub
2. Settings → Pages
3. Source: Deploy from branch `main` (or current branch)
4. Folder: `/ (root)`
5. Click Save
6. Your site will be live at: `https://yourusername.github.io/prompt-generator-smoke-test/`

### Option B: Vercel (Best Performance)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Done! Your site is live

**📖 For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

## 📊 Track Interest (Optional)

To save clicks to Google Sheets:

1. Create a Google Sheet
2. Add columns: Timestamp, Action, Button Name, User Agent, Screen Resolution, Referrer
3. Extensions → Apps Script → Paste the code from DEPLOYMENT.md
4. Deploy as Web App
5. Copy the URL
6. Update `assets/js/script.js`:
   ```javascript
   const CONFIG = {
       googleScriptURL: 'YOUR_ACTUAL_URL_HERE',
       enableTracking: true
   };
   ```
7. Commit and redeploy

**📖 Full instructions in [DEPLOYMENT.md](DEPLOYMENT.md) Section 2**

## 🎯 What Happens When Users Visit?

1. Users see a professional landing page
2. They click CTA buttons (Get Early Access, Join Waitlist, etc.)
3. A modal appears thanking them
4. Their click is tracked:
   - **Always**: Saved to browser localStorage
   - **If configured**: Also saved to your Google Sheet
5. Counter updates showing number of interested users

## 📈 View Collected Data

**In Browser Console (F12)**:
```javascript
// View all clicks
JSON.parse(localStorage.getItem('promptGeneratorClicks'))

// View count
localStorage.getItem('totalClicks')
```

**Export Data**:
- Press `Ctrl + Shift + E` on the landing page

**Google Sheets**:
- Check your connected Google Sheet (if configured)

## 🎨 Customize

**Change Colors**:
- Edit `assets/css/style.css` → `:root` section
- Update CSS variables for your brand colors

**Change Content**:
- Edit `index.html`
- Update headings, features, descriptions

**Change Tracking**:
- Edit `assets/js/script.js`
- Add more buttons, modify tracked data

## ✅ Testing Checklist

- [ ] Page loads without errors
- [ ] All buttons show the modal
- [ ] Modal can be closed
- [ ] Navigation links work
- [ ] Page is responsive (test on mobile)
- [ ] Click tracking works (check console)
- [ ] Counter increments when buttons clicked
- [ ] Google Sheets receives data (if configured)

## 🆘 Troubleshooting

**Page shows 404 on GitHub Pages**:
- Wait 2-3 minutes for GitHub to build
- Check Settings → Pages → Branch is correct
- Ensure `index.html` is in root directory

**Modal doesn't appear**:
- Open browser console (F12)
- Check for JavaScript errors
- Clear cache and reload

**Google Sheets not updating**:
- Verify Apps Script URL is correct
- Check `enableTracking: true` in script.js
- Ensure Apps Script is deployed as "Anyone" access

## 📞 Need Help?

1. Check [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions
2. Review browser console for errors
3. Verify all file paths are correct
4. Check that changes are committed and pushed

## 🎉 You're Ready!

Your smoke test landing page is complete and ready to deploy. Follow the deployment steps above, and you'll be gathering interest data in minutes!

**Good luck with your AI Prompt Generator project! 🚀**
