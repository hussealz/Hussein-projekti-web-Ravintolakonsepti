// Menu Navigation Management
class MenuNavigationManager {
  constructor() {
    this.dailyMenuBtn = document.getElementById('dailyMenuBtn');
    this.weeklyMenuBtn = document.getElementById('weeklyMenuBtn');
    this.dailyMenuView = document.getElementById('dailyMenuView');
    this.weeklyMenuView = document.getElementById('weeklyMenuView');
    
    this.init();
  }

  init() {
    console.log('Menu Navigation Manager initialized');
    this.addEventListeners();
  }

  addEventListeners() {
    if (this.dailyMenuBtn) {
      this.dailyMenuBtn.addEventListener('click', () => {
        this.showDailyMenu();
      });
    }

    if (this.weeklyMenuBtn) {
      this.weeklyMenuBtn.addEventListener('click', () => {
        this.showWeeklyMenu();
      });
    }
  }

  showDailyMenu() {
    // Update button states
    this.dailyMenuBtn.classList.add('active');
    this.weeklyMenuBtn.classList.remove('active');
    
    // Show/hide views
    this.dailyMenuView.classList.add('active');
    this.weeklyMenuView.classList.remove('active');
  }

  showWeeklyMenu() {
    // Update button states
    this.weeklyMenuBtn.classList.add('active');
    this.dailyMenuBtn.classList.remove('active');
    
    // Show/hide views
    this.weeklyMenuView.classList.add('active');
    this.dailyMenuView.classList.remove('active');
    
    // Render weekly menu
    if (window.weeklyMenuManager) {
      window.weeklyMenuManager.renderWeeklyMenu();
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.menuNavigationManager = new MenuNavigationManager();
});
