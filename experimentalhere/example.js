

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const parallaxLayer = document.querySelector(".parallax-layer img");

  // Parallax effect on scroll
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const parallaxSpeed = 0.5; // Adjust speed here
    const offset = scrollPosition * parallaxSpeed;

    // Move the parallax layer
    parallaxLayer.style.transform = `translateY(${offset}px)`;
  });
});

// Auto-play slider
const sliderItems = document.querySelectorAll('input[name="slider"]');
let currentSlide = 0;
function nextSlide() {
  sliderItems[currentSlide].checked = false;
  currentSlide = (currentSlide + 1) % sliderItems.length;
  sliderItems[currentSlide].checked = true;
}
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Scroll animation for sections
const sections = document.querySelectorAll('.welcome-section, .stats, .site-footer');
function checkVisibility() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}
window.addEventListener('scroll', checkVisibility);

// Initial styles for scroll animation
sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(50px)';
  section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});
checkVisibility(); // Check on load

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');
  const totalSlides = slides.length;
  let currentIndex = 0;

  // Update slider
  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });
    thumbnails.forEach((thumb, index) => {
      thumb.classList.toggle('active', index === currentIndex);
    });
  }

  // Automatic sliding
  let autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }, 5000);

  // Arrow navigation
  prevArrow.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 5000);
  });

  nextArrow.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 5000);
  });

  // Thumbnail navigation
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      clearInterval(autoSlideInterval);
      currentIndex = index;
      updateSlider();
      autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
      }, 5000);
    });
  });
});