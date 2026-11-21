// ============================================================================
// PORTFOLIO CONTENT — single source of truth for everything on the site.
// Search this file for "TODO" to find the details only you can fill in.
// Site-wide config (SEO, socials, contact) lives in ./site.js.
// ============================================================================

import { isRealUrl } from "./site";

export const profile = {
  name: "Rhealyn Villar",
  photo: { src: "/images/profile.webp", width: 560, height: 560 },
  // Rotating words in the hero typewriter ("I'm a/an …" is computed per word).
  roles: ["Web Developer", "Systems Builder", "IT Support Specialist"],
  // Short About blurb — the ONE place badminton is mentioned outside its own section.
  about:
    "My path into development started in day-to-day operations: admin work, IT support, records, and dispatch. That's why I build systems that remove manual steps instead of adding more screens. Outside of work I'm a CvSU varsity badminton medalist who also organizes community tournaments.",
  // Used on the /resume page.
  summary:
    "Junior web developer focused on business systems and automation. I build web applications with React, PHP, and MySQL and automate workflows with Google Apps Script. Hands-on experience in administrative support, IT support, and operations means the systems I build solve real day-to-day problems.",
  degree: "BS Information Technology, Cavite State University",
  resumeFile: "/Rhealyn-Villar-Resume.pdf", // generated from the /resume page
  // TODO: the old Word resume still had "Bookkeeping Assistant" and [PLACEHOLDER]
  // text, so its download link is hidden. Re-export an updated .docx to /public
  // and put its path here (e.g. "/Rhealyn-Villar-Resume.docx") to show it again.
  resumeFileDocx: "",
};

