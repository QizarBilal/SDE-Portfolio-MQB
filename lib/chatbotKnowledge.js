// Knowledge base about Mohammed Qizar Bilal
export const knowledgeBase = {
  personal: {
    name: "Mohammed Qizar Bilal",
    location: "Tirupathur, Tamil Nadu, India",
    title: "Software Development Engineer",
    tagline: "Development-first engineer focused on building real, usable systems",
    email: "bilalqizar@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohammed-qizar-bilal/",
    github: "https://github.com/QizarBilal",
    portfolio: "https://qizar-bilal.netlify.app",
    twitter: "@QizarBilal"
  },

  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Priyadarshini Engineering College",
      university: "Anna University",
      gpa: "8.89 / 10",
      period: "Nov 2022 - May 2026",
      location: "Vaniyambadi, Tamil Nadu"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Al-Ameen Mat.Hr.Sec.School",
      percentage: "82%",
      period: "Jun 2020 - May 2022",
      location: "Tirupathur, Tamil Nadu"
    }
  ],

  experience: [
    {
      company: "Zidio Development",
      role: "Frontend Developer",
      type: "Part-time",
      period: "Aug 2025 - Dec 2025",
      location: "Remote",
      description: "Built scalable React components, integrated APIs, and improved UI consistency for production applications."
    },
    {
      company: "Flutions",
      role: "Web Developer",
      type: "Internship",
      period: "Jul 2025 - Aug 2025",
      location: "Remote",
      description: "Developed responsive web applications and implemented modern frontend solutions."
    },
    {
      company: "Edunet Foundation (IBM SkillsBuild)",
      role: "AI/ML Intern",
      type: "Internship",
      period: "Jun 2025 - Jul 2025",
      location: "Remote",
      description: "Developed complete ML pipeline and deployed Streamlit application for AI-powered solutions."
    },
    {
      company: "ShadowFox Inc.",
      role: "Python Developer Intern",
      type: "Internship",
      period: "Jan 2025 - Feb 2025",
      location: "Pernambut, Tamil Nadu",
      description: "Created automation scripts and optimized backend workflows using Python."
    }
  ],

  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    frameworks: ["React", "Next.js", "Flask", "Streamlit", "Node.js", "Express"],
    databases: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
    ml_ai: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    tools: ["Git", "GitHub", "VS Code", "Linux", "Docker", "Vercel", "REST APIs"],
    concepts: ["Data Structures & Algorithms", "System Design", "Clean Code", "REST APIs"]
  },

  projects: [
    {
      name: "ZidioHacks",
      category: "AI/ML Platform",
      description: "AI-powered recruitment automation platform combining NLP for resume parsing, ML models for salary prediction, and React frontend.",
      tech: ["Python", "Flask", "React", "TensorFlow", "MySQL", "NLP", "Scikit-learn"],
      impact: "Reduced screening time by 80%, processes 100+ resumes in minutes with 85% salary prediction accuracy"
    },
    {
      name: "ResuMagic",
      category: "Web Application",
      description: "Intelligent resume builder with ATS optimization, keyword extraction using NLP, and real-time preview.",
      tech: ["Next.js", "Python", "React-PDF", "NLP", "Tailwind CSS", "MongoDB"],
      impact: "92% of generated resumes pass ATS screening, build time under 10 minutes"
    },
    {
      name: "AI Resume Parser",
      category: "ML System",
      description: "Production ML system for resume data extraction using spaCy for NER and custom ML model trained on 1000+ resumes.",
      tech: ["Python", "spaCy", "scikit-learn", "Flask", "Docker", "PostgreSQL"],
      impact: "94% extraction accuracy, processes single resume in <3 seconds"
    },
    {
      name: "Salary Prediction ML",
      category: "Machine Learning",
      description: "Machine learning model for IT salary forecasting using ensemble model (Random Forest + XGBoost).",
      tech: ["Python", "XGBoost", "Pandas", "Flask", "NumPy", "Matplotlib"],
      impact: "85% accuracy with ±15% error margin, handles 1000+ requests/day"
    },
    {
      name: "FreeFireXperTrade",
      category: "Gaming Platform",
      description: "Gaming marketplace with real-time transactions using MERN stack and WebSocket connections.",
      tech: ["MongoDB", "Express", "React", "Node.js", "WebSocket", "Redis", "JWT"],
      impact: "500+ daily transactions, <100ms latency, 4.8/5 user rating"
    },
    {
      name: "CareerForge AI",
      category: "AI Application",
      description: "AI-powered career guidance and resume optimization platform.",
      tech: ["Python", "AI/ML", "React"],
      status: "In Development"
    }
  ],

  achievements: [
    "GitHub Achievements: Pair Extraordinaire, Pull Shark, YOLO, Quickdraw",
    "104+ GitHub contributions in 2025",
    "Built 6+ production-ready projects",
    "4 successful internships completed",
    "GPA: 8.89/10 in Computer Science Engineering"
  ],

  philosophy: {
    motto: "Engineering > Everything",
    approach: "Development-first engineer who enjoys building real, usable systems — not just demos",
    values: [
      "Writing clean, maintainable code",
      "Designing scalable system logic",
      "Solving problems that exist in the real world",
      "Clarity over cleverness",
      "Execution over hype"
    ]
  },

  availability: {
    status: "Open to SDE opportunities",
    lookingFor: "Software Development Engineer roles",
    interests: ["Full-Stack Development", "Backend Engineering", "AI/ML Integration", "System Design"],
    preferredTech: ["Python", "React", "Next.js", "Flask", "PostgreSQL"]
  }
}

