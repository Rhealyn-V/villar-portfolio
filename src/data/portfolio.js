// ============================================================================
// PORTFOLIO CONTENT — single source of truth
// Edit this file to update the whole website. Placeholders are marked [LIKE THIS].
// ============================================================================

export const profile = {
  name: "Rhealyn Villar",
  title:
    "Admin Assistant | IT Support | Junior Web Developer | Tournament Organizer",
  // Rotating roles for the animated typing effect on the hero
  roles: [
    "Junior Web Developer",
    "IT Support Specialist",
    "Administrative Assistant",
    "Badminton Tournament Organizer",
    "Problem Solver",
  ],
  location: "Naic, Cavite, Philippines",
  availability: "Open to work — Full-time / Remote / Freelance",
  objective:
    "I am an aspiring Web Developer and IT Support Professional with experience in administrative support, system development, and business operations. I enjoy solving problems, creating web applications, automating business processes, and organizing badminton tournaments (GAWJUS, EBT, Father & Son). My goal is to help businesses improve efficiency through technology while expanding my expertise in software development.",
  summary:
    "Versatile IT and business-operations professional who bridges the gap between administration and technology. I combine hands-on experience in office coordination and badminton tournament organizing (GAWJUS, EBT, Father & Son) with practical web-development skills in React, PHP, and MySQL. I build systems that turn manual, paper-based processes into efficient digital workflows — from vehicle booking and inventory to payroll and point-of-sale.",
  // Contact details — fill in the real values.
  email: "villar.rhealyn.01@gmail.com",
  phone: "+63 916 625 9559",
  viber: "+63 916 625 9559",
  resumeFile: "/Rhealyn-Villar-Resume.pdf", // downloadable PDF resume (in /public)
  resumeFileDocx: "/Rhealyn-Villar-Resume.docx", // editable Word (DOCX) version (in /public)
  photo: "/mypicture.jpg",
};

export const socials = {
  github: "https://github.com/rhealyn-v",
  linkedin: "https://www.linkedin.com/in/[YOUR-LINKEDIN-USERNAME]",
  facebook: "https://www.facebook.com/[YOUR-FACEBOOK-USERNAME]",
  email: "villar.rhealyn.01@gmail.com",
  phone: "+63 916 625 9559",
  viber: "viber://chat?number=%2B639166259559",
};