// ---------------------------------------------------------------------------
// PROJECTS — counts on the site are computed from this array.
// Card shows: status, outcome, 3–4 keyFeatures, stack icons, working buttons.
// ---------------------------------------------------------------------------
export const projects = [
  {
    slug: "chem-transport",
    title: "CHEM Transport Management System",
    category: "Full-stack system",
    status: "Completed",
    featured: true,
    outcome: "Bookings, trips, fleet upkeep, and payroll in one role-based system.",
    description:
      "A transport-management platform that digitizes daily operations — vehicle booking, trip management, fleet maintenance, driver scheduling, and payroll — with role-based access for every team member.",
    logo: { src: "/images/logos/chem.webp", width: 160, height: 160 },
    cover: { src: "/projects/chem-transport/login.webp", width: 1024, height: 487, alt: "CHEM Transport Operations Platform sign-in screen" },
    stack: ["React", "PHP", "MySQL"],
    keyFeatures: [
      "Vehicle booking & trip management",
      "Fleet, fuel & maintenance logs",
      "Driver management & payroll",
      "Role-based access",
    ],
    liveUrl: "https://chemtouristandtransport.netlify.app",
    // TODO: add the GitHub repo URL if it's public (button stays hidden while empty)
    repoUrl: "",
    // TODO: create a DEMO-ONLY account (never a real client login) and fill this in,
    // e.g. { username: "demo@example.com", password: "demo1234" }. While null, the
    // site says credentials are available on request.
    demoCredentials: null,
    caseStudy: {
      problem: [
        "Day-to-day transport operations — vehicle bookings, trips, fuel, maintenance, driver schedules, and payroll — needed to move off manual records and into one system that each team member could use for their own part of the job.",
        // TODO: add specifics — how was this tracked before (paper logbooks? spreadsheets?) and what problems did that cause?
      ],
      role: [
        "Designed and built the platform end to end.",
        // TODO: confirm your scope — solo or team? requirements gathering, database design, deployment, training users?
      ],
      modules: [
        { name: "Booking & trips", items: ["Vehicle booking", "Trip management", "Calendar"] },
        { name: "Fleet", items: ["Fleet management", "Fuel log", "Maintenance records"] },
        { name: "People", items: ["Driver management", "Payroll"] },
        { name: "Business view", items: ["Dashboard", "Reports", "CRM"] },
        { name: "Security", items: ["Role-based access for each user type"] },
      ],
      architecture: [
        "React front end",
        "PHP back end with a MySQL database",
        "Role-based access control across modules",
        "Front end deployed on Netlify",
        // TODO: verify/expand — REST API? where is the PHP back end hosted? auth approach?
      ],
      screenshots: [
        { src: "/projects/chem-transport/login.webp", width: 1024, height: 487, caption: "Sign-in screen (credentials redacted)" },
        // TODO: add real screenshots to /public/projects/chem-transport/ and set `src`, `width`, `height`
        { src: "", caption: "Operations dashboard" },
        { src: "", caption: "Booking & trip management" },
        { src: "", caption: "Fleet maintenance & fuel log" },
      ],
      results: [
        "Deployed and available as a live demo.",
        "Brings 12 operational features into a single role-based system.",
        // TODO: add measured results, e.g. "cut trip-booking time from X to Y" or "replaced N paper logbooks"
      ],
      next: [
        // TODO: review — these are suggestions; keep, edit, or replace with your own
        "Add automated tests around booking and payroll calculations.",
        "Add an audit log showing who changed what and when.",
        "Build a mobile-first driver view for trip updates.",
      ],
    },
  },
  {
    slug: "cdsc-industrial-supply",
    title: "CDSC Industrial Supply",
    category: "Inventory & client portal",
    status: "Completed",
    outcome: "Inventory, orders, and client records in one portal with automated stock reports.",
    description:
      "An industrial supply management system and client portal that digitizes inventory tracking, sales orders, and client interactions, with automated stock reporting.",
    logo: { src: "/images/logos/cdsc.webp", width: 160, height: 160 },
    cover: { src: "/projects/cdsc-industrial-supply/login.webp", width: 1024, height: 488, alt: "CDSC Industrial Supply sign-in screen" },
    stack: ["React", "PHP", "MySQL"],
    keyFeatures: ["Inventory tracking", "Sales orders & CRM", "Automated stock reports", "Role-based access"],
    liveUrl: "https://cdscindustrialsupply.netlify.app",
    repoUrl: "", // TODO: add repo URL if public
    demoCredentials: null, // TODO: demo-only account (see CHEM note above)
    caseStudy: {
      problem: [
        "An industrial supplier needed one place to track inventory, handle sales orders, and keep client records, instead of piecing stock levels and order history together by hand.",
        // TODO: add specifics about how this was handled before and what it cost the business
      ],
      role: [
        "Designed and built the management system and client portal.",
        // TODO: confirm your scope and who you worked with
      ],
      modules: [
        { name: "Inventory", items: ["Stock tracking", "Automated stock reports"] },
        { name: "Sales & clients", items: ["Sales orders", "CRM / client records", "Client portal"] },
        { name: "Overview", items: ["Dashboard", "Reports", "Calendar"] },
        { name: "Security", items: ["Role-based access"] },
      ],
      architecture: [
        "React front end",
        "PHP back end with a MySQL database",
        "Front end deployed on Netlify",
        // TODO: verify/expand architecture details
      ],
      screenshots: [
        { src: "/projects/cdsc-industrial-supply/login.webp", width: 1024, height: 488, caption: "Sign-in screen (credentials redacted)" },
        // TODO: add real screenshots to /public/projects/cdsc-industrial-supply/
        { src: "", caption: "Inventory dashboard" },
        { src: "", caption: "Sales order flow" },
        { src: "", caption: "Stock report" },
      ],
      results: [
        "Deployed and available as a live demo.",
        // TODO: add measured results, e.g. "stock counts now take X minutes instead of Y hours"
      ],
      next: [
        // TODO: review these suggestions
        "Low-stock alerts sent by email.",
        "Barcode scanning for faster stock-in and stock-out.",
      ],
    },
  },
  {
    slug: "bluescale-inventory",
    title: "Bluescale Inventory Management System",
    category: "Business system",
    status: "In Progress",
    outcome: "A real-time view of stock, suppliers, purchases, and sales.",
    description:
      "An inventory-management system that gives a trading business real-time visibility into stock levels, suppliers, purchases, and sales, with barcode/SKU support and reporting dashboards.",
    logo: { src: "/images/logos/bluescale.webp", width: 160, height: 160 },
    cover: { src: "/projects/bluescale-inventory/login.webp", width: 1024, height: 488, alt: "Bluescale sign-in screen" },
    stack: ["React", "PHP", "MySQL"],
    keyFeatures: ["Barcode & SKU stock monitoring", "Suppliers & purchases", "Sales tracking", "Reporting dashboard"],
    liveUrl: "",
    repoUrl: "",
    demoCredentials: null,
    caseStudy: null,
  },
  {
    slug: "tres-prime-drive",
    title: "TRES Prime Drive",
    category: "Automation",
    status: "Completed",
    outcome: "Turns spreadsheet tracking into automated workflows and reports.",
    description:
      "A business automation system built on Google Sheets and Google Apps Script that streamlines operational workflows, data tracking, and reporting.",
    logo: null,
    cover: null,
    stack: ["Google Sheets", "Google Apps Script"],
    keyFeatures: ["Apps Script automated workflows", "Centralized data in Google Sheets", "Reporting dashboards"],
    liveUrl: "",
    repoUrl: "",
    demoCredentials: null,
    caseStudy: null, // TODO: add a case study (same shape as CHEM) once you have screenshots
  },
  {
    slug: "badminton-management",
    title: "Badminton Management System",
    category: "Sports operations",
    status: "In Progress",
    outcome: "Tournament registration, scheduling, brackets, and scoring in one app.",
    description:
      "A sports-management app for badminton tournaments: player registration, match scheduling, bracket generation, court allocation, and score tracking.",
    logo: { src: "/images/logos/badminton.webp", width: 149, height: 160 },
    cover: null,
    stack: ["React", "PHP", "MySQL"],
    keyFeatures: ["Player registration", "Match scheduling & brackets", "Score tracking & leaderboards", "Court allocation"],
    liveUrl: "",
    repoUrl: "",
    demoCredentials: null,
    caseStudy: null,
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

// ---------------------------------------------------------------------------
// SKILLS — grouped by how often I use them (no percentage bars).
// TODO: review tier placement; this was mapped from the old self-ratings.
// type: "tech" skills feed the "Technologies" stat.
// ---------------------------------------------------------------------------
export const skillTiers = [
  {
    tier: "Daily use",
    note: "Part of my everyday work.",
    skills: [
      { name: "HTML & CSS", type: "tech" },
      { name: "VS Code", type: "tech" },
      { name: "Microsoft Excel", type: "office" },
      { name: "Google Sheets", type: "office" },
      { name: "Word / Google Docs", type: "office" },
      { name: "PowerPoint / Google Forms", type: "office" },
      { name: "Documentation & data entry", type: "ops" },
      { name: "Inventory records", type: "ops" },
    ],
  },
  {
    tier: "Comfortable",
    note: "Used to build real projects.",
    skills: [
      { name: "JavaScript", type: "tech" },
      { name: "React", type: "tech" },
      { name: "PHP", type: "tech" },
      { name: "MySQL / SQL", type: "tech" },
      { name: "phpMyAdmin", type: "tech" },
      { name: "REST APIs", type: "tech" },
      { name: "Google Apps Script", type: "tech" },
      { name: "Git & GitHub", type: "tech" },
      { name: "Vercel / Netlify", type: "tech" },
      { name: "Hardware & network troubleshooting", type: "ops" },
      { name: "HR documentation", type: "ops" },
    ],
  },
  {
    tier: "Learning",
    note: "Actively building experience.",
    skills: [
      { name: "Next.js", type: "tech" },
      { name: "Supabase", type: "tech" },
    ],
  },
];

export const softSkills = [
  "Problem solving",
  "Communication",
  "Teamwork",
  "Fast learner",
  "Adaptability",
  "Time management",
  "Customer service",
];

// ---------------------------------------------------------------------------
// STATS — computed, so the numbers can never disagree with the content.
// ---------------------------------------------------------------------------
export const stats = [
  // TODO: verify — your roles span 2019–2026 with gaps; adjust if needed.
  { label: "Years of work experience", value: 3, suffix: "+" },
  { label: "Projects built", value: projects.length },
  { label: "Live deployments", value: projects.filter((p) => isRealUrl(p.liveUrl)).length },
  {
    label: "Technologies used",
    value: skillTiers.flatMap((t) => t.skills).filter((s) => s.type === "tech").length,
  },
];

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------
export const services = [
  {
    icon: "code",
    title: "Web Development",
    desc: "Responsive web applications built with React, PHP, and MySQL — from a simple site to a full business system.",
  },
  {
    icon: "database",
    title: "Business Systems & Databases",
    desc: "Custom systems for booking, inventory, payroll, and dashboards, backed by a well-structured MySQL database.",
  },
  {
    icon: "workflow",
    title: "Process Automation",
    desc: "Automating repetitive tasks with Google Apps Script and spreadsheets to save time and cut manual errors.",
  },
  {
    icon: "wrench",
    title: "IT Support",
    desc: "Hardware and software troubleshooting, printer and network setup, and dependable end-user support.",
  },
  {
    icon: "clipboard",
    title: "Admin & Operations Support",
    desc: "Documentation, data entry, scheduling, records, and reporting that keep an office organized.",
  },
];

// ---------------------------------------------------------------------------
// EXPERIENCE — reverse chronological. Lead bullet = most tech/ops-relevant.
// ---------------------------------------------------------------------------
export const experience = [
  {
    role: "Treasurer Assistant",
    company: "GRJ Jaro Group of Companies",
    period: "Jan – Mar 2026",
    location: "Dasmariñas, Cavite",
    summary: "Supported treasury operations with cash handling, collections, and records management.",
    points: [
      "Maintained financial records and supporting documentation.",
      "Assisted with treasury reconciliations and daily office documentation.",
      "Managed collections and posted receipts in a timely manner.",
      "Handled cash transactions accurately and securely.",
    ],
  },
  {
    // TODO: verify duties — the bullets below describe scheduling/memo work that
    // may not match a CCTV Watcher role. Facts left unchanged until you confirm.
    role: "CCTV Watcher",
    company: "GRJ Jaro Group of Companies",
    period: "Jun – Dec 2025",
    location: "Dasmariñas, Cavite",
    summary: "Managed schedules, documentation, and office coordination for smooth daily operations.",
    points: [
      "Maintained accurate records through consistent data encoding.",
      "Managed calendars, appointments, and scheduling for the office/management.",
      "Prepared and encoded documents, memos, and official correspondence.",
      "Coordinated between departments and external contacts to keep tasks on track.",
    ],
  },
  {
    role: "IT Support",
    company: "Tagaytay Highlands",
    period: "May – Aug 2023",
    location: "Tagaytay City, Cavite",
    summary: "First point of contact for hardware, network, and user-support issues across the office.",
    points: [
      "Diagnosed and resolved computer, software, and peripheral issues to minimize downtime.",
      "Troubleshot network connectivity problems and supported day-to-day user needs.",
      "Set up, configured, and maintained printers, workstations, and office hardware.",
      "Tracked CCTV repair reports and performed routine hardware maintenance and preventive checks.",
    ],
  },
  {
    role: "Seasonal Employee",
    company: "Lazada",
    period: "Oct – Dec 2021",
    location: "Naic, Cavite",
    summary: "Supported parcel sorting, order tracking, and rider dispatch during peak season.",
    points: [
      "Used Excel to process transactions, track order statuses, and monitor deliveries.",
      "Maintained records on order processing and rider delivery performance.",
      "Coordinated with delivery riders to ensure timely and accurate dispatch of orders.",
      "Managed parcel and order separation for efficient delivery operations.",
    ],
  },
  {
    role: "Administrative Assistant",
    company: "Amaya School of Home Industries",
    period: "2019",
    location: "Tanza, Cavite",
    summary: "Provided administrative support, keeping records, documents, and reports organized and accessible.",
    points: [
      "Produced reports and summaries using Microsoft Office (Word, Excel, PowerPoint).",
      "Organized physical and digital filing systems for fast, reliable retrieval.",
      "Prepared, formatted, and maintained business documents, reports, and correspondence.",
      "Delivered day-to-day administrative and clerical support.",
    ],
  },
];

// ---------------------------------------------------------------------------
// LEADERSHIP & SPORTS
// ---------------------------------------------------------------------------
export const athletics = {
  headline: "CvSU Badminton Varsity Athlete",
  detail: "STRASUC Olympics — Cavite State University",
  medals: [
    { medal: "Gold", title: "Women's Singles", event: "STRASUC Olympics 2022", venue: "Southern Luzon State University", year: "2022" },
    { medal: "Gold", title: "Women's Doubles", event: "STRASUC Olympics 2022", venue: "Cavite State University, Indang", year: "2022" },
    { medal: "Silver", title: "Mixed Doubles", event: "STRASUC Olympics 2022", venue: "Cavite State University, Indang", year: "2022" },
    { medal: "Bronze", title: "Women's Doubles", event: "STRASUC Olympics 2019", venue: "Romblon State University", year: "2019" },
  ],
};

// How organizing tournaments maps to project management.
export const organizingSkills = [
  { title: "Scheduling", text: "Match schedules, court allocation, and seeding across divisions." },
  { title: "Registration", text: "Player registration desks, skill-level divisions, and records." },
  { title: "Logistics", text: "Venue, sponsors, umpires, trophies, and medals." },
  { title: "Live operations", text: "Running match flow and scoring on the day, and fixing problems in real time." },
];

export const organizedTournaments = [
  {
    id: "gawjus",
    title: "GAWJUS Badminton Tournament",
    subtitle: "Open community championship",
    role: "Lead Tournament Organizer",
    description:
      "Ran the tournament end to end: court layout, division seeding, singles and doubles scheduling, live scoring, and the awards ceremony.",
    // TODO: verify highlights; add real event photos (stock images were removed)
    highlights: ["Registration & seeding", "Bracket management", "Court & umpire coordination", "Awards ceremony"],
    images: [{ src: "/images/tournaments/gawjus-poster.webp", width: 483, height: 517, alt: "GAWJUS Badminton Tournament logo" }],
    thumb: { src: "/images/tournaments/gawjus-poster-sm.webp", width: 480, height: 514 },
  },
  {
    id: "ebt",
    title: "EBT Badminton Tournament",
    subtitle: "Regional invitational",
    role: "Head Organizer & Ground Coordinator",
    description:
      "Organized matches across Level A, B, C, and Open divisions and directed match flow, court allocation, and the registration desk.",
    // TODO: verify highlights; add event photos
    highlights: ["Multi-division setup", "Live scoreboard", "Sponsor & venue coordination", "Player standings"],
    images: [{ src: "/images/tournaments/ebt-poster.webp", width: 706, height: 1000, alt: "EBT Badminton Tournament poster" }],
    thumb: { src: "/images/tournaments/ebt-poster-sm.webp", width: 480, height: 680 },
  },
  {
    id: "play-with-dad",
    title: "Play with Dad",
    subtitle: "Father's Day badminton camp & mini tournament",
    role: "Event Founder & Tournament Manager",
    description:
      "Conceived and ran a family doubles camp and mini tournament for fathers and their kids, from format design to medals.",
    highlights: ["Family doubles format", "Custom medals & trophies", "Schedules & bracket displays", "Youth engagement"],
    images: [
      { src: "/images/tournaments/play-with-dad-poster.webp", width: 800, height: 1000, alt: "Play with Dad event poster" },
      { src: "/images/tournaments/play-with-dad-1.webp", width: 1000, height: 750, alt: "Play with Dad event photo 1" },
      { src: "/images/tournaments/play-with-dad-2.webp", width: 1000, height: 750, alt: "Play with Dad event photo 2" },
      { src: "/images/tournaments/play-with-dad-3.webp", width: 750, height: 1000, alt: "Play with Dad event photo 3" },
      { src: "/images/tournaments/play-with-dad-4.webp", width: 750, height: 1000, alt: "Play with Dad event photo 4" },
    ],
    thumb: { src: "/images/tournaments/play-with-dad-poster-sm.webp", width: 480, height: 600 },
  },
];

// ---------------------------------------------------------------------------
// EDUCATION & CERTIFICATIONS
// ---------------------------------------------------------------------------
export const education = [
  {
    level: "College",
    degree: "Bachelor of Science in Information Technology",
    school: "Cavite State University – Indang, Cavite",
    period: "2019 – 2025",
    details: "Specialized in Web Development, Software Engineering & Systems Administration.",
  },
  {
    level: "Senior High School",
    degree: "TVL – Computer Systems Servicing (CSS)",
    school: "Amaya School of Home Industries – Tanza, Cavite",
    period: "2017 – 2019",
    details: "NC II Certified Passer in Computer Systems Servicing.",
  },
  {
    level: "Junior High School",
    degree: "Junior High School Diploma",
    school: "Cavite Community Academy Inc. – Naic, Cavite",
    period: "2013 – 2017",
    details: "Recipient of Best in Computer Award (2016).",
  },
];

export const certifications = [
  {
    title: "Computer Systems Servicing NC II",
    issuer: "TESDA — Technical Education and Skills Development Authority",
    date: "2018",
    credentialUrl: "https://drive.google.com/file/d/1TqKaxmnD3lC-xyy-AuKSW4r3h66caVOV/view?usp=sharing",
  },
  {
    title: "Best in Computer Award",
    issuer: "Cavite Community Academy Inc.",
    date: "2016",
    credentialUrl: "",
  },
];

// Resume "Key highlights" — every claim maps to something shown on the site.
export const achievements = [
  "Designed and built business systems for transport operations (CHEM) and industrial supply (CDSC), both deployed as live demos.",
  "Automated tracking and reporting workflows (TRES Prime Drive) with Google Apps Script and Google Sheets.",
  "Organized three badminton tournaments (GAWJUS, EBT, Play with Dad), covering scheduling, registration, logistics, and live operations.",
  "CvSU varsity badminton athlete: gold, silver, and bronze medals at the 2019 and 2022 STRASUC Olympics.",
];
