// تعريف جميع العناصر المهمة في الصفحة
const selectors = {
  menu: document.getElementById('menu'),
  search: document.getElementById('search'),
  filterVegan: document.getElementById('filter-vegan'),
  filterGluten: document.getElementById('filter-gluten'),
  filterLactose: document.getElementById('filter-lactose'),
  excludeAllergens: document.getElementById('exclude-allergens'),
  applyFilters: document.getElementById('applyFilters'),
  cartCount: document.getElementById('cartCount'),
  btnCart: document.getElementById('btnCart'),
  cartDrawer: document.getElementById('cartDrawer'),
  cartItems: document.getElementById('cartItems'),
  cartTotal: document.getElementById('cartTotal'),
  btnCheckout: document.getElementById('btnCheckout'),
  btnFavorites: document.getElementById('btnFavorites'),
  favDrawer: document.getElementById('favDrawer'),
  favList: document.getElementById('favList'),
  btnLogin: document.getElementById('btnLogin'),
  authModal: document.getElementById('authModal'),
  authForm: document.getElementById('authForm'),
  btnRegister: document.getElementById('btnRegister'),
  btnDoLogin: document.getElementById('btnDoLogin'),
  btnCloseAuth: document.getElementById('btnCloseAuth'),
  btnDirections: document.getElementById('btnDirections'),
  promotions: document.getElementById('promotions'),
  cartCountSpan: document.getElementById('cartCount')
};

