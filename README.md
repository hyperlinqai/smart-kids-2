# Tailwind Setup for Static HTML

This folder contains everything you need to compile Tailwind CSS for a plain static site.

## Files
- `package.json` – scripts for building CSS
- `tailwind.config.js` – paths and theme overrides
- `postcss.config.js` – PostCSS pipeline
- `src/input.css` – Tailwind entry file (compiled to `style.css`)
- `.gitignore`
- `README.md`

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```

2. Development (watches changes and rebuilds):
   ```bash
   npm run dev:css
   ```

3. Production build (minified CSS):
   ```bash
   npm run build:css
   ```

## Project Structure
Place these files at your project root, next to `index.html`. Your HTML should link to the output:
```html
<link rel="stylesheet" href="style.css">
```

> Remove the Tailwind CDN script tag from `<head>` to avoid double-loading Tailwind.
