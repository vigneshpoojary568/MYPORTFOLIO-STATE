/**
 * Central Portfolio Configuration for Vignesh Poojary
 * 
 * Edit this file to customize all personal details, links, projects, skills, and copy.
 * No need to touch component code when updating information!
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  fallbackImageAlt: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
  statusText?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    notes: string;
    iconName?: string;
  }[];
}

export const portfolioConfig = {
  personal: {
    name: "Vignesh Poojary",
    title: "Developer | Python & Data Analytics Enthusiast",
    email: "vigneshp6567@gmail.com",
    location: "India",
    availability: "Available for projects & full-time roles",
    statusLabel: "Open to opportunities",
    statusLabelEnabled: true,
    
    // Central Social Links
    githubUrl: "https://github.com/vigneshpoojary568",
    // EDITABLE PLACEHOLDER: Update this with your actual LinkedIn profile handle
    linkedinUrl: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    
    // Brand / Buildmark
    buildmark: "VBUILT SOLUTIONS",
    tagline: "Building modern websites and exploring the power of Python, data, and technology.",
  },

  hero: {
    greeting: "Hi, I'm Vignesh Poojary.",
    mainStatement: "I build modern websites and explore the power of Python, data, and technology.",
    supportingText:
      "I'm passionate about building useful digital experiences, developing web applications, and turning ideas into practical projects.",
    primaryCtaText: "Explore My Projects",
    primaryCtaHref: "#projects",
    secondaryCtaText: "Contact Me",
    secondaryCtaHref: "#contact",
    heroImage: "/images/hero_developer_workspace.jpg",
  },

  about: {
    heading: "Designing software with intent, curiosity, and analytical clarity.",
    subheading: "A builder grounded in both frontend web craftsmanship and computational data exploration.",
    narrativeParagraphs: [
      "I am a developer driven by the intersection of user-centric web design and computational logic. Whether architecting clean, responsive web interfaces or analyzing data patterns with Python, my focus is always on creating solutions that are genuinely useful and enjoyable to use.",
      "My journey centers around continuous learning: breaking down complex systems, structuring data pipelines, and transforming abstract concepts into interactive digital products.",
    ],
    coreInterests: [
      {
        title: "Modern Web Development",
        desc: "Crafting fluid, high-performance interfaces using Next.js, React, and modern CSS architecture.",
      },
      {
        title: "Python Programming",
        desc: "Writing clean, maintainable Python for algorithmic problem solving, automation, and backend workflows.",
      },
      {
        title: "Data Analysis & Visualization",
        desc: "Discovering meaningful trends within structured datasets using Pandas, NumPy, and statistical charting.",
      },
      {
        title: "Machine Learning Projects",
        desc: "Implementing predictive models and applying data-driven intelligence to real-world educational and operational problems.",
      },
      {
        title: "User-Friendly Applications",
        desc: "Ensuring applications prioritize accessibility, visual hierarchy, low latency, and zero unnecessary friction.",
      },
      {
        title: "Continuous Technology Learning",
        desc: "Constantly expanding proficiency across modern developer ecosystems, cloud platforms, and tooling.",
      },
    ],
    vbuiltSolutions: {
      name: "VBUILT SOLUTIONS",
      motto: "Engineering clean, resilient digital solutions from concept to deployment.",
      description:
        "VBUILT SOLUTIONS represents my personal development standard—an ongoing commitment to quality engineering, thoughtful code structure, and delivering scalable software for modern web challenges.",
      image: "/images/vbuilt_solutions_showcase.jpg",
    },
  },

  skills: [
    {
      id: "python-data",
      name: "Python & Data Analytics",
      description: "Computational tools for data exploration, cleaning, transformation, and statistical modeling.",
      skills: [
        { name: "Python", level: "Core", notes: "Object-oriented scripting, algorithmic logic, standard library" },
        { name: "Pandas", level: "Advanced", notes: "Dataframes manipulation, cleaning, aggregation, restructuring" },
        { name: "NumPy", level: "Proficient", notes: "Multidimensional arrays, vectorization, mathematical operations" },
        { name: "Data Visualization", level: "Proficient", notes: "Matplotlib, Seaborn, and clean analytical charts" },
        { name: "Machine Learning Concepts", level: "Active Focus", notes: "Scikit-Learn, classification, regression, model evaluation" },
        { name: "Jupyter Notebooks", level: "Core", notes: "Iterative exploratory data analysis (EDA) and reporting" },
      ],
    },
    {
      id: "web-frontend",
      name: "Web & Frontend",
      description: "Modern client-side engineering for responsive, fast, and accessible user experiences.",
      skills: [
        { name: "JavaScript (ES6+)", level: "Core", notes: "Modern syntax, async/await, DOM APIs, event architecture" },
        { name: "TypeScript", level: "Proficient", notes: "Type safety, interfaces, robust component signatures" },
        { name: "Next.js", level: "Proficient", notes: "App Router, SSR, SSG, standalone optimization, SEO" },
        { name: "React", level: "Proficient", notes: "Hooks, component lifecycles, state composition, reusable design" },
        { name: "Tailwind CSS", level: "Advanced", notes: "Utility-first design, dark-mode tokens, responsive grid math" },
        { name: "Responsive UI/UX", level: "Core", notes: "Mobile-first layouts, accessible touch targets, typography hierarchy" },
      ],
    },
    {
      id: "tools-workflow",
      name: "Tools & Workflow",
      description: "Development environments, version control, and production deployment pipelines.",
      skills: [
        { name: "Git & GitHub", level: "Core", notes: "Branching workflows, version tracking, open-source repositories" },
        { name: "VS Code", level: "Core", notes: "Configured debugging, linting, extensions, terminal integration" },
        { name: "Vercel", level: "Proficient", notes: "Continuous deployment, serverless functions, performance analytics" },
        { name: "REST APIs", level: "Proficient", notes: "HTTP methods, JSON serialization, client-side data fetching" },
        { name: "Code Architecture", level: "Core", notes: "Modular design, reusability, zero-slop clean structure" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "student-performance",
      title: "Student Performance Analytics & Predictor",
      category: "Data Analytics & Machine Learning",
      subtitle: "Live Interactive Educational Data App",
      description:
        "A full-stack predictive analytics platform analyzing academic variables, study habits, and student parameters to forecast scholastic outcomes with visual performance charts.",
      liveUrl: "https://studentperformance-two.vercel.app/",
      githubUrl: "https://github.com/vigneshpoojary568",
      image: "/images/project_student_analytics.jpg",
      fallbackImageAlt: "Student Performance Analytics Dashboard",
      highlights: [
        "Interactive machine learning prediction engine trained on student metric factors",
        "Comprehensive visual breakdown with grade distributions and trend analyses",
        "Clean, responsive user interface deployed seamlessly on Vercel",
        "Accessible data insights for educators, advisors, and students",
      ],
      technologies: ["Python", "Machine Learning", "Data Analytics", "Pandas", "Vercel"],
      featured: true,
      statusText: "Live in Production",
    },
    {
      id: "python-ml-pipeline",
      title: "Python Data Processing & ML Pipeline",
      category: "Python & Data Engineering",
      subtitle: "Automated Data Ingestion & Modeling Pipeline",
      description:
        "A structured Python repository demonstrating automated data cleansing, feature normalization, and algorithmic model evaluation pipelines for exploratory research.",
      liveUrl: "https://studentperformance-two.vercel.app/",
      githubUrl: "https://github.com/vigneshpoojary568",
      image: "/images/project_python_data_pipeline.jpg",
      fallbackImageAlt: "Python Data Analytics and ML Pipeline Flow",
      highlights: [
        "End-to-end data pipeline from raw dataset ingestion to feature vectors",
        "Automated missing-value handling and outlier statistical detection",
        "Modular architecture designed for rapid experimentation and model tuning",
      ],
      technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"],
      featured: true,
      statusText: "Open Source",
    },
    {
      id: "vbuilt-portfolio",
      title: "VBUILT Solutions Portfolio System",
      category: "Full-Stack Web Engineering",
      subtitle: "Premium Next.js Developer Portfolio",
      description:
        "A production-grade developer portfolio built on Next.js App Router featuring dark aesthetic engineering, zero-pill typographic discipline, and responsive layout math.",
      liveUrl: "#",
      githubUrl: "https://github.com/vigneshpoojary568",
      image: "/images/vbuilt_solutions_showcase.jpg",
      fallbackImageAlt: "VBUILT SOLUTIONS Architecture",
      highlights: [
        "Engineered with Next.js App Router and standalone Node.js compilation",
        "Custom centralized TypeScript configuration for zero-friction maintenance",
        "Strict 60-30-10 color budget with midnight slate surfaces and cyan accents",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      featured: true,
      statusText: "Current App",
    },
  ] as Project[],

  contact: {
    heading: "Let's build something impactful together.",
    lead:
      "Whether you have a web development project, a data analytics challenge, or are seeking a motivated developer for your team, I'd love to connect.",
    email: "vigneshp6567@gmail.com",
    github: "https://github.com/vigneshpoojary568",
    linkedinPlaceholder: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    location: "India · Open to Remote",
    responseExpectation: "Usually replies within 24 hours",
  },
};
