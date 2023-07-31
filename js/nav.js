const menuIcon = document.querySelector('.menuicon');
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-open');
  nav.classList.toggle('is-open');

  if (mobileMenu.classList.contains('is-open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
