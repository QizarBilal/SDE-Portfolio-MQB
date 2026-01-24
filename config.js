import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Mohammed Qizar Bilal",
    },
    social: {
        github: "QizarBilal",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "ZidioHacks – Hackathon Management Platform",
            description: "Engineered a multi-role system for hackathon coordination, supporting participants, mentors, judges, and admins with role-based access control. Designed scalable data flow for event registration, team formation, submission handling, and real-time judging. Implemented efficient state management to handle concurrent user actions and ensure data consistency across roles.",
            image: "/projects/project-1.webp",
            technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "REST API"],
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "ResuMagic – ATS-Friendly Resume Builder",
            description: "Built a guided resume creation platform with real-time preview and ATS optimization logic. Architected a component-driven system for modular resume sections with predictable rendering. Designed monetization-ready architecture supporting premium templates and export formats. Focused on clean data flow and separation of concerns for maintainability.",
            image: "/projects/project-2.webp",
            technologies: ["React", "Next.js", "TailwindCSS", "JavaScript", "PDF Generation"],
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "Employee Salary Prediction",
            description: "Developed end-to-end ML regression pipeline for salary prediction based on employee attributes. Implemented data preprocessing, feature engineering, and model selection with performance optimization. Built deployment-ready system with Flask backend for real-time predictions. Focused on handling edge cases and ensuring model accuracy through cross-validation.",
            image: "/projects/project-3.webp",
            technologies: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy", "ML"],
            github: "#",
            demo: "#"
        },
        {
            id: 4,
            title: "AI-Powered Resume Parser",
            description: "Integrated Gemini AI for intelligent resume parsing and skill extraction. Designed logic for matching candidate profiles with job requirements using NLP techniques. Built Flask backend with efficient data processing and API design. Implemented error handling for varied resume formats and extraction edge cases.",
            image: "/projects/project-4.webp",
            technologies: ["Python", "Gemini AI", "Flask", "NLP", "REST API", "spaCy"],
            github: "#",
            demo: "#"
        },
        {
            id: 5,
            title: "FreeFireXperTrade – Community Trading Platform",
            description: "Architected a community-driven trading platform with authentication, marketplace, chat, and forum modules. Designed database schema for user transactions, item listings, and message threading. Implemented secure authentication and authorization logic. Optimized query performance for real-time chat and marketplace updates.",
            image: "/projects/project-5.webp",
            technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "AJAX"],
            github: "#",
            demo: "#"
        }
 
    ],
    skills: [
        {
            title: "Core Languages",
            icon: <HiCode />,
            description: "Primary programming languages for system development",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Python", level: "Advanced", hot: true },
                { name: "JavaScript", level: "Expert" },
                { name: "TypeScript", level: "Advanced" },
                { name: "HTML5/CSS3", level: "Expert" }
            ]
        },
        {
            title: "Frameworks & Libraries",
            icon: <HiDatabase />,
            description: "Tools for building scalable applications",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "React.js", level: "Advanced", hot: true },
                { name: "Next.js", level: "Advanced" },
                { name: "Flask", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert", hot: true }
            ]
        },
        {
            title: "Databases & Tools",
            icon: <HiCube />,
            description: "Data management and development tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "MySQL", level: "Advanced" },
                { name: "MongoDB", level: "Advanced" },
                { name: "Git/GitHub", level: "Expert", hot: true },
                { name: "VS Code", level: "Expert" },
                { name: "Figma", level: "Intermediate" }
            ]
        }
    ],
    experiences: [
        {
            position: "Web Developer Intern",
            company: "Flutions India Pvt. Ltd.",
            period: "July 2025 – August 2025",
            location: "On-site",
            description: "Delivered end-to-end client projects with measurable performance improvements. Engineered responsive interfaces with focus on cross-device compatibility and load-time optimization.",
            responsibilities: [
                "Delivered 3+ client projects end-to-end, from requirements gathering to deployment",
                "Reduced page load time by ~30% through code optimization and lazy loading strategies",
                "Built responsive, cross-device UIs using component-driven architecture",
                "Collaborated with backend team to design efficient API contracts and data flow"
            ],
            technologies: ["React.js", "Next.js", "Node.js", "TailwindCSS", "JavaScript"]
        },
        {
            position: "AIML Intern",
            company: "Edunet Foundations",
            period: "June 2025 – July 2025",
            location: "Remote",
            description: "Built and deployed machine learning models with production-grade accuracy. Developed full ML pipeline from data preprocessing to web deployment.",
            responsibilities: [
                "Deployed ML model achieving ~85% accuracy through hyperparameter tuning and feature engineering",
                "Built live ML web application using Streamlit for real-time predictions",
                "Processed and cleaned 10,000+ data points ensuring data quality and model reliability",
                "Implemented end-to-end ML pipeline including data validation and model monitoring"
            ],
            technologies: ["Python", "Machine Learning", "Streamlit", "Pandas", "Scikit-learn", "Data Analysis"]
        },
        {
            position: "Python Developer Intern",
            company: "ShadowFox Inc.",
            period: "Jan 2025 – Feb 2025",
            location: "Remote",
            description: "Automated critical workflows and optimized Python scripts for production environments. Focused on code efficiency and maintainability.",
            responsibilities: [
                "Automated repetitive workflows reducing manual effort by 40% through scripting",
                "Optimized 15+ Python scripts for better performance and code readability",
                "Learned production-grade Python practices including error handling and logging",
                "Collaborated with team to refactor legacy code following best practices"
            ],
            technologies: ["Python", "Automation", "Scripting", "Git"]
        }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@QizarBilal",
            link: `https://github.com/QizarBilal`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "bilalqizar@gmail.com",
            link: "mailto:bilalqizar@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Tirupathur, Tamil Nadu, India",
            link: null
        }
    ]
}