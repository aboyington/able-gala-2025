// Application scripts for ABLE Gala 2025 landing page
// Moved from inline <script> in index.html to assets/app.js

// Set default language to English
let currentLanguage = 'en';

function setLanguage(lang) {
  // Update <html lang>
  try { document.documentElement.setAttribute('lang', lang === 'fr' ? 'fr' : 'en'); } catch(e){}
  // Persist
  try { localStorage.setItem('able_lang', lang); } catch(e){}
  currentLanguage = lang;

  // Update button styles
  document.querySelectorAll('.lang-toggle').forEach((btn) => {
    btn.classList.remove('text-ablegold', 'font-medium');
    btn.classList.add('text-gray-400', 'hover:text-gray-300');
  });

  const activeBtn = document.getElementById(`lang-${lang}`);
  if (activeBtn) {
    activeBtn.classList.remove('text-gray-400', 'hover:text-gray-300');
    activeBtn.classList.add('text-ablegold', 'font-medium');
  }

  // Show/hide language content
  document.querySelectorAll('[data-lang]').forEach((el) => {
    if (el.getAttribute('data-lang') === lang) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });

  // Handle elements with both languages (show both by default, hide one when specific language selected)
  document.querySelectorAll('.lang-both').forEach((el) => {
    const enContent = el.querySelector('.lang-en-content');
    const frContent = el.querySelector('.lang-fr-content');

    if (lang === 'en' && frContent) {
      frContent.style.display = 'none';
      if (enContent) enContent.style.display = '';
    } else if (lang === 'fr' && enContent) {
      enContent.style.display = 'none';
      if (frContent) frContent.style.display = '';
    } else {
      // Show both if no specific content containers
      if (enContent) enContent.style.display = '';
      if (frContent) frContent.style.display = '';
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  const savedLang = (function(){ try { return localStorage.getItem('able_lang') || 'en'; } catch(e){ return 'en'; }})();
  setLanguage(savedLang);
  initVideoPlayer();
  initScrollSpy();
  // Initialize newsletter once DOM is ready so the form exists
  initNewsletter();
  initNewsletterUX();

  // Mobile menu toggle with animation and auto-close
  const btn = document.getElementById('mobile-menu-button');
  const panel = document.getElementById('mobile-menu');

  function openMobileMenu(open) {
    if (!panel || !btn) return;
    if (open) {
      panel.classList.remove('opacity-0','-translate-y-2','pointer-events-none','max-h-0');
      panel.classList.add('opacity-100','translate-y-0','pointer-events-auto','max-h-[60vh]');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      panel.classList.add('opacity-0','-translate-y-2','pointer-events-none','max-h-0');
      panel.classList.remove('opacity-100','translate-y-0','pointer-events-auto','max-h-[60vh]');
      btn.setAttribute('aria-expanded', 'false');
    }
  }

  if (btn && panel) {
    // Toggle on button click
    btn.addEventListener('click', function () {
      const isClosed = panel.classList.contains('opacity-0');
      openMobileMenu(isClosed);
    });

    // Auto-close on link click
    panel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => openMobileMenu(false));
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') openMobileMenu(false);
    });
  }
});

// Video player initialization
function initVideoPlayer() {
  const video = document.querySelector('video');
  const placeholder = document.getElementById('video-placeholder');
  const playOverlay = document.querySelector('.group .absolute.inset-0');

  if (video && placeholder) {
    // Hide placeholder when video can play
    video.addEventListener('loadeddata', function () {
      placeholder.style.display = 'none';
    });

    // Hide play overlay when video starts playing
    video.addEventListener('play', function () {
      if (playOverlay) {
        playOverlay.style.display = 'none';
      }
    });

    // Show play overlay when video is paused or ends
    video.addEventListener('pause', function () {
      if (playOverlay) {
        playOverlay.style.display = 'flex';
      }
    });

    video.addEventListener('ended', function () {
      if (playOverlay) {
        playOverlay.style.display = 'flex';
      }
    });

    // Handle loading errors
    video.addEventListener('error', function () {
      placeholder.innerHTML = `
        <div class="text-center">
          <div class="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <p class="text-gray-400 text-sm lang-en-content">Error loading video. Please try refreshing the page.</p>
          <p class="text-gray-400 text-sm lang-fr-content hidden">Erreur de chargement de la vidéo. Veuillez actualiser la page.</p>
        </div>
      `;
    });
  }
}

