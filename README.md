# Developer Portfolio — Full-Stack Web Application

A modern, responsive, full-stack developer portfolio application built with **React, Vite, Tailwind CSS, Framer Motion, Three.js, and Node.js / Express**. Designed with a **Futuristic Dark Developer** interface, smooth animations, interactive project filtering, an ATS-friendly print-to-PDF resume, and a REST API with automatic local fallback.

---

## Key Features

### Futuristic Dark Developer UI & Theme Persistence
- Unified dark palette (`#080B14`, `#0D1220`, `#111827`, `#151D2E`) with blue, purple, and cyan accents (`#3B82F6`, `#8B5CF6`, `#22D3EE`).
- Glassmorphic elevated cards, subtle gradient borders, and responsive typography (`Space Grotesk`, `Outfit`, `Inter`).
- Persistent **Dark / Light** theme toggle saved in `localStorage`.

### Split-Screen Hero & Ambient Visual Layers
- Two-column hero layout with introduction, action buttons, social links, and a floating profile presentation frame with surrounding tech badges.
- Custom HTML5 Canvas orbital particle network (`ParticleBackground`), subtle Three.js wireframe 3D backdrop (`Hero3D`), fine cyber-grid overlay, and aurora glow layer.
- Lenis smooth scrolling, Framer Motion route transitions (`MotionConfig reducedMotion="user"`), and a pointer-aware custom cursor (`CustomCursor`).

### Bento Telemetry Dashboard (`/`)
- Animated metric cards powered by `react-countup`.
- Terminal-style runtime log widget and SVG growth trajectory chart.
- Core stack overview and featured project cards with direct GitHub and Live Demo links.

### Technical Skills & Coding Profiles (`/skills`, `/about`)
- Categorized skill cards (Programming, Frontend, Backend, Databases, Tools, Deployment) with brand/technology icons and progress bars.
- Interactive coding profile cards, timeline-based education layout, internship experience cards, achievement cards with hover confetti, and a Swiper-powered certifications carousel.

### Project Showcase & Case Study Modal (`/projects`)
- Live keyword search across titles, taglines, descriptions, and tech tags.
- Category filtering (`All`, `Full Stack`, `Spring Boot`, `MERN Stack`, `SaaS`).
- Elevated project cards with tech stack icons, GitHub links, conditional Live Demo links, and an accessible detail modal (`Escape` key close + body scroll lock).

### ATS-Friendly Print Resume (`/resume`)
- Dedicated on-screen resume view paired with a print-specific `@media print` two-page A4 ATS layout.
- One-click **Download / Print Resume** button using the browser's Print → Save as PDF workflow.

### Interactive Blog & Contact Hub (`/blog`, `/contact`)
- Expandable story and case-study cards with category tags and **Read More / Show Less** toggles.
- Contact form supporting **EmailJS** (when configured via environment variables) and automatic fallback to the Express **`POST /api/contact`** endpoint, plus a direct `mailto:` fallback if both services are unavailable.

### Automatic Backend Fallback
- Fetches content from the Express API (`GET /api/portfolio`) and seamlessly falls back to `client/src/constants/portfolioData.js` if the backend is offline, making static frontend deployments straightforward.

---

## Technology Stack

| Category | Technologies |
| --- | --- |
| **Frontend** | React 18, Vite 7, React Router DOM 7, Tailwind CSS v4 |
| **Animations & UI** | Framer Motion, Lenis, Swiper, React CountUp, React Icons |
| **3D & Canvas** | Three.js, React Three Fiber, Drei, HTML5 Canvas |
| **Backend** | Node.js, Express.js, CORS, dotenv |
| **Messaging** | EmailJS (`@emailjs/browser`) + Express Contact Endpoint |
| **Linting & Tooling** | ESLint 9, Concurrently, Nodemon |

---

## Architecture

```text
React + Vite Client (localhost:5175)
   ├── GET  /api/portfolio ──▶ Express API (localhost:5005) ──▶ portfolioData.json
   │        └── fallback ────▶ client/src/constants/portfolioData.js
   └── POST /api/contact   ──▶ EmailJS (if configured) or Express ──▶ messages.json
```

---

## Project Structure

```text
portfolio/
│
├── client/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── animations/
│   │   │   └── motionVariants.js
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── AchievementsSection.jsx
│   │   │   ├── AnimatedPage.jsx
│   │   │   ├── CertificationsSection.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── EducationSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero3D.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── InternshipSection.jsx
│   │   │   ├── LoadingScreen.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ParticleBackground.jsx
│   │   │   ├── ProfilesSection.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   └── SkillsSection.jsx
│   │   ├── constants/
│   │   │   └── portfolioData.js
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Resume.jsx
│   │   │   └── Skills.jsx
│   │   ├── services/
│   │   │   └── portfolioService.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   │   ├── contactController.js
│   │   └── portfolioController.js
│   ├── data/
│   │   └── portfolioData.json
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   └── portfolioRoutes.js
│   ├── .env.example
│   ├── app.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## Getting Started

### 1. Install Dependencies

Install root, client, and server dependencies:

```bash
npm install
npm run install-all
```

### 2. Configure Environment Variables (Optional)

Copy the example environment files if you want to customize ports, CORS origins, or EmailJS keys:

- `client/.env.example` → `client/.env`
  - `VITE_PORTFOLIO_API_URL`
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
- `server/.env.example` → `server/.env`
  - `PORT`
  - `NODE_ENV`
  - `CORS_ORIGIN`

### 3. Run Locally

Start both the React client and Express backend concurrently:

```bash
npm run dev
```

Or run the frontend standalone:

```bash
npm run client
```

| Service | Local URL |
| --- | --- |
| Frontend | `http://localhost:5175` |
| Backend API | `http://localhost:5005` |

### 4. Build & Lint

```bash
npm --prefix client run lint
npm --prefix client run build
```

---

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/` | API health status and available endpoints |
| `GET` | `/api/portfolio` | Returns portfolio dataset JSON |
| `POST` | `/api/contact` | Validates and stores contact form submissions |

---

## Customizing Content

Portfolio content is managed via:
- `server/data/portfolioData.json` (served by the backend API)
- `client/src/constants/portfolioData.js` (used as the local fallback dataset)
