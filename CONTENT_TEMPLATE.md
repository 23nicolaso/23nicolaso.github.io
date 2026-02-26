# Content Templates

Quick copy-paste templates for adding new content to your portfolio.

## Experience Template

```html
<div class="timeline-item" data-animate="fade-in">
    <div class="timeline-dot"></div>
    <div class="timeline-content glass-card">
        <div class="timeline-header">
            <h3>Job Title Here</h3>
            <span class="timeline-date">Month Year - Month Year</span>
        </div>
        <p class="company">Company Name</p>
        <ul class="achievement-list">
            <li>First major achievement or responsibility</li>
            <li>Second achievement with <strong>quantifiable impact</strong></li>
            <li>Third achievement or key contribution</li>
        </ul>
        <div class="tech-stack">
            <span class="tech-tag">Technology1</span>
            <span class="tech-tag">Technology2</span>
            <span class="tech-tag">Technology3</span>
        </div>
    </div>
</div>
```

**Where to add**: In `index.html`, find the `<section id="experience">` and add your new experience inside the `<div class="timeline">` container. Add it at the top for most recent experiences.

---

## Project Template

```html
<div class="project-card glass-card" data-animate="fade-in">
    <div class="project-header">
        <div class="project-icon">
            <i class="fas fa-code"></i> <!-- Change icon -->
        </div>
        <a href="https://github.com/username/repo" target="_blank" class="project-link">
            <i class="fab fa-github"></i>
        </a>
    </div>
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">
        Brief description of the project. Highlight key features or achievements.
        Use <strong>bold text</strong> to emphasize impressive metrics or unique aspects.
    </p>
    <div class="tech-stack">
        <span class="tech-tag">Technology1</span>
        <span class="tech-tag">Technology2</span>
        <span class="tech-tag">Technology3</span>
    </div>
</div>
```

**Where to add**: In `index.html`, find `<section id="projects">` and add your project inside the `<div class="projects-grid">` container.

---

## Skill Tags Template

```html
<span class="skill-tag">New Skill</span>
```

**Where to add**: In the About section's skills grid (`<div class="skills-grid">`).

---

## Tech Stack Tags Template

```html
<span class="tech-tag">Technology</span>
```

**Where to add**: Inside any `<div class="tech-stack">` container in experience or project sections.

---

## Popular Icon Options

### Project Icons
- `fas fa-code` - Generic code/programming
- `fas fa-rocket` - Launch/startup projects
- `fas fa-chart-line` - Analytics/data projects
- `fas fa-gamepad` - Game development
- `fas fa-mobile-alt` - Mobile apps
- `fas fa-globe` - Web projects
- `fas fa-robot` - AI/ML projects
- `fas fa-database` - Database projects
- `fas fa-cloud` - Cloud/infrastructure
- `fas fa-lock` - Security projects
- `fas fa-brain` - AI/Intelligence
- `fas fa-network-wired` - Networking
- `fas fa-server` - Backend/servers
- `fas fa-palette` - Design/creative
- `fas fa-terminal` - CLI tools

### Social Links
- `fab fa-github` - GitHub
- `fab fa-linkedin` - LinkedIn
- `fab fa-twitter` - Twitter
- `fab fa-gitlab` - GitLab
- `fab fa-stackoverflow` - Stack Overflow
- `fas fa-envelope` - Email
- `fab fa-dev` - Dev.to
- `fab fa-medium` - Medium

Find more icons at: https://fontawesome.com/icons

---

## Color Customization Quick Reference

In `styles.css`, modify these CSS variables (lines 2-18):

```css
/* Primary brand colors */
--primary-color: #6366f1;      /* Indigo - main actions, links */
--secondary-color: #8b5cf6;    /* Purple - secondary accents */
--accent-color: #ec4899;       /* Pink - highlights, dates */

/* Text colors */
--text-primary: #f8fafc;       /* Main text color */
--text-secondary: #cbd5e1;     /* Dimmer text */

/* Background colors */
--bg-primary: #0f172a;         /* Dark navy background */
--bg-secondary: #1e293b;       /* Slightly lighter sections */
--bg-card: rgba(30, 41, 59, 0.6);  /* Glass cards */
```

### Popular Color Schemes

**Blue Tech**
```css
--primary-color: #3b82f6;
--secondary-color: #06b6d4;
--accent-color: #0ea5e9;
```

**Purple Dreams**
```css
--primary-color: #8b5cf6;
--secondary-color: #a855f7;
--accent-color: #d946ef;
```

**Green Energy**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #34d399;
```

**Orange Burst**
```css
--primary-color: #f97316;
--secondary-color: #fb923c;
--accent-color: #fdba74;
```

**Red Hot**
```css
--primary-color: #ef4444;
--secondary-color: #f43f5e;
--accent-color: #fb7185;
```

---

## Quick Tips

1. **Consistent Formatting**: Keep your timeline items in reverse chronological order (newest first)
2. **Quantify Achievements**: Use numbers and percentages (e.g., "Improved performance by 32%")
3. **Action Verbs**: Start achievements with strong verbs (Built, Designed, Optimized, Led, etc.)
4. **Tech Stack**: List 2-4 most relevant technologies per project/experience
5. **Keep It Concise**: 3-4 bullet points per experience is ideal
6. **Update Regularly**: Add new projects and experiences as you complete them

---

## Testing Checklist

Before deploying updates:
- [ ] Check all links work (especially GitHub links)
- [ ] Verify dates are correct
- [ ] Ensure no typos in text
- [ ] Test on mobile device or browser dev tools
- [ ] Check that animations play smoothly
- [ ] Verify all icons display correctly
- [ ] Test the mobile menu toggle

---

Need help? Check the main README.md or open your portfolio in a browser to see how changes look!
