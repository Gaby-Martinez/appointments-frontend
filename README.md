# Medical Appointment System

## Description

This project is the frontend for a medical appointment scheduling system. It's built using Vite, React, and TypeScript, providing a modern and efficient development experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js version 20.11.1 or later
- You have a Windows/Linux/Mac machine

## Installing Medical Appointment System

To install Medical Appointment System, follow these steps:

```bash
git clone https://github.com/Gaby-Martinez/appointments-frontend.git
cd appointments-frontend
npm install
```

## Using Medical Appointment System

To use Medical Appointment System, follow these steps:

```bash
npm run dev
```

This command starts the development server. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── atoms/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.styles.ts
│   │       ├── Button.types.ts
│   │       ├── Button.test.tsx
│   │       └── index.ts
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── pages/
│   ├── HomePage/
│   ├── ProfilePage/
│   └── ...
├── hooks/
│   ├── useCustomHook.ts
│   └── index.ts
├── context/
├── services/
├── utils/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── models/
├── constants/
├── config/
└── tests/
    ├── integration/
    └── e2e/
```

## Development Workflow

### Branch Strategy

We follow a branch naming convention based on our Jira tickets:

```
git checkout -b AP-<ticket-number>-brief-description
```

For example:

```
git checkout -b AP-7-initialize-backend
```

### Commit Conventions

We use Conventional Commits to standardize our commit messages. The format is as follows:

```
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

Types include:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

Include the Jira ticket number in square brackets after the type.

Examples:

```
feat[AP-7]: add initial project structure
fix[AP-12]: resolve database connection issue
docs[AP-15]: update README with development workflow
```

For more details on Conventional Commits, visit [https://www.conventionalcommits.org/](https://www.conventionalcommits.org/)

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting. We've set up lint-staged with Husky to ensure all committed code meets our style guidelines.

### Running Linting and Formatting

To manually run the linter:

```bash
npm run lint
```

To automatically fix linting issues:

```bash
npm run lint:fix
```

To check formatting:

```bash
npm run prettier:check
```

To automatically format all files:

```bash
npm run prettier:write
```

### Pre-commit Hooks

We use Husky to run pre-commit hooks. These hooks will automatically run lint-staged, which will lint and format your staged files before each commit.

If you need to bypass the pre-commit hooks for any reason, you can use the `--no-verify` flag with your git commit command:

```bash
git commit -m "Your commit message" --no-verify
```

However, use this sparingly and only when absolutely necessary.

## VSCode Setup

For the best development experience in VSCode, we recommend installing the following extensions:

- ESLint
- Prettier - Code formatter

Also, add this to your VSCode settings to enable formatting on save:

```json
{
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "files.eol": "\n",
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```
