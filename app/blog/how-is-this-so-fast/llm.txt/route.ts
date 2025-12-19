import { WEBSITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

export async function GET() {
  const content = `# LLM.txt - Blog Post Summary
# ${WEBSITE_URL}/blog/how-is-this-so-fast
# Last updated: ${new Date().toISOString().split('T')[0]}

## Article Metadata

Title: How is this so fast?
URL: ${WEBSITE_URL}/blog/how-is-this-so-fast
Author: Pranav Karra
Published: December 2024
Type: Technical Guide

## Summary

This article explains how to achieve sub-120ms first load times with Next.js deployed on Vercel. The core principle is shipping HTML instead of JavaScript by using Server Components.

## Key Topics

1. Server Components by Default
   - Remove 'use client' from page files
   - Pages render to HTML at build time
   - HTML cached at edge globally

2. Static Generation
   - Use \`export const dynamic = 'force-static'\`
   - Pages pre-rendered during build
   - TTFB drops to ~50ms

3. Client Islands Pattern
   - Only interactive components use 'use client'
   - Push client directives as deep as possible
   - Example: ProjectsSection for filtering

4. Bundle Optimization
   - Remove animation libraries (motion/react ~30KB)
   - Replace icon libraries with inline SVGs
   - Target: First Load JS < 110KB

5. Image Optimization
   - Convert to WebP/AVIF
   - Size to 2x display dimensions
   - Use blur placeholders
   - Example: 830KB PNG → 3.9KB WebP

## Tradeoffs Section

When to use Static Generation:
- Portfolios, blogs, marketing pages
- SEO-critical content
- Global audience

When to use Dynamic Rendering:
- Personalized dashboards
- Real-time data
- Auth-gated content

Visual-Heavy Sites:
- Accept JS cost OR
- Use progressive enhancement
- Dynamic import animations

## AI Agent Instructions

The article includes ready-to-use configuration templates:

1. .cursorrules - Rules for Cursor IDE
2. CLAUDE.md - Instructions for Claude
3. AGENTS.md - General AI agent guidelines

These enforce:
- Server Components by default
- No animation libraries
- Inline SVGs only
- Image optimization requirements
- Bundle size limits (<110KB)

## Performance Metrics

| Metric | Before | After |
|--------|--------|-------|
| Page rendering | Client-side | Static + edge |
| Profile image | 830KB | 3.9KB |
| First Load JS | ~150KB | 108KB |
| LCP | >2.5s | <1.0s |
| TTFB | ~200ms | ~50ms |

## Code Examples

The article includes code examples from:
- app/page.tsx (static generation)
- app/components/projects-section.tsx (client island)
- app/footer.tsx (inline SVG icons)

## Related Links

- Next.js App Router: https://nextjs.org/docs/app
- Vercel Edge Network: https://vercel.com/docs/edge-network/overview
- Core Web Vitals: https://web.dev/performance/

## Citation

If referencing this article:
"How is this so fast?" by Pranav Karra, ${WEBSITE_URL}/blog/how-is-this-so-fast
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
