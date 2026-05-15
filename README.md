# Rainer Glusman — Portfolio

Personal portfolio site for Rainer Glusman, Software Engineer & Frontend Specialist. Built with Next.js, React 19, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email:** Resend (contact form via `/api/contact`)
- **Language:** TypeScript

## Sections

- Hero — intro, CTA buttons, social links
- About
- Experience
- Services
- Projects
- Contact

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Environment Variables

Create a `.env.local` file for the contact form:

```
RESEND_API_KEY=your_resend_api_key
```
