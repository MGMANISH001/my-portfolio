// ============================================================
//  CONTENT CONTROL PANEL — edit THIS file to update your site
//  Every value marked with ⚠️ PLACEHOLDER needs your real data.
// ============================================================

export const profile = {
  name: 'Manish Gupta',
  firstName: 'Manish',
  role: 'Frontend Developer',
  tagline: 'Crafting Digital Experiences',
  availability: 'Available for new projects',

  // ⚠️ PLACEHOLDER — replace with your real email (appears in Contact + Footer)
  email: 'itzmanish001@gmail.com',

  location: 'India',
  resumeUrl: '#', // ⚠️ PLACEHOLDER — put resume.pdf in /public and set to '/resume.pdf'

  // Short bio used in the About section (2–3 sentences works best)
  bio: `I'm a Frontend Developer who loves turning complex problems into clean, beautiful interfaces. I specialize in React, Tailwind CSS and modern JavaScript — building apps that are fast, accessible and delightful to use.`,

  bioExtra: `When I'm not coding, I'm exploring UI micro-interactions, contributing to open source, and levelling up one commit at a time.`,

  currentlyLearning: ['TypeScript', 'Next.js', 'Three.js', 'System Design'],

  stats: [
    { value: 15, suffix: '+', label: 'Projects Built' },
    { value: 1, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Commits This Year' },
  ],
}

// ⚠️ PLACEHOLDER — replace both URLs with YOUR profile links
// e.g. https://github.com/<your-username> and https://linkedin.com/in/<your-username>
export const socials = {
  github: 'https://github.com/MGMANISH001', // ⚠️ PLACEHOLDER
  linkedin: 'https://www.linkedin.com/in/manish-gupta', // ⚠️ PLACEHOLDER
  twitter: '', // optional — leave empty to hide
}

export const projects = [
  {
    title: 'Collaborative Coding Environment',
    description:
      'A real-time collaborative platform that enables students to write, edit, and debug code together.',
    tags: ['React', 'Tailwind', 'Django REST'],
    // ⚠️ PLACEHOLDER — paste your repo + live demo URLs
    github: 'https://github.com/manishgupta/collab-code', // ⚠️ PLACEHOLDER
    demo: 'https://your-demo-link.vercel.app', // ⚠️ PLACEHOLDER
    gradient: 'violet', // thumbnail style: violet | emerald | amber | rose | sky
    emoji: '👨‍💻',
  },
  {
    title: '2D Multiplayer Game',
    description:
      'A 2D offline multiplayer game focused on delivering smooth gameplay and engaging user interaction.',
    tags: ['Unity', 'C#'],
    github: 'https://github.com/manishgupta/2d-game', // ⚠️ PLACEHOLDER
    demo: '', // leave empty → only GitHub button shows
    gradient: 'emerald',
    emoji: '🎮',
  },
  {
    title: 'Movie Recommendation System',
    description: 'Developed and optimized recommendation algorithms for personalized content delivery.',
    tags: ['Python', 'Machine Learning', 'EDA'],
    github: 'https://github.com/manishgupta/movie-rec', // ⚠️ PLACEHOLDER
    demo: '',
    gradient: 'amber',
    emoji: '🎬',
  },
  // ---- Extra placeholder cards: edit or delete freely ----
  {
    title: 'DevFlow — Productivity Dashboard',
    description: 'A drag-and-drop task board with rich keyboard shortcuts and offline-first sync.',
    tags: ['React', 'IndexedDB', 'PWA'],
    github: 'https://github.com/manishgupta/devflow', // ⚠️ PLACEHOLDER
    demo: 'https://your-demo-link.vercel.app', // ⚠️ PLACEHOLDER
    gradient: 'sky',
    emoji: '⚡',
  },
  {
    title: 'ShopSphere — E-commerce UI',
    description: 'Pixel-perfect storefront with cart, filters, and buttery page transitions.',
    tags: ['React', 'Tailwind', 'Framer'],
    github: 'https://github.com/manishgupta/shopsphere', // ⚠️ PLACEHOLDER
    demo: '',
    gradient: 'rose',
    emoji: '🛍️',
  },
  {
    title: 'WeatherScope — Forecast App',
    description: 'Beautiful weather dashboard with animated radar maps and 7-day insights.',
    tags: ['JavaScript', 'REST API', 'Charts'],
    github: 'https://github.com/manishgupta/weatherscope', // ⚠️ PLACEHOLDER
    demo: '',
    gradient: 'violet',
    emoji: '🌦️',
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Django REST', level: 75 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Figma', level: 78 },
      { name: 'Anime.js / GSAP', level: 70 },
    ],
  },
]

export const strengths = ['Problem Solving', 'Performance Optimization', 'Responsive Design', 'Clean Code']

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
