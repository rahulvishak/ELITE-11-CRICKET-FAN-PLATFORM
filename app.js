/* ===============================================
   ELITE 11 — Professional Cricket Website
   app.js — Full Interactive JavaScript
   =============================================== */

// =============================================
// DATA
// =============================================
const PRODUCTS = [
  { id: 1, name: 'SS Ton Elite Pro', cat: 'bats', price: 8999, original: 11999, emoji: '🏏', badge: 'sale', rating: 4.8, reviews: 124 },
  { id: 2, name: 'India Test Jersey 2025', cat: 'jerseys', price: 2499, original: 2999, emoji: '👕', badge: 'new', rating: 4.9, reviews: 88 },
  { id: 3, name: 'SG Pro Guard Gloves', cat: 'gloves', price: 1899, original: 2400, emoji: '🥊', badge: 'sale', rating: 4.6, reviews: 55 },
  { id: 4, name: 'Masuri T-Line Helmet', cat: 'helmets', price: 5999, original: 7500, emoji: '⛑️', badge: 'hot', rating: 4.7, reviews: 72 },
  { id: 5, name: 'Puma Cricket Spikes', cat: 'shoes', price: 4299, original: 5500, emoji: '👟', badge: 'new', rating: 4.5, reviews: 41 },
  { id: 6, name: 'Gray-Nicolls Bat Grip', cat: 'accessories', price: 299, original: 399, emoji: '🎯', badge: null, rating: 4.4, reviews: 210 },
  { id: 7, name: 'MRF Genius Grand Bat', cat: 'bats', price: 14999, original: 18000, emoji: '🏏', badge: 'hot', rating: 4.9, reviews: 203 },
  { id: 8, name: 'Adidas IPL Fan Jersey', cat: 'jerseys', price: 1799, original: 2200, emoji: '👕', badge: null, rating: 4.3, reviews: 65 },
  { id: 9, name: 'Kookaburra Wicket Gloves', cat: 'gloves', price: 2799, original: 3500, emoji: '🧤', badge: 'new', rating: 4.7, reviews: 38 },
  { id: 10, name: 'GM Purist Batting Pads', cat: 'accessories', price: 3299, original: 4000, emoji: '🦺', badge: null, rating: 4.6, reviews: 49 },
  { id: 11, name: 'DSC Intense Pro Bat', cat: 'bats', price: 6999, original: 8500, emoji: '🏏', badge: 'sale', rating: 4.7, reviews: 91 },
  { id: 12, name: 'Nike Cricket Shoes XT', cat: 'shoes', price: 5899, original: 7200, emoji: '👟', badge: 'hot', rating: 4.8, reviews: 77 },
];

const MATCHES = [
  { id: 1, teams: 'India vs Australia', date: 'Jun 15, 2025', venue: 'Wankhede Stadium, Mumbai', type: 'T20 World Cup Final' },
  { id: 2, teams: 'India vs England', date: 'Jun 22, 2025', venue: 'Eden Gardens, Kolkata', type: 'ODI Series' },
  { id: 3, teams: 'CSK vs MI', date: 'Jul 4, 2025', venue: 'Chepauk Stadium, Chennai', type: 'IPL 2025' },
  { id: 4, teams: 'India vs Pakistan', date: 'Jul 12, 2025', venue: 'Mohali, Punjab', type: 'Asia Cup' },
];

