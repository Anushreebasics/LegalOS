# Floating Hero Section (Legal Work Platform)

This project recreates the “Legal Work Platform” hero section using **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **lucide-react**.

## Demo Video
[Watch the video on Google Drive](https://drive.google.com/file/d/1EHQP7uZv_8-ODGDLVw-3ci38bhx9bVWa/preview)

## Features

- Split hero layout: text on the left, floating visualization on the right
- Reusable `FloatingCard` component with configurable:
	- `color`
	- `rotation`
	- `icon`
	- `label`
- Dedicated portal-style variant (`John Doe - Portal`) built using the shared card architecture
- Light/Dark theme support using `next-themes`
- Responsive behavior:
	- Desktop: full floating composition
	- Mobile: simplified but polished floating composition
- Soft background blobs and pill strips for depth

## Tech Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- lucide-react
- next-themes

## Project Structure

```text
app/
	page.tsx                      # Hero layout + responsive compositions
	globals.css                   # Global styles + font family
	layout.tsx                    # App shell + Plus Jakarta Sans font setup
	components/
		FloatingCard.tsx            # Reusable floating card (pill + portal variant)
		JohnDoeCard.tsx             # Specialized portal card content
		BlobBackground.tsx          # Decorative background blobs/strips
		DarkModeToggle.tsx          # Light/dark toggle
		Providers.tsx               # Theme provider
```

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
```

## Notes

- Typography uses **Plus Jakarta Sans** via `next/font/google`.
- Theme is class-based (`dark`) through `next-themes`.
- Floating motion and staggered entry animations are handled by Framer Motion.