// Newsletter form submit (initialized after DOMContentLoaded)
function initNewsletter(){
  const form = document.getElementById('newsletter-form');
  const status = document.getElementById('newsletter-status');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Submitting...';
    try {
      const formData = new FormData(form);
      const res = await fetch(form.action, { method: 'POST', body: formData });
      const data = await res.json().catch(()=>({ ok:false }));
      if (res.ok && data.ok) {
        status.classList.remove('text-gray-400');
        status.classList.add('text-green-400');
        status.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>You're subscribed!</span>
        `;
        form.reset();
        // fade out after 3s
        setTimeout(() => { status.classList.add('opacity-0'); }, 3000);
        setTimeout(() => { status.innerHTML=''; status.classList.remove('opacity-0','text-green-400'); status.classList.add('text-gray-400'); }, 3600);
      } else {
        status.classList.remove('text-green-400');
        status.classList.add('text-gray-400');
        status.textContent = (data && data.error) ? `Error: ${data.error}` : 'Sorry, something went wrong.';
      }
    } catch (err) {
      status.textContent = 'Network error. Please try again later.';
    }
  });
}

// Live email validation + reCAPTCHA v3 (optional)
function initNewsletterUX(){
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  const email = document.getElementById('email');
  const submit = form.querySelector('button[type="submit"]');
  const status = document.getElementById('newsletter-status');
  const recaptchaSiteKey = window.RECAPTCHA_SITE_KEY || '';

  function isValidEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); }
  function updateButton(){
    const valid = isValidEmail(email.value);
    submit.disabled = !valid;
    submit.classList.toggle('opacity-50', !valid);
    submit.classList.toggle('cursor-not-allowed', !valid);
    if (!valid) { status.textContent = ''; status.classList.remove('text-green-400'); status.classList.add('text-gray-400'); }
  }
  email.addEventListener('input', updateButton);
  updateButton();

  // Load reCAPTCHA script lazily if site key provided
  if (recaptchaSiteKey) {
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`;
    s.async = true; s.defer = true;
    document.head.appendChild(s);
  }

  // Enhance existing submit handler to include reCAPTCHA token when configured
  form.addEventListener('submit', async (e) => {
    if (!isValidEmail(email.value)) { e.preventDefault(); updateButton(); return; }
    if (!window.grecaptcha || !grecaptcha.execute || !recaptchaSiteKey) return; // no recaptcha configured
    e.preventDefault();
    try {
      const token = await grecaptcha.execute(recaptchaSiteKey, { action: 'newsletter_signup' });
      let tokenInput = form.querySelector('input[name="g-recaptcha-response"]');
      if (!tokenInput) {
        tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'g-recaptcha-response';
        form.appendChild(tokenInput);
      }
      tokenInput.value = token;
      // Programmatically submit via fetch (mirrors earlier handler)
      const formData = new FormData(form);
      status.textContent = 'Submitting...';
      const res = await fetch(form.action, { method: 'POST', body: formData });
      const data = await res.json().catch(()=>({ ok:false }));
      if (res.ok && data.ok) {
        status.classList.remove('text-gray-400');
        status.classList.add('text-green-400');
        status.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>You're subscribed!</span>
        `;
        form.reset();
        updateButton();
        setTimeout(() => { status.classList.add('opacity-0'); }, 3000);
        setTimeout(() => { status.innerHTML=''; status.classList.remove('opacity-0','text-green-400'); status.classList.add('text-gray-400'); }, 3600);
      } else {
        status.classList.remove('text-green-400');
        status.classList.add('text-gray-400');
        status.textContent = (data && data.error) ? `Error: ${data.error}` : 'Sorry, something went wrong.';
      }
    } catch(err){
      status.textContent = 'Network error. Please try again later.';
    }
  }, { capture: true });
}

// Scroll spy to set active nav based on section in view
function initScrollSpy() {
  const sections = ['hero','details','applications','2024-recap','contact'];
  const linkMap = new Map();
  sections.forEach(id => {
    linkMap.set(id, Array.from(document.querySelectorAll(`[data-nav="${id}"]`)));
  });
  function setActive(id) {
    sections.forEach(sid => {
      (linkMap.get(sid) || []).forEach(a => {
        a.classList.remove('text-ablegold','font-semibold','hover:text-amber-400');
        a.classList.add('hover:text-white');
        a.removeAttribute('aria-current');
      });
    });
    (linkMap.get(id) || []).forEach(a => {
      a.classList.add('text-ablegold','font-semibold','hover:text-amber-400');
      a.classList.remove('hover:text-white');
      a.setAttribute('aria-current','location');
    });
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { root: null, threshold: 0.6 });
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
  setActive('hero');
}
