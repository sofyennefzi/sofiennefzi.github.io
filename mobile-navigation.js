// Mobile Header Navigation JavaScript

// Enhanced toggle menu function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const menuToggle = document.querySelector(".menu-toggle");

  // Toggle the menu visibility
  menu.classList.toggle("open");

  // Toggle the hamburger icon animation
  menuToggle.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.querySelector(".menu-links");
  const menuToggle = document.querySelector(".menu-toggle");
  const hamburgerNav = document.querySelector("#hamburger-nav");

  // Check if click is outside the navigation
  if (hamburgerNav && !hamburgerNav.contains(event.target)) {
    menu.classList.remove("open");
    menuToggle.classList.remove("active");
  }
});

// Close menu when scrolling
window.addEventListener('scroll', function() {
  const menu = document.querySelector(".menu-links");
  const menuToggle = document.querySelector(".menu-toggle");

  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    menuToggle.classList.remove("active");
  }
});

// Close menu when window is resized to desktop
window.addEventListener('resize', function() {
  const menu = document.querySelector(".menu-links");
  const menuToggle = document.querySelector(".menu-toggle");

  if (window.innerWidth > 768) {
    menu.classList.remove("open");
    menuToggle.classList.remove("active");
  }
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Updated scrollToContact function
function scrollToContact() {
  scrollToSection('contact');
}
