// Authentication functionality for the restaurant app

class AuthManager {
  constructor() {
    this.btnLogin = document.getElementById('btnLogin');
    this.authDropdown = document.getElementById('authDropdown');
    this.userName = document.getElementById('userName');
    this.loginForm = document.getElementById('loginForm');
    this.registerForm = document.getElementById('registerForm');
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.checkAuthStatus();
  }

  setupEventListeners() {
    // Login dropdown interaction
    if (this.btnLogin && this.authDropdown) {
      this.btnLogin.addEventListener('click', (e) => {
        e.stopPropagation();
        this.authDropdown.classList.toggle('show');
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!this.btnLogin.contains(e.target) && !this.authDropdown.contains(e.target)) {
          this.authDropdown.classList.remove('show');
        }
      });
    }

    // Login form
    if (this.loginForm) {
      this.loginForm.addEventListener('submit', this.handleLogin.bind(this));
    }

    // Register form
    if (this.registerForm) {
      this.registerForm.addEventListener('submit', this.handleRegister.bind(this));
    }
  }

  async handleLogin(e) {
    e.preventDefault();
    
    const email = this.loginForm.querySelector('input[type="email"]').value;
    const password = this.loginForm.querySelector('input[type="password"]').value;

    try {
      // For now, use simple mock authentication
      const result = { success: true, token: 'mock-token', user: { name: 'Test User', email: email } };
      
      if (result.success) {
        localStorage.setItem('jwt_token', result.token);
        this.updateAuthUI(result.user);
        this.authDropdown.classList.remove('show');
        alert('Kirjautuminen onnistui!');
      } else {
        alert('Virhe: ' + result.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Kirjautumisessa tapahtui virhe');
    }
  }

  async handleRegister(e) {
    e.preventDefault();
    
    const name = this.registerForm.querySelector('input[name="name"]').value;
    const email = this.registerForm.querySelector('input[type="email"]').value;
    const password = this.registerForm.querySelector('input[type="password"]').value;

    try {
      // For now, use simple mock registration
      const result = { success: true, message: 'Rekisteröityminen onnistui!' };
      
      if (result.success) {
        alert('Rekisteröityminen onnistui! Voit nyt kirjautua sisään.');
        this.registerForm.reset();
      } else {
        alert('Virhe: ' + result.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Rekisteröitymisessä tapahtui virhe');
    }
  }

  updateAuthUI(user) {
    if (this.userName) {
      this.userName.textContent = user.name || user.email || 'Käyttäjä';
    }
    
    // Update login button to show user is logged in
    if (this.btnLogin) {
      this.btnLogin.textContent = 'Oma tili';
    }
  }

  checkAuthStatus() {
    const token = localStorage.getItem('jwt_token');
    
    if (token) {
      try {
        // Decode JWT token to get user info
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.updateAuthUI(payload);
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('jwt_token');
      }
    }
  }

  logout() {
    localStorage.removeItem('jwt_token');
    
    if (this.userName) {
      this.userName.textContent = '';
    }
    
    if (this.btnLogin) {
      this.btnLogin.textContent = 'Kirjaudu';
    }
    
    this.authDropdown.classList.remove('show');
  }
}

// Initialize auth when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.authManager = new AuthManager();
});
