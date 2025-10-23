// Smooth scroll to Shayari section
function scrollToShayari() {
  const el = document.querySelector("#shayari");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Add small nav active-on-scroll behavior
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const navLinks = document.querySelectorAll('header nav a');

  function onScroll() {
    const fromTop = window.scrollY + 100;
    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      if (!section) return;
      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
});
