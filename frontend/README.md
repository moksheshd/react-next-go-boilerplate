# Frontend

This is the frontend part of the react-next-go-boilerplate project. It's a modern web application built with Next.js, React, and TypeScript, featuring internationalization, data fetching with SWR, and UI components from shadcn.

## Features

- **Next.js App Router**: Modern routing system with React Server Components
- **Internationalization (i18n)**: Support for multiple languages (English and Hindi)
- **SWR Data Fetching**: Efficient data fetching with stale-while-revalidate strategy
- **Shadcn UI Components**: Beautiful, accessible UI components
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Static Export**: Configured for static site generation (SPA mode)

## Technologies Used

- Node.js: 22
- React: ^19.0.0
- Next.js: ^15.0.0
- TypeScript: ^5.0.0
- @types/node: ^22.0.0
- Tailwind CSS: ^4.0.0
- Shadcn: 2.4.0-canary.17
- ESLint: ^9.0.0
- Prettier: ^3.0.0
- Husky: ^9.0.0
- Commitizen: ^4.0.0
- Lint-staged: ^15.0.0
- Cross-env: ^7.0.0
- Date-fns: ^4.0.0
- @commitlint/cli: ^19.0.0
- @commitlint/config-conventional: ^19.0.0

### UI Components

- @radix-ui/react-slot: ^1.1.2
- class-variance-authority: ^0.7.1
- clsx: ^2.1.1
- lucide-react: ^0.487.0
- tailwind-merge: ^3.1.0
- tw-animate-css: ^1.2.5

### Internationalization

- i18next: ^24.2.3
- i18next-browser-languagedetector: ^8.0.4
- react-i18next: ^15.4.1

### Data Fetching

- swr: ^2.3.3

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   │   ├── ui/          # Shadcn UI components
│   │   ├── I18nProvider.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── SWRProvider.tsx
│   ├── lib/             # Utility functions and configurations
│   │   ├── i18n.ts      # i18next configuration
│   │   ├── swr.ts       # SWR configuration
│   │   └── utils.ts     # Utility functions
│   └── locales/         # Translation files
│       ├── en/          # English translations
│       └── hi/          # Hindi translations
├── next.config.ts       # Next.js configuration
└── ...                  # Other configuration files
```

## Getting Started

First, make sure you have Node.js version 22 installed. You can use nvm to switch to the correct version:

```bash
nvm use
```

Then, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run commit` - Commit changes using Commitizen

## Internationalization

The project supports multiple languages using i18next. Currently, English and Hindi are supported. The language switcher is available in the top-right corner of the application.

To add a new language:

1. Create a new folder in `src/locales` with the language code (e.g., `fr` for French)
2. Add a `translation.json` file with the translations
3. Update the `i18n.ts` file to include the new language

## Data Fetching

The project uses SWR for data fetching. The SWR configuration is in `src/lib/swr.ts`. The default fetcher is configured to handle errors and return JSON data.

Example usage:

```tsx
import { useSWR } from '@/lib/swr';

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user');

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  
  return <div>Hello {data.name}!</div>;
}
```

## Static Export

The project is configured for static export (SPA mode) in `next.config.ts`. This means that the application can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. You can use the following command to commit your changes:

```bash
npm run commit
```

## Husky Hooks

- `pre-commit` - Run lint-staged to lint and format staged files
- `commit-msg` - Validate commit messages using commitlint
