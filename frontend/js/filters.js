// Filter functionality for the restaurant app
class FilterManager {
  constructor() {
    this.dietaryFilters = {
      vegan: document.getElementById('filter-vegan'),
      gluten: document.getElementById('filter-gluten'),
      lactose: document.getElementById('filter-lactose')
    };
    
    this.allergenFilters = document.querySelectorAll('.allergen-checkbox');
    this.applyFiltersBtn = document.getElementById('applyFilters');
    this.clearFiltersBtn = document.getElementById('clearFilters');
    
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Dietary filters
    Object.values(this.dietaryFilters).forEach(filter => {
      if (filter) {
        filter.addEventListener('change', () => {
          this.applyDietaryFilters();
        });
      }
    });

    // Allergen filters
    this.allergenFilters.forEach(filter => {
      filter.addEventListener('change', () => {
        this.updateAllergenPills();
      });
    });

    // Apply filters button
    if (this.applyFiltersBtn) {
      this.applyFiltersBtn.addEventListener('click', () => {
        this.applyAllFilters();
      });
    }

    // Clear filters button
    if (this.clearFiltersBtn) {
      this.clearFiltersBtn.addEventListener('click', () => {
        this.clearAllFilters();
      });
    }
  }

  applyDietaryFilters() {
    const activeFilters = [];
    
    Object.entries(this.dietaryFilters).forEach(([type, filter]) => {
      if (filter && filter.checked) {
        activeFilters.push(type);
      }
    });

    if (activeFilters.length === 0) {
      // No dietary filters active, show all items
      if (window.menuManager) {
        window.menuManager.renderMenu();
      }
      return;
    }

    // Apply first active filter (can be extended to support multiple)
    const firstFilter = activeFilters[0];
    if (window.menuManager) {
      window.menuManager.filterByDietary(firstFilter);
    }
  }

  updateAllergenPills() {
    this.allergenFilters.forEach(filter => {
      const pill = filter.nextElementSibling;
      if (filter.checked) {
        pill.style.background = '#e74c3c';
        pill.style.borderColor = '#c0392b';
        pill.style.color = 'white';
        pill.style.transform = 'translateY(-1px)';
        pill.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.3)';
      } else {
        pill.style.background = '#f8f9fa';
        pill.style.borderColor = '#e9ecef';
        pill.style.color = '#6c757d';
        pill.style.transform = 'translateY(0)';
        pill.style.boxShadow = 'none';
      }
    });
  }

  applyAllFilters() {
    const excludedAllergens = [];
    
    this.allergenFilters.forEach(filter => {
      if (filter.checked) {
        const allergenOption = filter.closest('.allergen-option');
        const allergen = allergenOption.dataset.allergen;
        excludedAllergens.push(allergen);
      }
    });

    // Apply allergen filters
    if (excludedAllergens.length > 0 && window.menuManager) {
      window.menuManager.filterByAllergens(excludedAllergens);
    } else {
      // Apply dietary filters if no allergen filters
      this.applyDietaryFilters();
    }
  }

  clearAllFilters() {
    // Clear dietary filters
    Object.values(this.dietaryFilters).forEach(filter => {
      if (filter) {
        filter.checked = false;
      }
    });

    // Clear allergen filters
    this.allergenFilters.forEach(filter => {
      filter.checked = false;
    });

    // Reset allergen pills
    this.updateAllergenPills();

    // Show all menu items
    if (window.menuManager) {
      window.menuManager.clearFilters();
    }
  }

  getActiveFilters() {
    const active = {
      dietary: [],
      allergens: []
    };

    // Get active dietary filters
    Object.entries(this.dietaryFilters).forEach(([type, filter]) => {
      if (filter && filter.checked) {
        active.dietary.push(type);
      }
    });

    // Get active allergen filters
    this.allergenFilters.forEach(filter => {
      if (filter.checked) {
        const allergenOption = filter.closest('.allergen-option');
        const allergen = allergenOption.dataset.allergen;
        active.allergens.push(allergen);
      }
    });

    return active;
  }
}

// Initialize filters when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.filterManager = new FilterManager();
});
