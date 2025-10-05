// Search functionality for the restaurant app
class SearchManager {
  constructor() {
    this.headerSearchInput = document.getElementById('headerSearch');
    this.headerSearchIcon = document.querySelector('.search-icon');
    this.searchTimeout = null;
    this.searchResults = null;
    
    this.init();
  }

  init() {
    console.log('Initializing search...');
    
    if (this.headerSearchInput) {
      console.log('Search input found, adding event listeners');
      this.createSearchResultsContainer();
      this.addEventListeners();
      console.log('Search event listeners added');
    } else {
      console.log('Search input not found!');
    }
  }

  createSearchResultsContainer() {
    // Use the existing search dropdown from HTML
    this.searchResults = document.getElementById('searchDropdown');
    if (!this.searchResults) {
      console.log('Search dropdown not found!');
    }
  }

  addScrollbarStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .search-results::-webkit-scrollbar {
        width: 6px;
      }
      .search-results::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
      }
      .search-results::-webkit-scrollbar-thumb {
        background: #eac17a;
        border-radius: 3px;
      }
      .search-results::-webkit-scrollbar-thumb:hover {
        background: #e1701a;
      }
    `;
    document.head.appendChild(style);
  }

  addEventListeners() {
    // Show all items when clicking on search box
    this.headerSearchInput.addEventListener('focus', () => {
      console.log('Search box focused');
      if (window.renderMenu) {
        window.renderMenu();
      }
    });
    
    // Live search on input
    this.headerSearchInput.addEventListener('input', (e) => {
      console.log('Search input changed:', e.target.value);
      this.filterMenu();
    });
    
    // Clear search on escape
    this.headerSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.clearSearch();
      }
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
      if (this.searchResults && 
          !this.headerSearchInput.contains(e.target) && 
          !this.searchResults.contains(e.target)) {
        this.hideResults();
      }
    });
  }

  filterMenu() {
    console.log('filterMenu called');
    const val = (this.headerSearchInput.value || '').trim().toLowerCase();
    
    if (!window.state || !window.state.menu) {
      console.log('Menu not loaded yet');
      return;
    }
    
    console.log(`Searching for: "${val}"`);
    
    // Clear previous timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    
    // If search is empty, hide results and show all items
    if (val.length === 0) {
      console.log('Search empty, showing all items');
      this.hideResults();
      if (window.renderMenu) {
        window.renderMenu();
      }
      return;
    }
    
    // Filter with delay for performance
    this.searchTimeout = setTimeout(() => {
      const filtered = window.state.menu.filter(d => {
        const matches = (
          (d.name_fi && d.name_fi.toLowerCase().includes(val)) ||
          (d.name_en && d.name_en.toLowerCase().includes(val)) ||
          (d.description && d.description.toLowerCase().includes(val))
        );
        
        if (matches) {
          console.log(`Match found: ${d.name_fi}`);
        }
        
        return matches;
      });
      
      console.log(`Found ${filtered.length} results for "${val}"`);
      this.showResults(filtered);
      
      // Update main menu
      if (window.renderMenu) {
        window.renderMenu(filtered);
      }
    }, 100);
  }

  showResults(filtered) {
    if (!this.searchResults) return;

    if (filtered.length > 0) {
      this.searchResults.innerHTML = filtered.map((dish, index) => `
        <div class="search-result-item" style="
          padding: 12px;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: background 0.2s ease;
        " onmouseover="this.style.background='#f8f9fa'" onmouseout="this.style.background='white'">
          <img src="${dish.image_url}" alt="${dish.name_fi}" style="
            width: 40px; 
            height: 40px; 
            object-fit: cover; 
            border-radius: 8px;
          ">
          <div style="flex: 1;">
            <div style="font-weight: 600; color: #2c3e50;">${dish.name_fi}</div>
            <div style="font-size: 0.9rem; color: #7f8c8d;">${dish.description}</div>
            <div style="font-size: 0.9rem; color: #e1701a; font-weight: 600;">${dish.price}€</div>
          </div>
        </div>
      `).join('');
      
      // Add click handlers
      this.searchResults.querySelectorAll('.search-result-item').forEach((item, index) => {
        item.addEventListener('click', () => {
          const selectedDish = filtered[index];
          this.headerSearchInput.value = selectedDish.name_fi;
          this.hideResults();
          
          // Scroll to menu section
          const menuSection = document.getElementById('menu') || document.querySelector('.menu-grid');
          if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
      
      this.searchResults.classList.add('active');
    } else {
      this.searchResults.innerHTML = '<div class="search-no-results">Ei tuloksia</div>';
      this.searchResults.classList.add('active');
    }
  }

  hideResults() {
    if (this.searchResults) {
      this.searchResults.classList.remove('active');
    }
  }

  clearSearch() {
    this.headerSearchInput.value = '';
    this.hideResults();
    if (window.renderMenu) {
      window.renderMenu();
    }
  }
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    window.searchManager = new SearchManager();
  }, 100);
});
