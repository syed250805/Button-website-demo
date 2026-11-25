# Mahalaxmi Button Centre – Website (React + Vite)

A new website for Mahalaxmi Button Centre, Coimbatore, built with React, Vite and react-router-dom.

## Run it locally (VS Code)

1. Install **Node.js 18 or newer** from https://nodejs.org
2. Unzip this folder and open it in VS Code (File → Open Folder).
3. Open a terminal in VS Code (Terminal → New Terminal) and run:

```bash
npm install
npm run dev
```

4. Open **http://localhost:5173** in your browser.

To make a production build: `npm run build` (output goes to `dist/`), then `npm run preview` to view it.

To format the source and check formatting:

```bash
npm run format
npm run format:check
```

## Pages

- `/` **Home**: hero, What's New, Introduction / Mission / Commitment / Brands rows, ratings, category tiles, store photos
- `/product` **Product**: all 72 products with category filter, search and expandable specifications
- `/contact` **Contact us**: contact details, business factsheet and Google Map

## Editing content

All text, products and image paths are in **`src/data/siteData.js`**.
Images are in `public/images/products` and `public/images/company`.
Styles are in `src/index.css`.
