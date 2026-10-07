# Utkarsh Chauhan - Portfolio

A motion-driven developer portfolio built with **Next.js, Tailwind CSS, Framer Motion, and Lenis**. Showcases full-stack projects, professional experience, technical skills, and e-commerce work across AI, Web3, and digital commerce.

## Getting Started

```bash
npm install
npm run dev
# http://localhost:3000

npm run build
```

## Project Structure

- `src/data/site.ts` - Personal information, contact details, resume, and availability.
- `src/data/projects.ts` - Featured projects, descriptions, technology highlights, links, and screenshot references.
- `src/data/ecommerce.ts` - E-commerce including Skate Supply India, The Hearty Way, and Bubbleskatzz.
- `src/data/journey.ts` - Career timeline, development principles, technical skills, and education.

## Motion System

Located in `src/components/motion/`:

- `SmoothScroll` - Smooth, inertia-based scrolling powered by Lenis.
- `Preloader` - Animated yellow loading curtain with a session-based intro.
- `ScrollBoard` - Interactive skateboard animation that responds to scroll progress and velocity, with a kickflip interaction.
- `SplitText` - Masked, word-by-word headline reveals.
- `ScrollWords` - Scroll-triggered text highlighting in the About section.
- `Marquee` - Animated text bands that respond to scroll velocity.
- `Tilt`, `Magnetic`, and `RollText` - Interactive hover effects for cards, links, and buttons.

Animations respect `prefers-reduced-motion` to accommodate visitors who prefer reduced motion.

## Portfolio Content

The portfolio highlights:

- **Full-stack development:** Interfaces, backend services, APIs, databases, and application architecture.
- **AI and Web3:** AI-powered applications, blockchain integrations, and NFT marketplace development.
- **E-commerce:** Shopify storefront development, Liquid customization, payment integrations, SEO, and conversion-focused optimization.
- **Product delivery:** Deployment, CI/CD, performance improvements, and ongoing product iteration.
- **Professional journey:** Work experience, education, technical skills, and development principles.

## Before Deployment

- Replace placeholder `#PROJECT_...` links in `projects.ts` and `ecommerce.ts` with verified live project URLs.
- Add the sutR project screenshot at `public/images/projects/sutr-placeholder.webp` and update its `hasImage` setting if the image is available. The project is currently marked `featured: false`.
- Replace `metadataBase` in `src/app/layout.tsx` with the production domain.
- Verify all project screenshots, external links, resume links, and contact details.
- Run `npm run build` and resolve any build errors before deploying.

## Tech Stack

**Framework:** Next.js  
**Language:** TypeScript  
**Styling:** Tailwind CSS  
**Animation:** Framer Motion  
**Smooth Scrolling:** Lenis

Built to showcase the complete product development journey - from the first interface to a deployed, working product.
