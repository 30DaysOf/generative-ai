# Website

## 1 | Setup

This `docs/` folder contains the source for the static [Docusaurus](https://docusaurus.io/) site published to the GitHub Pages endpoint on this repo. It was created using the [default quickstart](https://docusaurus.io/docs) command below, run in the root of the repository:

```bash
npx create-docusaurus@latest docs classic
```

## 2 | Commands

Run these commands using the Visual Studio Code terminal after first changing directory to `docs/`:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies first |
| `npm start` | Preview site with dev server |
| `npm run build` | Build static site for deploy |
| `npm run serve` | Preview site from static build |
| `npm run deploy` | Publish static build to GitHub pages |

## 3 | Configuration
The site can be customized for basic themes and capabilities (config), styling (css) and content (sidebars, docs, blog). These are the core docs to reference for more details:

 1. [Configuration](https://docusaurus.io/docs/configuration)
 1. [Styling and Layout](https://docusaurus.io/docs/styling-layout)
 1. [Using Plugins]((https://docusaurus.io/docs/using-plugins))
 1. [Deploying to GitHub Pages](https://docusaurus.io/docs/deployment#deploying-to-github-pages)
 1. [Static Assets](https://docusaurus.io/docs/static-assets)
 1. [Using Local Search](https://docusaurus.io/docs/search#using-local-search) - via community plugins
 1. [Optimizing SEO](https://docusaurus.io/docs/seo) - with metadata, sitemap etc.
 1. [Swizzling](https://docusaurus.io/docs/swizzling) - for deeper customization of core components

Some additional notes:
 - [Analytics options](https://docusaurus.community/plugindirectory/?maintained=maintained&tags=analytics) - for tracking page views. Options include:
    - [plugin-google-gtag](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag) - Google Tag Manger #1
    - [plugin-google-tag-manager](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-tag-manager) - Google Tag Manger #2
    - [plugin-vercel-analytics](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-vercel-analytics) - Vercel Analytics 
    - [docusaurus-plugin-clarity](https://github.com/PatelN123/docusaurus-plugin-clarity) - Microsoft Clarity (2+ yrs old)
 - [Cookie consent component](https://docusaurus.canny.io/feature-requests/p/cookie-consent-component) - moved from `Planned` (2021) to `In Progress` (2022). Until that is ready, we can look at:
    - [cookie-consent](https://github.com/68publishers/cookie-consent) widget for GTM - with [usage hints](https://docusaurus.canny.io/feature-requests/p/cookie-consent-component).
    - [react-cookie-consent](https://www.npmjs.com/package/react-cookie-consent) package - with [usage tutorial](https://medium.com/@fokke_79992/cookie-consent-and-docusaurus-932aaef27d61)

### 3.1 Styling: `src/css/custom.css`

### 3.2 Site Config: `docusaurus.config.js`

Relevant references:

### 3.3 Docs Sidebar: `sidebars.js`

### 3.4 Docs & Pages: `src/`

### 3.5 Blog: `blog/`


## 4 | Deployment

