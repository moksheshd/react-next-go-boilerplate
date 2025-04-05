# Frontend

This is the frontend part of the react-next-go-boilerplate project.

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

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. You can use the following command to commit your changes:

```bash
npm run commit
```

## Husky Hooks

- `pre-commit` - Run lint-staged to lint and format staged files
- `commit-msg` - Validate commit messages using commitlint
