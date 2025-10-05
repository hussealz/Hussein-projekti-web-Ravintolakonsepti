// Daily Menu Management for Index Page
class DailyMenuManager {
  constructor() {
    this.dayNames = {
      monday: 'Maanantai',
      tuesday: 'Tiistai',
      wednesday: 'Keskiviikko',
      thursday: 'Torstai',
      friday: 'Perjantai',
      saturday: 'Lauantai',
      sunday: 'Sunnuntai'
    };
    
    this.dailyMenus = {
      monday: [
        { 
          id: 1, 
          name_fi: 'Kabsa', 
          name_en: 'Kabsa', 
          available: true, 
          vegan: false, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/food-bg.jpg', 
          description: 'Perinteinen saudi-arabialainen riisiruoka aromattisilla mausteilla.', 
          price: 15.90, 
          allergens: ['nuts'] 
        },
        { 
          id: 2, 
          name_fi: 'Tuore Salaatti', 
          name_en: 'Fresh Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/salati.jpg', 
          description: 'Tuore sekoitussalaatti sesongin vihanneksilla ja erityisellä kastikkeella.', 
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
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Kreivä kikherne-dip tahinilla ja oliiviöljyllä.', 
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
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Rapeita kikherne-palloja yrtteillä ja mausteilla.', 
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
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Marinoitua lihaa tuoreilla vihanneksilla ja valkosipulikastikkeella.', 
          price: 14.90, 
          allergens: ['milk'] 
        },
        { 
          id: 6, 
          name_fi: 'Mansikkasalaatti', 
          name_en: 'Strawberry Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/salati.jpg', 
          description: 'Tuore mansikkasalaatti fetajuustolla ja balsamico-kastikkeella.', 
          price: 13.90, 
          allergens: ['milk'] 
        }
      ],
      tuesday: [
        { 
          id: 7, 
          name_fi: 'Falafel', 
          name_en: 'Falafel', 
          available: true, 
          vegan: true, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Rapeita kikherne-palloja yrtteillä ja mausteilla.', 
          price: 11.50, 
          allergens: [] 
        },
        { 
          id: 8, 
          name_fi: 'Shawarma', 
          name_en: 'Shawarma', 
          available: true, 
          vegan: false, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Marinoitua lihaa tuoreilla vihanneksilla ja valkosipulikastikkeella.', 
          price: 14.90, 
          allergens: ['milk'] 
        },
        { 
          id: 9, 
          name_fi: 'Mansikkasalaatti', 
          name_en: 'Strawberry Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/salati.jpg', 
          description: 'Tuore mansikkasalaatti fetajuustolla ja balsamico-kastikkeella.', 
          price: 13.90, 
          allergens: ['milk'] 
        },
        { 
          id: 10, 
          name_fi: 'Kebab', 
          name_en: 'Kebab', 
          available: true, 
          vegan: false, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Perinteinen kebab erityisreseptillä ja tuoreilla vihanneksilla.', 
          price: 16.50, 
          allergens: ['milk'] 
        },
        { 
          id: 11, 
          name_fi: 'Baba Ganoush', 
          name_en: 'Baba Ganoush', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Savustettu munakoiso-dip erityisreseptillä.', 
          price: 9.50, 
          allergens: ['nuts'] 
        }
      ],
      wednesday: [
        { 
          id: 13, 
          name_fi: 'Kebab', 
          name_en: 'Kebab', 
          available: true, 
          vegan: false, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Perinteinen kebab erityisreseptillä ja tuoreilla vihanneksilla.', 
          price: 16.50, 
          allergens: ['milk'] 
        },
        { 
          id: 14, 
          name_fi: 'Quinoa-salaatti', 
          name_en: 'Quinoa Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/salati.jpg', 
          description: 'Terveellinen quinoa-salaatti kurkulla, tomaatilla ja avokadolla.', 
          price: 14.90, 
          allergens: [] 
        },
        { 
          id: 15, 
          name_fi: 'Baba Ganoush', 
          name_en: 'Baba Ganoush', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Savustettu munakoiso-dip erityisreseptillä.', 
          price: 9.50, 
          allergens: ['nuts'] 
        },
        { 
          id: 16, 
          name_fi: 'Mansikkasalaatti', 
          name_en: 'Strawberry Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/salati.jpg', 
          description: 'Tuore mansikkasalaatti fetajuustolla ja balsamico-kastikkeella.', 
          price: 13.90, 
          allergens: ['milk'] 
        },
        { 
          id: 17, 
          name_fi: 'Falafel', 
          name_en: 'Falafel', 
          available: true, 
          vegan: true, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Rapeita kikherne-palloja yrtteillä ja mausteilla.', 
          price: 11.50, 
          allergens: [] 
        },
        { 
          id: 18, 
          name_fi: 'Shawarma', 
          name_en: 'Shawarma', 
          available: true, 
          vegan: false, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Marinoitua lihaa tuoreilla vihanneksilla ja valkosipulikastikkeella.', 
          price: 14.90, 
          allergens: ['milk'] 
        }
      ],
      thursday: [
        { 
          id: 19, 
          name_fi: 'Mansikkasalaatti', 
          name_en: 'Strawberry Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/salati.jpg', 
          description: 'Tuore mansikkasalaatti fetajuustolla ja balsamico-kastikkeella.', 
          price: 13.90, 
          allergens: ['milk'] 
        },
        { 
          id: 20, 
          name_fi: 'Kabsa', 
          name_en: 'Kabsa', 
          available: true, 
          vegan: false, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/food-bg.jpg', 
          description: 'Perinteinen saudi-arabialainen riisiruoka aromattisilla mausteilla.', 
          price: 15.90, 
          allergens: ['nuts'] 
        },
        { 
          id: 21, 
          name_fi: 'Hummus', 
          name_en: 'Hummus', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Kreivä kikherne-dip tahinilla ja oliiviöljyllä.', 
          price: 8.90, 
          allergens: ['nuts'] 
        },
        { 
          id: 22, 
          name_fi: 'Falafel', 
          name_en: 'Falafel', 
          available: true, 
          vegan: true, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Rapeita kikherne-palloja yrtteillä ja mausteilla.', 
          price: 11.50, 
          allergens: [] 
        },
        { 
          id: 23, 
          name_fi: 'Shawarma', 
          name_en: 'Shawarma', 
          available: true, 
          vegan: false, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Marinoitua lihaa tuoreilla vihanneksilla ja valkosipulikastikkeella.', 
          price: 14.90, 
          allergens: ['milk'] 
        },
        { 
          id: 24, 
          name_fi: 'Quinoa-salaatti', 
          name_en: 'Quinoa Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/salati.jpg', 
          description: 'Terveellinen quinoa-salaatti kurkulla, tomaatilla ja avokadolla.', 
          price: 14.90, 
          allergens: [] 
        }
      ],
      friday: [
        { 
          id: 25, 
          name_fi: 'Mansikkasalaatti', 
          name_en: 'Strawberry Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/salati.jpg', 
          description: 'Tuore mansikkasalaatti fetajuustolla ja balsamico-kastikkeella.', 
          price: 13.90, 
          allergens: ['milk'] 
        },
        { 
          id: 26, 
          name_fi: 'Kebab', 
          name_en: 'Kebab', 
          available: true, 
          vegan: false, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Perinteinen kebab erityisreseptillä ja tuoreilla vihanneksilla.', 
          price: 16.50, 
          allergens: ['milk'] 
        },
        { 
          id: 27, 
          name_fi: 'Baba Ganoush', 
          name_en: 'Baba Ganoush', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Savustettu munakoiso-dip erityisreseptillä.', 
          price: 9.50, 
          allergens: ['nuts'] 
        },
        { 
          id: 28, 
          name_fi: 'Kabsa', 
          name_en: 'Kabsa', 
          available: true, 
          vegan: false, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/food-bg.jpg', 
          description: 'Perinteinen saudi-arabialainen riisiruoka aromattisilla mausteilla.', 
          price: 15.90, 
          allergens: ['nuts'] 
        },
        { 
          id: 29, 
          name_fi: 'Hummus', 
          name_en: 'Hummus', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Kreivä kikherne-dip tahinilla ja oliiviöljyllä.', 
          price: 8.90, 
          allergens: ['nuts'] 
        },
        { 
          id: 30, 
          name_fi: 'Falafel', 
          name_en: 'Falafel', 
          available: true, 
          vegan: true, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Rapeita kikherne-palloja yrtteillä ja mausteilla.', 
          price: 11.50, 
          allergens: [] 
        }
      ],
      saturday: [
        { 
          id: 31, 
          name_fi: 'Mansikkasalaatti', 
          name_en: 'Strawberry Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/salati.jpg', 
          description: 'Tuore mansikkasalaatti fetajuustolla ja balsamico-kastikkeella.', 
          price: 13.90, 
          allergens: ['milk'] 
        },
        { 
          id: 32, 
          name_fi: 'Shawarma', 
          name_en: 'Shawarma', 
          available: true, 
          vegan: false, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Marinoitua lihaa tuoreilla vihanneksilla ja valkosipulikastikkeella.', 
          price: 14.90, 
          allergens: ['milk'] 
        },
        { 
          id: 33, 
          name_fi: 'Quinoa-salaatti', 
          name_en: 'Quinoa Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/salati.jpg', 
          description: 'Terveellinen quinoa-salaatti kurkulla, tomaatilla ja avokadolla.', 
          price: 14.90, 
          allergens: [] 
        },
        { 
          id: 34, 
          name_fi: 'Kabsa', 
          name_en: 'Kabsa', 
          available: true, 
          vegan: false, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/food-bg.jpg', 
          description: 'Perinteinen saudi-arabialainen riisiruoka aromattisilla mausteilla.', 
          price: 15.90, 
          allergens: ['nuts'] 
        },
        { 
          id: 35, 
          name_fi: 'Hummus', 
          name_en: 'Hummus', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Kreivä kikherne-dip tahinilla ja oliiviöljyllä.', 
          price: 8.90, 
          allergens: ['nuts'] 
        },
        { 
          id: 36, 
          name_fi: 'Falafel', 
          name_en: 'Falafel', 
          available: true, 
          vegan: true, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Rapeita kikherne-palloja yrtteillä ja mausteilla.', 
          price: 11.50, 
          allergens: [] 
        }
      ],
      sunday: [
        { 
          id: 37, 
          name_fi: 'Mansikkasalaatti', 
          name_en: 'Strawberry Salad', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/salati.jpg', 
          description: 'Tuore mansikkasalaatti fetajuustolla ja balsamico-kastikkeella.', 
          price: 13.90, 
          allergens: ['milk'] 
        },
        { 
          id: 38, 
          name_fi: 'Kebab', 
          name_en: 'Kebab', 
          available: true, 
          vegan: false, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Perinteinen kebab erityisreseptillä ja tuoreilla vihanneksilla.', 
          price: 16.50, 
          allergens: ['milk'] 
        },
        { 
          id: 39, 
          name_fi: 'Baba Ganoush', 
          name_en: 'Baba Ganoush', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Savustettu munakoiso-dip erityisreseptillä.', 
          price: 9.50, 
          allergens: ['nuts'] 
        },
        { 
          id: 40, 
          name_fi: 'Kabsa', 
          name_en: 'Kabsa', 
          available: true, 
          vegan: false, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/food-bg.jpg', 
          description: 'Perinteinen saudi-arabialainen riisiruoka aromattisilla mausteilla.', 
          price: 15.90, 
          allergens: ['nuts'] 
        },
        { 
          id: 41, 
          name_fi: 'Hummus', 
          name_en: 'Hummus', 
          available: true, 
          vegan: true, 
          gluten_free: true, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Kreivä kikherne-dip tahinilla ja oliiviöljyllä.', 
          price: 8.90, 
          allergens: ['nuts'] 
        },
        { 
          id: 42, 
          name_fi: 'Falafel', 
          name_en: 'Falafel', 
          available: true, 
          vegan: true, 
          gluten_free: false, 
          lactose_free: true, 
          image_url: 'assets/img/placeholder.jpg', 
          description: 'Rapeita kikherne-palloja yrtteillä ja mausteilla.', 
          price: 11.50, 
          allergens: [] 
        }
      ]
    };
    
    this.init();
  }

