# GitHub Pages Deployment - Quick Guide

## 🚀 Deploy Your Smoke Test Landing Page in 5 Minutes

This is the **quickest** way to get your landing page live on the internet.

---

## Step 1: Verify Your Files

Make sure you're on the branch with all the files. Run:

```bash
git branch
```

You should see `copilot/create-static-landing-page` (or `main`)

Check files exist:
```bash
ls -la
```

You should see:
- index.html
- assets/ folder
- README.md
- DEPLOYMENT.md

---

## Step 2: Go to GitHub Repository Settings

1. Open your browser
2. Go to: `https://github.com/andrefabre/prompt-generator-smoke-test`
3. Click the **Settings** tab (top right)

---

## Step 3: Enable GitHub Pages

1. In Settings, scroll down the left sidebar
2. Click **"Pages"** under "Code and automation"
3. Under **"Source"**, you'll see a dropdown
4. Select:
   - **Branch**: Choose your branch (e.g., `copilot/create-static-landing-page` or `main`)
   - **Folder**: Select `/ (root)`
5. Click **Save**

---

## Step 4: Wait for Deployment

GitHub will show a message:
> "Your site is ready to be published at..."

Wait 1-3 minutes for the build to complete. Refresh the page.

When ready, you'll see:
> ✅ "Your site is published at `https://andrefabre.github.io/prompt-generator-smoke-test/`"

---

## Step 5: Visit Your Live Site!

Click the URL or copy and paste it into your browser:

```
https://andrefabre.github.io/prompt-generator-smoke-test/
```

🎉 **Your landing page is now live!**

---

## Step 6: Test Everything

On your live site, verify:
- [ ] Page loads correctly
- [ ] Click "Get Early Access" → Modal appears
- [ ] Click "Learn More" → Scrolls to features
- [ ] Click "Join Waitlist" → Modal appears
- [ ] Modal can be closed
- [ ] Navigation links work
- [ ] Open on mobile device → Responsive design works

---

## Step 7: Share Your URL

Now that your site is live, share it:
- 📧 Email it to potential users
- 📱 Share on social media
- 💬 Send to your network
- 📊 Track the clicks!

---

## 🔍 Check Click Data

### Method 1: Browser Export
1. Visit your live site
2. Press `Ctrl + Shift + E`
3. Download the JSON file with click data

### Method 2: Check localStorage (on your site)
1. Open browser DevTools (F12)
2. Go to Console tab
3. Type: `JSON.parse(localStorage.getItem('promptGeneratorClicks'))`
4. See all recorded clicks

---

## 🔄 Update Your Site

Made changes? Update the live site:

```bash
# Make your changes to files
git add .
git commit -m "Update landing page"
git push origin copilot/create-static-landing-page
```

GitHub will automatically rebuild. Wait 1-3 minutes, then refresh your live site.

---

## 📊 Optional: Add Google Sheets Tracking

For real-time data collection:

1. Follow the "Setting Up Google Sheets Integration" section in [DEPLOYMENT.md](DEPLOYMENT.md)
2. Update `assets/js/script.js` with your Google Apps Script URL
3. Commit and push the changes
4. Your site will now send data to Google Sheets!

---

## ❓ Troubleshooting

**Site shows 404**
- Wait 2-3 minutes longer
- Check that branch is correct in Settings → Pages
- Make sure `index.html` is in the root directory

**Page looks broken**
- Check browser console (F12) for errors
- Verify all files were pushed: `git status`
- Clear browser cache (Ctrl+F5)

**Modal doesn't work**
- Open browser console (F12)
- Check for JavaScript errors
- Make sure `assets/js/script.js` loaded (check Network tab)

---

## 🎯 That's It!

Your smoke test landing page is now:
- ✅ Live on the internet
- ✅ Collecting click data
- ✅ Ready to gather interest

**URL**: `https://andrefabre.github.io/prompt-generator-smoke-test/`

Share it and start validating your AI Prompt Generator idea! 🚀

---

## 📚 More Information

- Full deployment guide: [DEPLOYMENT.md](DEPLOYMENT.md)
- Quick reference: [QUICKSTART.md](QUICKSTART.md)
- Project overview: [README.md](README.md)
- Complete summary: [SUMMARY.md](SUMMARY.md)
