// ===== AgriMerchant - Shared Utilities =====

// ---- Toast Notifications ----
function showToast(msg, type = 'success') {
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3100);
}

// ---- Dark Mode ----
function initDarkMode() {
  const saved = localStorage.getItem('darkMode');
  if (saved === 'true') document.documentElement.setAttribute('data-theme', 'dark');
  document.querySelectorAll('.dark-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
      localStorage.setItem('darkMode', !isDark);
      btn.textContent = isDark ? '🌙' : '☀️';
    });
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '☀️' : '🌙';
  });
}

// ---- Auth ----
function getLoggedInUser() {
  const u = localStorage.getItem('loggedInUser');
  return u ? JSON.parse(u) : null;
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'login.html';
}

function requireAuth(role) {
  const user = getLoggedInUser();
  if (!user) { window.location.href = 'login.html'; return null; }
  if (role && user.role !== role) { window.location.href = 'index.html'; return null; }
  return user;
}

// ---- Data Helpers ----
function getUsers() { return JSON.parse(localStorage.getItem('users') || '[]'); }
function getVendors() { return JSON.parse(localStorage.getItem('vendors') || '[]'); }
function getProducts() { return JSON.parse(localStorage.getItem('products') || '[]'); }
function getOrders() { return JSON.parse(localStorage.getItem('orders') || '[]'); }
function getCart() { return JSON.parse(localStorage.getItem('cart') || '[]'); }

function saveUsers(d) { localStorage.setItem('users', JSON.stringify(d)); }
function saveVendors(d) { localStorage.setItem('vendors', JSON.stringify(d)); }
function saveProducts(d) { localStorage.setItem('products', JSON.stringify(d)); }
function saveOrders(d) { localStorage.setItem('orders', JSON.stringify(d)); }
function saveCart(d) { localStorage.setItem('cart', JSON.stringify(d)); }

// ---- Cart Badge ----
function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

// ---- Add to Cart ----
function addToCart(productId) {
  const user = getLoggedInUser();
  if (!user) { showToast('Please login to add items to cart', 'warning'); window.location.href = 'login.html'; return; }
  if (user.role !== 'customer') { showToast('Only customers can add to cart', 'warning'); return; }
  const products = getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.productId === productId);
  if (existing) { existing.qty++; }
  else { cart.push({ productId, qty: 1 }); }
  saveCart(cart);
  updateCartBadge();
  showToast(`${product.name} added to cart! 🛒`);
}

