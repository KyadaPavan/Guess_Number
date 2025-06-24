// Section and hero reveal on scroll
const animatedEls = document.querySelectorAll('.animated');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
animatedEls.forEach(el => observer.observe(el));

// Parallax effect for hero background
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (!hero) return;
  const scrolled = window.scrollY;
  hero.style.backgroundPosition = `center ${scrolled * 0.3}px`;
});

// Staggered gallery item reveal
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryObs = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 120);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
galleryItems.forEach(item => {
  item.classList.add('animated');
  galleryObs.observe(item);
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Interactive tilt effect for gallery items
function handleTilt(e) {
  const card = this;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const xc = rect.width / 2;
  const yc = rect.height / 2;
  const dx = (x - xc) / xc;
  const dy = (y - yc) / yc;
  card.style.transform = `rotateY(${dx * 7}deg) rotateX(${-dy * 7}deg) scale(1.04)`;
}
function resetTilt() {
  this.style.transform = '';
}
galleryItems.forEach(item => {
  item.addEventListener('mousemove', handleTilt);
  item.addEventListener('mouseleave', resetTilt);
}); 
