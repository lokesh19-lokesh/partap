// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.testimonial-controls .prev');
const nextBtn = document.querySelector('.testimonial-controls .next');
let current = 0;
let interval;

function showTestimonial(idx) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
}
function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}
function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
}
function startAutoSlide() {
  interval = setInterval(nextTestimonial, 6000);
}
function stopAutoSlide() {
  clearInterval(interval);
}
if(prevBtn && nextBtn && testimonials.length) {
  prevBtn.addEventListener('click', () => {
    prevTestimonial();
    stopAutoSlide();
    startAutoSlide();
  });
  nextBtn.addEventListener('click', () => {
    nextTestimonial();
    stopAutoSlide();
    startAutoSlide();
  });
  document.addEventListener('DOMContentLoaded', () => {
    showTestimonial(current);
    startAutoSlide();
  });
}
// Smooth Scrolling for Navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if(href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
// Sticky Header Scroll Effect
const header = document.querySelector('.sticky-header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 30) {
    header.style.boxShadow = '0 4px 16px rgba(34,139,34,0.13)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(34,139,34,0.06)';
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.testimonial-slider');
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.testimonial-controls .prev');
  const nextBtn = document.querySelector('.testimonial-controls .next');
  let current = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${current * 100}%)`;
  }

  prevBtn.addEventListener('click', function() {
    current = (current - 1 + testimonials.length) % testimonials.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', function() {
    current = (current + 1) % testimonials.length;
    updateSlider();
  });

  // Initialize
  updateSlider();
  const hamburger = document.querySelector('.hamburger');
  const nav = document.getElementById('main-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      const isOpen = nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.classList.toggle('open', isOpen);
    });
    // Close menu when a nav link is clicked (mobile UX)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        hamburger.classList.remove('open');
      });
    });
  }
  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll(); // initialize on load
  var callBtn = document.getElementById('callNowBtn');
  if (callBtn) {
    callBtn.addEventListener('click', function() {
      if (confirm('Do you want to make a call?')) {
        window.location.href = 'tel:9652568061';
      }
    });
  }
  const whatsappBtn = document.querySelector('.whatsapp-float');
  const goTopBtn = document.getElementById('goTopBtn');
  function toggleFloatButtons() {
    if (window.scrollY > 100) {
      if (whatsappBtn) whatsappBtn.classList.add('show');
      if (goTopBtn) goTopBtn.classList.add('show');
    } else {
      if (whatsappBtn) whatsappBtn.classList.remove('show');
      if (goTopBtn) goTopBtn.classList.remove('show');
    }
  }
  window.addEventListener('scroll', toggleFloatButtons);
  toggleFloatButtons();
  if (goTopBtn) {
    goTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}); 