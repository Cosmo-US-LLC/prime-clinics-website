# Prime Clinics Website

A modern web application built with React, Vite, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **React 19.2.3** - UI library
- **Vite 7.3.1** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **React Router DOM 7.12.0** - Client-side routing
- **React Hook Form 7.71.1** - Form handling

## Project Structure

```
prime-clinics-website/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # React components
│   │   └── ui/           # shadcn/ui components
│   ├── constants/        # Constants and data
│   ├── contexts/         # React contexts
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   │   └── utils.js      # cn() function for className merging
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── utils/            # Helper utilities
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── components.json       # shadcn/ui configuration
├── vite.config.js        # Vite configuration
├── jsconfig.json         # Path aliases
└── package.json          # Dependencies
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm start
```

## Features

- ✅ React 19 with latest features
- ✅ Vite for fast development and builds
- ✅ Tailwind CSS 4 with Vite plugin
- ✅ shadcn/ui components configured
- ✅ React Router for navigation
- ✅ Path aliases (`@/` for `src/`)
- ✅ ESLint configured
- ✅ SVG import support via SVGR

## Adding shadcn/ui Components

To add new shadcn/ui components, use the CLI:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## Path Aliases

The project uses path aliases for cleaner imports:

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/utils` → `src/utils`

Example:
```jsx
import { cn } from "@/lib/utils"
import Button from "@/components/ui/button"
```

## Styling

- Tailwind CSS is configured with the `@tailwindcss/vite` plugin
- Custom CSS variables for theming (light/dark mode support)
- shadcn/ui components use CSS variables for theming
- Global styles in `src/index.css`

## License

Private project
