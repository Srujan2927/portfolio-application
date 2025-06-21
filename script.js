// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinkItems = navLinks.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('open');
});

// Keyboard toggle for hamburger menu
hamburger.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hamburger.click();
  }
});

// Update active nav link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + window.innerHeight / 3;
  sections.forEach(section => {
    if(scrollPos > section.offsetTop) {
      navLinkItems.forEach(link => link.classList.remove('active'));
      const id = section.getAttribute('id');
      const activeLink = navLinks.querySelector(`a[href="#${id}"]`);
      if(activeLink) activeLink.classList.add('active');
    }
  });
});

// Smooth scroll to section when button clicked
function scrollToSection(id) {
  const el = document.getElementById(id);
  el.scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission with basic validation (simulate)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Basic validation is handled by required attribute, just simulate sending
  formStatus.style.color = '#ffd369';
  formStatus.textContent = 'Sending...';

  setTimeout(() => {
    formStatus.style.color = '#68d391'; // greenish
    formStatus.textContent = 'Message sent successfully! Thank you for reaching out.';
    contactForm.reset();
  }, 1500);
});
