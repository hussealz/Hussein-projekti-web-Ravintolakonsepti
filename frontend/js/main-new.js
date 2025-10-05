// Main application initialization

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('Initializing Apricus Restaurant App...');
  
  // Initialize global state
  window.state = {
    menu: [],
    cart: [],
    favorites: []
  };

  // Load favorites from localStorage
  loadFavorites();
  
  // Initialize cart display
  updateCartDisplay();
  
  // Setup cart drawer
  setupCartDrawer();
  
  console.log('App initialized successfully!');
});

function setupCartDrawer() {
  const cartBtn = document.getElementById('btnCart');
  const cartDrawer = document.getElementById('cartDrawer');
  
  if (cartBtn && cartDrawer) {
    cartBtn.addEventListener('click', () => {
      renderCartDetails();
      cartDrawer.classList.toggle('show');
    });
    
    // Close drawer when clicking outside
    document.addEventListener('click', (e) => {
      if (!cartBtn.contains(e.target) && !cartDrawer.contains(e.target)) {
        cartDrawer.classList.remove('show');
      }
    });
  }
}

// Utility functions
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function loadFavorites() {
  try {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      window.state.favorites = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error loading favorites:', e);
    window.state.favorites = [];
  }
}

function addToFavorites(dishId) {
  if (!window.state.favorites.includes(dishId)) {
    window.state.favorites.push(dishId);
    localStorage.setItem('favorites', JSON.stringify(window.state.favorites));
    updateFavoritesDisplay();
  }
}

function removeFromFavorites(dishId) {
  window.state.favorites = window.state.favorites.filter(id => id !== dishId);
  localStorage.setItem('favorites', JSON.stringify(window.state.favorites));
  updateFavoritesDisplay();
}

function updateFavoritesDisplay() {
  const favoritesBtn = document.getElementById('btnFavorites');
  if (favoritesBtn) {
    const count = window.state.favorites.length;
    favoritesBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
      ${count > 0 ? `<span class="badge">${count}</span>` : ''}
    `;
  }
}

// Cart functionality
function addToCart(dishId) {
  if (!window.state || !window.state.menu) {
    console.log('Menu not loaded yet');
    return;
  }

  const dish = window.state.menu.find(d => d.id === dishId);
  if (!dish) {
    console.log('Dish not found:', dishId);
    return;
  }

  const existingItem = window.state.cart.find(item => item.id === dishId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    window.state.cart.push({
      id: dish.id,
      name: dish.name_fi,
      price: dish.price,
      quantity: 1,
      image: dish.image_url
    });
  }

  updateCartDisplay();
  console.log('Added to cart:', dish.name_fi);
}

function removeFromCart(dishId) {
  window.state.cart = window.state.cart.filter(item => item.id !== dishId);
  updateCartDisplay();
}

function updateCartQuantity(dishId, quantity) {
  const item = window.state.cart.find(item => item.id === dishId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(dishId);
    } else {
      item.quantity = quantity;
      updateCartDisplay();
    }
  }
}

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.addToFavorites = addToFavorites;
window.removeFromFavorites = removeFromFavorites;

// Cart display functions
function updateCartDisplay() {
  const cartBtn = document.getElementById('btnCart');
  if (cartBtn) {
    const count = window.state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      ${count > 0 ? `<span class="badge">${count}</span>` : ''}
    `;
  }
}

function renderCartDetails() {
  const cartList = document.getElementById('cartList');
  if (!cartList) return;

  if (window.state.cart.length === 0) {
    cartList.innerHTML = '<p>Ostoskori on tyhjä</p>';
    return;
  }

  cartList.innerHTML = window.state.cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>${item.price}€</p>
        <div class="quantity-controls">
          <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
        </div>
      </div>
      <button onclick="removeFromCart(${item.id})" class="remove-btn">×</button>
    </div>
  `).join('');
}

// Initialize favorites display
updateFavoritesDisplay();
