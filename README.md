# ABLE Gala 2025 Landing Page

## Project Overview

Updated 2025-09-13
- Newsletter submits via fetch without navigation; onsubmit guard prevents accidental redirects if JS fails
- Scroll‑spy active nav highlighting implemented (hero, details, applications, contact)
- Production bundle path: /Users/anthony/Sites/ableorg.ca-production (ready-to-upload)
- Live OG/Twitter URLs point to https://ableorg.ca/gala2025
- Tickets links use the official Membee deep link

This is a professional landing page for The Association of Black Law Enforcers (A.B.L.E.) 2025 Annual Gala, featuring a bilingual (English/French) design with integrated ticket sales functionality.

**Event Details:**
- **Event**: 2025 ABLE Gala  
- **Theme**: "Strength Through Struggle: A Journey of Perseverance and Endurance"
- **Date**: Saturday, November 1, 2025
- **Location**: Automotive Building – Exhibition Place, Toronto
- **Hashtags**: #ABLEGala2025 #Unity #Strength #Excellence

## 🌟 Features

### Core Functionality
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Bilingual Support** - Functional EN/FR language toggle
- ✅ **Ticket Sales Integration** - Ready for Eventbrite or custom ticketing
- ✅ **Professional Branding** - ABLE logo integration and gold/black theme
- ✅ **Accessibility** - WCAG compliant with proper focus states and alt text

### Page Sections
1. **Header** - Logo, navigation, language toggle (desktop) + mobile hamburger menu
2. **Hero** - Event branding with logo, date, and primary CTAs
3. **Event Details** - Bilingual event information
4. **Applications** - Awards and Scholarship application CTAs and links
5. **Contact** - Placeholder forms and contact information
6. **Footer** - Organization info and legal details

### Tickets
- All public CTAs point to Membee deep link: tickets.html#id=112&display=list&cid=1852&wid=801
- Pricing/tiers are managed within Membee; remove this section if not needed in the static site

## 🛠 Technical Stack

- **Framework**: Vanilla HTML/CSS/JavaScript (no build process)
- **Styling**: Tailwind CSS (via CDN)
- **Fonts**: Google Fonts (Inter + Playfair Display)
- **Hosting**: MAMP local server (port 80)
- **Assets**: PNG logo, responsive images

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
├── able_logo.png             # ABLE organization logo
├── 2025_gala.png            # Reference image (gala poster)
├── ableorg.ca_index.php.png # Reference image (original site)
├── able_header.png          # Reference image (header design)
├── assets/                  # Asset folder (ready for expansion)
├── images/                  # Images folder (ready for expansion)
└── README.md               # This documentation
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
- Local logo image (able_logo.png)

## ✅ Ready for Production

### Production Bundle
- Path: `/Users/anthony/Sites/ableorg.ca-production`
- Contents: index.html, tickets.html, awards.html, scholarship.html, newsletter.php, robots.txt, sitemap.xml, assets/, media

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
