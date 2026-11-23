// All portfolio content lives here, so you can edit text without touching components.

export const profile = {
  name: "David Obasuke",
  role: "Full-Stack Developer",
  location: "Lagos, Nigeria",
  email: "obasukedavid21@gmail.com",
  phone: "+234 814 265 7490",
  whatsapp: "https://wa.me/2348142657490",
  github: "https://github.com/David2008-coder",
  twitter: "https://x.com/DavidObasu99069",
  tiktok: "https://www.tiktok.com/@p.david_dev",
  cv: "/David_Obasuke_Full_Stack_Developer_CV.pdf",
};

export const marquee = [
  "React", "JavaScript", "Django", "Django REST Framework", "PostgreSQL",
  "JWT Auth", "REST APIs", "Cloudinary", "Vercel", "Render", "Git & GitHub", "AI Automation",
];

export const stats = [
  { value: "2023", label: "Building for clients since" },
  { value: "4", label: "Full-stack projects shipped" },
  { value: "Remote", label: "Open to roles worldwide" },
];

export const skillGroups = [
  { title: "Frontend", items: ["React.js", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Responsive design", "Axios"] },
  { title: "Backend", items: ["Python", "Django", "Django REST Framework", "REST APIs", "JWT authentication"] },
  { title: "Data & Media", items: ["PostgreSQL", "SQLite", "Data modelling", "Cloudinary"] },
  { title: "Tools & Deploy", items: ["Git & GitHub", "Postman", "Vercel", "Render", "Figma", "Docker (fundamentals)"] },
];

export const projects = [
  {
    slug: "restaurant",
    index: "01",
    title: "Restaurant Booking & Management",
    kind: "Full-stack · Live client project",
    blurb:
      "A complete website for a Lagos grill house. Customers browse the menu and book online, and the owner manages everything from a private admin dashboard.",
    points: [
      "Customer booking flow connected to an owner-facing admin dashboard",
      "Django REST Framework API with PostgreSQL for application data",
      "Image and media management through Cloudinary",
    ],
    stack: ["React", "CSS", "Django", "DRF", "PostgreSQL", "Cloudinary"],
    live: "https://restaurant-frontend-ogy6.vercel.app/",
    host: "restaurant-frontend-ogy6.vercel.app",
  },
  {
    slug: "shopit",
    index: "02",
    title: "ShopIt E-Commerce",
    kind: "Full-stack · Deployed on Render",
    blurb:
      "An online store with accounts, a searchable product catalogue, a cart and a checkout flow, backed by a Django API.",
    points: [
      "User registration and login with JWT authentication",
      "Product catalogue with search and filtering, cart and checkout",
      "React frontend talking to Django/DRF and PostgreSQL via Axios",
    ],
    stack: ["React", "Django", "DRF", "PostgreSQL", "JWT", "Axios"],
    live: "https://newshop-gfr3.onrender.com",
    host: "newshop-gfr3.onrender.com",
  },
  {
    slug: "carepulse",
    index: "03",
    title: "CarePulse Healthcare Platform",
    kind: "Frontend + API integration",
    blurb:
      "A healthcare appointment interface where patients book visits and an admin-oriented view helps manage appointments.",
    points: [
      "Patient booking flows with clear, accessible forms",
      "Admin-oriented workflow for managing appointments",
      "REST API integration with JWT-based authentication",
    ],
    stack: ["React", "Tailwind CSS", "REST API", "JWT"],
    live: "https://carepulse-two-virid.vercel.app",
    host: "carepulse-two-virid.vercel.app",
  },
];

export const experience = [
  {
    when: "Jun 2026",
    title: "Frontend Developer Intern",
    org: "TEYZIX CORE · Remote",
    points: [
      "Built three responsive AI SaaS landing pages in React with reusable components and a mobile-first layout.",
      "Turned Figma designs into polished interfaces while working to delivery deadlines.",
    ],
  },
  {
    when: "2023 – Present",
    title: "Freelance Full-Stack Developer",
    org: "Self-employed · Lagos, Nigeria",
    points: [
      "Builds business websites and web apps end to end: requirements, frontend, backend integration, testing, deployment and support.",
      "Delivers responsive, database-backed workflows for e-commerce, healthcare and booking use cases.",
    ],
  },
];
