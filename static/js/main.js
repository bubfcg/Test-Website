// Countdown Timer
function updateCountdown() {
  // Target date: 14 augustus 2026, 00:00:00
  const targetDate = new Date('2026-08-14T00:00:00').getTime();
  
  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    if (distance < 0) {
      document.querySelector('.countdown').innerHTML = '<div class="countdown-item"><span class="countdown-number">00</span><span class="countdown-label">EVENT GESTART!</span></div>';
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }
  
  update();
  setInterval(update, 1000);
}

// Accordion functionaliteit
function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('.accordion-icon');
      
      // Toggle active class
      content.classList.toggle('active');
      
      // Change icon
      if (content.classList.contains('active')) {
        icon.textContent = '−';
      } else {
        icon.textContent = '+';
      }
    });
  });
}

// Smooth scroll voor anker links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Form validatie
function initFormValidation() {
  const form = document.querySelector('.register-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Bedankt voor je registratie! We nemen contact met je op.');
      form.reset();
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateCountdown();
  initAccordion();
  initSmoothScroll();
  initFormValidation();
});

// Parallax effect voor hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const sunburst = document.querySelector('.sunburst');
  if (sunburst) {
    sunburst.style.transform = `translate(-50%, -50%) rotate(${scrolled * 0.1}deg)`;
  }
});
