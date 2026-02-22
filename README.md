# Floating Hero Section (Legal Work Platform)

This project recreates the “Legal Work Platform” hero section with a responsive split layout, reusable floating cards, a unique portal card variant, and polished motion.

## Demo

[Watch the video on Google Drive](https://drive.google.com/file/d/1Ra69UsFG1x-5ubPnqOc5TN0rBgKLY4ZY/view?usp=sharing)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- lucide-react
- next-themes

## Implemented Requirements

- Split hero layout: left text + right floating visualization
- Reusable `FloatingCard` with configurable `color`, `rotation`, `icon`, and `label`
- Specialized `JohnDoeCard` built on top of the shared floating card architecture (portal variant)
- Light and dark theme with tuned dark palette for better contrast
- Responsive behavior:
  - Desktop: full floating composition
  - Mobile: structured floating composition optimized for small screens
- Background depth using soft blobs and rounded strips
- Subtle animations:
  - fade-in + rise entrance
  - continuous gentle floating/sway
  - hover lift/scale polish

## Project Structure

```text
app/
  page.tsx                      # Main hero layout (desktop + mobile composition)
  layout.tsx                    # App shell + Plus Jakarta Sans via next/font
  globals.css                   # Global styles + theme variant setup
  components/
    FloatingCard.tsx            # Reusable floating card (pill + portal variant)
    JohnDoeCard.tsx             # Portal card content
    BlobBackground.tsx          # Decorative animated background blobs/strips
    DarkModeToggle.tsx          # Light/dark mode toggle
    Providers.tsx               # next-themes provider
```

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Checks

```bash
npm run lint
npm run build
```

## Notes

- Font: Plus Jakarta Sans (`next/font/google`)
- Styling: Tailwind CSS utility + arbitrary values (for example, rotation classes)
- Icons: lucide-react (`Receipt`, `Gavel`, `CheckSquare`, `FileText`)
