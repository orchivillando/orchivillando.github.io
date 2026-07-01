# Website Architecture

## Stack

Pure static site:

- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- SVG brand and press assets

No build step, framework, jQuery, or runtime dependency.

## Sections

Hero, About, Games, Technology, Development Process, Stats, Our Vision, Timeline, Blog placeholder, Press Kit, Careers placeholder, Contact, and Footer.

## Interactions

- Scroll reveal via `IntersectionObserver`
- Animated counters via `requestAnimationFrame`
- Pointer glow and hero parallax on fine pointers
- Motion reduced with `prefers-reduced-motion`

## SEO

Metadata lives in `index.html`. Crawling files:

- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
