/**
 * Scroll Reveal — fade + blur ao entrar na viewport
 * Usa: data-reveal           → anima o elemento inteiro
 *      data-reveal-group     → anima os filhos com stagger
 */
(function () {
  'use strict';

  var THRESHOLD = 0.12; // fração visível para disparar
  var STAGGER   = 80;   // ms entre cada filho do grupo

  function observe(els, stagger) {
    if (!els.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        if (stagger) {
          Array.from(entry.target.children).forEach(function (child, i) {
            setTimeout(function () {
              child.classList.add('revealed');
            }, i * STAGGER);
          });
        } else {
          entry.target.classList.add('revealed');
        }

        io.unobserve(entry.target);
      });
    }, { threshold: THRESHOLD });

    els.forEach(function (el) { io.observe(el); });
  }

  function init() {
    // Elementos com data-reveal (secções, parágrafos, imagens individuais)
    observe(Array.from(document.querySelectorAll('[data-reveal]')), false);

    // Grupos com stagger (grids, listas)
    observe(Array.from(document.querySelectorAll('[data-reveal-group]')), true);
  }

  window._scrollRevealInit = init;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
