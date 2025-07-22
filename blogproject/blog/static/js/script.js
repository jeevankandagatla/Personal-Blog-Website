// Blog Platform JavaScript - Maintaining exact same functionality

class BlogPlatform {
  constructor() {
    this.isAuthenticated = false;
    this.username = "Alex";
    this.mobileMenuOpen = false;
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.updateUI();
  }
  
  bindEvents() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }
    
    // Demo toggle
    const demoToggle = document.getElementById('demo-toggle');
    if (demoToggle) {
      demoToggle.addEventListener('click', () => this.toggleAuth());
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
  
  toggleAuth() {
    this.isAuthenticated = !this.isAuthenticated;
    this.updateUI();
  }
  
  updateUI() {
    const heroSection = document.getElementById('hero-section');
    const recommendedSection = document.getElementById('recommended-section');
    const demoToggle = document.getElementById('demo-toggle');
    
    // Update demo toggle text
    if (demoToggle) {
      demoToggle.textContent = this.isAuthenticated 
        ? 'Demo: Switch to Guest View' 
        : 'Demo: Switch to User View';
    }
  }
  
  showToast(title, description) {
    // Simple toast implementation
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        padding: 1rem;
        box-shadow: var(--shadow-large);
        z-index: 100;
        max-width: 300px;
      ">
        <h4 style="font-weight: 600; margin-bottom: 0.5rem;">${title}</h4>
        <p style="color: var(--muted-foreground); font-size: 0.875rem;">${description}</p>
      </div>
    `;
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BlogPlatform();
});