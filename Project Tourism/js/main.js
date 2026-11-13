document.addEventListener('DOMContentLoaded', () => {
  // Search bar dropdown handlers
  const searchItems = document.querySelectorAll('.search-item');
  const dropdownMenus = document.querySelectorAll('.search-dropdown-menu');

  searchItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = item.querySelector('.search-dropdown-menu');
      const isCurrentlyOpen = !menu.classList.contains('d-none');

      // Close all dropdowns
      dropdownMenus.forEach(m => m.classList.add('d-none'));

      // Toggle current
      if (!isCurrentlyOpen) {
        menu.classList.remove('d-none');
      }
    });

    // Option selection
    const options = item.querySelectorAll('.dropdown-option');
    const displayValue = item.querySelector('.search-value');

    options.forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        displayValue.textContent = opt.textContent.trim();
        item.querySelector('.search-dropdown-menu').classList.add('d-none');
      });
    });
  });

  // Close dropdown on click outside
  document.addEventListener('click', () => {
    dropdownMenus.forEach(m => m.classList.add('d-none'));
  });

  // Search submit smooth scroll
  const searchSubmitBtn = document.getElementById('searchSubmitBtn');
  if (searchSubmitBtn) {
    searchSubmitBtn.addEventListener('click', () => {
      const target = document.getElementById('packages');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Reviews slider navigation
  const prevReview = document.getElementById('prevReview');
  const nextReview = document.getElementById('nextReview');
  const reviewContainer = document.getElementById('reviewCardsContainer');

  if (prevReview && nextReview && reviewContainer) {
    nextReview.addEventListener('click', () => {
      reviewContainer.scrollBy({ left: 340, behavior: 'smooth' });
    });

    prevReview.addEventListener('click', () => {
      reviewContainer.scrollBy({ left: -340, behavior: 'smooth' });
    });
  }

  // Navbar link active highlight
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
