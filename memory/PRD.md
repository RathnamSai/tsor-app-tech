# TSOR Technologies — Corporate Website PRD

## Original Problem Statement
"can you create a website with menu 1. Home 2. Who We Are 3. What We Do 4. Industries 5. Contact" — with a sitemap image covering: Who We Are (About Us, Join Us, Careers), What We Do (Services with 10 sub-services, Products, Training, R&D), Industries (9 sectors), Contact (Form, Contact, Location).

## User Personas
- Enterprise decision-maker evaluating TSOR's capabilities
- Potential job candidate exploring Join Us / Careers
- Partner/prospect submitting a project enquiry

## Architecture
- Frontend: React 19 + react-router-dom 7 (5 routes), Tailwind, framer-motion (masked reveals, scroll reveals, accordion), Lenis smooth scroll, custom canvas particle hero with mouse parallax
- Backend: FastAPI + MongoDB (motor). `POST /api/contact` stores enquiries; `GET /api/contact` lists them
- Design system: /app/design_guidelines.json — Obsidian slate (#0B0F17), amber #F59E0B accents, Syne display / Plus Jakarta Sans body / JetBrains Mono labels, custom SVG logo + favicon

## Core Requirements (static)
1. Home — kinetic masked-reveal hero, marquee, bento pillars, services index, industries strip, CTA
2. Who We Are — about narrative, method, leadership, Join Us/Careers info section
3. What We Do — 10 sub-services directory, Products (Coming Soon), Training (Coming Soon), R&D
4. Industries — 9 industry cards + metrics
5. Contact — enquiry form, contact details, global hubs/location block

## Implemented (2026-10-23)
- All 5 routes with mega-menu navigation (desktop dropdowns + mobile accordion menu)
- 10 services as expandable accordion cards; 9 industries grid with imagery
- Contact form wired to backend (stored in MongoDB, validated with EmailStr)
- Original TSOR logo mark (SVG) + favicon; dark architectural theme
- Lenis momentum scrolling, framer-motion reveals, particle canvas hero, editorial marquee
- Placeholder copy throughout (user to supply real content); leadership names/metrics/address are placeholders

## Backlog
- P0: Real company content (user to provide), real contact details/address
- P1: Email delivery of contact enquiries (Resend integration — Emergent-managed)
- P1: Products & Training pages when offerings launch
- P2: Careers with live job listings + application flow
- P2: Case studies, blog/insights, SEO meta per page

## Next Tasks
1. Collect real copy from user and replace placeholders
2. Wire contact form to email inbox via Resend playbook
3. Deploy when user approves

## Test Credentials
No auth in this app. See /app/memory/test_credentials.md (empty).
