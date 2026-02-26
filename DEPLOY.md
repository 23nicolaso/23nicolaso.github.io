# Quick Deploy to GitHub Pages

## Option 1: New Repository (Recommended for multiple projects)

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: New portfolio website"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/23nicolaso/portfolio.git
git branch -M main
git push -u origin main
```

**Enable Pages:**
1. Go to repo Settings → Pages
2. Source: Deploy from branch → main
3. Save
4. Site will be at: `https://23nicolaso.github.io/portfolio/`

---

## Option 2: Username Repository (Your main site)

For your main portfolio at `https://23nicolaso.github.io/`:

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: New portfolio website"

# Create repo named: 23nicolaso.github.io
git remote add origin https://github.com/23nicolaso/23nicolaso.github.io.git
git branch -M main
git push -u origin main
```

Pages will auto-enable. Your site will be at: `https://23nicolaso.github.io/`

---

## Update Existing Site

If you already have a GitHub Pages site:

```bash
# Navigate to your existing repo
cd path/to/your/repo

# Backup old files (optional)
mkdir old_site
mv *.html *.css *.js old_site/

# Copy new files
# Copy index.html, styles.css, script.js to your repo

# Commit and push
git add .
git commit -m "Update: New portfolio design"
git push
```

---

## Test Locally First

Before deploying, test locally:

1. **Simple method**: Just open `index.html` in your browser

2. **With live server** (recommended):
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve

   # Using PHP
   php -S localhost:8000
   ```
   Then visit: `http://localhost:8000`

---

## Troubleshooting

**Site not showing after deployment:**
- Wait 5-10 minutes for DNS propagation
- Check that repo is public
- Verify Pages is enabled in Settings
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

**404 Error:**
- Ensure file is named `index.html` (lowercase)
- Check that you pushed to the correct branch

**Styling broken:**
- Check that styles.css and script.js are in the same directory as index.html
- Verify file paths in index.html

---

## Next Steps

After deployment:
1. Visit your live site
2. Test on mobile device
3. Share the link!
4. Update content using CONTENT_TEMPLATE.md

---

**Your site will be live at:**
- Option 1: `https://23nicolaso.github.io/[repo-name]/`
- Option 2: `https://23nicolaso.github.io/`

🎉 Congratulations on your new portfolio!