// Animated statistics on the hero / about section
export const stats = [
  { label: "Years of Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 4, suffix: "+" },
  { label: "Technologies Used", value: 20, suffix: "+" },
  { label: "Systems Automated", value: 5, suffix: "+" },
];

// ---------------------------------------------------------------------------
// EXPERIENCE (timeline)
// ---------------------------------------------------------------------------
export const experience = [
  {
    role: "Treasurer Assistant",
    company: "GRJ Jaro Group of Companies",
    period: "JANUARY - MARCH 2026",
    location: "Salitran 1, Gen. Aguinaldo Highway Dasmarinas, Cavite",
    summary:
      "Supported treasury operations with cash handling, collections, and records management.",
    points: [
      "Handled cash transactions accurately and securely.",
      "Maintained financial records and supporting documentation.",
      "Managed collections and posted receipts in a timely manner.",
      "Assisted with treasury reconciliations and daily office documentation.",
    ],
  },
  {
    role: "CCTV Watcher",
    company: "GRJ Jaro Group of Companies",
    period: "JUNE - DECEMBER 2025",
    location: "Salitran 1, Gen. Aguinaldo Highway Dasmarinas, Cavite",
    summary:
      "Managed schedules, documentation, and office coordination for smooth daily operations.",
    points: [
      "Managed calendars, appointments, and scheduling for the office/management.",
      "Prepared and encoded documents, memos, and official correspondence.",
      "Coordinated between departments and external contacts to keep tasks on track.",
      "Maintained accurate records through consistent data encoding.",
    ],
  },
  {
    role: "IT Support",
    company: "Tagaytay Highlands",
    period: "MAY - AUGUST 2023",
    location: "4120 Brgy. Calabuso, Tagaytay City, Cavite",
    summary:
      "First point of contact for hardware, network, and user-support issues across the office.",
    points: [
      "Diagnosed and resolved computer, software, and peripheral issues to minimize downtime.",
      "Set up, configured, and maintained printers, workstations, and office hardware.",
      "Troubleshot network connectivity problems and supported day-to-day user needs.",
      "Monitored CCTV systems and performed routine hardware maintenance and preventive checks.",
    ],
  },
  {
    role: "Seasonal Employee",
    company: "Lazada",
    period: "OCTOBER - DECEMBER 2021",
    location: "Naic, Cavite",
    summary:
      "Provided end-to-end administrative support, keeping records, documents, and reports organized and accessible.",
    points: [
      "Managed parcel and order separation for efficient delivery operations.",
      "Utilized laptops and Excel to process transactions, track order statuses, and monitor deliveries.",
      "Coordinated with delivery riders to ensure timely and accurate dispatch of orders.",
      "Maintained accurate records and data on order processing and rider delivery and performance.",
    ],
  },
  {
    role: "Administrative Assistant",
    company: "Amaya School of Home Industries",
    period: "2019",
    location: "Sahud-Ulan Tanza, Cavite",
    summary:
      "Provided end-to-end administrative support, keeping records, documents, and reports organized and accessible.",
    points: [
      "Delivered day-to-day administrative and clerical support to keep operations running smoothly.",
      "Prepared, formatted, and maintained business documents, reports, and correspondence.",
      "Organized physical and digital filing systems for fast, reliable retrieval.",
      "Produced accurate reports and summaries using Microsoft Office (Word, Excel, PowerPoint).",
    ],
  },
];

// ---------------------------------------------------------------------------
// SERVICES
// ---------------------------------------------------------------------------
export const services = [
  {
    icon: "Code2",
    title: "Web Development",
    desc: "Responsive, modern web applications built with React, Next.js, PHP, and MySQL — from landing pages to full business systems.",
  },
  {
    icon: "Database",
    title: "Systems & Databases",
    desc: "Design and development of custom business systems: inventory, POS, payroll, and dashboards backed by MySQL or Supabase.",
  },
  {
    icon: "Trophy",
    title: "Tournament & Event Management",
    desc: "Organizing badminton tournaments (GAWJUS, EBT, Father & Son) — handling scheduling, player registrations, bracket management, and ground coordination.",
  },
  {
    icon: "Wrench",
    title: "IT Support",
    desc: "Hardware and software troubleshooting, printer and network setup, CCTV monitoring, and reliable end-user support.",
  },
  {
    icon: "Workflow",
    title: "Process Automation",
    desc: "Automating repetitive business tasks with Google Apps Script and spreadsheets to save time and reduce errors.",
  },
  {
    icon: "ClipboardList",
    title: "Administrative Support",
    desc: "Documentation, data entry, scheduling, email management, and office coordination that keep businesses organized.",
  },
];

// ---------------------------------------------------------------------------
// SKILLS (with proficiency for progress bars)
// ---------------------------------------------------------------------------
export const skillGroups = [
  {
    category: "Programming & Web",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 78 },
      { name: "Next.js", level: 68 },
      { name: "PHP", level: 75 },
      { name: "REST API", level: 72 },
    ],
  },
  {
    category: "Database & Backend",
    skills: [
      { name: "MySQL / SQL", level: 82 },
      { name: "phpMyAdmin", level: 80 },
      { name: "Supabase", level: 70 },
      { name: "Google Apps Script", level: 78 },
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      { name: "Git & GitHub", level: 75 },
      { name: "Vercel", level: 72 },
      { name: "VS Code", level: 85 },
    ],
  },
  {
    category: "Office & Productivity",
    skills: [
      { name: "Microsoft Excel", level: 90 },
      { name: "Google Sheets", level: 90 },
      { name: "Microsoft Word / Docs", level: 92 },
      { name: "PowerPoint / Forms", level: 85 },
    ],
  },
  {
    category: "Administration & Operations",
    skills: [
      { name: "Tournament Organizing", level: 90 },
      { name: "Payroll Support", level: 80 },
      { name: "HR & Documentation", level: 82 },
      { name: "Inventory & Data Entry", level: 88 },
    ],
  },
];

