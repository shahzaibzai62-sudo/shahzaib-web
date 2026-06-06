const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href').split('#')[1];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      mobileNav.classList.remove('open');
    }
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
      navLinks.forEach((link) => link.classList.remove('active'));
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
  if (scrollPosition > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

hamburgerMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

const animateElements = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.5 });

animateElements.forEach((element) => {
  observer.observe(element);
});