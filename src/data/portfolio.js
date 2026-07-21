// ============================================================================
// PORTFOLIO CONTENT — single source of truth
// Edit this file to update the whole website. Placeholders are marked [LIKE THIS].
// ============================================================================

export const profile = {
  name: "Rhealyn Villar",
  title:
    "Admin Assistant | IT Support | Junior Web Developer | Bookkeeping Assistant",
  // Rotating roles for the animated typing effect on the hero
  roles: [
    "Junior Web Developer",
    "IT Support Specialist",
    "Administrative Assistant",
    "Bookkeeping Assistant",
    "Problem Solver",
  ],
  location: "Naic, Cavite, Philippines",
  availability: "Open to work — Full-time / Remote / Freelance",
  objective:
    "I am an aspiring Web Developer and Bookkeeping Professional with experience in administrative support, IT support, system development, and business operations. I enjoy solving problems, creating web applications, automating business processes, and continuously learning new technologies. My goal is to help businesses improve efficiency through technology while expanding my expertise in software development and accounting systems.",
  summary:
    "Versatile IT and business-operations professional who bridges the gap between administration and technology. I combine hands-on experience in bookkeeping, billing, and office coordination with practical web-development skills in React, PHP, and MySQL. I build systems that turn manual, paper-based processes into efficient digital workflows — from vehicle booking and inventory to payroll and point-of-sale.",
  // Contact details — fill in the real values.
  email: "villar.rhealyn.01@gmail.com",
  phone: "+63 916 625 9559",
  resumeFile: "/Rhealyn-Villar-Resume.pdf", // downloadable PDF resume (in /public)
  resumeFileDocx: "/Rhealyn-Villar-Resume.docx", // editable Word (DOCX) version (in /public)
  photo: "/mypicture.jpg",
};

export const socials = {
  github: "https://github.com/rhealyn-v", // [VERIFY / UPDATE YOUR GITHUB URL]
  linkedin: "https://www.linkedin.com/in/[YOUR-LINKEDIN-USERNAME]",
  facebook: "https://www.facebook.com/[YOUR-FACEBOOK-USERNAME]",
  email: "villar.rhealyn.01@gmail.com",
  phone: "+63 916 625 9559",
};

// Animated statistics on the hero / about section
export const stats = [
  { label: "Years of Experience", value: 3, suffix: "+" }, // [ADJUST]
  { label: "Projects Completed", value: 4, suffix: "+" },
  { label: "Technologies Used", value: 20, suffix: "+" },
  { label: "Systems Automated", value: 5, suffix: "+" }, // [ADJUST]
];

