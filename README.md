# 🎨 Elloqany Ads Website | Professional RTL React Showcase

A high-performance, single-page application (SPA) built for Alloqany Advertising, featuring full Right-to-Left (RTL) support and a modern, responsive design based on Material-UI. The core structure is modular, allowing for easy content updates via a central configuration file.

## ✨ Features & Enhancements (Developer View)

- **RTL-First Architecture:** Complete Arabic support utilizing Material-UI's RTL configuration and Arabic Google Fonts (`Amiri`, `Noto Sans Arabic`).
- **Optimized Performance:**
  - **Lazy Loading / Code Splitting:** Implemented using `React.lazy` and `Suspense` for all main pages (`Home`, `About`, `Works`, `Contact`).
  - **Animate On Scroll (AOS):** Smooth, performant scroll animations across the site.
- **Advanced Works Gallery (`/works`):**
  - Dynamic searching, filtering, and **Pagination** (replaces Load More).
  - **Image Slider:** Individual card sliders with user control.
  - **Lightbox Modal:** Full-screen viewing of work images upon click.
- **Modern UI/UX:**
  - **Material-UI v5:** Used for a cohesive design system.
  - **Glassmorphism:** Custom CSS applied for unique UI elements (`.glass-effect`).
  - **Data-Driven Components:** Contact details, services, and statistics are managed centrally in `src/config/siteConfig.js`.
- **SEO Optimized:** Basic SEO meta tags configured in `index.html`.
- **Contact Flow:** Direct link integration for Phone, Facebook, and WhatsApp, including a form that submits data directly to WhatsApp.

## ⚙️ Tech Stack

| Category       | Technology                | Version   | Purpose                                            |
| :------------- | :------------------------ | :-------- | :------------------------------------------------- |
| **Framework**  | **React.js**              | ^18.3.1   | Core UI Library (SPA)                              |
| **Tooling**    | **Vite**                  | ^5.1.0    | Fast Build Tool & Development Server               |
| **Styling/UI** | **Material-UI (MUI)**     | ^5.15.10  | UI Components and Theming                          |
| **Styling**    | **Emotion**               | ^11.11.3  | Styling Engine integrated with MUI                 |
| **Routing**    | **React Router DOM**      | ^6.22.0   | Declarative Navigation & Lazy Loading              |
| **Animation**  | **AOS**                   | Installed | Animate On Scroll Library                          |
| **Counters**   | **react-countup**         | ^6.5.0    | Animated numerical counters (Stats)                |
| **Validation** | **yup & react-hook-form** | Installed | Schema validation for forms (planned/optional use) |

## 📦 Setup and Running

### Prerequisites

- Node.js (LTS version recommended, minimum Node 18.0.0 or \>=20.0.0 for Vite 5)

### 1\. Installation

Install all required packages:

```bash
npm install
# OR
yarn install
```

### 2\. Development

Run the project locally:

```bash
npm run dev
```

The application will automatically open at: `http://localhost:3000`

### 3\. Build for Production

Generate a static production build in the `dist/` directory:

```bash
npm run build
```

### 4\. Preview Build

Serve the production build locally for testing:

```bash
npm run preview
```

## 🖼️ Asset Structure

All static assets, including images and the logo, should be placed in the `/public/assets` directory for direct access.

| Asset Type         | Path                        | Notes                                                       |
| :----------------- | :-------------------------- | :---------------------------------------------------------- |
| **Main Logo**      | `/public/assets/logo.png`   | Used in Header/Footer (Current logic uses a temporary SVG). |
| **Hero Image**     | `/public/assets/hero.jpg`   | High-resolution background image (1920x1080px).             |
| **Featured Works** | `/public/assets/featured/*` | Images for the homepage slider section.                     |
| **Works Gallery**  | `/public/assets/works/*`    | Images for the full gallery page.                           |

## ⚙️ Quick Configuration

The entire site's content can be modified via `src/config/siteConfig.js`.

```javascript
// Example from src/config/siteConfig.js

export const siteConfig = {
  companyName: "اللقاني للدعاية والإعلان",
  phone: "01095403988",
  whatsapp: "201095403988", // Use international format without '+' or '00'
  email: "salahebrahim696@gmail.com",
  address: "دسوق شارع عبد العزيز أمام محل أبو شامه",
  stats: {
    experience: 30, // Updated by StatsCounter.jsx
    projects: 2000,
    clients: 1000,
  },
  // ... other settings
};
```

## ⚠️ Known Issues / Future Roadmap

1.  **Backend Integration:** The contact form currently links directly to WhatsApp; future work should integrate a real submission endpoint (e.g., Strapi, Firebase, or an API).
2.  **External CMS:** Implementation of a Headless CMS (like Contentful or Strapi) to manage the Works Gallery data (`src/data/worksData.js`) dynamically.
3.  **Image Optimization:** Implement Lazy Loading for individual image tags (currently only pages are lazy-loaded) and utilize WebP formats.
4.  **Accessibility (A11y):** Further review of ARIA attributes, especially within custom components.

---

**License:** All Rights Reserved © 2025 Ellaqany Advertising.
