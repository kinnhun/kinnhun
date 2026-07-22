/* ==========================================================================
   Kinnhun Web & AI Studio — Vanilla JS Interactivity
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Filter Projects Tabs Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transition = 'opacity 0.4s ease-out';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 2. Sticky Navbar Blur Toggle on Scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.style.background = 'rgba(5, 6, 8, 0.85)';
      navbar.style.backdropFilter = 'blur(16px)';
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
      navbar.style.background = 'transparent';
      navbar.style.backdropFilter = 'none';
      navbar.style.boxShadow = 'none';
    }
  });

  // 3. Project Estimator Selection
  const estimatorCards = document.querySelectorAll('.estimator-card');
  estimatorCards.forEach(card => {
    card.addEventListener('click', () => {
      estimatorCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
});