// ---------------------------------------------------------------------------
// EXPERIENCE (timeline)
// ---------------------------------------------------------------------------
export const experience = [
  {
    role: "Administrative Assistant",
    company: "Amaya School of Home Industries",
    period: "[START – END]",
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
  {
    role: "IT Support",
    company: "Tagaytay Highlands",
    period: "[START – END]",
    location: "[LOCATION]",
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
    role: "Secretary",
    company: "[COMPANY NAME]",
    period: "[START – END]",
    location: "[LOCATION]",
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
    role: "Billing Officer",
    company: "[COMPANY NAME]",
    period: "[START – END]",
    location: "[LOCATION]",
    summary:
      "Owned billing preparation and payment monitoring while safeguarding customer records.",
    points: [
      "Prepared and issued accurate billing statements and invoices.",
      "Maintained up-to-date customer records and account information.",
      "Monitored payments, followed up on balances, and reconciled discrepancies.",
      "Generated billing and collection reports for management review.",
    ],
  },
  {
    role: "Treasurer Assistant",
    company: "[COMPANY NAME]",
    period: "[START – END]",
    location: "[LOCATION]",
    summary:
      "Supported treasury operations with cash handling, collections, and basic bookkeeping.",
    points: [
      "Handled cash transactions accurately and securely.",
      "Maintained financial records and supporting documentation.",
      "Managed collections and posted receipts in a timely manner.",
      "Performed basic bookkeeping tasks and assisted with financial reconciliations.",
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
    icon: "Calculator",
    title: "Bookkeeping & Billing",
    desc: "Accurate bookkeeping, billing, payroll support, and financial record-keeping using Excel, Google Sheets, and accounting tools.",
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
// SKILLS (with proficiency for progress bars — adjust levels as you like)
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
    category: "Administration & Finance",
    skills: [
      { name: "Bookkeeping", level: 85 },
      { name: "Payroll", level: 80 },
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
    "Bookkeeping",
    "Payroll",
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
];

// ---------------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------------
export const projects = [
  {
    title: "CHEM Transport Management System",
    tagline: "All-in-one fleet, booking & accounting platform for a transport business.",
    description:
      "A comprehensive transport-management platform that digitizes the entire operation — from vehicle booking and trip management to payroll, fleet maintenance, and accounting — with role-based access for every team member.",
    stack: ["React", "PHP", "MySQL"],
    features: [
      "Vehicle Booking",
      "Trip Management",
      "Fuel Log",
      "Maintenance",
      "Payroll",
      "Fleet Management",
      "Reports",
      "Dashboard",
      "Accounting",
      "Calendar",
      "CRM",
      "Driver Management",
      "Role-based Access",
    ],
    category: "Full-Stack System",
    accent: "primary",
    liveUrl: "", // [ADD LIVE DEMO LINK]
    repoUrl: "", // [ADD GITHUB REPO LINK]
    image: "", // optional: path to a screenshot in /public
  },
  {
    title: "Bluescale Inventory Management System",
    tagline: "Smart stock control with barcode, SKU tracking, and analytics.",
    description:
      "An inventory-management system that gives businesses real-time visibility into stock levels, suppliers, purchases, and sales — complete with barcode/SKU support and reporting dashboards for confident decisions.",
    stack: ["React", "PHP", "MySQL"],
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
    image: "",
  },
  {
    title: "RBJ POS System",
    tagline: "Fast, reliable point-of-sale with receipts and reporting.",
    description:
      "A point-of-sale system built for speed and accuracy at the counter — handling sales, inventory, and customer management with receipt printing and end-of-day reports.",
    stack: ["React", "PHP", "MySQL"],
    features: [
      "Point of Sale",
      "Inventory",
      "Sales",
      "Customer Management",
      "Receipt Printing",
      "Reports",
    ],
    category: "Point of Sale",
    accent: "accent",
    liveUrl: "",
    repoUrl: "",
    image: "",
  },
  {
    title: "Payroll Management System",
    tagline: "Automated payroll with government contributions & payslips.",
    description:
      "A payroll system that automates attendance tracking, payslip generation, and Philippine statutory contributions (SSS, PhilHealth, Pag-IBIG) — powered by Google Sheets and Apps Script automation.",
    stack: ["Google Sheets", "Google Apps Script"],
    features: [
      "Attendance",
      "Payslip",
      "SSS",
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
    image: "",
  },
];

// ---------------------------------------------------------------------------
// EDUCATION
// ---------------------------------------------------------------------------
export const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "[SCHOOL / UNIVERSITY NAME]",
    period: "[START YEAR – END YEAR]",
    location: "[LOCATION]",
    details: "[Relevant honors, thesis, or focus areas — optional]",
  },
];

// ---------------------------------------------------------------------------
// CERTIFICATIONS — easy to update; add new objects to this array
// ---------------------------------------------------------------------------
export const certifications = [
  {
    title: "[CERTIFICATION TITLE]",
    issuer: "[ISSUING ORGANIZATION]",
    date: "[MONTH YEAR]",
    credentialUrl: "", // optional link to certificate
  },
  {
    title: "[CERTIFICATION TITLE]",
    issuer: "[ISSUING ORGANIZATION]",
    date: "[MONTH YEAR]",
    credentialUrl: "",
  },
];

export const achievements = [
  "Designed and delivered multiple full-stack business systems (transport, inventory, POS, and payroll) from concept to deployment.",
  "Automated manual payroll and reporting processes using Google Apps Script, reducing processing time and human error.",
  "Bridged administrative and technical roles — improving business efficiency through custom digital tools.",
  "[ADD A MEASURABLE ACHIEVEMENT, e.g. 'Reduced monthly billing errors by X%']",
];

// ---------------------------------------------------------------------------
// TESTIMONIALS (placeholder — replace with real quotes)
// ---------------------------------------------------------------------------
export const testimonials = [
  {
    quote:
      "[Add a testimonial from a manager, client, or colleague about your work ethic and results.]",
    name: "[NAME]",
    role: "[ROLE, COMPANY]",
  },
  {
    quote:
      "[Add a second testimonial highlighting your technical or bookkeeping skills.]",
    name: "[NAME]",
    role: "[ROLE, COMPANY]",
  },
];