const SCORES_DATA = [
  { id: 1, team1: '🇮🇳 India', team2: '🇦🇺 Australia', score1: '287/6', score2: '156/3', overs2: '24.2', type: 'T20 World Cup', status: 'live', info: 'Australia need 132 runs in 95 balls • RR: 6.43' },
  { id: 2, team1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England', team2: '🇵🇰 Pakistan', score1: '342/8', score2: '310/10', overs2: '48.3', type: 'ODI Series', status: 'completed', info: 'England won by 32 runs' },
  { id: 3, team1: '🇱🇰 Sri Lanka', team2: '🇧🇩 Bangladesh', score1: '189/7', score2: '—', overs2: '—', type: 'T20 International', status: 'live', info: 'Sri Lanka batting • 14.3 overs' },
];

const UPCOMING = [
  { teams: 'IND vs NZ', date: 'Tomorrow', time: '2:30 PM IST', type: 'T20I' },
  { teams: 'AUS vs SA', date: 'Jun 14', time: '7:00 PM IST', type: 'ODI' },
  { teams: 'ENG vs WI', date: 'Jun 16', time: '3:30 PM IST', type: 'Test' },
  { teams: 'PAK vs AFG', date: 'Jun 17', time: '6:00 PM IST', type: 'T20I' },
];

const PLAYERS = [
  { name: 'Rohit Sharma', role: 'Batsman', emoji: '🏏', team: 'India', runs: '14000+', avg: '48.9', hundreds: '49' },
  { name: 'Jasprit Bumrah', role: 'Fast Bowler', emoji: '⚡', team: 'India', wickets: '650+', avg: '21.4', best: '6/19' },
  { name: 'Ben Stokes', role: 'All-Rounder', emoji: '🌟', team: 'England', runs: '9000+', avg: '38.2', wickets: '200+' },
  { name: 'Babar Azam', role: 'Batsman', emoji: '🦅', team: 'Pakistan', runs: '11000+', avg: '52.3', hundreds: '31' },
  { name: 'Pat Cummins', role: 'Fast Bowler', emoji: '🔥', team: 'Australia', wickets: '300+', avg: '22.8', best: '7/8' },
  { name: 'Shakib Al Hasan', role: 'All-Rounder', emoji: '💥', team: 'Bangladesh', runs: '7000+', avg: '36.1', wickets: '280+' },
  { name: 'Rashid Khan', role: 'Spin Bowler', emoji: '🌀', team: 'Afghanistan', wickets: '400+', avg: '18.3', best: '7/18' },
  { name: 'KL Rahul', role: 'Wicket-Keeper', emoji: '🧤', team: 'India', runs: '8500+', avg: '44.2', hundreds: '22' },
];

// =============================================
// STATE
// =============================================
let cart = JSON.parse(localStorage.getItem('elite11Cart') || '[]');
let selectedMatch = MATCHES[0];
let selectedZone = null;
let ticketQty = 1;
let currentFilter = 'all';
let isLoggedIn = false;
let userName = '';

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  // Preloader
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hide');
  }, 2200);

  renderProducts();
  renderScores();
  renderUpcoming();
  renderMatches();
  renderPlayers();
  updateCartUI();
  setupEventListeners();
  initScrollAnimations();
  selectMatch(document.querySelector('.match-item'));
});

// =============================================
// SCROLL & NAV
// =============================================
function setupEventListeners() {
  // Navbar scroll
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');

    const scrollBtn = document.getElementById('scrollTop');
    if (window.scrollY > 300) scrollBtn.classList.add('show');
    else scrollBtn.classList.remove('show');
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    document.querySelectorAll('.nav-link').forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === '#' + current) l.classList.add('active');
    });
  });

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // Close nav on link click (mobile)
  document.querySelectorAll('.nav-link').forEach(l => {
    l.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // Search toggle
  document.getElementById('searchToggle').addEventListener('click', () => {
    document.getElementById('searchOverlay').classList.toggle('open');
    if (document.getElementById('searchOverlay').classList.contains('open')) {
      setTimeout(() => document.getElementById('searchInput').focus(), 100);
    }
  });
  document.getElementById('closeSearch').addEventListener('click', () => {
    document.getElementById('searchOverlay').classList.remove('open');
  });

  // Cart toggle
  document.getElementById('cartToggle').addEventListener('click', toggleCart);

  // Login button
  document.getElementById('loginBtn').addEventListener('click', (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      showToast('You are logged in as ' + userName);
    } else {
      openModal('loginModal');
    }
  });

  // Filter tabs
  document.getElementById('filterTabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-tab')) {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      applyFilter();
    }
  });

  // Search on enter
  document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch();
  });
}

// =============================================
// SCROLL REVEAL
// =============================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.section-header, .cat-card, .product-card, .plan-card, .player-card, .score-card, .fz-card, .contact-item');
  elements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

// =============================================
// PRODUCTS
// =============================================
function renderProducts(data = PRODUCTS) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';
  data.forEach(p => {
    const save = Math.round(((p.original - p.price) / p.original) * 100);
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
    const badgeHTML = p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge === 'sale' ? `${save}% OFF` : p.badge === 'new' ? 'NEW' : 'HOT'}</span>` : '';
    grid.innerHTML += `
      <div class="product-card reveal" data-cat="${p.cat}" data-id="${p.id}">
        <div class="product-img">
          ${badgeHTML}
          <div class="product-actions">
            <button class="prod-action-btn" onclick="addToWishlist(${p.id})" title="Wishlist"><i class="fas fa-heart"></i></button>
            <button class="prod-action-btn" onclick="quickPreview(${p.id})" title="Quick View"><i class="fas fa-eye"></i></button>
          </div>
          ${p.emoji}
        </div>
        <div class="product-info">
          <div class="product-cat">${p.cat}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span class="rating-num">${p.rating} (${p.reviews})</span>
          </div>
          <div class="product-price">
            <span class="price-current">₹${p.price.toLocaleString()}</span>
            <span class="price-original">₹${p.original.toLocaleString()}</span>
            <span class="price-save">Save ${save}%</span>
          </div>
          <button class="product-atc" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
  initScrollAnimations();
}

