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

// Toggle menu function for three dots navigation
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const threeDots = document.querySelector(".three-dots");

  menu.classList.toggle("open");

  // Add rotation effect to three dots when menu is open
  if (menu.classList.contains("open")) {
    threeDots.style.transform = "rotate(90deg)";
  } else {
    threeDots.style.transform = "rotate(0deg)";
  }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.querySelector(".menu-links");
  const threeDots = document.querySelector(".three-dots");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  // If menu is open and click is outside the hamburger menu area
  if (menu.classList.contains("open") &&
      !hamburgerMenu.contains(event.target)) {
    menu.classList.remove("open");
    threeDots.style.transform = "rotate(0deg)";
  }
});

// Close menu when scrolling
window.addEventListener('scroll', function() {
  const menu = document.querySelector(".menu-links");
  const threeDots = document.querySelector(".three-dots");

  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    threeDots.style.transform = "rotate(0deg)";
  }
});

// Close menu when window is resized to desktop
window.addEventListener('resize', function() {
  const menu = document.querySelector(".menu-links");
  const threeDots = document.querySelector(".three-dots");

  if (window.innerWidth > 768 && menu.classList.contains("open")) {
    menu.classList.remove("open");
    threeDots.style.transform = "rotate(0deg)";
  }
});
