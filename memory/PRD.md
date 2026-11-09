# Shivam Speciality Dental Care — PRD

## Original Problem Statement
Pixel-perfect frontend clone of `https://www.kalradentalclinic.com/` rebranded for "Shivam Speciality Dental Care" (Vapi). Dark-sidebar layout, frontend-first using mock data for doctors, services, testimonials, and contact details.

## Architecture
- **Frontend**: React + TailwindCSS + React Router DOM
- **Backend**: FastAPI/MongoDB present but unused (data fully mocked)
- **Data Source**: `/app/frontend/src/mock.js` is the single source of truth
- **Integrations**:
  - Behold.so for live Instagram feed (script in `index.html`)
  - WhatsApp deep links for all booking/contact CTAs (no API)

## Code Structure
```
/app/frontend/src/
├── App.js, App.css, index.css
├── mock.js                       # central data store
├── components/
│   ├── Sidebar.jsx               # flat list (no dropdowns per user)
│   ├── Layout.jsx
│   ├── Footer.jsx
│   └── WhatsAppFab.jsx
└── pages/
    ├── Home.jsx                  # IG feed, sterilization video, brands
    ├── About.jsx
    ├── Contact.jsx               # WhatsApp deep-link form
    ├── Team.jsx                  # in-house vs visiting doctors
    ├── Blogs.jsx                 # placeholder articles
    └── ServiceDetail.jsx         # dynamic service template
```

## Implemented (CHANGELOG)
- 2026-02-XX — Base React frontend with responsive dark-sidebar layout
- Real clinic info, in-house + visiting doctors populated
- WhatsApp deep-linking on all CTAs (book, enquire, contact)
- 15+ treatment & doctor photos replaced with user-uploaded assets
- Live Instagram widget via Behold.so on Home page
- "Our Sterilization Protocol" section with HTML5 video
- "Brands We Trust" logo grid + Illusion Dental Lab partner
- 4 real Google Reviews + aggregate rating
- Visiting consultant photos sized smaller than in-house doctors
- Removed "Class B Autoclave" and "Spore Testing" copy → replaced with "Hospital Grade Autoclaving"
- Replaced 5 treatment images (Braces, RCT, Fillings, Gum Surgeries, Cleaning)
- 2026-02-10 — Merged "Surgical Extractions" + "Teeth Removal" into single "Tooth Extractions" tab
- **2026-02-10 — Added FAQ accordion to all 19 service detail pages** via `serviceFaqs` map in mock.js + shadcn Accordion in `ServiceDetail.jsx`
- **2026-02-10 — New blog post + clickable blog detail pages**: added `/blog/:id` route, `BlogDetail.jsx` page, made `Blogs.jsx` cards link out, added "Dentistry in West Bengal" article (first card) plus full body content for 3 existing posts
- **2026-02-10 — Replaced Tooth Extraction & Wisdom Tooth Surgery hero images** (IMG_0967.jpeg / IMG_0968.jpeg)

## Roadmap
### P1 — Upcoming
- Replace placeholder wordmarks for remaining brands (3M, Ivoclar, Shofu, Meta Biomed) when transparent PNG logos provided

### P2 — Future / Backlog
- Migrate `mock.js` content to MongoDB + admin panel for dynamic content management
- Cleanup pass: confirm no unused page files (`CategoryPage.jsx`, `Treatments.jsx`) remain

## Critical Rules for Future Agents
1. **Data source**: change content in `/app/frontend/src/mock.js` only.
2. **Sidebar UI**: keep flat list — user explicitly rejected dropdowns/expandable menus.
3. **Forms**: Contact form opens pre-filled WhatsApp message; do NOT add backend handler unless asked.
4. **Brand cards**: keep white background (Meta Biomed logo has baked-in black bg → uniform white avoids visual mismatch).
