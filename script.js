// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initClayParticles();
    initLeaves();
    initScrollAnimations();
    initNavbar();
    initSmoothScroll();
});

// Create floating clay particles
function initClayParticles() {
    const container = document.getElementById('clayContainer');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'clay-particle';
        
        // Random size between 30px and 100px
        const size = Math.random() * 70 + 30;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random starting position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay and duration
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${30 + Math.random() * 20}s`;
        
        container.appendChild(particle);
    }
}

// Create falling leaves
function initLeaves() {
    const container = document.getElementById('leavesContainer');
    const leafCount = 20;
    
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'leaf';
        
        // Random horizontal position
        leaf.style.left = `${Math.random() * 100}%`;
        
        // Random animation delay and duration
        leaf.style.animationDelay = `${Math.random() * 20}s`;
        leaf.style.animationDuration = `${20 + Math.random() * 20}s`;
        
        // Random starting position (start above viewport)
        leaf.style.top = `-${Math.random() * 200}px`;
        
        container.appendChild(leaf);
    }
}

// Scroll animations for elements
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all major content sections
    const animatedElements = document.querySelectorAll(
        '.story-card, .timeline-item, .experience-card, .project-card, .skill-category, .cert-category'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
        observer.observe(el);
    });
}

// Navbar scroll behavior
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 30px rgba(74, 63, 53, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(74, 63, 53, 0.1)';
        }
        
        // Highlight active nav link
        highlightActiveSection();
        
        lastScroll = currentScroll;
    });
}

// Highlight active navigation section
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--earth-terracotta)';
        }
    });
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add interactive hover effects to publication tags
document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag, .tech-stack span, .skill-tags span');
    
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        const floatingElement = document.querySelector('.floating-element');
        if (floatingElement) {
            floatingElement.style.transform = `translateY(${scrolled * 0.3}px) rotate(${scrolled * 0.1}deg)`;
        }
    }
});

// Add typing effect to hero tagline (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add counter animation for scores
function animateCounter(element, target, callback, duration = 4000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
            if (callback) callback();
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe score values and animate when visible
const scoreObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const originalValue = entry.target.dataset.originalValue || entry.target.textContent.trim();
            entry.target.dataset.animated = 'true';
            
            // Handle different score formats
            // Check if it's a GPA format (e.g., "9.33/10")
            if (originalValue.includes('/')) {
                // Extract the decimal number before the slash
                const gpaMatch = originalValue.match(/(\d+\.?\d*)\s*\/\s*(\d+)/);
                if (gpaMatch) {
                    const gpaValue = parseFloat(gpaMatch[1]);
                    const denominator = gpaMatch[2];
                    
                    // Animate the decimal value
                    animateDecimalCounter(entry.target, gpaValue, () => {
                        entry.target.textContent = gpaValue.toFixed(2) + '/' + denominator;
                    });
                } else {
                    // Just display as-is if we can't parse
                    entry.target.textContent = originalValue;
                }
            } 
            // Check if it's a percentage
            else if (originalValue.includes('%')) {
                const numericValue = parseFloat(originalValue.replace(/[^0-9.]/g, ''));
                if (numericValue) {
                    animateCounter(entry.target, numericValue, () => {
                        entry.target.textContent = Math.round(numericValue) + '%';
                    });
                }
            }
            // Regular integer scores (like GRE, TOEFL)
            else {
                const numericValue = parseFloat(originalValue.replace(/[^0-9.]/g, ''));
                if (numericValue && numericValue % 1 === 0) {
                    animateCounter(entry.target, numericValue);
                } else if (numericValue) {
                    // Handle decimal values
                    animateDecimalCounter(entry.target, numericValue);
                }
            }
        }
    });
}, { threshold: 0.5 });

// Animate decimal counter
function animateDecimalCounter(element, target, callback) {
    const start = 0;
    const duration = 4000;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toFixed(2);
            clearInterval(timer);
            if (callback) callback();
        } else {
            element.textContent = current.toFixed(2);
        }
    }, 16);
}

document.addEventListener('DOMContentLoaded', function() {
    const scoreValues = document.querySelectorAll('.score-value');
    scoreValues.forEach(score => {
        // If it has a data-gpa attribute, preserve the original format
        if (score.dataset.gpa) {
            score.dataset.originalValue = score.dataset.gpa;
        } else {
            score.dataset.originalValue = score.textContent.trim();
        }
        scoreObserver.observe(score);
    });
});

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .contact-card');
    
    buttons.forEach(button => {
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
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn-primary, .btn-secondary, .contact-card {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Fun easter egg: make all leaves fall at once
        const leaves = document.querySelectorAll('.leaf');
        leaves.forEach(leaf => {
            leaf.style.animationDuration = '2s';
        });
        
        // Show a fun message
        const message = document.createElement('div');
        message.textContent = 'You found the secret! More leaves!';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.background = 'var(--earth-terracotta)';
        message.style.color = 'white';
        message.style.padding = '2rem';
        message.style.borderRadius = '15px';
        message.style.fontSize = '2rem';
        message.style.fontFamily = 'var(--font-display)';
        message.style.zIndex = '10000';
        message.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
        
        document.body.appendChild(message);
        
        setTimeout(() => message.remove(), 3000);
        
        // Add more leaves
        initLeaves();
    }
});

// Log a welcome message
console.log('%cWelcome to Prerana Kulkarni\'s Portfolio!', 'color: #C17B5C; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? Check out the source on GitHub!', 'color: #8B7355; font-size: 14px;');
console.log('%cTry the Konami code for a surprise! (↑↑↓↓←→←→BA)', 'color: #A8B49A; font-size: 12px; font-style: italic;');
