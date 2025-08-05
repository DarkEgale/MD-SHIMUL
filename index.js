function handleMobileNav() {
  // Only run this if screen width is 700px or less
  if (window.innerWidth <= 700) {
    const links = document.querySelectorAll('.nav-link');
    const toggle = document.querySelectorAll('.nav-toggle');

    links.forEach(link => {
      link.addEventListener('click', function () {
        let menu = document.getElementById("menu");
        menu.style.marginTop = "-100vh";
      });
    });

    toggle.forEach(t => {
      t.addEventListener('click', function () {
        let menu = document.getElementById("menu");
        menu.style.marginTop = "0vh";
      });
    });
  }
}

// Run it once on load
handleMobileNav();

// Optional: Also run on resize
window.addEventListener('resize', () => {
  // Remove previous listeners by reloading or use better event handling in bigger apps
  handleMobileNav();
});
