import { Header } from "./header.js";
import { Footer } from "./footer.js";
import { HeroSlider } from "./heroslider.js";


document.addEventListener("DOMContentLoaded", async function() {
  
  Header();
  Footer();
  HeroSlider();


  // --- Make the menu toggle work after header loads ---
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };
  // --- Make the menu toggle work after header loads ---


  //-- Hide header on scroll --
  const header = document.querySelector('.header');
  let lastScrollY = window.pageYOffset;
  const scrollThreshold = 10;     // prevents jitter
  const hideAfter = 120;          // don’t hide until user scrolls this far

  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;

    // Always show header near the very top
    if (currentScrollY < 50) {
      header.classList.remove("hidden");
      header.classList.remove("scrolled"); // remove scrolled class near top
      lastScrollY = currentScrollY;
      return;
    }


    // Ignore tiny scroll movements (prevents flicker)
    if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) {
      return;
    }

    // Hide only after scrolling down a bit
    if (currentScrollY > lastScrollY){
      header.classList.add("hidden");
      header.classList.remove("scrolled"); // remove scrolled class when hiding
    } else {
      header.classList.remove("hidden");
      header.classList.add("scrolled"); // add scrolled class when showing
    }

    lastScrollY = currentScrollY;
  });
  //-- Hide header on scroll --
  

  
});