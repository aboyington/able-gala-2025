# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Quickstart
- View locally (MAMP Pro):
  - open https://ableorg.local/
  - open https://ableorg.local/gala2025/
  - open https://ableorg.local/gala2025/tickets.html
- Fallback (if MAMP unavailable):
  - php -S 127.0.0.1:8080 -t gala2025
  - open http://127.0.0.1:8080/

Commands
- Git
  - git status
  - git add .
  - git commit -m "message"
  - git pull --no-rebase origin main
  - git push origin main
- Build/lint/tests: none. This is a static site (no toolchain or test suite).

Architecture overview
- Static, bilingual site under gala2025/ (HTML + Tailwind via CDN + vanilla JS + PHP endpoint):
  - Styling: Tailwind CSS via CDN; Google Fonts (Inter, Playfair Display). No bundler/build.
  - JS: gala2025/assets/app.js provides interactivity:
    - setLanguage(lang): persists to localStorage key able_lang; updates <html lang>; toggles language blocks inside .lang-both containers (children .lang-en-content and .lang-fr-content). IMPORTANT: hide inactive language via inline style display:none; do not use Tailwind hidden.
    - initScrollSpy(): IntersectionObserver highlights nav links; data-nav values must match section IDs: hero, details, applications, 2024-recap, contact.
    - initVideoPlayer(): controls recap video overlay/loading; hides overlay on play; restores on pause/end; friendly error on failure.
    - initNewsletter() + initNewsletterUX(): progressive enhancement fetch POST to newsletter.php; live email validation; optional reCAPTCHA v3 when window.RECAPTCHA_SITE_KEY is present; honeypot field name website; success status fades out.
  - Tickets page (gala2025/tickets.html): embeds Membee via provider script; simple language toggle; loader and fallback link.
  - Newsletter backend (gala2025/newsletter.php): validates email; optional server-side reCAPTCHA using env RECAPTCHA_SECRET; tries PHPMailer if available else PHP mail(); appends CSV log to gala2025/storage/newsletter.csv (auto-creates dir); returns JSON { ok: true } or { ok: false, error: "..." }.
  - Metadata: JSON-LD Event schema and Open Graph/Twitter tags in index.html.

Critical invariants and pitfalls
- Language visibility: use inline display:none for the inactive language block; never Tailwind hidden.
- Accessibility/persistence: keep <html lang> synced with selection; localStorage key able_lang.
- Scroll‑spy coupling: section IDs and data-nav must remain aligned.
- Newsletter contract: frontend expects JSON; honeypot field name website; ensure gala2025/storage/ is writable for CSV logging.
- reCAPTCHA (optional): client sets window.RECAPTCHA_SITE_KEY; server reads RECAPTCHA_SECRET.

Deployment notes and checks
- No build step; deploy files directly. Keep any local backup folders out of Git.
- Meta/JSON‑LD origins:
  - Development: https://ableorg.local/gala2025
  - Production: https://ableorg.ca/gala2025
  - Ensure og:url, twitter:image, and JSON‑LD image/offers URLs match the target origin.
- Ticketing: deep links use tickets.html#id=112&display=list&cid=1852&wid=801; Membee embed present.
- Verify gala2025/sitemap.xml and gala2025/robots.txt are correct.
- Optional: configure SMTP for PHPMailer; otherwise PHP mail() is used.

Docs pointers
- Docs/README.md — project overview, features, and structure
- Docs/DEVELOPMENT.md — day‑to‑day development notes, status, and checklists

Notes on existing Docs/.warp.md
- Treat this root WARP.md as canonical. Consider replacing Docs/.warp.md with a short pointer to this file to avoid divergence.
