// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form — sends details as a WhatsApp message
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name     = data.get('name')     || '—';
  const phone    = data.get('phone')    || '—';
  const interest = data.get('interest') || '—';
  const location = data.get('location') || '—';
  const message  = data.get('message')  || '';

  const text = [
    '👋 *New Counselling Request — Talent Career Guidance*',
    '',
    `*Name:* ${name}`,
    `*Phone:* ${phone}`,
    `*Interested In:* ${interest}`,
    `*Preferred Location:* ${location}`,
    message ? `*Message:* ${message}` : null,
  ].filter(line => line !== null).join('\n');

  const waNumber = '917510603234';
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
  form.reset();
});
