// Add this function to script.js
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Update your existing scrollToContact to be consistent
function scrollToContact() {
  scrollToSection('contact');
}

// Keep your existing toggleMenu function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  menu.classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.querySelector(".menu-links");
  const threeDots = document.querySelector(".three-dots");
  const isClickInside = threeDots.contains(event.target);

  if (!isClickInside && menu.classList.contains("open")) {
    menu.classList.remove("open");
    threeDots.classList.remove("active");
  }
});
