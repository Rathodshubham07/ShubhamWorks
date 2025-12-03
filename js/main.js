/* js/main.js
   Shared JS for navigation, smooth scroll, and simple interactions
*/
(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from((ctx || document).querySelectorAll(sel));

  function setYear() {
    const y = new Date().getFullYear();
    const el = document.getElementById('year');
    if (el) el.textContent = y;
  }

  function initMobileToggle() {
    const toggle = document.getElementById('menuToggle');
    const navCenter = document.querySelector('.nav-center');
    if (!toggle || !navCenter) return;

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      navCenter.style.display = expanded ? '' : 'flex';
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) navCenter.style.display = '';
    });
  }

  function smoothScroll() {
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  function updateActiveNav() {
    const sections = $$('main section[id]');
    const navLinks = $$('.nav-center a');

    function onScroll() {
      const scrollPos = window.scrollY + 90;
      let currentId = '';
      sections.forEach(sec => {
        if (sec.offsetTop <= scrollPos) currentId = sec.id;
      });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${currentId}`);
      });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initFormDemo() {
    const form = document.getElementById('contactForm');
    const notice = document.getElementById('formNotice');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get('name') || '').toString().trim();
      const email = (fd.get('email') || '').toString().trim();
      const message = (fd.get('message') || '').toString().trim();
      if (!name || !email || !message) {
        notice && (notice.textContent = 'Please complete all fields.');
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      notice && (notice.textContent = 'Demo mode — message not sent. Connect a backend to receive messages.');
      setTimeout(() => { btn.disabled = false; }, 1200);
    });
  }

  function init() {
    setYear();
    initMobileToggle();
    smoothScroll();
    updateActiveNav();
    initFormDemo();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
