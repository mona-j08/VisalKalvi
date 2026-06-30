/**
 * VisalKalvi — Shared JavaScript Logic
 */

// Shared header/footer loader
function loadComponent(id, file, callback) {
  fetch(file)
    .then(r => r.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch(err => console.error('Error loading ' + file + ':', err));
}

// Initialize header and footer
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header-placeholder', 'components/header.html', () => {
    // Highlight active nav link based on current path
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageName = currentPage === 'index.html' || currentPage === '' ? 'index.html' : currentPage;
    
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === pageName || (pageName === 'index.html' && href === 'index.html'));
    });

    // Mobile menu toggle
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mobileNav');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
      });
    }
  });

  loadComponent('footer-placeholder', 'components/footer.html');
});
