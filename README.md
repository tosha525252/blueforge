# BlueForge Labs Website

Production-ready React + Vite website for BlueForge Labs.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This project is configured for the repository name `blueforge` and publishes at:

`https://YOUR-USERNAME.github.io/blueforge/`

1. Upload the **contents of this folder** to the root of the `blueforge` repository.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch.
5. Open the **Actions** tab and wait for the deployment to finish.

The app uses `HashRouter`, so all pages work reliably on GitHub Pages without extra rewrite rules.

## Important

Do not manually publish `index.html` from the source folder. GitHub Actions builds the app and publishes the generated `dist` directory.