// AI Response Generator
export function generateResponse(question) {
  const q = question.toLowerCase()

  // Personal Information
  if (q.includes('name') || q.includes('who are you') || q.includes('introduce')) {
    return `I'm Mohammed Qizar Bilal, a Software Development Engineer aspirant from Tamil Nadu, India. I'm passionate about building scalable, real-world systems with clean code and strong engineering principles.`
  }

  if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
    return `You can reach Mohammed at:\n📧 Email: bilalqizar@gmail.com\n💼 LinkedIn: linkedin.com/in/mohammed-qizar-bilal\n🐙 GitHub: github.com/QizarBilal\n🌐 Portfolio: qizar-bilal.netlify.app`
  }

  if (q.includes('location') || q.includes('where') || q.includes('based')) {
    return `Mohammed is based in Tirupathur, Tamil Nadu, India. He's open to remote opportunities and relocation for the right role.`
  }

  // Education
  if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('university')) {
    return `Mohammed holds a BE in Computer Science from Priyadarshini Engineering College (Anna University) with an impressive 8.89/10 GPA (Expected graduation: May 2026). He completed his Higher Secondary with 82% from Al-Ameen School.`
  }

  if (q.includes('gpa') || q.includes('cgpa') || q.includes('grade')) {
    return `Mohammed maintains an excellent academic record with a CGPA of 8.89/10 in Computer Science Engineering from Anna University.`
  }

  // Experience
  if (q.includes('experience') || q.includes('work') || q.includes('internship') || q.includes('job')) {
    return `Mohammed has completed 4 internships:\n• Frontend Developer at Zidio Development (Aug-Dec 2025)\n• Web Developer at Flutions (Jul-Aug 2025)\n• AI/ML Intern at Edunet Foundation/IBM SkillsBuild (Jun-Jul 2025)\n• Python Developer at ShadowFox Inc. (Jan-Feb 2025)\n\nHe's built production-ready React applications, ML pipelines, and backend automation systems.`
  }

  if (q.includes('zidio')) {
    return `At Zidio Development (Aug-Dec 2025), Mohammed worked as a Frontend Developer building scalable React components, integrating APIs, and improving UI consistency for production applications.`
  }

  // Skills
  if (q.includes('skill') || q.includes('technology') || q.includes('tech stack') || q.includes('programming')) {
    return `Mohammed's core stack includes:\n💻 Languages: Python, JavaScript, TypeScript, SQL\n⚛️ Frontend: React, Next.js, Tailwind CSS\n🔧 Backend: Flask, Node.js, Express\n🗄️ Databases: MySQL, MongoDB, PostgreSQL, Redis\n🤖 AI/ML: TensorFlow, Scikit-learn, Pandas, NumPy\n🛠️ Tools: Git, Docker, Linux, REST APIs\n\nHe's particularly strong in Python, React, and building full-stack applications.`
  }

  if (q.includes('python')) {
    return `Python is Mohammed's primary language. He's used it extensively for backend development (Flask), ML/AI projects (TensorFlow, Scikit-learn), data processing (Pandas, NumPy), and automation scripts. His Python projects include AI Resume Parser, Salary Prediction ML, and various automation tools.`
  }

  if (q.includes('react') || q.includes('javascript') || q.includes('frontend')) {
    return `Mohammed is proficient in modern frontend development with React, Next.js, and TypeScript. He's built production applications at Zidio Development, created the ResuMagic ATS optimizer, and developed multiple full-stack projects with clean, component-based architecture.`
  }

  if (q.includes('machine learning') || q.includes('ml') || q.includes('ai') || q.includes('artificial intelligence')) {
    return `Mohammed has strong ML/AI expertise with hands-on experience:\n• Built AI Resume Parser with 94% accuracy using spaCy and NER\n• Developed Salary Prediction ML system with 85% accuracy\n• Created recruitment automation with NLP and TensorFlow\n• Completed AI/ML internship at IBM SkillsBuild\n• Proficient in TensorFlow, Scikit-learn, Pandas, NumPy`
  }

  // Projects
  if (q.includes('project')) {
    return `Mohammed has built 6+ production-ready projects including:\n• ZidioHacks: AI recruitment platform (80% time savings, 85% ML accuracy)\n• ResuMagic: ATS resume builder (92% pass rate)\n• AI Resume Parser: ML extraction system (94% accuracy)\n• Salary Prediction ML: IT salary forecasting (85% accuracy)\n• FreeFireXperTrade: Gaming marketplace (500+ daily transactions)\n\nAll projects solve real-world problems with measurable impact.`
  }

  if (q.includes('zidiohacks') || q.includes('recruitment')) {
    return `ZidioHacks is an AI-powered recruitment automation platform combining NLP for resume parsing, ML models for salary prediction, and React frontend. It reduced screening time by 80% and processes 100+ resumes in minutes with 85% salary prediction accuracy. Built with Python, Flask, React, TensorFlow, and MySQL.`
  }

  if (q.includes('resumagic') || q.includes('ats')) {
    return `ResuMagic is an intelligent resume builder with ATS optimization. It uses NLP for keyword extraction and has a 92% ATS pass rate. Users can create optimized resumes in under 10 minutes. Built with Next.js, Python, React-PDF, and MongoDB.`
  }

  // Career
  if (q.includes('looking for') || q.includes('hiring') || q.includes('opportunity') || q.includes('available')) {
    return `Mohammed is actively seeking Software Development Engineer (SDE) roles. He's particularly interested in Full-Stack Development, Backend Engineering, AI/ML Integration, and System Design challenges. Open to remote work and relocation. Expected graduation: May 2026.`
  }

  if (q.includes('strength') || q.includes('good at') || q.includes('best')) {
    return `Mohammed's key strengths:\n✅ Building production-ready, scalable systems\n✅ Clean, maintainable code architecture\n✅ Full-stack development (Python + React)\n✅ ML/AI integration in real applications\n✅ Problem-solving with measurable impact\n✅ Strong DSA and system design fundamentals\n\nHis motto: "Clarity over cleverness, execution over hype."`
  }

  if (q.includes('github')) {
    return `Mohammed is active on GitHub with 104+ contributions in 2025. Notable repos include CareerForge-AI, ChatFlow Chat Application, and various web development projects. Check out his profile: github.com/QizarBilal`
  }

  // Achievements
  if (q.includes('achievement') || q.includes('accomplishment')) {
    return `Mohammed's key achievements:\n🏆 8.89/10 CGPA in CSE from Anna University\n🏆 4 successful internships completed\n🏆 6+ production-ready projects deployed\n🏆 GitHub achievements: Pull Shark, Pair Extraordinaire, Quickdraw\n🏆 92% ATS pass rate on ResuMagic\n🏆 94% accuracy on AI Resume Parser\n🏆 500+ daily users on FreeFireXperTrade`
  }

  // Philosophy
  if (q.includes('motto') || q.includes('philosophy') || q.includes('approach')) {
    return `Mohammed's engineering philosophy: "Engineering > Everything"\n\nHe's a development-first engineer who values:\n• Writing clean, maintainable code\n• Designing scalable system logic\n• Solving real-world problems\n• Clarity over cleverness\n• Execution over hype\n\nHe builds real, usable systems — not just demos.`
  }

  // Default responses
  if (q.includes('resume') || q.includes('cv')) {
    return `Mohammed's resume highlights his 8.89 GPA, 4 internships, 6+ projects, and strong technical skills in Python, React, ML/AI. It's ATS-optimized and showcases measurable impact in all experiences. You can download it from the Resume section above.`
  }

  if (q.includes('hire') || q.includes('why should')) {
    return `Mohammed brings:\n✅ Proven track record: 4 internships, 6+ deployed projects\n✅ Strong academics: 8.89/10 CGPA in CSE\n✅ Full-stack expertise: Python, React, Next.js, Flask, ML/AI\n✅ Real impact: 80% time savings, 94% accuracy, 500+ daily users\n✅ Engineering mindset: Clean code, scalable design, problem-solving\n\nHe's ready to contribute from day one as an SDE.`
  }

  if (q.includes('thank') || q.includes('appreciate')) {
    return `You're welcome! Feel free to reach out to Mohammed at bilalqizar@gmail.com or connect on LinkedIn. He'd love to discuss opportunities!`
  }

  if (q.includes('hello') || q.includes('hi') || q === 'hey') {
    return `Hello! I'm here to answer questions about Mohammed Qizar Bilal. You can ask about his experience, education, projects, skills, or career interests. What would you like to know?`
  }

  // Fallback
  return `I can help you learn about Mohammed Qizar Bilal's:\n• Experience & Internships\n• Education & Academic Record\n• Technical Skills & Expertise\n• Projects & Achievements\n• Career Interests & Availability\n\nPlease ask a specific question, and I'll provide detailed information!`
}
