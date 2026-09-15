# 🚀 Sridharshan M N — Full Stack Developer Portfolio

A modern, responsive, and interactive developer portfolio built to showcase my skills, projects, technical experience, competitive programming journey, and achievements.

The portfolio focuses on **Java Full Stack Development, Spring Boot, React.js, MERN Stack, REST APIs, interactive UI design, animations, and scalable application architecture**.

Designed with a combination of modern frontend technologies, immersive animations, interactive dashboards, and a clean developer-focused experience.

---

## 🌐 About the Portfolio

This portfolio serves as a central platform to present my journey as a **Full Stack Developer** and final-year **Electrical and Electronics Engineering student**.

It showcases:

* 💻 Full Stack Development skills
* ☕ Java & Spring Boot development
* ⚛️ React.js frontend development
* 🌐 MERN Stack projects
* 🔌 REST API development
* 🗄️ MySQL & MongoDB experience
* 🧩 Software architecture and problem solving
* 🏆 Competitive programming achievements
* 📚 Technical learning journey
* 🚀 Projects and real-world applications

The interface is designed to provide an engaging experience while maintaining performance, responsiveness, and usability.

---

# ✨ Key Features

## 🎨 Interactive Bento Dashboard

A modern Bento-style dashboard presenting important developer statistics and technical highlights.

Features include:

* Animated metric cards
* Developer statistics
* Technology badges
* SVG performance graphs
* Animated counters
* Terminal-style compiler output
* Interactive visual elements

---

## 🔍 Project Search & Filtering

Projects can be explored using:

* Category-based filtering
* Live keyword search
* Technology-based filtering
* Interactive project cards

### Supported Categories

```text
Full Stack
Spring Boot
MERN Stack
SaaS
```

This makes it easier to quickly explore projects based on their technology or application type.

---

## 🖼️ Interactive Project Case Studies

Each project provides a detailed case-study experience through an interactive modal/drawer.

Project information includes:

* Project overview
* Problem statement
* Technical implementation
* Key features
* Technology stack
* Development highlights
* GitHub repository
* Live demo

---

## 📖 Developer Stories & Blog

A dedicated `/blog` route provides detailed technical and personal development stories.

Topics include:

* Internship experiences
* Competitive programming journey
* Hackathon experiences
* Project development
* Technical learning
* Software development journey

---

## 📄 ATS-Friendly Resume

The portfolio includes a dedicated resume section with a print-optimized layout.

### Features

* ATS-friendly structure
* Two-page resume format
* Clean typography
* Print-specific styling
* PDF-friendly formatting
* One-click browser printing/export

The resume can be exported using the browser's **Print → Save as PDF** functionality.

---

## 🌌 Aurora & Orbital Particle Network

A custom HTML5 Canvas animation creates an interactive particle network.

The visual system includes:

* Orbital particle movement
* Connected particle nodes
* Smooth animation
* Radial gradients
* Grid overlays
* Dynamic canvas rendering

The animation adds visual depth without interfering with the main content.

---

## 🧊 Three.js 3D Background

The portfolio uses Three.js to create subtle floating 3D wireframe objects.

Implemented using:

* Three.js
* React Three Fiber
* 3D geometries
* Lightweight animation

The 3D layer is designed as a background visual rather than distracting from the portfolio content.

---

## 🖱️ Custom Spring Cursor

A custom animated cursor provides additional interaction feedback.

The cursor responds to interactive elements such as:

* Buttons
* Links
* Cards
* Navigation elements
* Project interactions

Animations use spring-based motion to provide a smooth and natural feel.

---

## 🌓 Dark / Light Theme

The portfolio supports both:

* 🌙 Dark Mode
* ☀️ Light Mode

Theme preferences are persisted so the selected theme remains available between sessions.

---

# 🛠️ Technology Stack

| Category              | Technologies                              |
| --------------------- | ----------------------------------------- |
| **Languages**         | Java, JavaScript ES6+, C                  |
| **Frontend**          | React.js, Vite, Tailwind CSS, HTML5, CSS3 |
| **UI & Animation**    | Framer Motion, Swiper, Lenis Scroll       |
| **Backend**           | Node.js, Express.js, Spring Boot 3        |
| **Databases**         | MongoDB, MySQL                            |
| **3D & Graphics**     | Three.js, React Three Fiber, HTML5 Canvas |
| **API & Testing**     | REST APIs, JSON, Postman                  |
| **Development Tools** | Git, GitHub, VS Code, npm                 |
| **Containerization**  | Docker                                    |

---

# 🏗️ Architecture

The application follows a separated frontend and backend architecture.

```text
                    ┌───────────────────────┐
                    │       Portfolio       │
                    │       Website         │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │      React + Vite     │
                    │      Frontend         │
                    └───────────┬───────────┘
                                │
                         REST API Requests
                                │
                                ▼
                    ┌───────────────────────┐
                    │   Node.js + Express   │
                    │      Backend API      │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │      JSON Data        │
                    │   Portfolio Content   │
                    └───────────────────────┘
```

The frontend can also operate independently using the local fallback dataset.

---

# 📂 Project Structure

```text
portfolio/
│
├── client/
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │   ├── Sri.jpg
│   │   │   ├── Sri.png
│   │   │   └── logos/
│   │   │
│   │   ├── components/
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── constants/
│   │   │   └── portfolioData.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   └── App.jsx
│   │
│   ├── public/
│   └── package.json
│
├── server/
│   ├── data/
│   │   └── portfolioData.json
│   │
│   ├── routes/
│   │   └── portfolioRoutes.js
│   │
│   ├── app.js
│   └── package.json
│
├── package.json
└── README.md
```

