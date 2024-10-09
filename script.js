// Scroll to Destinations section
// Get the button element
const exploreButton = document.getElementById('exploreButton');

// Add an event listener to the button
exploreButton.addEventListener('click', function() {
  // Scroll to the destinations section
  const destinationSection = document.getElementById('destinations');
  if (destinationSection) {
    destinationSection.scrollIntoView({ behavior: 'smooth' });
  }
});
  // Contact form submission handling
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
  
  // Slideshow functionality
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    const slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
  }
  