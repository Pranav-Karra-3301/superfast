# superfast

A speed-obsessed rebuild of my personal site, [pranavkarra.me](https://pranavkarra.me). Same content (about, work, publications, projects, blog), rearchitected so the first paint lands almost instantly.

- First load: under 120ms
- Reload: under 10ms

## How it gets there

Static by default, dynamic only when necessary. Every page is prerendered to HTML and served from the edge, JavaScript ships only for the bits that genuinely need interactivity (theme switch, a couple of components), and the profile image was crushed from 830KB down to under 4KB. The full playbook lives in [`guide.md`](./guide.md), and the `/blog/how-is-this-so-fast` route walks through it in prose.

## Stack

Next.js 15 (App Router, React Server Components), Tailwind CSS v4, MDX for the blog, and `next-themes` for light/dark.

## Run it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

Built by [Pranav Karra](https://pranavkarra.me).
