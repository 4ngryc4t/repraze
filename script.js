// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .cta-buttons a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply to links that start with #
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Carousel functionality for screenshots
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentSlide = 0;
    
    // Function to show a specific slide
    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the current slide and activate the corresponding dot
        slides[n].style.display = 'block';
        dots[n].classList.add('active');
        currentSlide = n;
    }
    
    // Event listeners for next and previous buttons
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Auto-advance the carousel every 5 seconds
    setInterval(function() {
        if (document.visibilityState === 'visible') {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
    }, 5000);
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Mobile navigation toggle
    const mobileNavToggle = document.createElement('button');
    mobileNavToggle.classList.add('mobile-nav-toggle');
    mobileNavToggle.innerHTML = '<span></span><span></span><span></span>';
    
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    
    if (header && nav && window.innerWidth < 768) {
        header.appendChild(mobileNavToggle);
        
        mobileNavToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileNavToggle.classList.toggle('active');
        });
    }
});
