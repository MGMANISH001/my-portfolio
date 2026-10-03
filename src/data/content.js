// ============================================================
//  CONTENT CONTROL PANEL — edit THIS file to update your site
//  Every value marked with ⚠️ PLACEHOLDER needs your real data.
// ============================================================

// ────────────────────────────────────────────────────────────
//  CONTACT FORM — connect your free Formspree endpoint (3 min)
//  1. Sign up at https://formspree.io  (free: 50 msgs/month)
//  2. "New form" → name it "Portfolio" → copy the endpoint,
//     e.g. https://formspree.io/f/xyzabcd
//  3. Paste that FULL URL below — done, messages land in the
//     inbox you registered with.
//  ⚠️ PLACEHOLDER — while this is empty (''), the form shows a
//  friendly "email me directly" fallback instead of sending.
// ────────────────────────────────────────────────────────────
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrpbjkvp'

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
  linkedin: 'https://www.linkedin.com/in/manish-gupta-mg', // ⚠️ PLACEHOLDER
  twitter: '', // optional — leave empty to hide
}

export const projects = [
  {
    title: 'Collaborative Coding Environment',
    description:
        'A real-time collaborative platform that enables students to write, edit, and debug code together.',
    tags: ['React', 'Tailwind', 'Django REST'],
    github: '',   // ⚠️ paste repo URL after pushing the code to your GitHub
    demo: '',     // leave '' if never deployed — no button will show
    itch: '',     // games only
    video: '',    // optional YouTube walkthrough / screen recording
    download: '', // games only
    gradient: 'violet',
    emoji: '👨‍💻',
    details: {
      overview:
          'A real-time collaborative coding platform built as a college team project, made so students can work on the same code together instead of passing files back and forth.', // ⚠️ edit to match your build
      role: 'My part: frontend UI, editor experience and API integration.', // ⚠️ edit
      features: [ // ⚠️ edit to match what YOUR build actually does
        'Shared coding rooms with live multi-user editing',
        'Code editor with syntax highlighting',
        'Run panel to execute and debug shared code',
        'Room-based flow — create, share and join a session',
      ],
      outcome:
          'Levelled up on syncing UI state across clients, designing a REST API with Django, and splitting work cleanly inside a team.', // ⚠️ edit
    },
  },
  {
    title: '2D Multiplayer Game',
    description:
        'A 2D offline multiplayer game focused on delivering smooth gameplay and engaging user interaction.',
    tags: ['Unity', 'C#'],
    github: '',   // optional — paste if you push the Unity project
    demo: '',
    video: '',    // ⚠️ RECOMMENDED: record gameplay (Win+G) → YouTube → paste link
    download: '', // optional: GitHub Release page holding the .exe
    gradient: 'emerald',
    emoji: '🎮',
    details: {
      overview:
          'A 2D multiplayer game built in Unity — my first deep dive into game development, focused on controls that feel tight and rounds that flow without friction.', // ⚠️ edit to match your game
      role: 'My part: gameplay programming, UI and level design.', // ⚠️ edit
      features: [ // ⚠️ edit to match YOUR game
        'Local multiplayer with dedicated per-player controls',
        'Physics-driven movement tuned for game feel',
        'Round system with score, restart and pause flow',
        'Custom 2D levels and sprite work',
      ],
      outcome:
          'Learned the Unity editor workflow, C# gameplay scripting, and how small details — input timing, animation feel — completely change how a game plays.', // ⚠️ edit
    },
  },
  {
    title: 'Movie Recommendation System',
    description: 'Developed and optimized recommendation algorithms for personalized content delivery.',
    tags: ['Python', 'Machine Learning', 'EDA'],
    github: '',   // ⚠️ paste repo URL after pushing the code (notebook + README)
    demo: '',
    itch: '',
    video: '',
    download: '',
    gradient: 'amber',
    emoji: '🎬',
    details: {
      overview:
          'A content-based movie recommendation engine built in Python — it suggests movies similar to the one you pick, using classic machine-learning techniques on a public dataset.', // ⚠️ edit
      role: 'My part: data pipeline, similarity model and evaluation.', // ⚠️ edit
      features: [ // ⚠️ edit to match YOUR notebook
        'Content-based filtering on movie metadata',
        'Text vectorization + cosine similarity engine',
        'Exploratory data analysis of the dataset',
        'Simple query flow — pick a movie, get ranked suggestions',
      ],
      outcome:
          'Got comfortable with the full ML workflow — cleaning data, vectorizing text, computing similarity, and checking that recommendations actually make sense.', // ⚠️ edit
    },
  },
  // ── Add more cards here the same way. Only fill the links you have —
  // ── everything else stays '' and renders nothing.
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

// Scrolling tech strip shown right under the hero
export const marqueeSkills = [
  'React', 'JavaScript ES6+', 'Tailwind CSS', 'Three.js', 'TypeScript',
  'Django REST', 'Vite', 'Git & GitHub', 'Figma', 'Responsive Design',
]

// "What I do" — the services you offer (4 cards)
export const services = [
  {
    icon: '🌐',
    title: 'Web App Development',
    desc: 'Modern single-page applications with React — clean component architecture, real state management and APIs that just work.',
    tags: ['React', 'REST APIs', 'State Management'],
  },
  {
    icon: '🎨',
    title: 'UI Engineering',
    desc: 'Pixel-perfect interfaces with micro-interactions, motion and the kind of polish that makes a product feel premium.',
    tags: ['Design Systems', 'Animations', 'Polish'],
  },
  {
    icon: '📱',
    title: 'Responsive Interfaces',
    desc: 'Mobile-first layouts that adapt beautifully from a 360px phone to an ultrawide monitor — no breakpoints left behind.',
    tags: ['Mobile-first', 'Flexbox & Grid', 'Cross-browser'],
  },
  {
    icon: '⚡',
    title: 'Performance & Accessibility',
    desc: 'Fast-loading, keyboard-friendly and screen-reader-safe builds — optimized images, lazy loading and clean semantic HTML.',
    tags: ['Core Web Vitals', 'a11y', 'SEO'],
  },
]

// "My Journey" — Experience & Education timeline
// ⚠️ PLACEHOLDER — replace college/company names + dates with yours
export const timeline = [
  {
    period: '2021 — 2025',
    type: 'Education',
    title: 'B.E. — Computer Science',
    org: 'Chandigarh University, India',
    desc: 'Core CS fundamentals — data structures, algorithms, DBMS and networks — while building real projects on the side.',
  },
  {
    period: '2024',
    type: 'Offer',
    title: 'Metaverse Intern',
    org: 'Yuan Ze University, Taiwan',
    desc: 'Internship focused on developing interactive, UI-driven applications and contributing to metaverse-based projects.',
  },
  {
    period: '2024 — Present',
    type: 'Experience',
    title: 'Freelancer',
    org: 'Self-employed',
    desc: 'Working across frontend development, graphic design, and AI training, delivering responsive web experiences, creative designs, and AI-focused solutions.',
  },
  {
    period: 'Ongoing',
    type: 'Growth',
    title: 'Backend & Cloud Development',
    org: 'Continuous Learning',
    desc: 'Currently studying backend development and AWS, focusing on APIs, databases, server-side development, cloud services, and building scalable full-stack applications.',
  },
]

