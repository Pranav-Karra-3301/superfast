# Superfast: Performance Optimization Guide

This document captures everything that worked to make this Next.js personal site extremely fast.

## Target Metrics Achieved

| Metric | Target | Achieved |
|--------|--------|----------|
| First Load JS | < 100KB | **108KB** (home page) |
| Profile Image | < 10KB | **3.9KB** (from 830KB) |
| Static Generation | Yes | **All pages prerendered** |
| JS per route | Minimal | **3.14KB route-specific** |

## The Core Principle

> **Static by default, dynamic only when necessary.**

The first response should be static HTML served from edge CDN. JavaScript is shipped only for interactivity that cannot be achieved with CSS.

---

## What Worked: The Optimization Playbook

### 1. Server Components by Default

**Before:**
```tsx
'use client'
// Entire page was client-rendered
export default function Page() { ... }
```

**After:**
```tsx
// No 'use client' directive = Server Component
export const dynamic = 'force-static'  // Cached at edge

export default function Page() {
  return (
    <main>
      {/* Static sections render to HTML at build time */}
      <AboutSection />
      <PublicationsSection />

      {/* Only interactive parts are client islands */}
      <ProjectsSection />  {/* 'use client' in its own file */}
    </main>
  )
}
```

**Why it works:**
- Server Components render to HTML at build time
- HTML is cached globally on CDN edge nodes
- TTFB becomes ~50ms instead of waiting for JS execution
- Content is visible immediately, no hydration delay

### 2. Client Islands Pattern

Push `'use client'` as deep as possible. Only the smallest interactive unit should be a client component.

**File structure:**
```
app/
  page.tsx                        # Server Component (static)
  components/
    projects-section.tsx          # Client Component (has filter state)
  footer.tsx                      # Client Component (theme switcher only)
```

**The ProjectsSection island:**
```tsx
'use client'
import { useState, useMemo } from 'react'

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // This is the ONLY state in the entire home page
  // Everything else is static HTML
}
```

### 3. Image Optimization

**The biggest single win: 99.5% image size reduction**

**Before:** 830KB PNG (800x800)
**After:** 3.9KB WebP (112x112)

**How:**
```js
// scripts/optimize-image.js
const sharp = require('sharp')

// 1. Resize to actual display size (56x56 * 2 for retina = 112x112)
// 2. Convert to WebP with quality 85
// 3. Generate blur placeholder for CLS prevention

await sharp(inputPath)
  .resize(112, 112)
  .webp({ quality: 85 })
  .toFile(outputPath)
```

**In the component:**
```tsx
<Image
  src="/pranav-optimized.webp"
  alt="Pranav Karra"
  width={56}
  height={56}
  priority              // Preload for LCP
  placeholder="blur"    // Prevent CLS
  blurDataURL={blurDataURL}
/>
```

### 4. Eliminate Heavy Dependencies

**Removed:**
- `motion/react` (~30KB) - Replaced with CSS or removed entirely
- `lucide-react` (~8KB tree-shaken) - Replaced with inline SVGs
- `react-github-calendar` (~20KB) - Removed the feature

**Why animation libraries hurt performance:**
- They ship JS that must be parsed and executed before content appears
- Spring physics calculations run on every frame
- Often bundled globally when used in layout/page components

**The alternative:**
```tsx
// Instead of importing from lucide-react
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" ...>
    <circle cx="12" cy="12" r="4" />
    ...
  </svg>
)
```

### 5. next.config.mjs Optimization

```js
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],  // Modern formats
    deviceSizes: [56, 112, 400, 640, 750, 828, 1080],
    minimumCacheTTL: 31536000,  // 1 year cache
  },
}
```

---

## What We Deleted

### Removed Components (8 files)
- `animated-background.tsx` - Motion-based hover effects
- `magnetic.tsx` - Spring physics for hover
- `morphing-dialog.tsx` - Complex dialog animations
- `scroll-progress.tsx` - Scroll tracking indicator
- `spotlight.tsx` - Mouse-tracking gradient effects
- `text-effect.tsx` - Character-by-character fade
- `text-loop.tsx` - Rotating text animation
- `text-morph.tsx` - Morphing text transitions

