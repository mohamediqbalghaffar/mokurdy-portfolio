/**
 * MOKURDY - Mohammed Iqbal Ghaffar Portfolio JS Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initTheme();
  initNav();
  initProjectFilters();
  initModals();
  initContactForm();
});

// Dynamic Headline Typewriter
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const roles = [
    'AI Integration & Solutions Architect',
    'Full Stack Zero-Code Developer',
    'Product Lead & Digital Innovator',
    'Deputy Administrative Manager'
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 70;

  function type() {
    const current = roles[roleIdx];
    if (isDeleting) {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 35;
    } else {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 70;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at full word
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// Light / Dark Theme Toggle
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('mokurdy-theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('mokurdy-theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle i');
  if (icon) {
    icon.className = theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
  }
}

// Navigation & Scroll Spy
function initNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.querySelector('.nav-links');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// Project Filtering
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; }, 20);
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

// Interactive Lightbox Modals
function initModals() {
  const backdrop = document.getElementById('modal-backdrop');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close');

  if (!backdrop || !modalBody || !closeBtn) return;

  function closeModal() {
    backdrop.classList.remove('active');
    modalBody.innerHTML = '';
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) closeModal();
  });

  // Attach Certificate click handlers
  document.querySelectorAll('[data-cert-modal]').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-cert-title');
      const issuer = card.getAttribute('data-cert-issuer');
      const date = card.getAttribute('data-cert-date');
      const img = card.getAttribute('data-cert-img');
      const pdf = card.getAttribute('data-cert-pdf');
      const desc = card.getAttribute('data-cert-desc');

      let downloadBtn = '';
      if (pdf) {
        downloadBtn = `<a href="${pdf}" target="_blank" class="btn btn-primary" download><i class="ri-file-download-line"></i> Download Official PDF</a>`;
      } else if (img) {
        downloadBtn = `<a href="${img}" target="_blank" class="btn btn-primary" download><i class="ri-image-line"></i> Download High-Res Scan</a>`;
      }

      modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.5rem;">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-emerald); text-transform: uppercase;">${issuer}</div>
          <h2 style="font-size: 1.5rem; margin: 0.25rem 0 0.5rem; color: var(--text-primary);">${title}</h2>
          <div style="font-size: 0.85rem; color: var(--text-muted);"><i class="ri-calendar-line"></i> ${date}</div>
        </div>
        <div style="max-height: 60vh; overflow: auto; border-radius: var(--radius-md); border: 1px solid var(--border-color); background: #000; display: flex; justify-content: center; align-items: center; margin-bottom: 1.5rem;">
          <img src="${img}" alt="${title}" style="max-width: 100%; max-height: 58vh; object-fit: contain;">
        </div>
        ${desc ? `<p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem; text-align: center;">${desc}</p>` : ''}
        <div style="display: flex; justify-content: center; gap: 1rem;">
          ${downloadBtn}
          <button class="btn btn-secondary" onclick="document.getElementById('modal-close').click()">Close</button>
        </div>
      `;
      backdrop.classList.add('active');
    });
  });

  // Attach Project Detail click handlers
  document.querySelectorAll('[data-project-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.project-card');
      if (!card) return;

      const title = card.querySelector('.project-name').textContent;
      const company = card.querySelector('.project-company').textContent;
      const snippet = card.querySelector('.project-snippet').textContent;
      const impact = card.querySelector('.project-impact').textContent;
      const tags = Array.from(card.querySelectorAll('.tech-tag')).map(t => t.textContent).join(', ');
      const img = card.querySelector('.project-media img').getAttribute('src');

      modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-primary); text-transform: uppercase;">${company}</span>
          <h2 style="font-size: 1.6rem; color: var(--text-primary); margin: 0.25rem 0 1rem;">${title}</h2>
          <div style="width: 100%; height: 260px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.5rem; background: var(--bg-primary);">
            <img src="${img}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid var(--accent-emerald); padding: 0.75rem 1rem; border-radius: var(--radius-sm); margin-bottom: 1.25rem; color: #34d399; font-weight: 600;">
            ${impact}
          </div>
          <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.25rem;">
            ${snippet}
          </p>
          <div style="margin-bottom: 1.5rem;">
            <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.5rem;">TECH STACK & ARCHITECTURE:</div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-secondary);">${tags}</div>
          </div>
          <div style="display: flex; gap: 1rem; justify-content: flex-end;">
            <a href="https://wa.me/9647503424545?text=Hello%20Mohammed,%20I%20am%20interested%20in%20your%20project:%20${encodeURIComponent(title)}" target="_blank" class="btn btn-primary"><i class="ri-whatsapp-line"></i> Discuss This Project</a>
            <button class="btn btn-secondary" onclick="document.getElementById('modal-close').click()">Close</button>
          </div>
        </div>
      `;
      backdrop.classList.add('active');
    });
  });
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-msg').value;

    const mailto = `mailto:moham.iqbal99@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nSender Email: ' + email)}`;
    window.location.href = mailto;
  });
}
