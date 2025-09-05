// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

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
    // Remove spaces and check for Kenyan phone patterns
    const cleanPhone = phone.replace(/\s/g, '');
    const kenyanPhonePattern = /^(\+254|254|0)?[17]\d{8}$/;
    return kenyanPhonePattern.test(cleanPhone);
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
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
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
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
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
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        
        // If it doesn't start with 254 or +254, and has 9 or 10 digits, assume it's local
        if (value.length === 9 && (value.startsWith('7') || value.startsWith('1'))) {
            value = '254' + value;
        } else if (value.length === 10 && value.startsWith('0')) {
            value = '254' + value.substring(1);
        }
        
        // Format with + prefix if it starts with 254
        if (value.startsWith('254') && value.length === 12) {
            e.target.value = '+' + value;
        } else if (value.length <= 12) {
            e.target.value = value.startsWith('254') ? '+' + value : value;
        }
    });
    
    // Set placeholder
    phoneInput.placeholder = '+254 712 345 678';
}

// Dynamic pricing calculator (optional feature)
function calculateTotalPrice() {
    const serviceSelect = document.getElementById('service');
    if (!serviceSelect) return;
    
    const prices = {
        'basic': 500,
        'premium': 1200,
        'deluxe': 2500,
        'custom': 0
    };
    
    serviceSelect.addEventListener('change', function() {
        const selectedService = this.value;
        const price = prices[selectedService];
        
        // Show estimated price near the form
        let priceDisplay = document.querySelector('.price-estimate');
        if (!priceDisplay) {
            priceDisplay = document.createElement('div');
            priceDisplay.className = 'price-estimate';
            priceDisplay.style.cssText = `
                margin-top: 1rem;
                padding: 1rem;
                background-color: #d5f4e6;
                border-radius: 8px;
                color: #27ae60;
                font-weight: 600;
            `;
            this.parentNode.appendChild(priceDisplay);
        }
        
        if (price > 0) {
            priceDisplay.innerHTML = `<i class="fas fa-calculator"></i> Estimated Price: KES ${price.toLocaleString()}`;
        } else if (selectedService === 'custom') {
            priceDisplay.innerHTML = `<i class="fas fa-phone"></i> Call us for custom pricing: <a href="tel:+254712345678" style="color: #27ae60;">+254 712 345 678</a>`;
        } else {
            priceDisplay.innerHTML = '';
        }
    });
}

// Initialize pricing calculator
document.addEventListener('DOMContentLoaded', calculateTotalPrice);

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

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Log successful initialization
    console.log('CleanRide Auto Wash website loaded successfully!');
    
    // Add any additional initialization code here
    
    // Check if user has visited before
    if (!localStorage.getItem('cleanride_visited')) {
        localStorage.setItem('cleanride_visited', 'true');
        // Could show a welcome message or first-time visitor modal here
    }
});
