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
    
    // Auth buttons
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('login-btn')) {
        this.handleLogin();
      } else if (e.target.classList.contains('signup-btn')) {
        this.handleSignup();
      } else if (e.target.classList.contains('logout-btn')) {
        this.handleLogout();
      } else if (e.target.classList.contains('get-started-btn')) {
        this.handleGetStarted();
      }
    });
    
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
  
  handleLogin() {
    this.showToast("Login", "Login functionality would be implemented here. Consider using Supabase for authentication!");
  }
  
  handleSignup() {
    this.showToast("Sign Up", "Sign up functionality would be implemented here. Consider using Supabase for authentication!");
  }
  
  handleLogout() {
    this.isAuthenticated = false;
    this.updateUI();
    this.showToast("Logged out", "You have been successfully logged out.");
  }
  
  handleGetStarted() {
    if (!this.isAuthenticated) {
      this.handleSignup();
    } else {
      this.showToast("Let's write!", "Taking you to the writing interface...");
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
    
    // Update auth buttons
    const authButtons = document.querySelectorAll('.auth-buttons');
    authButtons.forEach(container => {
      if (this.isAuthenticated) {
        container.innerHTML = `
          <button class="btn btn-ghost">My Profile</button>
          <button class="btn btn-outline logout-btn">Logout</button>
        `;
      } else {
        container.innerHTML = `
          <button class="btn btn-ghost login-btn">Log In</button>
          <button class="btn btn-default signup-btn">Sign Up</button>
        `;
      }
    });
    
    // Show/hide sections based on auth state
    if (this.isAuthenticated) {
      heroSection.classList.add('hidden');
      recommendedSection.classList.remove('hidden');
      // Update welcome message
      const welcomeTitle = document.getElementById('welcome-title');
      if (welcomeTitle) {
        welcomeTitle.textContent = `Welcome back, ${this.username}! 👋`;
      }
    } else {
      heroSection.classList.remove('hidden');
      recommendedSection.classList.add('hidden');
    }
    
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