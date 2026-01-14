document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Optional: Animate icon
            const icon = mobileMenuBtn.querySelector('svg');
            // Simple toggle logic for icon could go here if we had two icons
        });
    }
});