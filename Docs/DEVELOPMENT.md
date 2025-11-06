# Development Notes - ABLE Gala 2025

## Quick Reference

### Local Development
- **URL**: http://localhost/ableorg.ca
- **Server**: MAMP on port 80
- **Path**: `/Users/anthony/Sites/ableorg.ca`

### Key Files
- `index.html` - Main landing page
- `assets/app.js` - App logic (language toggle, video, newsletter, scroll‑spy)
- `assets/app.css` - Optional overrides
- `assets/able_logo.png` - Organization logo
- `Docs/README.md` - Full project documentation

## Current Status

Updated 2025-09-19

### Primary site (root) updates — 2025-11-06
- Navigation: replaced "Gala" with "Events" and added dropdown items:
  - Calendar → /events/index.html
  - Career Fair → https://ableorg.local/events/index.html#id=113&cid=1852&wid=801
  - Gala → /gala2025/index.html
- New page: /events/index.html embedding the Membee calendar.
- Shared JS: introduced /assets/site.js for mobile menu behavior across primary pages; removed references to gala2025/assets/app.js from primary pages.
- Homepage: CTA now "Explore Events" linking to /events/index.html; hero slider shows thank‑you posters (gala2025-thankyou.jpg, gala2025-thankyou-community.jpg, gala2025-thankyou-committee.jpg).
- Newsletter submit handler attaches on DOMContentLoaded and prevents page navigation; form has a non-JS guard (onsubmit="return false`)`
- Scroll‑spy active navigation implemented (hero, details, applications, 2024-recap, contact)
- Deployment is live-only; no separate production folder. Files from this project are uploaded directly to the host (ableorg.ca and ableorg.ca/gala2025/).
- OG/Twitter meta and JSON-LD use live `https://ableorg.ca/gala2025` URLs
- Navigation updated: Home, Event, Tickets, Applications, Newsletter (Home first)
- Hero redesigned (3 logos + rings); centered date block in subtle gold card

### ✅ Completed Features
- Responsive design (mobile-first)
- Bilingual language toggle (EN/FR) - **FUNCTIONAL**
- Professional gold/black branding
- Navigation (Home, Event, Tickets, Applications, Newsletter) — Home appears first
- Hero section with 3-logo row (Toronto Police, ABLE, TPA), responsive rings, centered date block
- Event details section (bilingual) with flyer info (pricing/time/venue)
- Tickets (Membee) integration and dedicated page
- Applications section with Awards/Scholarship CTAs
- Contact/Newsletter section
- Footer with organization info

### 🔧 Client Integration Needed

#### 1. Contact Information
Replace placeholder emails:
- `info@ableorg.ca` → Real ABLE contact
- `tickets@ableorg.ca` → Real ticket contact

#### 2. Ticket Purchase Links
Currently all point to `#purchase`. Replace with:
- Eventbrite event URL
- Custom ticketing system
- Payment processor links

Find and replace: `href="#purchase"` and `href="#tickets"`

#### 3. Email Signup Form
Implemented with progressive enhancement:
- Frontend: fetch POST + live email validation; prevents navigation
- Backend: `newsletter.php` with PHPMailer/mail fallback, CSV backup
- Optional: reCAPTCHA v3 (server env `RECAPTCHA_SECRET`, client `window.RECAPTCHA_SITE_KEY`)

#### 4. Social Media
Update hashtags and add social links if desired

## Technical Notes

### Language Toggle Implementation
```javascript
// Functional EN/FR toggle in header
// Switches content marked with:
// - .lang-en-content (English)
// - .lang-fr-content (French)
// - .lang-both (containers with both)
```

### Tailwind Customization
```javascript
// Custom ABLE colors defined:
colors: {
  'ablegold': '#D4AF37',
  'abledark': '#0B0F19'
}
```

### Responsive Breakpoints
- Mobile: Default
- Tablet: `sm:` (640px+)
- Desktop: `md:` (768px+), `lg:` (1024px+)

## Content Updates

### Easy Text Changes
Most content can be updated by editing `index.html`:
- Event details (date, location, theme)
- Ticket prices and descriptions
- Contact information
- Organization messaging

### Image/Asset Updates
- Replace `assets/able_logo.png` for logo changes
- Add all images/videos to `/assets`
- Update paths in HTML accordingly

## Performance

### Current Optimizations
- Single HTML file (no build process)
- CDN-based CSS and fonts
- Optimized images
- Semantic HTML structure

### Recommended Production Additions
- Google Analytics
- Favicon variations (multiple sizes)
- Open Graph image for social sharing
- Compressed/WebP images

## Browser Testing

### Tested On
- Chrome (desktop/mobile)
- Safari (desktop/mobile) 
- Firefox (desktop)

### Recommended Additional Testing
- Edge browser
- Various mobile devices
- Older browser versions if needed

### Hosting Migration

### Current Setup
- Local MAMP server
- Port 80
- Static files + PHP handler for newsletter

### Deployment Notes
- Live hosting: https://ableorg.ca/ and https://ableorg.ca/gala2025/
- Upload the site files from this project directly to the host (no `/ableorg.ca-production` folder).

### Post-Deploy Checks
1. Verify OG/Twitter images and JSON-LD resolve at the live domain
2. Test newsletter (no navigation to newsletter.php; JSON response handled by JS)
3. If using reCAPTCHA, set `RECAPTCHA_SECRET` on server and add `window.RECAPTCHA_SITE_KEY` in index.html
4. Configure SMTP if using PHPMailer for higher reliability (optional)
5. Ensure `_backup/` remains local-only (ignored by Git)

## Future Enhancements

### Phase 2 Possibilities
- Event schedule/agenda section
- Speaker/honoree profiles
- Photo gallery from previous events
- Sponsorship packages section
- Press kit/media resources
- Multi-year event archives

### Integration Opportunities
- CRM integration for attendee management
- Payment processing analytics
- Email marketing automation
- Social media feeds
- Live streaming capabilities (if needed)

---

**Last Updated**: September 19, 2025
**Next Review**: After client feedback received
