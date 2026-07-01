document.documentElement.classList.add('js');
setTimeout(() => document.documentElement.classList.add('motion-ready'), 6000);

const glow = document.querySelector('.cursor-glow');

if (glow && matchMedia('(pointer:fine)').matches) {
  addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  }
}, { threshold: 0.14 });

document.querySelectorAll('[data-reveal]').forEach((node) => revealObserver.observe(node));

const counterObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    const value = Number(entry.target.dataset.counter || 0);
    const suffix = entry.target.dataset.suffix || '';
    const output = entry.target.querySelector('strong');
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 1100, 1);
      output.textContent = `${Math.floor(value * progress).toLocaleString()}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(entry.target);
  }
}, { threshold: 0.45 });

document.querySelectorAll('[data-counter]').forEach((node) => counterObserver.observe(node));

const parallax = document.querySelector('[data-parallax]');
if (parallax && matchMedia('(pointer:fine)').matches) {
  addEventListener('pointermove', (event) => {
    const x = (event.clientX / innerWidth - .5) * 10;
    const y = (event.clientY / innerHeight - .5) * -10;
    parallax.style.transform = `rotateX(${8 + y}deg) rotateY(${-14 + x}deg)`;
  }, { passive: true });
}