// Flat skill chips grouped by area (used on the Skills tag cloud)
export const skillTags = {
  Programming: [
    "PHP",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "MySQL",
    "Supabase",
    "Google Apps Script",
    "REST API",
    "Git",
    "GitHub",
    "Vercel",
  ],
  Database: ["MySQL", "SQL", "phpMyAdmin", "Supabase"],
  Office: [
    "Microsoft Excel",
    "Google Sheets",
    "Google Docs",
    "Google Forms",
    "Microsoft Word",
    "Microsoft PowerPoint",
  ],
  Administration: [
    "Tournament Organizing",
    "Payroll Support",
    "HR",
    "Inventory",
    "Documentation",
    "Email Management",
    "Data Entry",
  ],
};

export const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Fast Learner",
  "Adaptability",
  "Attention to Detail",
  "Critical Thinking",
  "Time Management",
  "Leadership",
  "Customer Service",
  "Event Organization",
];

// ---------------------------------------------------------------------------
// BADMINTON ACHIEVEMENTS & CREDENTIALS
// ---------------------------------------------------------------------------
export const badmintonAchievements = {
  organization: "CvSU Badminton Varsity Athlete",
  tournamentsOrganizedList: [
    "GAWJUS Badminton Tournament",
    "EBT Tournament",
    "Father and Son Badminton Tournament",
  ],
  tournamentsOrganizedText: "Organized Badminton Tournaments: GAWJUS, EBT Tournament, and Father & Son Badminton Tournament",
  medals: [
    {
      title: "Bronze Medalist in the Badminton Women’s Doubles",
      event: "STRASUC Olympics 2019",
      venue: "Romblon State University",
      medal: "Bronze",
      year: "2019",
    },
    {
      title: "Gold Medalist in the Badminton Women’s Singles",
      event: "STRASUC Olympics 2022",
      venue: "Southern Luzon State University",
      medal: "Gold",
      year: "2022",
    },
    {
      title: "Gold Medalist in the Badminton Women’s Doubles",
      event: "STRASUC Olympics 2022",
      venue: "Cavite State University, Indang Campus",
      medal: "Gold",
      year: "2022",
    },
    {
      title: "Silver Medalist in the Badminton Mixed Doubles",
      event: "STRASUC Olympics 2022",
      venue: "Cavite State University, Indang Campus",
      medal: "Silver",
      year: "2022",
    },
  ],
};

