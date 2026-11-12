(() => {
  'use strict';
  const config = window.CHECKPOINT_CONFIG || {};
  const validHttps = value => typeof value === 'string' && /^https:\/\/[^\s]+$/i.test(value);
  const booking = document.getElementById('booking-link');
  if (validHttps(config.BOOKING_URL)) {
    booking.href = config.BOOKING_URL;
    booking.textContent = 'Find a time to talk ↗';
    booking.removeAttribute('aria-disabled');
    document.getElementById('booking-help').textContent = 'You will continue to our scheduling page to choose a time.';
  } else {
    booking.addEventListener('click', e => e.preventDefault());
  }
  const volunteer = document.getElementById('volunteer-link');
  if (validHttps(config.VOLUNTEER_URL)) {
    volunteer.href = config.VOLUNTEER_URL;
    volunteer.textContent = 'Learn about volunteering ↗';
    volunteer.removeAttribute('aria-disabled');
  } else {
    volunteer.addEventListener('click', e => e.preventDefault());
  }
  const menu = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded','false');
  }));
  document.getElementById('year').textContent = String(new Date().getFullYear());
  if (validHttps(config.FORMSPREE_ENDPOINT) && config.FORMSPREE_ENDPOINT.startsWith('https://formspree.io/f/')) {
    const form = document.getElementById('interest-form');
    const status = document.getElementById('form-status');
    form.hidden = false;
    document.getElementById('form-unavailable').hidden = true;
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const button = form.querySelector('button');
      button.disabled = true;
      status.textContent = 'Submitting…';
      try {
        const response = await fetch(config.FORMSPREE_ENDPOINT, {
          method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }
        });
        if (!response.ok) throw new Error('Submission not accepted');
        form.reset();
        status.textContent = 'Thanks for stopping by. Your email has been received.';
      } catch (_) {
        status.textContent = 'Sorry, your email was not sent. Please try again later.';
      } finally { button.disabled = false; }
    });
  }
})();
