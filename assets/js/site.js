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

  document.querySelectorAll('.carousel').forEach(function (carousel) {
    var slides = carousel.querySelectorAll('.carousel-slide');
    var dots = carousel.querySelectorAll('.carousel-dot');
    var prev = carousel.querySelector('.carousel-prev');
    var next = carousel.querySelector('.carousel-next');
    var current = 0;

    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (s, si) {
        s.classList.toggle('active', si === current);
        s.setAttribute('aria-hidden', si === current ? 'false' : 'true');
      });
      dots.forEach(function (d, di) {
        if (di === current) d.setAttribute('aria-current', 'true');
        else d.removeAttribute('aria-current');
      });
    }

    if (prev) prev.addEventListener('click', function () { show(current - 1); });
    if (next) next.addEventListener('click', function () { show(current + 1); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { show(i); });
    });

    slides[0].classList.add('active');
  });
})();
