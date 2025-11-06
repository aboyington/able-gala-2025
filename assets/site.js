document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('mobile-menu-button');
  var menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;

  var classes = ['opacity-0', '-translate-y-2', 'pointer-events-none', 'max-h-0'];
  function isOpen() {
    return !classes.every(function (c) { return menu.classList.contains(c); });
  }
  function toggleMenu() {
    classes.forEach(function (c) { menu.classList.toggle(c); });
    button.setAttribute('aria-expanded', String(isOpen()));
  }

  button.addEventListener('click', toggleMenu);
  button.setAttribute('aria-expanded', String(isOpen()));
});
