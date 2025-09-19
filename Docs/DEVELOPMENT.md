# Development Notes - ABLE Gala 2025

## Quick Reference

### Local Development
- **URL**: http://localhost/ableorg.ca
- **Server**: MAMP on port 80
- **Path**: `/Users/anthony/Sites/ableorg.ca`

### Key Files
- `index.html` - Main landing page
- `able_logo.png` - Organization logo
- `README.md` - Full project documentation

## Current Status

Updated 2025-09-13
- Newsletter submit handler attaches on DOMContentLoaded and prevents page navigation; form has a non-JS guard (onsubmit="return false")
- Scroll‑spy active navigation implemented
- Production bundle synced to `/Users/anthony/Sites/ableorg.ca-production`
- OG/Twitter meta and JSON-LD use live `https://ableorg.ca/gala2025` URLs

### ✅ Completed Features
- Responsive design (mobile-first)
- ABLE logo integration in header and hero
- Bilingual language toggle (EN/FR) - **FUNCTIONAL**
- Ticket sales section with 3 tiers
- Professional gold/black branding
- Hero section with logo, date, and CTAs
- Event details section (bilingual)
- Contact section with placeholders
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

### Image Updates
- Replace `able_logo.png` for logo changes
- Add images to `/assets` or `/images` folders
- Update image paths in HTML

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

### Production Bundle
- `/Users/anthony/Sites/ableorg.ca-production` (ready to upload folder)

### Migration Steps
1. Upload contents of `ableorg.ca-production/` to your host’s `gala2025` path
2. Verify OG/Twitter images and JSON-LD resolve at the live domain
3. Test newsletter (no navigation to newsletter.php; JSON response handled by JS)
4. If using reCAPTCHA, set `RECAPTCHA_SECRET` on server and add `window.RECAPTCHA_SITE_KEY` in index.html
5. Configure SMTP if using PHPMailer for higher reliability (optional)

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

**Last Updated**: September 7, 2025
**Next Review**: After client feedback received
