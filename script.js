document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const yearNodes = document.querySelectorAll('[data-year]');
  yearNodes.forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const dateNode = document.querySelector('[data-date]');
  if (dateNode) {
    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(today);
    dateNode.textContent = formattedDate;
  }

  const toggleButton = document.querySelector('.nav-toggle');
  const mainNav = document.getElementById('mainNav');

  if (toggleButton && mainNav) {
    toggleButton.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      toggleButton.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        toggleButton.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
