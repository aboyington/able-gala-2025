# ABLE Gala 2025 Landing Page

## Project Overview

Updated 2025-09-19
- Newsletter submits via fetch without navigation; onsubmit guard prevents accidental redirects if JS fails
- Scroll‑spy active nav highlighting implemented (hero, details, applications, 2024-recap, contact)
- Deployment: Live at https://ableorg.ca/ (flyer slider + link) and https://ableorg.ca/gala2025/ (promo site). No separate production folder; deploy directly from this project’s files.
- Live OG/Twitter URLs point to https://ableorg.ca/gala2025
- Tickets links use the official Membee deep link
- Navigation simplified: Event, Tickets, Applications, Newsletter, EN | FR
- Hero redesigned: three-logo row (Toronto Police, ABLE, TPA) with subtle rings; centered date block

This is a professional landing page for The Association of Black Law Enforcers (A.B.L.E.) 2025 Annual Gala, featuring a bilingual (English/French) design with integrated ticket sales functionality.

**Event Details:**
- **Event**: A.B.L.E 33rd Annual Scholarship and Awards Gala  
- **Theme**: "Strength Through Struggle: A Journey of Perseverance and Endurance"
- **Date**: Saturday, November 1, 2025 (6:00pm – 1:00am)
- **Location**: Automotive Building – Exhibition Place, 105 Princes' Blvd, Toronto
- **Tickets**: $150; **Table of Ten**: $1,500; **Cocktails**: 6:00pm
- **Hashtags**: #ABLEGala2025 #Unity #Strength #Excellence

## 🌟 Features

### Core Functionality
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Bilingual Support** - Functional EN/FR language toggle
- ✅ **Ticket Sales Integration** - Ready for Eventbrite or custom ticketing
- ✅ **Professional Branding** - ABLE logo integration and gold/black theme
- ✅ **Accessibility** - WCAG compliant with proper focus states and alt text

### Page Sections
1. **Header** - Logo, simplified nav (Event, Tickets, Applications, Newsletter), language toggle (desktop) + mobile hamburger menu
2. **Hero** - Event branding with three logos row (Toronto Police, ABLE, TPA), centered “Nov 1, 2025 / Save the Date” in a subtle gold card, primary CTAs
3. **Event Details** - Bilingual event information incl. pricing/time/venue
4. **Applications** - Awards and Scholarship application CTAs and links
5. **2024 Recap** - Video player with bilingual copy and stats
6. **Newsletter** - Email signup and contact links
7. **Footer** - Organization info and legal details

### Tickets
- All public CTAs point to Membee deep link: tickets.html#id=112&display=list&cid=1852&wid=801
- Pricing/tiers are managed within Membee; remove this section if not needed in the static site

## 🛠 Technical Stack

- **Framework**: Vanilla HTML/CSS/JavaScript (no build process)
- **Styling**: Tailwind CSS (via CDN)
- **Fonts**: Google Fonts (Inter + Playfair Display)
- **Hosting**: MAMP local server (port 80)
- **Assets**: /assets for images, video, JS (app.js) and CSS (app.css)

### Custom Tailwind Configuration
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'ablegold': '#D4AF37',
        'abledark': '#0B0F19'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Playfair Display', 'ui-serif', 'Georgia']
      }
    }
  }
}
```

## 📁 Project Structure

```
/Users/anthony/Sites/ableorg.ca/
├── index.html                 # Main landing page
├── awards.html               # Awards application page
├── scholarship.html          # Scholarship application page
├── tickets.html              # Tickets page (Membee embed)
├── newsletter.php            # Newsletter backend
├── assets/                   # All media and app code
│   ├── able_logo.png
│   ├── hero_bg.jpeg
│   ├── Toronto-Police.png
│   ├── Toronto-Police-Association.png
│   ├── re-cap_32nd_awards_gala.mp4
│   ├── event_flyer_en.jpeg
│   ├── event_flyer_fr.jpeg
│   ├── app.js                # Application JS (language toggle, video, newsletter, scroll‑spy)
│   └── app.css               # Optional overrides
├── Docs/                     # Project docs
└── _backup/                  # Local snapshots (ignored by Git)
```

## 🎨 Design System

### Colors
- **Primary Gold**: `#D4AF37` (ablegold)
- **Dark Background**: `#0B0F19` (abledark)
- **Neutral Grays**: Tailwind gray palette
- **Accent Colors**: Amber variations for hover states

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body Text**: Inter (sans-serif, readable)
- **UI Elements**: Inter with appropriate weights

