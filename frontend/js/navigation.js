// Navigation functionality for the restaurant app
class NavigationManager {
  constructor() {
    this.navLinks = document.querySelectorAll('.nav-link');
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Handle navigation links
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.handleNavigation(link);
      });
    });
  }

  handleNavigation(link) {
    const href = link.getAttribute('href');
    const text = link.textContent.trim();

    if (href === '#') {
      switch(text) {
        case 'Etusivu':
          this.scrollToTop();
          break;
        case 'Tietoa':
          this.scrollToSection('about');
          break;
        case 'Ruokalista':
          this.scrollToSection('menu');
          break;
        case 'Galleria':
          this.showComingSoon('Galleria-sivu tulossa pian!');
          break;
        case 'Blogi':
          this.showComingSoon('Blogi-sivu tulossa pian!');
          break;
        default:
          console.log('Unknown navigation item:', text);
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId) || 
                   document.querySelector(`.${sectionId}-section`) ||
                   document.querySelector(`.${sectionId}-grid`);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Section ${sectionId} not found`);
    }
  }

  showComingSoon(message) {
    alert(message);
  }

  // Utility method to add new navigation items
  addNavigationItem(text, action) {
    const navItem = document.createElement('a');
    navItem.href = '#';
    navItem.className = 'nav-link';
    navItem.textContent = text;
    navItem.addEventListener('click', (e) => {
      e.preventDefault();
      action();
    });
    
    // Add to navigation (you might want to specify where)
    const navContainer = document.querySelector('.header-nav');
    if (navContainer) {
      navContainer.appendChild(navItem);
    }
  }
}

// Initialize navigation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.navigationManager = new NavigationManager();
});