// Detailed Organized Tournaments with Poster, Multiple Event Photos & Details
export const organizedTournaments = [
  {
    id: "gawjus",
    title: "GAWJUS Badminton Tournament",
    subtitle: "Open Community Badminton Championship",
    role: "Lead Tournament Organizer",
    description:
      "Spearheaded end-to-end tournament management including court layout, player division seedings, single and double match scheduling, live scoring, and award ceremonies.",
    poster: "/badminton-logo.jpg",
    images: [
      "/badminton-logo.jpg",
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Community Championship",
    status: "Completed",
    highlights: [
      "Player Registration & Division Seedings",
      "Automated Match Bracket System",
      "Court Allocation & Umpire Coordination",
      "Trophies & Award Ceremonies",
    ],
  },
  {
    id: "ebt",
    title: "EBT Badminton Tournament",
    subtitle: "Regional Badminton Invitational",
    role: "Head Organizer & Ground Coordinator",
    description:
      "Organized competitive badminton matches across multiple skill levels (Level A, B, C, Open). Directed match flow, court allocation, and registration desk operations.",
    poster: "https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1613918108466-292b78a8ef95?auto=format&fit=crop&w=800&q=80",
      "/badminton-logo.jpg",
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Regional Invitational",
    status: "Completed",
    highlights: [
      "Multi-Category Division Setup",
      "Real-Time Match Scoreboard",
      "Sponsor & Venue Coordination",
      "Official Player Leaderboards",
    ],
  },
  {
    id: "father-son",
    title: "Father and Son Badminton Tournament",
    subtitle: "Special Family Doubles Cup",
    role: "Event Founder & Tournament Manager",
    description:
      "Conceptualized and executed a memorable family doubles tournament promoting sportsmanship, family bonding, and healthy competition between fathers and their sons.",
    poster: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
      "/badminton-logo.jpg",
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    ],
    category: "Family Event",
    status: "Completed",
    highlights: [
      "Family Doubles Format Setup",
      "Custom Medals & Keepsake Trophies",
      "Match Schedules & Bracket Displays",
      "Community & Youth Engagement",
    ],
  },
];

// ---------------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------------
export const projects = [
  {
    title: "CHEM Transport Management System",
    tagline: "All-in-one fleet, booking & operations platform for a transport business.",
    description:
      "A comprehensive transport-management platform that digitizes the entire operation — from vehicle booking and trip management to payroll, fleet maintenance, and driver scheduling — with role-based access for every team member.",
    stack: ["React", "PHP", "MySQL"],
    status: "Completed",
    logo: "/chem-logo.png",
    loginImage: "/chem-login.jpg",
    image: "/chem-login.jpg",
    features: [
      "Vehicle Booking",
      "Trip Management",
      "Fuel Log",
      "Maintenance",
      "Payroll",
      "Fleet Management",
      "Reports",
      "Dashboard",
      "Calendar",
      "CRM",
      "Driver Management",
      "Role-based Access",
    ],
    category: "Full-Stack System",
    accent: "primary",
    liveUrl: "https://chemtouristandtransport.netlify.app",
    repoUrl: "",
  },
  {
    title: "CDSC Industrial Supply",
    tagline: "Industrial inventory, ordering & client management portal.",
    description:
      "An industrial supply management system built to digitize equipment tracking, maintenance schedules, sales orders, and client interactions with automated stock reporting.",
    stack: ["React", "PHP", "MySQL"],
    status: "Completed",
    logo: "/cdsc-logo.jpg",
    loginImage: "/cdsc-login.jpg",
    image: "/cdsc-login.jpg",
    features: [
      "Inventory",
      "Trip Management",
      "Maintenance",
      "Reports",
      "Dashboard",
      "Calendar",
      "CRM",
      "Role-based Access",
    ],
    category: "Full-Stack System",
    accent: "primary",
    liveUrl: "https://cdscindustrialsupply.netlify.app",
    repoUrl: "",
  },
  {
    title: "Bluescale Inventory Management System",
    tagline: "Smart stock control with barcode, SKU tracking, and analytics.",
    description:
      "An inventory-management system that gives businesses real-time visibility into stock levels, suppliers, purchases, and sales — complete with barcode/SKU support and reporting dashboards.",
    stack: ["React", "PHP", "MySQL"],
    status: "In Progress",
    logo: "/bluescale-logo.png",
    loginImage: "/bluescale-login.jpg",
    image: "/bluescale-login.jpg",
    features: [
      "Inventory",
      "Suppliers",
      "Purchases",
      "Sales",
      "Dashboard",
      "Reports",
      "Barcode",
      "SKU",
      "Stock Monitoring",
    ],
    category: "Business System",
    accent: "secondary",
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "Payroll Management System",
    tagline: "Automated payroll system using Google Sheets & Apps Script.",
    description:
      "A completed payroll management system that automates attendance tracking, payslip generation, and statutory contributions (SSS, PhilHealth, Pag-IBIG) powered by Google Sheets and Google Apps Script automation.",
    stack: ["Google Sheets", "Google Apps Script"],
    status: "Completed",
    logo: "FileSpreadsheet",
    loginImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    image: "",
    features: [
      "Attendance Tracking",
      "Payslip Generation",
      "SSS Contribution",
      "PhilHealth",
      "Pag-IBIG",
      "Payroll Reports",
      "Google Sheets Integration",
      "Apps Script Automation",
    ],
    category: "Automation",
    accent: "primary",
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "Badminton Management System",
    tagline: "Tournament bracket manager, player registration & match system.",
    description:
      "A dedicated sports management platform built to streamline badminton tournament operations — featuring player registrations, automated match scheduling, bracket generation, court management, and scoreboards.",
    stack: ["React", "PHP", "MySQL"],
    status: "In Progress",
    logo: "/badminton-logo.jpg",
    loginImage: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    features: [
      "Player Registration",
      "Match Scheduling",
      "Bracket Generator",
      "Score Tracking",
      "Court Allocation",
      "Tournament Reports",
      "Leaderboards",
    ],
    category: "Sports & Management",
    accent: "accent",
    liveUrl: "",
    repoUrl: "",
  },
];

