'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn?.addEventListener("click", () => {
  elementToggleFunc(sidebar);
});

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const target = navLink.textContent.trim().toLowerCase();

    // Deactivate all
    navigationLinks.forEach((btn) => btn.classList.remove("active"));
    pages.forEach((page) => page.classList.remove("active"));

    // Activate target
    navLink.classList.add("active");
    const activePage = document.querySelector(`[data-page="${target}"]`);
    if (activePage) activePage.classList.add("active");

    window.scrollTo(0, 0);
  });
});
