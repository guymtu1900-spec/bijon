// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu - with null check
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
if (hamburger && navMenu && navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
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

// Form Handling
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Basic validation
        if (!validateForm(formObject)) {
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Show success message
            showNotification('Thank you! Your booking request has been received. We will contact you shortly.', 'success');
            
            // Reset form
            this.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Redirect to WhatsApp for immediate contact
            const phoneNumber = '254712345678'; // Replace with actual WhatsApp number
            const message = encodeURIComponent(
                `Hello! I would like to book a car wash service.\n\nDetails:\nName: ${formObject.name}\nPhone: ${formObject.phone}\nService: ${formObject.service}\nLocation: ${formObject.location}\n\nAdditional Notes: ${formObject.message || 'None'}`
            );
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            
        }, 2000);
    });
}

// Form validation
function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!data.phone || !isValidKenyanPhone(data.phone)) {
        errors.push('Please enter a valid Kenyan phone number (e.g., +254712345678)');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.service) {
        errors.push('Please select a service');
    }
    
    if (!data.location || data.location.trim().length < 3) {
        errors.push('Please specify your location');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('<br>'), 'error');
        return false;
    }
    
    return true;
}

// Validate Kenyan phone number
function isValidKenyanPhone(phone) {
    // Remove all non-numeric characters except + at the beginning
    const cleanPhone = phone.replace(/[^\d+]/g, '').replace(/\+(?!254)/g, '');
    
    // Kenyan phone patterns:
    // +254712345678 (full international)
    // 254712345678 (international without +)
    // 0712345678 (local format)
    // 712345678 (without leading 0)
    const kenyanPhonePatterns = [
        /^\+254[17]\d{8}$/, // +254712345678
        /^254[17]\d{8}$/,   // 254712345678
        /^0[17]\d{8}$/,     // 0712345678
        /^[17]\d{8}$/       // 712345678
    ];
    
    return kenyanPhonePatterns.some(pattern => pattern.test(cleanPhone));
}

// Validate email
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <div class="notification-message">${message}</div>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        max-width: 400px;
        background: ${type === 'success' ? '#17a2b8' : type === 'error' ? '#dc3545' : '#2c5aa0'};
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-message {
        flex: 1;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #dc2626;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 1000;
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .pricing-card, .about-content, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Phone number formatting for Kenyan numbers
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value;
        
        // Handle pasting - only allow + at the beginning
        value = value.replace(/[^\d+]/g, '').replace(/\+(?!254$|254\d)/g, '');
        
        // Remove all non-digits for processing
        let digits = value.replace(/\D/g, '');
        
        // Auto-format based on input length and pattern
        if (digits.length === 9 && (digits.startsWith('7') || digits.startsWith('1'))) {
            // 712345678 -> +254712345678
            e.target.value = `+254${digits}`;
        } else if (digits.length === 10 && digits.startsWith('0')) {
            // 0712345678 -> +254712345678
            e.target.value = `+254${digits.substring(1)}`;
        } else if (digits.length === 12 && digits.startsWith('254')) {
            // 254712345678 -> +254712345678
            e.target.value = `+${digits}`;
        } else if (digits.length > 0 && digits.length <= 12) {
            // Keep what user typed if it's a valid partial number
            if (value.startsWith('+254')) {
                e.target.value = value;
            } else if (digits.startsWith('254')) {
                e.target.value = `+${digits}`;
            } else {
                e.target.value = digits;
            }
        } else if (digits.length > 12) {
            // Limit to 12 digits max
            e.target.value = e.target.value.substring(0, e.target.value.length - 1);
        }
    });
    
    phoneInput.addEventListener('blur', function(e) {
        // Final cleanup on blur
        let value = e.target.value.replace(/[^\d+]/g, '');
        let digits = value.replace(/\D/g, '');
        
        if (digits.length === 9 && (digits.startsWith('7') || digits.startsWith('1'))) {
            e.target.value = `+254${digits}`;
        } else if (digits.length === 10 && digits.startsWith('0')) {
            e.target.value = `+254${digits.substring(1)}`;
        } else if (digits.length === 12 && digits.startsWith('254')) {
            e.target.value = `+${digits}`;
        }
    });
    
    // Set placeholder
    phoneInput.placeholder = '+254 712 345 678';
}

// Service information display (optional feature)
function displayServiceInfo() {
    const serviceSelect = document.getElementById('service');
    if (!serviceSelect) return;
    
    serviceSelect.addEventListener('change', function() {
        const selectedService = this.value;
        
        // Show service information near the form
        let infoDisplay = document.querySelector('.service-info');
        if (!infoDisplay) {
            infoDisplay = document.createElement('div');
            infoDisplay.className = 'service-info';
            infoDisplay.style.cssText = `
                margin-top: 1rem;
                padding: 1rem;
                background-color: #d1ecf1;
                border-radius: 8px;
                color: #17a2b8;
                font-weight: 600;
            `;
            this.parentNode.appendChild(infoDisplay);
        }
        
        if (selectedService && selectedService !== '') {
            infoDisplay.innerHTML = `<i class="fas fa-info-circle"></i> Contact us for pricing and availability: <a href="tel:+254712345678" style="color: #17a2b8;">+254 712 345 678</a>`;
        } else {
            infoDisplay.innerHTML = '';
        }
    });
}

// Initialize service info display
document.addEventListener('DOMContentLoaded', displayServiceInfo);

// Add loading state to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Don't add loading to form submit buttons (handled separately)
            if (this.type === 'submit') return;
            
            // Add subtle loading effect for other buttons
            this.style.opacity = '0.8';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
    });
});

// Hero Slideshow Functionality
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showNextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }
    
    // Start slideshow - change slide every 3 seconds
    if (slides.length > 0) {
        setInterval(showNextSlide, 3000);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Log successful initialization
    console.log('BIJON Car Wash website loaded successfully!');
    
    // Initialize hero slideshow
    initHeroSlideshow();
    
    // Add any additional initialization code here
    
    // Check if user has visited before
    if (!localStorage.getItem('bijon_visited')) {
        localStorage.setItem('bijon_visited', 'true');
        // Could show a welcome message or first-time visitor modal here
    }
});
