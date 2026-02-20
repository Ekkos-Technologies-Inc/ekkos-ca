# ekkos.ca — Corporate Website

This repository contains the **official corporate website** for ekkOS Technologies Inc.

> **Note:** Forks or mirrors of this repository may be outdated. For the live site, visit [ekkos.ca](https://ekkos.ca).

---

## What This Site Does

The ekkOS corporate site at [ekkos.ca](https://ekkos.ca) provides:

- Company information and mission
- Product overview for ekkOS
- Use cases and customer stories
- Careers and contact information
- Legal policies (Privacy, Terms)

The product platform lives at [ekkos.dev](https://ekkos.dev) (separate project).

---

## What This Repository Does NOT Document

This repository intentionally does not describe:
- Internal system architecture
- Backend processing logic
- Infrastructure topology

---

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Inter** font

---

## Project Structure

```
apps/ekkosca/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── technology/         # Technology overview
│   ├── customers/          # Use cases
│   ├── careers/            # Careers page
│   ├── contact/            # Contact form
│   └── legal/              # Privacy & Terms
├── components/             # Reusable components
└── lib/                    # Utilities
```

---

## Development

```bash
npm install
npm run dev
```

Dev server runs on port **3010**.

---

## Deployment

Deployed to Vercel under the **"ekkosca"** project:

```bash
cd /Volumes/MacMiniPort/DEV/EKKOS/apps/ekkosca
vercel link --project=ekkosca --yes
vercel deploy --prod --yes
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for details.

---

## Design System

| Element | Value |
|---------|-------|
| Background | Navy/Charcoal (`navy-950`, `navy-900`) |
| Primary accent | Electric Blue (`electric-500`) |
| Headings | Inter 700-900 |
| Body | Inter 400-500 |

---

## License & Trademarks

**ekkOS** and the ekkOS logo are trademarks of ekkOS Technologies Inc.

Unauthorized reproduction or distribution of ekkOS trademarks or branding assets is prohibited.

For licensing inquiries: [ekkoslabs.com](https://ekkoslabs.com)