---

# 🚀 Getting Started

Follow the steps below to run the portfolio locally.

## 1. Clone the Repository

```bash
git clone https://github.com/sridharshan19/Sridharshan-portfolio.git
```

Navigate into the project:

```bash
cd Sridharshan-portfolio
```

---

# 📦 Installation

## Option 1 — Full Application

Install dependencies for the complete project:

```bash
npm run install-all
```

Then start the frontend and backend:

```bash
npm run dev
```

---

## Option 2 — Frontend Only

Navigate to the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

# 🖥️ Local Development

| Service     | URL                     |
| ----------- | ----------------------- |
| Frontend    | `http://localhost:5173` |
| Backend API | `http://localhost:5005` |

---

# 🔄 Backend Fallback System

The portfolio is designed to remain functional even when the backend server is unavailable.

The frontend first attempts to retrieve portfolio information through the backend API.

If the API is unavailable, it automatically uses:

```text
src/constants/portfolioData.js
```

This provides a reliable fallback mechanism for standalone deployments.

### Benefits

* No backend dependency for basic portfolio rendering
* Works with static hosting
* Easier deployment
* Improved reliability
* Suitable for GitHub Pages, Vercel, and Netlify

---

# 📊 Developer Highlights

The portfolio presents key development metrics and achievements.

### Competitive Programming

* 🟢 **LeetCode:** 300+ Problems
* 🔵 **SkillRack:** 400+ Problems

The competitive programming section demonstrates consistency in:

* Data Structures
* Algorithms
* Problem Solving
* Logical Thinking
* Coding Practice

---

# 💻 Featured Technical Areas

The portfolio highlights experience across multiple areas of software development.

### Java Full Stack

```text
Java
Spring Boot
Spring Data JPA
Spring Security
REST APIs
MySQL
JWT
Hibernate
```

### MERN Stack

```text
MongoDB
Express.js
React.js
Node.js
REST APIs
```

### Frontend Development

```text
React
Vite
JavaScript
HTML5
CSS3
Tailwind CSS
Framer Motion
```

### Development & API Tools

```text
Git
GitHub
Postman
Docker
VS Code
npm
```

---

# ⚡ Performance & UX

Performance and user experience were considered throughout the development process.

### Performance considerations

* Component-based React architecture
* Reusable UI components
* Lightweight animation systems
* Conditional rendering
* Backend fallback support
* Optimized visual effects
* Responsive layouts

### UX considerations

* Responsive design
* Smooth scrolling
* Interactive navigation
* Clear project categorization
* Search functionality
* Dark/light theme
* Accessible content structure
* Mobile-friendly layouts

---

# 📱 Responsive Design

The portfolio is designed to work across different screen sizes.

```text
Desktop
   ↓
Laptop
   ↓
Tablet
   ↓
Mobile
```

Layouts, project cards, navigation, animations, and typography adapt according to the available screen size.

---

# 🔌 API Structure

The Express backend exposes portfolio information through REST endpoints.

Example structure:

```text
GET /api/projects
GET /api/skills
GET /api/experience
GET /api/education
GET /api/achievements
```

The frontend consumes these endpoints through reusable service functions.

---

# 📬 Contact

If you'd like to connect, collaborate, or discuss a project:

**Email:** [sridharshans556@gmail.com](mailto:sridharshans556@gmail.com)

**GitHub:** github.com/sridharshan19

**LinkedIn:** linkedin.com/in/sridharshanm-n-2564232b6

---

# 🎯 Future Improvements

Planned improvements include:

* [ ] Admin dashboard for portfolio content management
* [ ] Database-backed portfolio content
* [ ] Advanced analytics dashboard
* [ ] More interactive project case studies
* [ ] Improved accessibility
* [ ] Progressive Web App support
* [ ] Automated CI/CD deployment
* [ ] Additional developer tools
* [ ] More technical blog articles

---

# 📌 Project Goals

The main goals of this portfolio are to:

1. Showcase full-stack development capabilities.
2. Demonstrate practical React and backend development.
3. Present real-world projects in an interactive format.
4. Provide recruiters with quick access to technical information.
5. Demonstrate UI/UX and frontend animation skills.
6. Highlight competitive programming consistency.
7. Maintain a scalable and maintainable project architecture.

---

# ⭐ Why This Portfolio?

This is more than a traditional static portfolio.

It combines:

```text
Modern UI
   +
Full Stack Development
   +
Interactive Animations
   +
3D Visuals
   +
REST APIs
   +
Responsive Design
   +
Technical Case Studies
```

The goal is to create a portfolio that demonstrates not only **what I have learned**, but also **how I build, structure, and present software applications**.

---

## 👨‍💻 About Me

I am **Sridharshan M N**, a final-year Electrical and Electronics Engineering student with a strong interest in software development and full-stack engineering.

My primary development interests include:

* Java
* Spring Boot
* React.js
* REST APIs
* Full Stack Development
* Problem Solving
* Software Architecture

I continuously work on projects and coding challenges to strengthen my development and problem-solving skills.

---

## 📄 License

This project is created for personal portfolio and educational purposes.

© 2026 Sridharshan M N. All rights reserved.
