// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
});

// Smooth scrolling for navbar links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .footer-section a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }
            }
        });
    });
});

// // Navbar background change on scroll
// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');
//     const navBarItem = document.querySelector('.nav-item');
//     const navBarLink = document.querySelector('.nav-link');
//     if (window.scrollY > 50) {
//         navbar.style.background = 'rgba(0, 0, 0, 0.98)';
//         navBarLink.className = 'text-light  text-decoration-none';


//     } else {
//         navbar.style.background = 'rgba(255, 255, 255, 0)';
//         navBarLink.className = 'text-black  text-decoration-none';

//         // navBarLink.style.color = '#000000ff';

//     }

// });

// Active navigation highlighting
// window.addEventListener('scroll', function() {
//     const sections = document.querySelectorAll('section[id]');
//     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
//     let current = '';
    
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
        
//         if (scrollY >= sectionTop - 200) {
//             current = section.getAttribute('id');
//         }
//     });
    
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === '#' + current) {
//             link.classList.add('active');
//         }
//     });
// });

// Service items hover effects
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    
    serviceItems.forEach(item => {
        const overlay = item.querySelector('.service-overlay');
        const image = item.querySelector('.service-image');
        
        item.addEventListener('mouseenter', function() {
            // Add custom hover animations
            overlay.style.transform = 'translateY(10px)';
            image.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            overlay.style.transform = 'translateY(-50%)';
            image.style.transform = 'scale(1)';
        });
    });
});

// Intersection Observer for service items animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all service items
document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        observer.observe(item);
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Preloader for hero image
window.addEventListener('load', function() {
    const heroImage = document.querySelector('.hero-image');
    const heroLogo = document.querySelector('.hero-logo');
    
    if (heroImage.complete) {
        heroLogo.style.opacity = '1';
    } else {
        heroImage.addEventListener('load', function() {
            heroLogo.style.opacity = '1';
        });
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    const heroLogo = document.querySelector('.hero-logo');
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroLogo.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.3}px)`;
    }
});

// Add loading animation for service images
document.addEventListener('DOMContentLoaded', function() {
    const serviceImages = document.querySelectorAll('.service-image');
    
    serviceImages.forEach((img, index) => {
        img.addEventListener('load', function() {
            setTimeout(() => {
                this.style.opacity = '1';
            }, index * 100);
        });
    });
});

// Mobile menu enhancements
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            // Add smooth transition for mobile menu
            navbarCollapse.style.transition = 'all 0.3s ease';
        });
    }
});

// Scroll to top functionality (can be added later)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Contact form handling (placeholder for future enhancement)
function handleContactForm(event) {
    event.preventDefault();
    // Add contact form handling logic here
    console.log('Contact form submitted');
}

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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll-dependent functionality here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
