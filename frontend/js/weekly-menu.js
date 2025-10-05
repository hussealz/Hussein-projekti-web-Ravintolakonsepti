// Weekly Menu Management
class WeeklyMenuManager {
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
    console.log('Weekly Menu Manager initialized');
    this.renderWeeklyMenu();
  }

  getCurrentDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date();
    return days[today.getDay()];
  }

  getDateForDay(dayName) {
    const today = new Date();
    const currentDay = today.getDay();
    const dayIndex = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].indexOf(dayName);
    
    const daysUntilTarget = dayIndex - currentDay;
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + daysUntilTarget);
    
    return targetDate;
  }

  formatDate(date) {
    const options = { 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    };
    return date.toLocaleDateString('fi-FI', options);
  }

  renderWeeklyMenu() {
    const weeklyMenuGrid = document.getElementById('weeklyMenuGrid');
    if (!weeklyMenuGrid) {
      console.log('Weekly menu grid not found');
      return;
    }

    const currentDay = this.getCurrentDay();
    weeklyMenuGrid.innerHTML = '';

    // Render each day
    Object.keys(this.dayNames).forEach(dayKey => {
      const dayMenu = this.dailyMenus[dayKey] || [];
      const dayDate = this.getDateForDay(dayKey);
      const isToday = dayKey === currentDay;
      
      const dayCard = this.createDayCard(dayKey, dayMenu, dayDate, isToday);
      weeklyMenuGrid.appendChild(dayCard);
    });
  }

  createDayCard(dayKey, dayMenu, dayDate, isToday) {
    const dayCard = document.createElement('div');
    dayCard.className = `day-menu-card ${isToday ? 'today' : ''}`;
    
    const dayName = this.dayNames[dayKey];
    const formattedDate = this.formatDate(dayDate);
    
    dayCard.innerHTML = `
      <div class="day-header">
        <h3 class="day-name">${dayName}</h3>
        <p class="day-date">${formattedDate}</p>
      </div>
      <div class="day-dishes">
        ${dayMenu.length > 0 ? 
          dayMenu.map(dish => this.createDishItem(dish)).join('') :
          '<p style="text-align: center; color: #7f8c8d; font-style: italic;">Ei ruokalistaa saatavilla</p>'
        }
      </div>
    `;
    
    return dayCard;
  }

  createDishItem(dish) {
    const badges = [];
    if (dish.vegan) badges.push('<span class="weekly-dish-badge vegan">Vegaani</span>');
    if (dish.gluten_free) badges.push('<span class="weekly-dish-badge gluten-free">Gluteeniton</span>');
    if (dish.lactose_free) badges.push('<span class="weekly-dish-badge lactose-free">Laktoositon</span>');
    
    return `
      <div class="weekly-dish-item">
        <img src="${dish.image_url}" alt="${dish.name_fi}" class="weekly-dish-img" onerror="this.src='assets/img/placeholder.jpg'">
        <div class="weekly-dish-info">
          <h4 class="weekly-dish-name">${dish.name_fi}</h4>
          <p class="weekly-dish-description">${dish.description}</p>
          <div class="weekly-dish-badges">
            ${badges.join('')}
          </div>
        </div>
        <div class="weekly-dish-price">${dish.price.toFixed(2)}€</div>
      </div>
    `;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.weeklyMenuManager = new WeeklyMenuManager();
});
