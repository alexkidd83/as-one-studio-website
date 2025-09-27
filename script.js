// Dark mode toggle logic
// This script toggles a `dark-mode` class on the body element and stores the
// preference in localStorage so that the user's choice persists between visits.

(function () {
  const body = document.body;
  const nav = document.querySelector('nav');
  const toggleButton = document.getElementById('darkModeToggle');

  // Load saved preference
  const saved = localStorage.getItem('darkMode');
  if (saved === 'true') {
    body.classList.add('dark-mode');
    if (nav) nav.classList.add('dark-mode');
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-mode');
      if (nav) nav.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', isDark);
    });
  }
})();