### Removed Dependencies (3 packages)
- `motion` - Animation library
- `lucide-react` - Icon library
- `react-github-calendar` - GitHub contribution widget

### Removed Features
- GitHub contribution calendar
- Staggered entrance animations
- Magnetic hover effects on social links
- Spotlight gradient on project cards
- Animated text effects in header

---

## Architecture Decisions

### Why Remove Animations Entirely?

For a personal portfolio site, the trade-off is:
- **Animations**: Visual polish, memorable experience
- **No animations**: < 1s load time, works without JS, accessible

We chose maximum performance. The site loads instantly and feels snappy because navigation is fast, not because of motion effects.

### Why Keep the Project Filter?

The project filter is the one truly interactive element. Removing it would require:
- Showing all 30+ projects at once (overwhelming)
- URL-based filtering (slower navigation)

A small client island (3.14KB) is worth it for this UX.

### Why Inline SVG Icons?

```tsx
// BAD: Imports entire icon library
import { Sun, Moon, Monitor } from 'lucide-react'

// GOOD: Only the bytes you need
const SunIcon = () => <svg>...</svg>
```

Lucide-react tree-shakes okay, but inline SVGs:
- Zero dependency
- Zero parse time
- Smaller total bytes

---

## Performance Checklist

Use this for any Next.js site optimization:

### Static Generation
- [ ] Remove `'use client'` from page.tsx
- [ ] Add `export const dynamic = 'force-static'`
- [ ] Move interactive parts to separate client components
- [ ] Verify all pages show `○ (Static)` in build output

### JavaScript Murder
- [ ] Run bundle analyzer: `npx @next/bundle-analyzer`
- [ ] For each dependency > 10KB, ask: "Is this essential?"
- [ ] Replace icon libraries with inline SVGs
- [ ] Remove animation libraries or use CSS-only
- [ ] Dynamic import heavy components below the fold

### Images
- [ ] Compress all images to < 50KB
- [ ] Use WebP or AVIF format
- [ ] Add `priority` to LCP image
- [ ] Add blur placeholder to prevent CLS
- [ ] Set explicit width/height

### Network
- [ ] Preload critical resources
- [ ] Set long cache TTL for static assets
- [ ] Minimize external API calls on initial load

---

## Measuring Results

### Build Output
```
Route (app)                      Size     First Load JS
┌ ○ /                           3.14 kB         108 kB
├ ○ /blog/...                    139 B          105 kB
```

- `○` = Static (prerendered at build time)
- `Size` = Route-specific JS
- `First Load JS` = Total JS including framework

### Lighthouse
Run in incognito mode, mobile simulation:
```bash
npx lighthouse https://your-site.com --view
```

### Real User Metrics
Deploy to Vercel and check Speed Insights for:
- TTFB
- LCP
- FCP
- CLS

---

## Key Takeaways

1. **Server Components are the biggest win.** Moving from `'use client'` to server rendering means HTML arrives ready to display.

2. **Image optimization is often the easiest big win.** An 830KB image becoming 4KB is transformative for LCP.

3. **Animation libraries are expensive.** If you're not building a design portfolio that needs motion, consider CSS-only or no animations.

4. **Bundle size matters more than you think.** Every KB of JS delays interactivity. Be ruthless.

5. **Static > Dynamic for content sites.** If your data doesn't change per-request, cache it at the edge.

---

## Before/After Summary

| Aspect | Before | After |
|--------|--------|-------|
| Page rendering | Client-side | Static + edge cached |
| Profile image | 830KB PNG | 3.9KB WebP |
| Animation library | motion/react (30KB) | None |
| Icon library | lucide-react (8KB) | Inline SVGs (< 1KB) |
| Dependencies | 15 | 12 |
| First Load JS | ~150KB+ | 108KB |
| LCP (estimated) | > 2.5s | < 1.0s |

The site now loads instantly on any connection. Content is visible immediately because it's static HTML, not waiting for JavaScript to execute.
