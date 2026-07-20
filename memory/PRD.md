# clouDroplets.IO — Corporate Website Redesign (PRD)

## Problem Statement
Redesign clouDroplets.IO Pvt. Ltd. (Cloud & Cyber Security consultancy, India) into an Awwwards-level, single-page immersive marketing site. Light editorial theme building trust. Frontend-only redesign — NO backend changes. Content, logos, and brand colors taken from uploaded public_html.zip.

## Art Direction
- Editorial-Tech hybrid, LIGHT theme. Cream #FDF8F5 background, ink #121212 text.
- Brand accents: Teal #2FADA0 + Copper #B5623C (from logo).
- Typography: Cormorant Garamond (display/serif), Manrope (body), JetBrains Mono (labels/data).
- Motion: framer-motion scroll reveals + micro-interactions; Lenis momentum scrolling; masked line-by-line hero reveal; parallax hero disk.

## Implemented (2025)
- Kinetic hero (masked reveal + parallax disk + clipped-frame product photo)
- Slow editorial marquee
- Numbered manifesto chapters (Vision/Mission/Principle) with editorial imagery
- Services deep-dive accordion (Cloud Computing, Cyber Security, InfoSec Governance) with sticky image swap
- Solution tracks (6) — dense technical bordered grid with hover-invert
- Stats counters (250+/120+/16/40+) with count-up on view
- Technology partners logo marquee (grayscale->color) using real brand logos
- Offices (Noida + Bangalore) editorial cards with coordinates
- Contact form (frontend only — sonner toast, email validation, NO backend persistence)
- Footer + sticky glass header + mobile menu

## Architecture
- Frontend: React (CRA/craco) single page. Sections in /app/frontend/src/components/site/*.jsx
- Lenis hook: /app/frontend/src/hooks/useLenis.js
- Assets copied to /app/frontend/public/assets/ (logos + product photos from zip)
- Backend: UNCHANGED (default template).

## Notes / Mocked
- Contact form is FRONTEND-ONLY: shows success toast, does NOT save to DB or send email (per user request "don't change the backend").

## Backlog / Next
- P1: Wire contact form to backend (store submissions + email via Resend) if desired.
- P1: Add case studies / testimonials section.
- P2: SEO meta tags, OG image, sitemap.
