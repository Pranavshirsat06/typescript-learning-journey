# React + TypeScript — Initial Project Setup

## 1. Introduction

React + TypeScript allows us to build React applications with static type checking. TypeScript helps catch type-related errors during development and improves code readability and maintainability.

For a new React project, I will use **Vite** because it provides a quick development server and a simple setup for React + TypeScript.

## 2. Prerequisites

Before creating the project, make sure the following are installed:

- **Node.js** — JavaScript runtime.
- **npm** — Package manager that comes with Node.js.
- **VS Code** — Code editor.

Verify the installations:

```bash
node -v
npm -v
```

## 3. Create a React + TypeScript project

Run the following command in the terminal:

```bash
npm create vite@latest my-react-ts-app -- --template react-ts
```

Explanation:

- `npm create vite@latest` creates a new Vite project.
- `my-react-ts-app` is the project name.
- `--template react-ts` selects the React + TypeScript template.

Navigate into the project:

```bash
cd my-react-ts-app
```

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display a local URL, usually `http://localhost:5173`. Open it in the browser to see the application.

## 4. Understand the initial folder structure

The important files and folders are:

```text
my-react-ts-app/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

Some files may differ depending on the Vite template version.

### Important files

**`src/App.tsx`**

The main React component. The `.tsx` extension allows TypeScript and JSX to be written in the same file.

**`src/main.tsx`**

The entry point of the React application. It renders the `App` component into the HTML page.

**`tsconfig.json`**

The main TypeScript configuration file. It connects the relevant TypeScript configuration files in the Vite template.

**`tsconfig.app.json`**

Contains TypeScript compiler settings for application code.

**`tsconfig.node.json`**

Contains TypeScript settings for Node.js-related configuration files, such as Vite's configuration.

**`vite.config.ts`**

Contains the Vite configuration, including the React plugin.

**`package.json`**

Contains project metadata, dependencies, development dependencies, and scripts.

**`index.html`**

The HTML entry page used by Vite.

## 5. Understand `.ts` vs `.tsx`

- `.ts` — Used for TypeScript code without JSX, such as types, interfaces, utility functions, and API logic.
- `.tsx` — Used when TypeScript code contains JSX, such as React components.

Example of a `.ts` file:

```ts
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Pranav",
};
```

Example of a `.tsx` file:

```tsx
interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
```

Here, `GreetingProps` defines the type of props that the component accepts.

## 6. Understand the main commands

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates an optimized production build and checks the application through the configured build process.

```bash
npm run lint
```

Runs the configured ESLint checks.

```bash
npm run preview
```

Serves the production build locally for preview.

## 7. How to check TypeScript errors

Vite provides a fast development server, but it does not necessarily perform a complete TypeScript type check on every development-server update.

Run:

```bash
npx tsc -b
```

This checks the TypeScript projects configured by the template.

To generate the production build:

```bash
npm run build
```

Use both during development to catch issues and verify the application before committing.

## 8. Do I need to install TypeScript separately?

When using the Vite `react-ts` template, TypeScript and the necessary React type packages are included in the generated project's development dependencies.

Therefore, you generally do not need to install them separately.

If setting up an existing React project manually, you may need packages such as:

```bash
npm install -D typescript @types/react @types/react-dom
```

The exact setup depends on the project's bundler and configuration.

## 9. How do I define props in React + TypeScript?

Example:

```tsx
interface ProductProps {
  name: string;
  price: number;
  category?: string;
}

function Product({ name, price, category }: ProductProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>Category: {category ?? "Not specified"}</p>
    </div>
  );
}

export default Product;
```

Important points:

- `ProductProps` defines the component's expected props.
- `name` must be a string.
- `price` must be a number.
- `category?` is optional.
- `category ?? "Not specified"` provides a fallback when the category is `null` or `undefined`.

## 10. Recommended initial workflow

Whenever I start a new React + TypeScript project:

1. Create the project using Vite's `react-ts` template.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Understand the existing folder structure before changing it.
5. Create reusable interfaces and type aliases where required.
6. Define prop types for React components.
7. Run `npx tsc -b` to check TypeScript errors.
8. Run `npm run build` before pushing the code.

## Summary

The essential setup commands are:

```bash
npm create vite@latest my-react-ts-app -- --template react-ts
cd my-react-ts-app
npm install
npm run dev
```

For TypeScript checking and production verification:

```bash
npx tsc -b
npm run build
```

This setup provides a starting point for building React applications with TypeScript, including typed components, props, interfaces, and reusable application logic.
