let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;
  
  // Loop back to the start or end if index is out of bounds
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  
  // Move the carousel
  const newTransformValue = `translateX(-${currentSlide * 100}%)`;
  document.querySelector('.carousel-inner').style.transform = newTransformValue;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);
