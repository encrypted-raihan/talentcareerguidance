# Talent career guidance — Website

Deployment-ready static website (HTML/CSS/JS, no build step required).

## Before going live, please update:
- **Domain**: All canonical URLs, Open Graph tags, and sitemap.xml currently use
  the placeholder domain `https://www.talentcareerguidance.in`. Replace with your
  real domain across all files (a simple find-and-replace works, since the string
  is consistent everywhere).
- **Email**: Placeholder contact email is `info@talentcareerguidance.in` — update
  to your real inbox in `common.py`-derived pages (search for it across the .html files).
- **Google Maps embed**: `locations.html` and `contact.html` use a generic Google
  Maps query embed for Kottarakkara, Kerala. For a pinpoint marker, replace the
  iframe `src` with an embed URL generated from Google Maps for your exact office
  location (Maps → Share → Embed a map).
- **Favicons**: Generated automatically from `assets/icon-mark.png`. Replace the
  source file and regenerate if your logo changes.

## Structure
- `index.html` — Homepage
- `about.html`, `bsc-nursing.html`, `nursing-admission-kerala.html`,
  `medical-courses.html`, `allied-health-courses.html`, `admission-process.html`,
  `locations.html`, `abroad-admissions.html`, `contact.html` — main SEO pages
- `privacy-policy.html`, `terms.html`, `404.html` — legal & error pages
- `styles.css`, `script.js` — shared styling and behaviour
- `assets/` — logo, favicons, and an `images/` folder ready for future photos
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest` — technical SEO & PWA basics

## Notes
- The WhatsApp enquiry form sends form data as a pre-filled WhatsApp message —
  no backend/server required.
- All JSON-LD schema (Organization, LocalBusiness, EducationalOrganization,
  FAQPage, BreadcrumbList) has been validated as syntactically correct.
