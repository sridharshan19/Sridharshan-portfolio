# 🚀 Developer Portfolio — Full-Stack Web Application

A modern, responsive, full-stack developer portfolio built using **React, Vite, Tailwind CSS, Framer Motion, Three.js, and Node.js / Express**.

Designed with a **Futuristic Dark Developer** aesthetic, the application features interactive animations, 3D visual effects, project filtering, an ATS-friendly printable resume, a contact management system, and REST API integration with automatic local data fallback.

---

## ✨ Key Features

### 🌙 Futuristic Dark Developer UI
- Modern dark interface with a consistent color palette.
- Blue, purple, and cyan accent colors.
- Glassmorphism cards with gradient borders.
- Responsive typography using Space Grotesk, Outfit, and Inter.
- Persistent Dark / Light theme toggle using `localStorage`.

### 🎨 Interactive Hero Section
- Split-screen hero layout with introduction and profile presentation.
- Custom HTML5 Canvas orbital particle network.
- Three.js animated wireframe background.
- Floating technology badges.
- Cyber-grid overlay and ambient aurora effects.
- Custom pointer-aware cursor.
- Lenis smooth scrolling.
- Framer Motion page transitions with reduced-motion support.

### 📊 Bento Telemetry Dashboard
- Animated statistics using React CountUp.
- Terminal-style runtime log widget.
- SVG growth trajectory chart.
- Technology stack overview.
- Featured project cards with GitHub and Live Demo links.

### 💻 Technical Skills & About
- Categorized technical skill cards.
- Programming, Frontend, Backend, Database, Tools, and Deployment sections.
- Technology icons and animated progress bars.
- Interactive coding profile cards.
- Education timeline.
- Internship experience cards.
- Achievement cards with hover confetti.
- Swiper-powered certifications carousel.

### 🚀 Interactive Project Showcase
- Live keyword search.
- Dynamic category filtering:
  - All
  - Full Stack
  - Spring Boot
  - MERN Stack
  - SaaS
- Project cards with technology stack icons.
- GitHub repository links.
- Conditional Live Demo links.
- Accessible project detail modal.
- Escape key support and body scroll locking.

### 📄 ATS-Friendly Resume
- Dedicated resume page.
- ATS-friendly two-page A4 print layout.
- Print-specific CSS using `@media print`.
- One-click Download / Print Resume.
- Browser-based Print → Save as PDF workflow.

### 📝 Blog & Contact Hub
- Expandable blog and case-study cards.
- Category-based content tags.
- Read More / Show Less functionality.
- Contact form with EmailJS integration.
- Express API fallback for contact submissions.
- Direct `mailto:` fallback when both services are unavailable.

### 🔄 Automatic Backend Fallback
- Retrieves portfolio content from the Express REST API.
- Automatically falls back to local portfolio data when the backend is unavailable.
- Supports static frontend deployments.
- Separates frontend presentation from backend data management.

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React 18, Vite 7, React Router DOM 7 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion, Lenis |
| UI Components | Swiper, React CountUp, React Icons |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Canvas | HTML5 Canvas, SVG |
| Backend | Node.js, Express.js |
| Middleware | CORS, dotenv |
| Messaging | EmailJS, Express Contact API |
| Development Tools | ESLint 9, Concurrently, Nodemon |

---

## 🏗️ Application Architecture

```text
                  ┌─────────────────────────┐
                  │      React + Vite       │
                  │   Frontend :5175        │
                  └────────────┬────────────┘
                               │
                 ┌─────────────┴──────────────┐
                 │                            │
          GET /api/portfolio          POST /api/contact
                 │                            │
                 ▼                            ▼
          ┌───────────────┐           ┌────────────────┐
          │ Express API   │           │ Contact System │
          │  Port :5005   │           └───────┬────────┘
          └───────┬───────┘                   │
                  │                    ┌──────┴──────┐
                  ▼                    ▼             ▼
          portfolioData.json        EmailJS      messages.json
                  │
                  ▼
          API Response
                  │
          If API unavailable
                  │
                  ▼
          Local portfolioData.js
```

---

## 📁 Project Structure

```text
portfolio/
│
├── client/
│   ├── public/
│   │   └── favicon.svg
│   │
│   ├── src/
│   │   ├── animations/
│   │   │   └── motionVariants.js
│   │   │
│   │   ├── assets/
│   │   │
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
│   │   │
│   │   ├── constants/
│   │   │   └── portfolioData.js
│   │   │
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Resume.jsx
│   │   │   └── Skills.jsx
│   │   │
│   │   ├── services/
│   │   │   └── portfolioService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
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
│   │
│   ├── data/
│   │   └── portfolioData.json
│   │
│   ├── routes/
│   │   ├── contactRoutes.js
│   │   └── portfolioRoutes.js
│   │
│   ├── .env.example
│   ├── app.js
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository.git

cd portfolio
```

### 2. Install Dependencies

```bash
npm install

npm run install-all
```

### 3. Configure Environment Variables

Create environment files using the provided examples.

**Frontend: `client/.env`**

```env
VITE_PORTFOLIO_API_URL=http://localhost:5005
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Backend: `server/.env`**

```env
PORT=5005
NODE_ENV=development
CORS_ORIGIN=http://localhost:5175
```

EmailJS configuration is optional. The application supports alternative contact submission methods when EmailJS is unavailable.

### 4. Run the Application

Start both frontend and backend concurrently:

```bash
npm run dev
```

Alternatively, start only the frontend:

```bash
npm run client
```

### 🌐 Local Development URLs

| Service | URL |
|---|---|
| Frontend | http://localhost:5175 |
| Backend API | http://localhost:5005 |
| Portfolio API | http://localhost:5005/api/portfolio |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API health status and available endpoints |
| GET | `/api/portfolio` | Retrieves portfolio dataset |
| POST | `/api/contact` | Validates and stores contact submissions |

### Example API Response

**GET `/api/portfolio`**

```json
{
  "success": true,
  "data": {
    "projects": [],
    "skills": [],
    "education": [],
    "experience": []
  }
}
```

*The response structure shown above is illustrative.*

---

## 🧪 Build & Lint

Check frontend code quality:

```bash
npm --prefix client run lint
```

Create a production build:

```bash
npm --prefix client run build
```

---

## 🎨 Customizing Portfolio Content

Portfolio information is maintained in two locations:

**Backend dataset**

```text
server/data/portfolioData.json
```

Used by the Express API.

**Frontend fallback dataset**

```text
client/src/constants/portfolioData.js
```

Used when the backend API is unavailable.

Update both datasets to keep the displayed information consistent.

---

## 🚀 Future Enhancements

- Admin dashboard for managing portfolio content.
- Database integration for dynamic project management.
- Blog CMS integration.
- Enhanced analytics dashboard.
- Improved SEO and Open Graph metadata.
- Production deployment with CI/CD.

---

## 👨‍💻 Author

**Sridharshan M N**

Full Stack Developer | Java Spring Boot | React | MERN Stack

Interested in building scalable web applications, modern user interfaces, and interactive digital experiences.

---

## ⭐ Support

If you find this project interesting, consider giving it a ⭐ on GitHub!

**Built with ❤️ using React, Node.js, and modern web technologies.**
