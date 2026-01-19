# johnny-with-no-deps — build notes

This repository uses Tailwind CSS (v4) to generate `output.css` from `input.css`.

Quick steps to build locally

Prerequisites:
- Node.js (v16+ recommended) and npm or pnpm

Using npm (recommended if you don't use pnpm):

```bash
# install dev deps
npm install

# build minified CSS
npm run build

# or watch for dev changes
npm run watch:css
```

With pnpm:

```bash
pnpm install
pnpm npm run build
```