function renderMenu(list){
  const menuList = Array.isArray(list) ? list : state.menu;
  selectors.menu.innerHTML = '';
  if(!menuList || menuList.length===0){
    selectors.menu.innerHTML = '<p style="text-align:center;color:#a67c1a">Ei tuloksia</p>';
    return;
  }
  menuList.forEach(d => {
    const el = document.createElement('article');
    el.className = 'dish';
    el.innerHTML = `
      <img src="${d.image_url||'/assets/placeholder.jpg'}" alt="${escapeHtml(d.name_ar||d.name_en||'Ruoka')}">
      <h3>${escapeHtml(d.name_ar||d.name_en||'Nimi')}${d.available? '':' (Ei saatavilla)'}"</h3>
      <p>${escapeHtml(d.description || '')}</p>
      <div class="badges">
        ${d.vegan?'<span class="badge">Vegaani</span>':''}
        ${d.gluten_free?'<span class="badge">Gluteeniton</span>':''}
        ${d.lactose_free?'<span class="badge">Laktoositon</span>':''}
      </div>
      <div style="margin-top:auto;display:flex;justify-content:space-between;align-items:center">
        <div><strong>${(d.price||0).toFixed(2)}</strong> €</div>
        <div>
          <button class="btn add" data-id="${d.id}">Lisää ostoskoriin</button>
          <button class="btn fav" data-id="${d.id}">❤</button>
        </div>
      </div>
    `;
    selectors.menu.appendChild(el);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  // تفعيل الفلاتر الحديثة
  if (selectors.applyFilters) {
    selectors.applyFilters.addEventListener('click', function() {
      const vegan = selectors.filterVegan.checked;
      const gluten = selectors.filterGluten.checked;
      const lactose = selectors.filterLactose.checked;
      const allergens = Array.from(selectors.excludeAllergens.selectedOptions).map(opt => opt.value);

      let filtered = state.menu;
      if (vegan) filtered = filtered.filter(d => d.vegan);
      if (gluten) filtered = filtered.filter(d => d.gluten_free);
      if (lactose) filtered = filtered.filter(d => d.lactose_free);

      if (allergens.length) {
        filtered = filtered.filter(d => {
          // Example: d.allergens = ['nuts', 'milk']
          if (!d.allergens) return true;
          return !d.allergens.some(a => allergens.includes(a));
        });
      }
      renderMenu(filtered);
    });
  }
  // تعريف state عالمي إذا لم يكن موجوداً
  if (!window.state) window.state = {};
  const state = window.state;

  // تحميل قائمة الأطباق من API أو بيانات ثابتة
  async function loadMenu() {
    try {
      // إذا كان لديك API حقيقي استخدمه هنا
      // const res = await fetch('/api/menu/today');
      // const data = await res.json();
      // state.menu = data.menu;
      // مثال بيانات ثابتة:
      state.menu = [
        { id: 1, name_ar: 'كبسة', name_en: 'Kabsa', available: true, vegan: false, gluten_free: true, lactose_free: true, image_url: '/assets/img/food-bg.jpg', description: 'طبق أرز سعودي تقليدي.' },
        { id: 2, name_ar: 'سلطة', name_en: 'Salad', available: true, vegan: true, gluten_free: true, lactose_free: true, image_url: '/assets/img/salati.jpg', description: 'سلطة خضار طازجة.' }
      ];
      renderMenu();
    } catch(e) {
      selectors.menu.innerHTML = '<p style="color:#c0392b">Virhe ladattaessa ruokalistaa</p>';
    }
  }
  loadMenu();

  // البحث في الهيدر (يعمل فقط بعد تحميل القائمة)
  const headerSearchInput = document.getElementById('headerSearch');
  const headerSearchIcon = document.querySelector('.search-icon');
  function filterMenuByHeaderSearch() {
    const val = (headerSearchInput.value || '').trim().toLowerCase();
    if (!state.menu) return;
    if (!val) {
      renderMenu();
      return;
    }
    const filtered = state.menu.filter(d => {
      return (
        (d.name_ar && d.name_ar.toLowerCase().includes(val)) ||
        (d.name_en && d.name_en.toLowerCase().includes(val)) ||
        (d.description && d.description.toLowerCase().includes(val))
      );
    });
    renderMenu(filtered);
  }
  // انتظر تحميل القائمة ثم فعّل البحث
  function enableHeaderSearchWhenMenuReady() {
    if(state.menu && Array.isArray(state.menu)) {
      if(headerSearchInput) headerSearchInput.addEventListener('input', filterMenuByHeaderSearch);
      if(headerSearchIcon) headerSearchIcon.addEventListener('click', filterMenuByHeaderSearch);
    } else {
      setTimeout(enableHeaderSearchWhenMenuReady, 200);
    }
  }
  enableHeaderSearchWhenMenuReady();
  // تفاعل قائمة الدخول المنسدلة
  const btnLogin = document.getElementById('btnLogin');
  const authDropdown = document.getElementById('authDropdown');
  if(btnLogin && authDropdown) {
    btnLogin.addEventListener('click', function(e) {
      e.stopPropagation();
      // لا تكرر الفتح إذا كانت مفتوحة
      if(authDropdown.style.display === 'block') return;
      authDropdown.style.display = 'block';
      // تركيز أول حقل
      const firstInput = authDropdown.querySelector('input');
      if(firstInput) setTimeout(()=>firstInput.focus(), 100);
    });
    // إغلاق القائمة عند الضغط خارجها فقط
    document.addEventListener('mousedown', function(e) {
      if(authDropdown.style.display === 'block' && !btnLogin.contains(e.target) && !authDropdown.contains(e.target)) {
        authDropdown.style.display = 'none';
      }
    });
    // إغلاق بالضغط على Escape
    document.addEventListener('keydown', function(e) {
      if(e.key === 'Escape' && authDropdown.style.display === 'block') {
        authDropdown.style.display = 'none';
      }
    });
  }
  // دالة تحديث واجهة المستخدم بعد تسجيل الدخول/الخروج
  function updateUserUI() {
    const token = localStorage.getItem('jwt_token');
    const userInfo = document.getElementById('userInfo');
    const userName = document.getElementById('userName');
    const btnLogin = document.getElementById('btnLogin');
    if(token) {
      // استخراج بيانات المستخدم من التوكن (بدون تحقق أمان كامل)
      let payload = {};
      try { payload = JSON.parse(atob(token.split('.')[1])); } catch(e){}
      if(userInfo && userName) {
        userName.textContent = payload.name || payload.email || 'مستخدم';
        userInfo.style.display = 'flex';
      }
      if(btnLogin) btnLogin.style.display = 'none';
    } else {
      if(userInfo) userInfo.style.display = 'none';
      if(btnLogin) btnLogin.style.display = '';
    }
  }

  // زر تسجيل الخروج
  const btnLogout = document.getElementById('btnLogout');
  if(btnLogout) {
    btnLogout.addEventListener('click', function() {
      localStorage.removeItem('jwt_token');
      updateUserUI();
  alert('Uloskirjautuminen onnistui');
    });
  }

  // تحديث الواجهة عند تحميل الصفحة وبعد تسجيل الدخول/التسجيل
  updateUserUI();

  // ربط واجهة التسجيل/الدخول مع backend
  async function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('authName').value.trim();
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    try {
      const res = await window.registerUser({ name, email, password });
      if(res.token) {
        localStorage.setItem('jwt_token', res.token);
        alert('تم التسجيل بنجاح!');
        selectors.authModal.setAttribute('aria-hidden','true');
        updateUserUI();
      } else {
        alert(res.error || 'حدث خطأ بالتسجيل');
      }
    } catch(err) { alert('خطأ في الاتصال بالخادم'); }
  }

  async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    try {
      const res = await window.loginUser({ email, password });
      if(res.token) {
        localStorage.setItem('jwt_token', res.token);
        alert('تم تسجيل الدخول بنجاح!');
        selectors.authModal.setAttribute('aria-hidden','true');
        updateUserUI();
      } else {
        alert(res.error || 'بيانات الدخول غير صحيحة');
      }
    } catch(err) { alert('خطأ في الاتصال بالخادم'); }
  }

  if(selectors.btnRegister) selectors.btnRegister.addEventListener('click', handleRegister);
  if(selectors.btnDoLogin) selectors.btnDoLogin.addEventListener('click', handleLogin);
  // دالة عرض تفاصيل السلة
  function renderCartDetails() {
    const { cartItems, cartTotal, cartCount } = selectors;
    const cart = window.loadCart ? window.loadCart() : [];
    cartItems.innerHTML = '';
    if (!cart.length) {
    cartItems.innerHTML = '<p style="text-align:center;color:#a67c1a">Ostoskori on tyhjä</p>';
      cartTotal.textContent = '0.00';
      cartCount.textContent = '0';
      return;
    }
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item-row';
      div.innerHTML = `
        <img src="${item.image||item.image_url||'assets/img/placeholder.jpg'}" alt="صورة" class="cart-item-img" />
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${(item.price||0).toFixed(2)} €</div>
          <div class="cart-item-qty">
            <button class="qty-btn minus" data-id="${item.id}">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn plus" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="remove-btn" data-id="${item.id}">×</button>
      `;
      cartItems.appendChild(div);
    });
    cartTotal.textContent = (window.cartTotal ? window.cartTotal(cart) : 0).toFixed(2);
    cartCount.textContent = cart.reduce((s,i)=>s+i.qty,0);
  }

  // تحديث تفاصيل السلة عند فتحها أو عند إضافة/تعديل
  if(selectors.btnCart && selectors.cartDrawer) {
    selectors.btnCart.addEventListener('click', renderCartDetails);
  }

  // تفاعل أزرار الكمية والحذف
  selectors.cartItems.addEventListener('click', function(e) {
    if(e.target.classList.contains('remove-btn')) {
      if(window.removeFromCart) {
        window.removeFromCart(e.target.dataset.id);
        renderCartDetails();
      }
    }
    if(e.target.classList.contains('plus')) {
      if(window.updateQty) {
        const id = e.target.dataset.id;
        const cart = window.loadCart();
        const it = cart.find(i=>i.id==id);
        window.updateQty(id, (it.qty||1)+1);
        renderCartDetails();
      }
    }
    if(e.target.classList.contains('minus')) {
      if(window.updateQty) {
        const id = e.target.dataset.id;
        const cart = window.loadCart();
        const it = cart.find(i=>i.id==id);
        if(it.qty>1) window.updateQty(id, (it.qty||1)-1);
        renderCartDetails();
      }
    }
  });

  // تحديث السلة عند إضافة منتج
  selectors.menu.addEventListener('click', function(e) {
    if(e.target.classList.contains('add')) {
      setTimeout(renderCartDetails, 300);
    }
  });
  // تفاعل drawer للسلة
  if(selectors.btnCart && selectors.cartDrawer) {
    selectors.btnCart.addEventListener('click', function() {

    // تفاعل أيقونة تسجيل الدخول
    const btnLogin = document.getElementById('btnLogin');
    if(btnLogin && selectors.authModal) {
      btnLogin.addEventListener('click', function() {
        selectors.authModal.removeAttribute('aria-hidden');
        selectors.authModal.removeAttribute('inert');
        btnLogin.classList.add('animated');
        setTimeout(()=>btnLogin.classList.remove('animated'), 400);
      });
    }
      selectors.cartDrawer.setAttribute('aria-hidden', 'false');
      selectors.cartDrawer.classList.add('open');
      selectors.btnCart.classList.add('animated');
      setTimeout(()=>selectors.btnCart.classList.remove('animated'), 400);
    });
    // إغلاق drawer عند الضغط خارجها أو زر دفع
    document.addEventListener('click', function(e) {
      if(selectors.cartDrawer.getAttribute('aria-hidden')==='false') {
        if(e.target === selectors.cartDrawer || e.target === selectors.btnCheckout) {
          selectors.cartDrawer.setAttribute('aria-hidden', 'true');
          selectors.cartDrawer.classList.remove('open');
        }
      }
    });
  }
  // تفاعل drawer للمفضلة
  const btnFavorites = document.getElementById('btnFavorites');
  if(btnFavorites && selectors.favDrawer) {
    btnFavorites.addEventListener('click', function() {
      selectors.favDrawer.setAttribute('aria-hidden', 'false');
      btnFavorites.classList.add('animated');
      setTimeout(()=>btnFavorites.classList.remove('animated'), 400);
    });
    document.addEventListener('click', function(e) {
      if(selectors.favDrawer.getAttribute('aria-hidden')==='false') {
        if(e.target === selectors.favDrawer) {
          selectors.favDrawer.setAttribute('aria-hidden', 'true');
        }
      }
    });
  }

  // أنيميشن عند إضافة للسلة
  selectors.menu.addEventListener('click', function(e) {
    if(e.target.classList.contains('add')) {
      selectors.btnCart.classList.add('animated');
      setTimeout(()=>selectors.btnCart.classList.remove('animated'), 400);
    }
    if(e.target.classList.contains('fav')) {
      if(btnFavorites) {
        btnFavorites.classList.add('animated');
        setTimeout(()=>btnFavorites.classList.remove('animated'), 400);
      }
    }
  });
  const userBtn = document.querySelector('.user-btn');
  if(userBtn && selectors.authModal) {
    userBtn.addEventListener('click', function() {
      selectors.authModal.removeAttribute('aria-hidden');
      selectors.authModal.removeAttribute('inert');
    });
  }

  const btnDirections = document.getElementById('btnDirections');
  if (btnDirections) {
    btnDirections.addEventListener('click', function() {
      // Replace with your actual address if needed
      const address = 'Makuja-katu 12, Kaupunki';
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
      window.open(url, '_blank');
    });
  }
});
