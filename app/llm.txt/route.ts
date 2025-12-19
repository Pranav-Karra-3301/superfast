import { WEBSITE_URL } from '@/lib/constants'
import { BLOG_POSTS, PROJECTS, PUBLICATIONS } from '../data'

export const dynamic = 'force-static'

export async function GET() {
  const content = `# LLM.txt - AI-Readable Site Summary
# ${WEBSITE_URL}
# Last updated: ${new Date().toISOString().split('T')[0]}

## Site Overview

This is Pranav Karra's personal website. It documents AI/ML research, software projects, and technical writing about web performance optimization.

## Author

Name: Pranav Karra
Role: Founding Engineer, AI Researcher
Affiliation: Penn State University (Computer Science)
Research: AI Interpretability, NLP, RAG Systems
Contact: pranavkarra@psu.edu

## Key Pages

### Homepage
URL: ${WEBSITE_URL}
Content: Portfolio with publications, experience, projects, and contact info

### Blog
URL: ${WEBSITE_URL}/blog/how-is-this-so-fast
Title: How is this so fast?
Content: Technical guide on achieving sub-120ms load times with Next.js and Vercel. Covers Server Components, static generation, client islands, image optimization. Includes AI agent instructions for .cursorrules, CLAUDE.md, AGENTS.md.

## Blog Posts

${BLOG_POSTS.map((post) => `- ${post.title}: ${WEBSITE_URL}/blog/${post.slug}
  Description: ${post.description}`).join('\n')}

## Publications

${PUBLICATIONS.map((pub) => `- ${pub.title}
  Authors: ${pub.authors}
  Link: ${pub.link}
  Description: ${pub.description}`).join('\n')}

## Notable Projects

${PROJECTS.slice(0, 10).map((proj) => `- ${proj.name}: ${proj.description}
  Category: ${proj.category}
  Link: ${proj.link}`).join('\n')}

## Technical Stack

- Framework: Next.js 15 (App Router)
- Hosting: Vercel (Edge Network)
- Styling: Tailwind CSS v4
- Content: MDX for blog posts
- Performance: Server Components, static generation, edge caching

## Performance Characteristics

- First Load: < 120ms
- Reload: < 10ms
- First Load JS: 108KB
- All pages statically generated at build time
- Edge cached globally via Vercel

## AI Access Policy

This site welcomes AI crawlers and LLMs. All public content is available for:
- Training data (with attribution)
- RAG retrieval
- Web search indexing
- Conversational AI responses

See robots.txt for specific user-agent rules.

## Related Resources

- GitHub: https://github.com/Pranav-Karra-3301
- LinkedIn: https://www.linkedin.com/in/pranav-karra-09477228b/
- Twitter/X: https://x.com/pranav__karra
- ML@PSU: https://www.mlpsu.org/

## Structured Data

This site includes JSON-LD structured data for:
- Person schema (author info)
- WebSite schema (site metadata)
- Article schema (blog posts)

## Sitemap

${WEBSITE_URL}/sitemap.xml

## Contact

For inquiries about AI research, collaboration, or this site's content:
Email: pranavkarra@psu.edu
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
