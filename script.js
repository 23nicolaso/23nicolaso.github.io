// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with data-animate attribute
document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Parallax Effect for Hero Section
const hero = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Typing Effect for Hero Title (Optional Enhancement)
const heroTitle = document.querySelector('.name');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';

    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    // Uncomment to enable typing effect
    // setTimeout(typeWriter, 500);
}

// Dynamic Year in Footer
const footer = document.querySelector('.footer p');
if (footer) {
    const currentYear = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
}

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Skill tags hover effect
document.querySelectorAll('.skill-tag, .tech-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Project cards stagger animation
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Console Easter Egg
console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in how this site was built?', 'font-size: 14px; color: #cbd5e1;');
console.log('%cCheck out the source: https://github.com/23nicolaso', 'font-size: 14px; color: #8b5cf6;');

// Cursor trail effect (Optional - can be performance intensive)
function createCursorTrail() {
    const trail = [];
    const trailLength = 20;

    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) { // Only on desktop
            trail.push({x: e.clientX, y: e.clientY});

            if (trail.length > trailLength) {
                trail.shift();
            }
        }
    });
}

// Uncomment to enable cursor trail
// createCursorTrail();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy operations
const debouncedHighlight = debounce(highlightNavigation, 100);
window.addEventListener('scroll', debouncedHighlight);

// Preload images for better performance
function preloadImages() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
}

window.addEventListener('load', preloadImages);

// Add loading animation completion
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Handle external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

// Copy email to clipboard (if email element exists)
const emailLinks = document.querySelectorAll('[href^="mailto:"]');
emailLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.href.replace('mailto:', '');
        navigator.clipboard.writeText(email).then(() => {
            // Show tooltip or notification
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Email copied to clipboard!';
            tooltip.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                color: white;
                padding: 1rem 2rem;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;
            document.body.appendChild(tooltip);
            setTimeout(() => tooltip.remove(), 3000);
        });
    });
});

// Keyboard navigation improvements
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // Close gallery on Escape
    if (e.key === 'Escape' && document.getElementById('galleryModal').classList.contains('active')) {
        closeGallery();
    }

    // Close lightbox on Escape
    if (e.key === 'Escape' && document.getElementById('lightbox').classList.contains('active')) {
        closeLightbox();
    }

    // Navigate lightbox with arrow keys
    if (document.getElementById('lightbox').classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            previousLightboxImage();
        } else if (e.key === 'ArrowRight') {
            nextLightboxImage();
        }
    }
});

// Add focus styles for accessibility
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #6366f1';
        this.style.outlineOffset = '2px';
    });

    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// ===== Gallery System =====

// Gallery data - Add your project images here
const galleryData = {
    mayflower: [
        {
            src: 'mayflower/ARPPU.png',
            title: 'Average Revenue Per Paying User Growth',
            description: '195% increase in ARPPU from May to June 2025 - direct result of redesigned store backend'
        },
        {
            src: 'mayflower/usergrowth.png',
            title: 'User Growth Metrics',
            description: 'User growth analytics tracking player engagement and retention'
        },
        {
            src: 'mayflower/profiling.png',
            title: 'Performance Profiling',
            description: 'Profiling data showing 32% FPS improvement from occlusion culling and lightmap baking'
        },
        {
            src: 'mayflower/proceduralcavegen.png',
            title: 'Procedural Cave Generation',
            description: '3D cave generation algorithm built with Blender Python API - played by 10,000+ players'
        },
        {
            src: 'mayflower/oldshop.png',
            title: 'Original Store Design',
            description: 'Store interface before backend redesign'
        },
        {
            src: 'mayflower/storeafter.png',
            title: 'Redesigned Store',
            description: 'New store supporting 3x more product types with C# + PostgreSQL backend'
        },
        {
            src: 'mayflower/mines.png',
            title: 'Mines Minigame',
            description: 'One of three new minigames designed - contributed to 2x retention increase'
        },
        {
            src: 'mayflower/mirror.png',
            title: 'Mirror Feature',
            description: 'VR mirror implementation with optimized rendering'
        },
        {
            src: 'mayflower/ghostMonster.png',
            title: 'Ghost Monster',
            description: 'Custom VR enemy with synchronized networking code'
        },
        {
            src: 'mayflower/fanartwall.png',
            title: 'Fan Art Wall',
            description: 'Community feature showcasing player artwork'
        }
    ]
};

let currentGallery = [];
let currentLightboxIndex = 0;

// Open gallery modal
function openGallery(galleryName) {
    const modal = document.getElementById('galleryModal');
    const grid = document.getElementById('galleryGrid');

    currentGallery = galleryData[galleryName] || [];

    // Clear existing content
    grid.innerHTML = '';

    if (currentGallery.length === 0) {
        // Show placeholder if no images
        grid.innerHTML = `
            <div class="gallery-item gallery-placeholder">
                <i class="fas fa-image"></i>
                <p><strong>Gallery Coming Soon</strong></p>
                <p>Add your project images to the images/mayflower/ folder</p>
                <p style="margin-top: 0.5rem; font-size: 0.8rem;">Expected files: dashboard.png, store.png, cave.png, minigames.png, performance.png, networking.png</p>
            </div>
        `;
    } else {
        // Load gallery images
        currentGallery.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.title}" onerror="this.parentElement.innerHTML='<div class=\\'gallery-placeholder\\'><i class=\\'fas fa-image\\'></i><p>${item.title}</p><p style=\\'font-size: 0.85rem; margin-top: 0.5rem;\\'>Image: ${item.src}</p></div>'">
                <div class="gallery-item-overlay">
                    <div class="gallery-item-title">${item.title}</div>
                </div>
            `;
            galleryItem.addEventListener('click', () => openLightbox(index));
            grid.appendChild(galleryItem);
        });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close gallery modal
function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Open lightbox with specific image
function openLightbox(index) {
    if (currentGallery.length === 0) return;

    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const image = document.getElementById('lightboxImage');
    const caption = document.getElementById('lightboxCaption');

    const item = currentGallery[currentLightboxIndex];
    image.src = item.src;
    image.alt = item.title;
    caption.textContent = item.description || item.title;

    lightbox.classList.add('active');
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// Navigate to previous image in lightbox
function previousLightboxImage() {
    if (currentGallery.length === 0) return;

    currentLightboxIndex = (currentLightboxIndex - 1 + currentGallery.length) % currentGallery.length;
    const image = document.getElementById('lightboxImage');
    const caption = document.getElementById('lightboxCaption');

    const item = currentGallery[currentLightboxIndex];
    image.src = item.src;
    image.alt = item.title;
    caption.textContent = item.description || item.title;
}

// Navigate to next image in lightbox
function nextLightboxImage() {
    if (currentGallery.length === 0) return;

    currentLightboxIndex = (currentLightboxIndex + 1) % currentGallery.length;
    const image = document.getElementById('lightboxImage');
    const caption = document.getElementById('lightboxCaption');

    const item = currentGallery[currentLightboxIndex];
    image.src = item.src;
    image.alt = item.title;
    caption.textContent = item.description || item.title;
}
