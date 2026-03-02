'use strict';

(function () {
  const COMMAND = 'whoami';
  const DELAY_CHAR = 80;
  const DELAY_AFTER = 300;

  function typewrite(el, text, onDone) {
    let i = 0;
    el.textContent = '';

    const cursor = document.querySelector('.cursor');

    function next() {
      if (i < text.length) {
        el.textContent += text[i++];
        setTimeout(next, DELAY_CHAR + Math.random() * 40);
      } else {
        setTimeout(function () {
          if (cursor) cursor.style.display = 'none';
          onDone && onDone();
        }, DELAY_AFTER);
      }
    }

    next();
  }

  function revealOutput() {
    const output = document.getElementById('hero-output');
    if (!output) return;
    output.style.opacity = '0';
    output.style.display = 'block';
    output.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        output.style.opacity = '1';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('typewriter');
    if (!el) return;

    typewrite(el, COMMAND, revealOutput);
  });
})();