  init() {
    console.log('Daily Menu Manager initialized');
    this.renderTodayMenu();
    this.setWindowState();
  }

  setWindowState() {
    // Set window.state.menu for compatibility with other scripts
    if (!window.state) {
      window.state = {};
    }
    window.state.menu = this.getTodayMenu();
    console.log('Set window.state.menu:', window.state.menu);
  }

  getCurrentDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date();
    return days[today.getDay()];
  }

  getTodayMenu() {
    const currentDay = this.getCurrentDay();
    return this.dailyMenus[currentDay] || [];
  }

  renderTodayMenu() {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) {
      console.log('Menu grid not found');
      return;
    }

    const todayMenu = this.getTodayMenu();
    const currentDay = this.getCurrentDay();
    const dayName = this.dayNames[currentDay];
    
    console.log(`Rendering today's menu for ${dayName}:`, todayMenu);

    if (todayMenu.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #7f8c8d;">
          <h3>Ei ruokalistaa saatavilla tänään</h3>
          <p>Olemme pahoillamme, mutta tämän päivän ruokalista ei ole vielä saatavilla.</p>
        </div>
      `;
      return;
    }

    menuGrid.innerHTML = todayMenu.map(dish => this.createDishCard(dish)).join('');
  }

  filterByDietary(filterType) {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) {
      console.log('Menu grid not found');
      return;
    }

    const todayMenu = this.getTodayMenu();
    let filteredMenu = [];

    switch(filterType) {
      case 'vegan':
        filteredMenu = todayMenu.filter(dish => dish.vegan);
        break;
      case 'gluten':
        filteredMenu = todayMenu.filter(dish => dish.gluten_free);
        break;
      case 'lactose':
        filteredMenu = todayMenu.filter(dish => dish.lactose_free);
        break;
      default:
        filteredMenu = todayMenu;
    }

    if (filteredMenu.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #7f8c8d;">
          <h3>Ei ruokalajia löytynyt</h3>
          <p>Valitulla suodattimella ei löytynyt ruokalajeja.</p>
        </div>
      `;
      return;
    }

    menuGrid.innerHTML = filteredMenu.map(dish => this.createDishCard(dish)).join('');
  }

  filterByAllergens(excludedAllergens) {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) {
      console.log('Menu grid not found');
      return;
    }

    const todayMenu = this.getTodayMenu();
    const filteredMenu = todayMenu.filter(dish => {
      return !excludedAllergens.some(allergen => dish.allergens.includes(allergen));
    });

    if (filteredMenu.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #7f8c8d;">
          <h3>Ei ruokalajia löytynyt</h3>
          <p>Valitulla suodattimella ei löytynyt ruokalajeja.</p>
        </div>
      `;
      return;
    }

    menuGrid.innerHTML = filteredMenu.map(dish => this.createDishCard(dish)).join('');
  }

  createDishCard(dish) {
    const badges = [];
    if (dish.vegan) badges.push('<span class="badge vegan">Vegaani</span>');
    if (dish.gluten_free) badges.push('<span class="badge gluten-free">Gluteeniton</span>');
    if (dish.lactose_free) badges.push('<span class="badge lactose-free">Laktoositon</span>');
    
    return `
      <div class="dish" data-id="${dish.id}">
        <img src="${dish.image_url}" alt="${dish.name_fi}" onerror="this.src='assets/img/placeholder.jpg'">
        <div class="badges">
          ${badges.join('')}
        </div>
        <h3>${dish.name_fi}</h3>
        <p>${dish.description}</p>
        <div class="dish-footer">
          <span class="price">${dish.price.toFixed(2)}€</span>
          <button class="btn btn-primary add-to-cart" data-id="${dish.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            Lisää koriin
          </button>
        </div>
      </div>
    `;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.dailyMenuManager = new DailyMenuManager();
});
