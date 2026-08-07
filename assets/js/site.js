// Minimal interactivity: mobile nav, About tabs, FAQ toggles. No dependencies.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var tabButtons = document.querySelectorAll('.tab-buttons button');
  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabButtons.forEach(function (b) { b.setAttribute('aria-selected', 'false'); });
      btn.setAttribute('aria-selected', 'true');
      document.querySelectorAll('.tab-panel').forEach(function (p) {
        p.hidden = p.getAttribute('data-panel') !== btn.getAttribute('data-tab');
      });
    });
  });

  document.querySelectorAll('.toggle > button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.parentElement.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();
