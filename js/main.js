// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // FAQ toggles
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            item.classList.toggle('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Payment amount selection
    const paymentButtons = document.querySelectorAll('.payment-amount');
    const customInput = document.getElementById('custom-amount');
    
    paymentButtons.forEach(button => {
        button.addEventListener('click', () => {
            paymentButtons.forEach(b => b.style.border = '');
            button.style.border = '2px solid var(--brand-primary)';
            
            if (button.dataset.amount && customInput) {
                customInput.value = button.dataset.amount;
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { init };
}
