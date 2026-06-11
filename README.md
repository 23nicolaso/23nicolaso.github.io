# Portfolio Website

A modern, visually stunning portfolio website built with vanilla HTML, CSS, and JavaScript. Optimized for GitHub Pages hosting.

## Features

- **Stunning Visual Design**: Animated gradient backgrounds, glassmorphism effects, and smooth animations
- **Fully Responsive**: Works perfectly on all devices from mobile to desktop
- **Performance Optimized**: Fast loading times with efficient animations
- **Easy to Update**: Simple content structure for adding experiences and projects
- **Accessibility**: Keyboard navigation, reduced motion support, and semantic HTML
- **GitHub Pages Ready**: No build process required

## Quick Start

### Deploy to GitHub Pages

1. **Create a new repository** on GitHub (e.g., `portfolio` or `username.github.io`)

2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click Save
   - Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### For username.github.io Repository

If you name your repo `username.github.io` (e.g., `23nicolaso.github.io`), your site will be available at `https://username.github.io/` directly!

## Updating Content

### Adding New Experience

Find the **Experience Section** in `index.html` (around line 152) and add a new timeline item:

```html
<div class="timeline-item" data-animate="fade-in">
    <div class="timeline-dot"></div>
    <div class="timeline-content glass-card">
        <div class="timeline-header">
            <h3>Your Job Title</h3>
            <span class="timeline-date">Month Year - Present</span>
        </div>
        <p class="company">Company Name</p>
        <ul class="achievement-list">
            <li>Achievement or responsibility 1</li>
            <li>Achievement or responsibility 2</li>
            <li>Achievement or responsibility 3</li>
        </ul>
        <div class="tech-stack">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
    </div>
</div>
```

### Adding New Projects

Find the **Projects Section** in `index.html` (around line 222) and add a new project card:

```html
<div class="project-card glass-card" data-animate="fade-in">
    <div class="project-header">
        <div class="project-icon">
            <i class="fas fa-icon-name"></i>
        </div>
        <a href="https://github.com/username/repo" target="_blank" class="project-link">
            <i class="fab fa-github"></i>
        </a>
    </div>
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">
        Describe your project here. Use <strong>bold text</strong> to highlight key metrics or features.
    </p>
    <div class="tech-stack">
        <span class="tech-tag">Tech 1</span>
        <span class="tech-tag">Tech 2</span>
    </div>
</div>
```

### Updating Skills

Find the **About Section** in `index.html` (around line 103) and modify the skills grid:

```html
<div class="skills-grid">
    <span class="skill-tag">Your Skill</span>
    <!-- Add more skills -->
</div>
```

### Changing Icons

Icons use [Font Awesome 6](https://fontawesome.com/icons). To change an icon:
1. Visit https://fontawesome.com/icons
2. Search for your icon
3. Copy the class (e.g., `fas fa-rocket`)
4. Replace in the HTML

### Updating Personal Information

Edit these sections in `index.html`:
- **Hero Section** (line 44): Name, title, description
- **About Section** (line 81): Education, skills, specializations
- **Contact Section** (line 336): Social links

## Customization

### Color Scheme

Edit CSS variables in `styles.css` (line 2-18):

```css
:root {
    --primary-color: #6366f1;     /* Main brand color */
    --secondary-color: #8b5cf6;   /* Secondary accent */
    --accent-color: #ec4899;      /* Highlight color */
    /* Modify these to change the entire color scheme */
}
```

### Typography

To change fonts, update the Google Fonts import in `index.html` and the `font-family` in `styles.css`.

### Animation Speed

Adjust transition speeds in `styles.css`:

```css
:root {
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

### Background Effects

The animated gradient orbs can be modified in `styles.css` (line 56-90). Adjust:
- `width` and `height` for orb size
- `filter: blur()` for blur intensity
- `opacity` for visibility
- Animation timing in `animation-delay`

## Performance Tips

1. **Image Optimization**: Compress images before uploading
2. **Lazy Loading**: Add `loading="lazy"` to images
3. **Minimize Changes**: Only edit what's necessary to maintain performance
4. **Test Locally**: Open `index.html` in a browser before deploying

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Reduced motion support for users who prefer less animation
- ARIA labels where appropriate
- Focus indicators for interactive elements

## Troubleshooting

### Site not loading on GitHub Pages
- Ensure your repository is public
- Check that the file is named `index.html` (case-sensitive)
- Wait 5-10 minutes after enabling Pages for DNS propagation

### Animations not working
- Check if "Reduce Motion" is enabled in system preferences
- Verify JavaScript is enabled in the browser

### Mobile menu not working
- Clear browser cache
- Check browser console for errors

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive features
└── README.md           # This file
```

## License

Free to use and modify for personal projects.

## Credits

Built with:
- [Font Awesome](https://fontawesome.com/) for icons
- Vanilla JavaScript for interactions
- CSS3 for animations and effects

---

Made with passion and precision by Nicolas Ollivier