function filterProducts(cat) {
  currentFilter = cat;
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filter === cat);
  });
  applyFilter();
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

function applyFilter() {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(c => {
    if (currentFilter === 'all' || c.dataset.cat === currentFilter) {
      c.classList.remove('hidden');
    } else {
      c.classList.add('hidden');
    }
  });
}

function sortProducts() {
  const val = document.getElementById('sortSelect').value;
  let sorted = [...PRODUCTS];
  if (val === 'price-low') sorted.sort((a,b) => a.price - b.price);
  else if (val === 'price-high') sorted.sort((a,b) => b.price - a.price);
  else if (val === 'rating') sorted.sort((a,b) => b.rating - a.rating);
  renderProducts(sorted);
  applyFilter();
}

let productsLoaded = PRODUCTS.length;
function loadMoreProducts() {
  showToast('All products are loaded!');
}

function addToWishlist(id) {
  const p = PRODUCTS.find(x => x.id === id);
  showToast(`❤️ ${p.name} added to Wishlist`);
}

function quickPreview(id) {
  const p = PRODUCTS.find(x => x.id === id);
  showToast(`👁️ ${p.name} — ₹${p.price.toLocaleString()}`);
}

// =============================================
// CART
// =============================================
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`🛒 ${p.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('elite11Cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((a, b) => a + (b.qty || 1), 0);
  const countEl = document.getElementById('cartCount');
  const headerCount = document.getElementById('cartHeaderCount');
  countEl.textContent = count;
  if (headerCount) headerCount.textContent = `(${count})`;
  if (count > 0) countEl.classList.add('show');
  else countEl.classList.remove('show');
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p></div>';
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'flex';
  let total = 0;
  container.innerHTML = cart.map(item => {
    const qty = item.qty || 1;
    const sub = item.price * qty;
    total += sub;
    return `
      <div class="cart-item">
        <div class="ci-img">${item.emoji}</div>
        <div class="ci-info">
          <div class="ci-name">${item.name}</div>
          <div class="ci-price">₹${item.price.toLocaleString()} × ${qty} = ₹${sub.toLocaleString()}</div>
        </div>
        <button class="ci-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
      </div>
    `;
  }).join('');
  document.getElementById('cartSubtotal').textContent = '₹' + total.toLocaleString();
}

function proceedCheckout() {
  if (!isLoggedIn) {
    toggleCart();
    setTimeout(() => openModal('loginModal'), 300);
    showToast('Please login to checkout', 'error');
    return;
  }
  showToast('✅ Redirecting to checkout...');
  setTimeout(() => toggleCart(), 800);
}

// =============================================
// SCORES
// =============================================
function renderScores() {
  const grid = document.getElementById('scoresGrid');
  grid.innerHTML = SCORES_DATA.map(m => {
    const isLive = m.status === 'live';
    const badgeHTML = isLive
      ? `<div class="score-live-badge"><span class="live-dot"></span>LIVE</div>`
      : `<div class="score-completed-badge">COMPLETED</div>`;
    return `
      <div class="score-card ${isLive ? 'live' : ''} reveal">
        ${badgeHTML}
        <span class="score-match-type">${m.type}</span>
        <div class="score-teams">
          <div class="score-team">
            <div class="team-name">${m.team1}</div>
            <div class="team-score ${isLive ? 'batting' : ''}">${m.score1}</div>
          </div>
          <div class="score-team">
            <div class="team-name">${m.team2}</div>
            <div class="team-score">${m.score2} ${m.overs2 !== '—' ? `<small style="font-size:0.9rem;color:var(--gray)">(${m.overs2})</small>` : ''}</div>
          </div>
        </div>
        <div class="score-info">${m.info}</div>
      </div>
    `;
  }).join('');
}

function renderUpcoming() {
  document.getElementById('upcomingGrid').innerHTML = UPCOMING.map(u => `
    <div class="upcoming-card reveal">
      <div class="upcoming-teams">
        <h4>${u.teams}</h4>
        <span>${u.date} • ${u.type}</span>
      </div>
      <div class="upcoming-time">${u.time}<br><small style="color:var(--gray)">IST</small></div>
    </div>
  `).join('');
}

// =============================================
// TICKETS
// =============================================
function renderMatches() {
  const list = document.getElementById('matchList');
  list.innerHTML = MATCHES.map((m, i) => `
    <div class="match-item ${i === 0 ? 'active' : ''}" onclick="selectMatch(this, ${m.id})">
      <div class="match-teams">${m.teams}</div>
      <div class="match-date">${m.date}</div>
      <div class="match-venue">📍 ${m.venue}</div>
      <small style="color:var(--gray);font-size:0.72rem">${m.type}</small>
    </div>
  `).join('');
}

function selectMatch(el, id) {
  document.querySelectorAll('.match-item').forEach(m => m.classList.remove('active'));
  if (el) el.classList.add('active');
  if (id) selectedMatch = MATCHES.find(m => m.id === id);
  selectedZone = null;
  ticketQty = 1;
  document.getElementById('ticketSummary').innerHTML = '<p style="color:var(--gray);font-style:italic">Select a zone to continue</p>';
  document.getElementById('ticketQty').style.display = 'none';
  document.getElementById('bookNowBtn').style.display = 'none';
  document.querySelectorAll('.seat-zone').forEach(z => z.classList.remove('selected'));
}

function selectZone(el) {
  document.querySelectorAll('.seat-zone').forEach(z => z.classList.remove('selected'));
  el.classList.add('selected');
  selectedZone = { zone: el.dataset.zone, price: parseInt(el.dataset.price) };
  ticketQty = 1;
  updateTicketSummary();
  document.getElementById('ticketQty').style.display = 'flex';
  document.getElementById('bookNowBtn').style.display = 'flex';
  document.getElementById('ticketQtyVal').textContent = '1';
}

function changeTicketQty(delta) {
  ticketQty = Math.max(1, Math.min(10, ticketQty + delta));
  document.getElementById('ticketQtyVal').textContent = ticketQty;
  updateTicketSummary();
}

function updateTicketSummary() {
  if (!selectedZone) return;
  const total = selectedZone.price * ticketQty;
  document.getElementById('ticketSummary').innerHTML = `
    <strong style="color:var(--white)">${selectedMatch ? selectedMatch.teams : 'Match'}</strong><br>
    <span style="color:var(--neon)">${selectedZone.zone} Zone</span> • ${ticketQty} ticket${ticketQty > 1 ? 's' : ''}
  `;
  document.getElementById('ticketTotal').textContent = `Total: ₹${total.toLocaleString()}`;
}

function bookTickets() {
  if (!selectedZone) { showToast('Please select a zone', 'error'); return; }
  const total = selectedZone.price * ticketQty;
  document.getElementById('qrDetails').innerHTML = `
    <strong>${selectedMatch.teams}</strong><br>
    ${selectedZone.zone} Zone • ${ticketQty} ticket${ticketQty > 1 ? 's' : ''}<br>
    <span style="color:var(--neon)">Total: ₹${total.toLocaleString()}</span><br>
    <small style="color:var(--gray)">${selectedMatch.venue}</small>
  `;
  document.getElementById('qrCode').innerHTML = `
    <div class="qr-inner">
      ELITE11<br>
      ${btoa(selectedMatch.teams + selectedZone.zone + Date.now()).substring(0, 16).toUpperCase()}<br>
      ████ ████<br>
      ██░░ ░░██<br>
      ████ ████<br>
      VALID TICKET
    </div>
  `;
  openModal('qrModal');
}

function downloadTicket() {
  showToast('🎟️ Ticket downloaded!');
  closeModal('qrModal');
}

// =============================================
// PLAYERS
// =============================================
function renderPlayers() {
  document.getElementById('playersGrid').innerHTML = PLAYERS.map(p => {
    const statKeys = Object.entries(p).filter(([k]) => !['name','role','emoji','team'].includes(k));
    const statsHTML = statKeys.map(([k,v]) => `<div class="p-stat"><strong>${v}</strong><span>${k}</span></div>`).join('');
    return `
      <div class="player-card reveal">
        <div class="player-img">${p.emoji}
          <div class="player-overlay">
            <a href="#" onclick="showAlert('View ${p.name} full profile'); return false;">View Profile</a>
            <a href="#" onclick="showAlert('Following ${p.name}!'); return false;">Follow</a>
          </div>
        </div>
        <div class="player-info">
          <div class="player-name">${p.name}</div>
          <div class="player-role">${p.role} • ${p.team}</div>
          <div class="player-stats">${statsHTML}</div>
        </div>
      </div>
    `;
  }).join('');
}

// =============================================
// FAN ZONE
// =============================================
function vote(btn, team, pct) {
  const voted = btn.closest('.poll-options').querySelector('.voted');
  if (voted) { showToast('You already voted!', 'error'); return; }
  btn.classList.add('voted');
  showToast(`✅ Voted for ${team}!`);
  document.getElementById('pollTotal').textContent = '12,484 votes';
}

function postComment() {
  const input = document.getElementById('fanComment');
  const text = input.value.trim();
  if (!text) return;
  const feed = document.getElementById('discussionFeed');
  const name = isLoggedIn ? userName : 'Guest Fan';
  const initials = name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
  feed.innerHTML += `
    <div class="msg">
      <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=39ff14&color=000&size=32" alt="avatar">
      <div class="msg-body"><strong>${name}</strong><p>${escapeHTML(text)}</p></div>
    </div>
  `;
  feed.scrollTop = feed.scrollHeight;
  input.value = '';
  showToast('💬 Comment posted!');
}

function subscribeNewsletter() {
  const email = document.getElementById('nlEmail').value.trim();
  if (!email || !email.includes('@')) { showToast('Please enter a valid email', 'error'); return; }
  document.getElementById('nlEmail').value = '';
  showToast('🎉 Subscribed! Welcome to ELITE 11!');
}

// =============================================
// MEMBERSHIP
// =============================================
function joinPlan(plan) {
  if (!isLoggedIn) {
    openModal('loginModal');
    showToast('Login to subscribe to ' + plan, 'error');
    return;
  }
  showToast(`🏆 Welcome to ${plan} plan! Redirecting to payment...`);
}

// =============================================
// CONTACT FORM
// =============================================
function submitContact(e) {
  e.preventDefault();
  showToast('✅ Message sent! We\'ll reply within 24 hours.');
  e.target.reset();
}

// =============================================
// LOGIN / AUTH
// =============================================
function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPassword').value.trim();
  if (!email || !pass) { showToast('Please fill all fields', 'error'); return; }
  isLoggedIn = true;
  userName = email.split('@')[0];
  document.getElementById('loginBtn').textContent = 'Hi, ' + userName;
  closeModal('loginModal');
  showToast('✅ Welcome back, ' + userName + '!');
}

function handleRegister() {
  const first = document.getElementById('regFirst').value.trim();
  const last = document.getElementById('regLast').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPassword').value.trim();
  if (!first || !last || !email || !pass) { showToast('Please fill all fields', 'error'); return; }
  isLoggedIn = true;
  userName = first;
  document.getElementById('loginBtn').textContent = 'Hi, ' + first;
  closeModal('loginModal');
  showToast('🎉 Account created! Welcome, ' + first + '!');
}

function googleLogin() {
  isLoggedIn = true;
  userName = 'Cricket Fan';
  document.getElementById('loginBtn').textContent = 'Hi, Cricket Fan';
  closeModal('loginModal');
  showToast('✅ Logged in with Google!');
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const loginTab = document.getElementById('loginTabBtn');
  const registerTab = document.getElementById('registerTabBtn');
  if (tab === 'login') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    loginTab.classList.remove('active');
    registerTab.classList.add('active');
  }
}

// =============================================
// SEARCH
// =============================================
function performSearch() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!query) return;
  document.getElementById('searchOverlay').classList.remove('open');
  const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query));
  if (results.length > 0) {
    renderProducts(results);
    currentFilter = 'all';
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    showToast(`🔍 Found ${results.length} result${results.length > 1 ? 's' : ''} for "${query}"`);
  } else {
    showToast(`No results for "${query}"`, 'error');
  }
  document.getElementById('searchInput').value = '';
}

// =============================================
// MODALS
// =============================================
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// =============================================
// TOAST
// =============================================
let toastTimer;
function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

function showAlert(msg) {
  showToast('ℹ️ ' + msg);
}

// =============================================
// UTILITIES
// =============================================
function escapeHTML(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Live score ticker update simulation
setInterval(() => {
  const scoreEls = document.querySelectorAll('.score-card.live .team-score.batting');
  scoreEls.forEach(el => {
    const current = el.textContent;
    const match = current.match(/(\d+)\/(\d+)/);
    if (match) {
      const runs = parseInt(match[1]) + Math.floor(Math.random() * 4);
      el.textContent = `${runs}/${match[2]}`;
    }
  });
}, 15000);