### Spacing & Layout
- **Container**: max-w-7xl with responsive padding
- **Sections**: Consistent py-16 sm:py-20 spacing
- **Grid**: CSS Grid and Flexbox for layouts

## 🌐 Header & Navigation

### Mobile Menu Behavior
- On small screens, the horizontal nav is replaced with a hamburger button.
- Tapping the button reveals a slide-down panel with nav links and EN/FR language toggle.
- The panel animates (opacity/translate) and auto-closes when a link is tapped or on Escape.
- On desktop (sm and up), the full horizontal nav and EN/FR toggle are visible in the header.

## 🌐 Language Toggle

The site includes a functional bilingual toggle:

```javascript
// Language switching functionality
function setLanguage(lang) {
  // Updates button states and content visibility
  // Supports 'en' and 'fr' language codes
}
```

### Implementation Notes
- Default language: English
- French content marked with `lang-fr-content` class
- English content marked with `lang-en-content` class
- Both languages shown by default, hidden based on selection

### Ticket Integration

- Membee deep link integrated throughout: `tickets.html#id=112&display=list&cid=1852&wid=801`
- To change the destination, update the hrefs in index.html and any secondary pages.

## 🚀 Local Development

### Prerequisites
- MAMP or similar local server
- Modern web browser

### Setup
1. Ensure MAMP is configured to serve from `/Users/anthony/Sites`
2. Start MAMP on port 80
3. Visit `http://localhost/ableorg.ca`

### File Serving
The project uses:
- Tailwind CSS from CDN (no build process)
- Google Fonts from CDN
- Local assets from /assets (logo, flyers, video, JS/CSS)

## ✅ Deployment

- Live URLs:
  - Main site: https://ableorg.ca/ (home page shows bilingual flyer slider linking to gala site)
  - Gala site: https://ableorg.ca/gala2025/
- Deployment model: Upload files from this repository’s root (no separate production folder). Keep `_backup/` local-only and excluded from Git.

### Pre-Launch Checklist
- [ ] Verify Open Graph/Twitter image URLs point to `https://ableorg.ca/gala2025/assets/og-image.svg`
- [ ] Add analytics (optional)
- [ ] Test cross-browser compatibility
- [ ] Optimize images for web

### Optional Enhancements
- [ ] Email newsletter signup integration
- [ ] SEO meta tags optimization
- [ ] Open Graph image creation
- [ ] Sponsorship section
- [ ] Event program/schedule section
- [ ] Speaker/honoree profiles

## 📞 Contact Integration

### Newsletter Signup
- Location: Contact/Newsletter section on index
- Frontend: JavaScript fetch POST prevents navigation; form has `onsubmit="return false"` as a guard
- Backend: `newsletter.php` (PHPMailer if available, else PHP `mail()`)
- CSV backup: `storage/newsletter.csv` (auto-created)
- Optional reCAPTCHA v3 support (server env `RECAPTCHA_SECRET`, client `window.RECAPTCHA_SITE_KEY`)

### Contacts
- General: `info@ableorg.ca`
- Tickets: `tickets@ableorg.ca`

## 🎯 Performance & SEO

### Optimizations Applied
- Mobile-first responsive design
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Meta descriptions and titles
- Clean URL structure

### Load Performance
- CDN-based assets (Tailwind, Google Fonts)
- Optimized images
- Minimal JavaScript
- Single HTML file architecture

## 📝 Content Management

### Bilingual Content Areas
- Hero section (Save the Date, theme, details)
- Event information section
- Contact section headers
- Ticket section headers

### Easy Updates
Most content can be updated by editing the HTML directly:
- Event date and location
- Ticket pricing and details
- Contact information
- Organization details

## 🔧 Maintenance

### Regular Updates
- Review and update event details
- Monitor ticket sales integration
- Update contact information as needed
- Refresh social media links and hashtags

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
- Progressive enhancement approach

---

**Project Created**: September 7, 2025
**Status**: Ready for client review and production deployment
**Next Steps**: Client feedback, real content integration, production hosting setup
