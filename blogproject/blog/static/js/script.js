// Blog Platform JavaScript - Mobile menu functionality only

class BlogPlatform {
  constructor() {
    this.mobileMenuOpen = false;
    this.init();
  }
  
  init() {
    this.bindEvents();
  }
  
  bindEvents() {
    // Mobile menu toggle only
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    if (this.mobileMenuOpen) {
      mobileMenu.classList.add('active');
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BlogPlatform();
});