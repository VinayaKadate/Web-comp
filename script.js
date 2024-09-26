// Scroll to Destinations section
function scrollToDestinations() {
    const destinationSection = document.getElementById('destinations');
    if (destinationSection) {
      destinationSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Attach the function to the Explore Destinations button
  document.getElementById('exploreButton').addEventListener('click', scrollToDestinations);
  
  // Contact form submission handling
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
  });
  