// ---- Seed Initial Data ----
function seedData() {
  if (localStorage.getItem('seeded')) return;

  // Admin user
  const admin = { id: 'admin-1', name: 'Admin', email: 'admin@agri.com', password: 'admin123', role: 'admin', createdAt: new Date().toISOString() };

  // Sample vendor
  const vendor1 = { id: 'v1', name: 'Ravi Farms', email: 'ravi@farm.com', password: 'ravi123', role: 'vendor', farm: 'Ravi Organic Farms', location: 'Pune, MH', createdAt: new Date().toISOString() };
  const vendor2 = { id: 'v2', name: 'Sunita Devi', email: 'sunita@farm.com', password: 'sunita123', role: 'vendor', farm: 'Green Valley', location: 'Nashik, MH', createdAt: new Date().toISOString() };

  // Sample customer
  const cust1 = { id: 'c1', name: 'Priya Sharma', email: 'priya@email.com', password: 'priya123', role: 'customer', createdAt: new Date().toISOString() };

  saveUsers([admin, cust1]);
  saveVendors([vendor1, vendor2]);

  // Products
  const products = [
    { id: 'p1', name: 'Alphonso Mango', category: 'Fruits', price: 120, unit: 'per kg', stock: 50, vendorId: 'v1', vendorName: 'Ravi Farms', img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80', badge: 'Seasonal', createdAt: new Date().toISOString() },
    { id: 'p2', name: 'Banana', category: 'Fruits', price: 40, unit: 'per dozen', stock: 100, vendorId: 'v1', vendorName: 'Ravi Farms', img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80', badge: 'Organic', createdAt: new Date().toISOString() },
    { id: 'p3', name: 'Tomato', category: 'Vegetables', price: 30, unit: 'per kg', stock: 80, vendorId: 'v2', vendorName: 'Green Valley', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80', badge: '', createdAt: new Date().toISOString() },
    { id: 'p4', name: 'Onion', category: 'Vegetables', price: 25, unit: 'per kg', stock: 200, vendorId: 'v2', vendorName: 'Green Valley', img: 'https://images.unsplash.com/photo-1587735243475-37a298e3a31e?w=400&q=80', badge: '', createdAt: new Date().toISOString() },
    { id: 'p5', name: 'Potato', category: 'Vegetables', price: 20, unit: 'per kg', stock: 150, vendorId: 'v1', vendorName: 'Ravi Farms', img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80', badge: '', createdAt: new Date().toISOString() },
    { id: 'p6', name: 'Carrot', category: 'Vegetables', price: 35, unit: 'per kg', stock: 60, vendorId: 'v2', vendorName: 'Green Valley', img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80', badge: 'Organic', createdAt: new Date().toISOString() },
    { id: 'p7', name: 'Fresh Spinach', category: 'Leafy', price: 20, unit: 'per bunch', stock: 40, vendorId: 'v1', vendorName: 'Ravi Farms', img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80', badge: 'Organic', createdAt: new Date().toISOString() },
    { id: 'p8', name: 'Kashmiri Apple', category: 'Fruits', price: 150, unit: 'per kg', stock: 45, vendorId: 'v2', vendorName: 'Green Valley', img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80', badge: 'Premium', createdAt: new Date().toISOString() },
    { id: 'p9', name: 'Brinjal', category: 'Vegetables', price: 28, unit: 'per kg', stock: 70, vendorId: 'v1', vendorName: 'Ravi Farms', img: 'https://images.unsplash.com/photo-1613145997970-db84a7975fbb?w=400&q=80', badge: '', createdAt: new Date().toISOString() },
    { id: 'p10', name: 'Cabbage', category: 'Leafy', price: 22, unit: 'per piece', stock: 55, vendorId: 'v2', vendorName: 'Green Valley', img: 'https://images.unsplash.com/photo-1596714946426-acf07e16b2f3?w=400&q=80', badge: 'Fresh', createdAt: new Date().toISOString() },
  ];
  saveProducts(products);

  // Sample orders
  const orders = [
    {
      id: 'ord-001',
      customerId: 'c1',
      customerName: 'Priya Sharma',
      items: [
        { productId: 'p1', name: 'Alphonso Mango', qty: 2, price: 120, img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80', vendorId: 'v1' },
        { productId: 'p5', name: 'Potato', qty: 3, price: 20, img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80', vendorId: 'v1' }
      ],
      total: 300,
      status: 'Delivered',
      createdAt: new Date(Date.now() - 86400000 * 3).toISOString()
    }
  ];
  saveOrders(orders);

  localStorage.setItem('seeded', 'true');
}

// ---- Navbar Auth Links ----
function renderNavAuth() {
  const user = getLoggedInUser();
  const authLinks = document.getElementById('nav-auth-links');
  if (!authLinks) return;
  if (user) {
    let dashLink = '';
    if (user.role === 'vendor') dashLink = '<a href="vendor_dashboard.html" class="nav-link">🌾 Dashboard</a>';
    if (user.role === 'admin') dashLink = '<a href="admin_dashboard.html" class="nav-link">⚙️ Admin</a>';
    authLinks.innerHTML = `
      ${dashLink}
      <span class="nav-link" style="cursor:default; font-weight:600;">👋 ${user.name.split(' ')[0]}</span>
      <button onclick="logout()" class="btn btn-secondary btn-sm" style="border-radius:50px">Logout</button>
    `;
  } else {
    authLinks.innerHTML = `
      <a href="login.html" class="nav-link">Login</a>
      <a href="register.html" class="btn btn-primary btn-sm" style="border-radius:50px;text-decoration:none">Sign Up</a>
    `;
  }
}

// ---- Hamburger Menu ----
function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const links = document.getElementById('nav-links-wrap');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('open'));
  }
}

// ---- Format Currency ----
function formatPrice(n) { return '₹' + Number(n).toLocaleString('en-IN'); }

// ---- Format Date ----
function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ---- Generate ID ----
function genId(prefix = 'id') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2,5)}`;
}

// ---- Render Product Card ----
function renderProductCard(product) {
  const badgeHtml = product.badge
    ? `<span class="product-badge ${product.badge === 'Organic' ? 'organic' : ''}">${product.badge}</span>`
    : '';
  return `
    <div class="product-card" onclick="void(0)">
      <div class="product-img-wrap">
        <img src="${product.img}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80'">
        ${badgeHtml}
      </div>
      <div class="product-info">
        <div class="product-vendor">${product.vendorName}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-unit">${product.unit}</div>
        <div class="product-footer">
          <div class="product-price">${formatPrice(product.price)} <span>/${product.unit}</span></div>
          <button class="add-btn" onclick="addToCart('${product.id}')">+ Add</button>
        </div>
      </div>
    </div>
  `;
}

// ---- Init on DOMContentLoaded ----
document.addEventListener('DOMContentLoaded', () => {
  seedData();
  initDarkMode();
  initHamburger();
  renderNavAuth();
  updateCartBadge();
});
