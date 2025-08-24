// Simple scroll reveal animation
const sections = document.querySelectorAll('.section, .hero-section');

function reveal() {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < windowHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    } else {
      section.style.opacity = 0;
      section.style.transform = 'translateY(50px)';
    }
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