// ---------------------------------------------------------------------------
// EDUCATION
// ---------------------------------------------------------------------------
export const education = [
  {
    level: "College",
    degree: "Bachelor of Science in Information Technology",
    school: "Cavite State University – Indang, Cavite",
    period: "2019 – 2025",
    location: "Indang, Cavite",
    details: "Specialized in Web Development, Software Engineering & Systems Administration.",
  },
  {
    level: "Senior High School",
    degree: "TVL – Computer Systems Servicing (CSS)",
    school: "Amaya School of Home Industries – Tanza, Cavite",
    period: "2017 – 2019",
    location: "Tanza, Cavite",
    details: "NC II Certified Passer in Computer Systems Servicing.",
  },
  {
    level: "Junior High School",
    degree: "Junior High School Diploma",
    school: "Cavite Community Academy Inc. – Naic, Cavite",
    period: "2013 – 2017",
    location: "Naic, Cavite",
    details: "Recipient of Best in Computer Award (2016).",
  },
];

// ---------------------------------------------------------------------------
// CERTIFICATIONS
// ---------------------------------------------------------------------------
export const certifications = [
  {
    title: "BEST IN COMPUTER",
    issuer: "CAVITE COMMUNITY ACADEMY INC.",
    date: "2016",
    credentialUrl: "",
  },
  {
    title: "NC II PASSER: COMPUTER SERVICING SYSTEM",
    issuer: "TESDA - TECHNICAL EDUCATION AND SKILLS DEVELOPMENT AUTHORITY",
    date: "2018",
    credentialUrl: "https://drive.google.com/file/d/1TqKaxmnD3lC-xyy-AuKSW4r3h66caVOV/view?usp=sharing",
  },
];

export const achievements = [
  "Organized Badminton Tournaments: GAWJUS Badminton Tournament, EBT Tournament, and Father and Son Badminton Tournament.",
  "CvSU Badminton Varsity Athlete: Multi-Medalist (Gold, Silver, Bronze) across 2019 & 2022 STRASUC Olympics.",
  "Designed and delivered multiple full-stack business systems (transport, inventory, POS, and payroll) from concept to deployment.",
  "Automated manual payroll and reporting processes using Google Apps Script, reducing processing time and human error.",
  "Bridged administrative and technical roles — improving operational efficiency through custom digital tools.",
];

// ---------------------------------------------------------------------------
// TESTIMONIALS
// ---------------------------------------------------------------------------
export const testimonials = [
  {
    quote:
      "Rhealyn is an exceptionally reliable team member who bridges technical system development with smooth office operations.",
    name: "Management Team",
    role: "GRJ Jaro Group of Companies",
  },
];
