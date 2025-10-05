// Menu management for the restaurant app
class MenuManager {
  constructor() {
    this.selectors = {
      menu: document.getElementById('menu')
    };
    
    this.init();
  }

  init() {
    this.loadMenu();
  }

  async loadMenu() {
    try {
      // Static menu data for now
      window.state.menu = [
        { 
          id: 1, 
          name_fi: 'Kabsa', 
          name_en: 'Kabsa', 
          available: true, 
          vegan: false, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: '/assets/img/food-bg.jpg', 
          description: 'Traditional Saudi Arabian rice dish with aromatic spices.', 
          price: 15.90, 
          allergens: ['nuts'] 
        },
        { 
          id: 2, 
          name_fi: 'Salaatti', 
          name_en: 'Fresh Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: '/assets/img/salati.jpg', 
          description: 'Fresh mixed vegetable salad with seasonal ingredients.', 
          price: 12.50, 
          allergens: [] 
        },
        { 
          id: 3, 
          name_fi: 'Hummus', 
          name_en: 'Hummus', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: '/assets/img/placeholder.jpg', 
          description: 'Creamy chickpea dip with tahini and olive oil.', 
          price: 8.90, 
          allergens: ['nuts'] 
        },
        { 
          id: 4, 
          name_fi: 'Falafel', 
          name_en: 'Falafel', 
          available: true, 
          vegan: true, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: '/assets/img/placeholder.jpg', 
          description: 'Crispy chickpea balls with herbs and spices.', 
          price: 11.50, 
          allergens: [] 
        },
        { 
          id: 5, 
          name_fi: 'Shawarma', 
          name_en: 'Shawarma', 
          available: true, 
          vegan: false, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: '/assets/img/placeholder.jpg', 
          description: 'Marinated meat with fresh vegetables and garlic sauce.', 
          price: 14.90, 
          allergens: ['milk'] 
        }
      ];
      
      this.renderMenu();
    } catch(e) {
      this.selectors.menu.innerHTML = '<p style="color:#c0392b">Virhe ladattaessa ruokalistaa</p>';
    }
  }

  renderMenu(dishes = null) {
    const menuToRender = dishes || window.state.menu;
    
    if (!menuToRender || !Array.isArray(menuToRender)) {
      console.log('No menu data to render');
      return;
    }

    this.selectors.menu.innerHTML = menuToRender.map(dish => `
      <div class="dish" data-id="${dish.id}">
        <div class="dish-image">
          <img src="${dish.image_url}" alt="${dish.name_fi}" loading="lazy">
          ${dish.vegan ? '<span class="vegan-badge">🌱</span>' : ''}
        </div>
        <div class="dish-content">
          <h3 class="dish-name">${dish.name_fi}</h3>
          <p class="dish-description">${dish.description}</p>
          <div class="dish-tags">
            ${dish.gluten_free ? '<span class="tag gluten-free">GF</span>' : ''}
            ${dish.lactose_free ? '<span class="tag lactose-free">LF</span>' : ''}
            ${dish.vegan ? '<span class="tag vegan">Vegan</span>' : ''}
          </div>
          ${dish.allergens && dish.allergens.length > 0 ? 
            `<div class="allergens">⚠️ ${dish.allergens.join(', ')}</div>` : ''}
          <div class="dish-footer">
            <span class="dish-price">${dish.price}€</span>
            <button class="btn-add-to-cart" onclick="addToCart(${dish.id})">
              Lisää koriin
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  filterByDietary(dietaryType) {
    if (!window.state || !window.state.menu) return;

    const filtered = window.state.menu.filter(dish => {
      switch(dietaryType) {
        case 'vegan':
          return dish.vegan;
        case 'gluten':
          return dish.gluten_free;
        case 'lactose':
          return dish.lactose_free;
        default:
          return true;
      }
    });

    this.renderMenu(filtered);
  }

  filterByAllergens(excludedAllergens) {
    if (!window.state || !window.state.menu) return;

    const filtered = window.state.menu.filter(dish => {
      if (!dish.allergens || dish.allergens.length === 0) return true;
      
      return !excludedAllergens.some(allergen => 
        dish.allergens.includes(allergen)
      );
    });

    this.renderMenu(filtered);
  }

  clearFilters() {
    this.renderMenu();
  }
}

// Make renderMenu globally available for search functionality
window.renderMenu = function(dishes = null) {
  if (window.menuManager) {
    window.menuManager.renderMenu(dishes);
  }
};

// Initialize menu when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.menuManager = new MenuManager();
});
