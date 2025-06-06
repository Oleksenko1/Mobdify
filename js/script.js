document.addEventListener('DOMContentLoaded', function() {
    console.log('Blinkist website loaded');
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            this.classList.remove('was-validated');
        });
    }
});