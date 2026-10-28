// ============================================
// Mobile Menu Toggle
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active', isOpen);
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', 'Open navigation menu');
        });
    });
}

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Active Link Highlighting
// ============================================

function setActiveLink() {
    const links = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Set active link on page load
window.addEventListener('load', setActiveLink);

// ============================================
// Project Filter Functionality
// ============================================

const typeFilterButtons = document.querySelectorAll('[data-filter-type]');
const statusFilterButtons = document.querySelectorAll('[data-filter-status]');
const projectCards = document.querySelectorAll('.project-card-large');
const projectResultCount = document.getElementById('project-result-count');

function updateProjectFilters() {
    const selectedType = document.querySelector('[data-filter-type].active')?.dataset.filterType ?? 'all';
    const selectedStatus = document.querySelector('[data-filter-status].active')?.dataset.filterStatus ?? 'all';
    let visibleCount = 0;

    projectCards.forEach(card => {
        const matchesType = selectedType === 'all' || card.dataset.category === selectedType;
        const matchesStatus = selectedStatus === 'all' || card.dataset.status === selectedStatus;
        card.hidden = !(matchesType && matchesStatus);
        if (!card.hidden) visibleCount += 1;
    });

    if (projectResultCount) {
        projectResultCount.textContent = `Showing ${visibleCount} of ${projectCards.length} projects`;
    }
}

function activateFilter(button, groupButtons) {
    groupButtons.forEach(filter => {
        const isActive = filter === button;
        filter.classList.toggle('active', isActive);
        filter.setAttribute('aria-pressed', String(isActive));
    });
    updateProjectFilters();
}

if (typeFilterButtons.length > 0 || statusFilterButtons.length > 0) {
    typeFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            activateFilter(button, typeFilterButtons);
        });
    });
    statusFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            activateFilter(button, statusFilterButtons);
        });
    });
    updateProjectFilters();
}

// ============================================
// Contact Form Handling
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validate form
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }

        const emailBody = `Hi Kane,\n\n${message.trim()}\n\nBest,\n${name.trim()}\n\nReply to: ${email.trim()}`;
        const mailto = `mailto:yw4623@columbia.edu?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailto;
        showNotification('Your email app should open with a draft. If it does not, use the email link on this page.', 'info');
    });
}

document.querySelectorAll('[data-copy-email]').forEach(button => {
    button.addEventListener('click', async () => {
        const email = button.dataset.copyEmail;
        if (!email) {
            console.error('The copy-email button is missing its email address.');
            showNotification('Email address is unavailable. Please use the email link on this page.', 'error');
            return;
        }
        if (!navigator.clipboard || typeof navigator.clipboard.writeText !== 'function') {
            showNotification('Copy is unavailable here. Please select the email address above.', 'error');
            return;
        }

        try {
            await navigator.clipboard.writeText(email);
            showNotification('Email address copied.', 'success');
        } catch (error) {
            console.error('Unable to copy the email address.', error);
            showNotification('Could not copy the address. Please select it from the email link.', 'error');
        }
    });
});

// ============================================
// Newsletter Form Handling
// ============================================

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }

        // Show success message
        showNotification('Successfully subscribed! Check your email for confirmation.', 'success');

        // Reset form
        newsletterForm.reset();
    });
}

// ============================================
// Notification System
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.setAttribute('role', type === 'error' ? 'alert' : 'status');

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ============================================
// Scroll Animation for Elements
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards and blog cards
document.querySelectorAll('.project-card, .blog-card, .skill-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
});

// ============================================
// Navbar Background on Scroll
// ============================================

const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
        }
    });
}

// ============================================
// Read More Links Enhancement
// ============================================

const readMoreLinks = document.querySelectorAll('.read-more, .project-link');

readMoreLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// ============================================
// Image Lazy Loading
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Print-friendly styles
// ============================================

window.addEventListener('beforeprint', () => {
    document.body.style.backgroundColor = 'white';
});

// ============================================
// Keyboard Navigation
// ============================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open navigation menu');
    }
});

// ============================================
// Tab Navigation Functionality
// ============================================

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding tab content
            const tabId = button.getAttribute('data-tab');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.style.display = 'block';
            }
        });
    });
}

// ============================================
// Initialize on Page Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    
    // Add any initialization code here
    setActiveLink();
});
