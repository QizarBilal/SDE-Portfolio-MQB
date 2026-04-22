"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      name: 'Twinstitute AI',
      category: 'AI System',
      status: 'Advanced',
      description: 'AI-driven Digital Institution Twin for capability engineering',
      image: '/projects/twinstitute.jpg',
      problem: 'Students lack structured, personalized systems to convert learning into measurable, real-world capability. Traditional education fails to track skill growth, execution ability, and career readiness effectively.',
      approach: 'Designed a multi-agent AI system simulating a full digital institution. Implemented modules for capability tracking, task execution, evaluation, and career intelligence. Built Capability Digital Twin modeling, skill genome mapping, and AI-driven roadmap generation with adaptive feedback loops.',
      outcome: 'Transforms learning into verifiable capability proofs. Enables continuous tracking of skill growth, execution reliability, and career readiness through AI-driven insights.',
      tech: ['React', 'Node.js', 'MongoDB', 'AI Agents', 'NLP', 'Dashboard Systems'],
      github: 'https://github.com/QizarBilal/Twinstitute-AI',
      image: '/projects/twinstitute.jpg',
      metrics: [
        { label: 'Core Modules', value: '8+' },
        { label: 'AI Agents', value: '5+' },
        { label: 'Tracking Type', value: 'Real-time' }
      ]
    },
    {
      name: 'SkillMatch-AI',
      category: 'ML',
      status: 'Production-ready',
      description: 'Resume matcher and skill recommendation system',
      image: '/projects/skillmatch.jpg',
      problem: 'Job seekers struggle to align resumes with job descriptions, resulting in low ATS success rates and missed opportunities.',
      approach: 'Built NLP-based system for resume parsing and job description matching. Implemented similarity scoring, keyword extraction, and skill gap detection. Designed recommendation engine to suggest improvements for better job alignment.',
      outcome: 'Provides actionable insights to improve resumes and increase ATS compatibility with real-time feedback.',
      tech: ['Python', 'NLP', 'Scikit-learn', 'React', 'Flask'],
      github: 'https://github.com/QizarBilal/SkillMatch-AI',
      image: '/projects/skillmatch.jpg',
      metrics: [
        { label: 'ATS Improvement', value: 'High' },
        { label: 'Response Time', value: '<2s' },
        { label: 'Matching Accuracy', value: '85%+' }
      ]
    },
    {
      name: 'GreenNode',
      category: 'Platform',
      status: 'Prototype',
      description: 'Tech-driven sustainability and environmental tracking platform',
      image: '/projects/greennode.jpg',
      problem: 'Users lack accessible tools to track environmental impact and take actionable sustainability measures.',
      approach: 'Developed a platform integrating environmental data tracking, carbon footprint estimation, and personalized eco-friendly recommendations using data visualization techniques.',
      outcome: 'Encourages sustainable actions through measurable insights and user engagement.',
      tech: ['React', 'Node.js', 'APIs', 'Data Visualization'],
      github: 'https://github.com/QizarBilal/GreenNode',
      image: '/projects/greennode.jpg',
      metrics: [
        { label: 'User Insights', value: 'Real-time' },
        { label: 'Tracking Type', value: 'Carbon Footprint' },
        { label: 'Engagement', value: 'High' }
      ]
    },
    {
      name: 'Tech Huddle Space',
      category: 'Platform',
      status: 'Functional',
      description: 'Collaborative platform for technical discussions and community learning',
      image: '/projects/techhuddle.jpg',
      problem: 'Students lack a structured platform for peer-to-peer learning, collaboration, and technical discussions.',
      approach: 'Built a community-driven platform with discussion threads, knowledge sharing modules, and user interaction features. Focused on scalable architecture and seamless UX.',
      outcome: 'Improves collaboration and enables structured technical engagement among users.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/QizarBilal/Tech-Huddle-Space',
      image: '/projects/techhuddle.jpg',
      metrics: [
        { label: 'Community Type', value: 'Tech-focused' },
        { label: 'Interaction', value: 'Real-time' },
        { label: 'Scalability', value: 'High' }
      ]
    },
    {
      name: 'Zidio Hackathon Portal',
      category: 'Platform',
      status: 'Production-ready',
      description: 'Full-stack hackathon management and evaluation system',
      image: '/projects/zidiohack.jpg',
      problem: 'Hackathons lack structured systems for participant management, project submission, and evaluation workflows.',
      approach: 'Developed a full-stack portal with modules for registration, project submission, judging workflows, and leaderboard tracking. Designed scalable backend APIs and dynamic UI.',
      outcome: 'Streamlined hackathon operations and improved participant and organizer experience.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/QizarBilal/Zidio-Hackathon-Portal',
      image: '/projects/zidiohack.jpg',
      metrics: [
        { label: 'Automation', value: 'End-to-end' },
        { label: 'Participants', value: 'Scalable' },
        { label: 'Evaluation', value: 'Automated' }
      ]
    },
    {
      name: 'Webill Official Website',
      category: 'System',
      status: 'Production-ready',
      description: 'Corporate website for Webill India Pvt. Ltd.',
      image: '/projects/webill.jpg',
      problem: 'Company required a modern, scalable, and high-performance web presence to represent its products and services.',
      approach: 'Built a responsive and optimized website focusing on performance, UI/UX, and structured content delivery. Ensured fast load times and clean design.',
      outcome: 'Delivered a professional digital presence aligned with business needs and branding.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://webill.in',
      image: '/projects/webill.jpg',
      metrics: [
        { label: 'Performance', value: 'Optimized' },
        { label: 'UX', value: 'High' },
        { label: 'Load Time', value: '<2s' }
      ]
    },
    {
      name: 'Seabrain',
      category: 'AI',
      status: 'Concept',
      description: 'AI-based distributed intelligence and knowledge system',
      image: '/projects/seabrain.jpg',
      problem: 'Lack of systems that simulate collective intelligence and adaptive learning across distributed data sources.',
      approach: 'Designed a conceptual AI architecture focusing on knowledge aggregation, reasoning systems, and adaptive intelligence modeling.',
      outcome: 'Provides a foundation for future distributed AI intelligence systems.',
      tech: ['AI Models', 'Concept Architecture'],
      github: 'https://github.com/QizarBilal/SeaBrain',
      image: '/projects/seabrain.jpg',
      metrics: [
        { label: 'Type', value: 'Research आधारित' },
        { label: 'Architecture', value: 'Distributed' },
        { label: 'Scalability', value: 'High' }
      ]
    },
    {
      name: 'MediVerse Guardian X',
      category: 'AI Healthcare',
      status: 'Advanced',
      description: 'AI-powered prescription verification system',
      image: '/projects/mediverse.jpg',
      problem: 'Prescription errors and lack of intelligent validation systems can lead to serious healthcare risks.',
      approach: 'Built AI system leveraging NLP models with IBM Watson and Hugging Face for prescription validation, drug interaction detection, and anomaly identification.',
      outcome: 'Improves healthcare safety by verifying prescriptions with AI-driven insights.',
      tech: ['AI', 'NLP', 'IBM Watson', 'Hugging Face', 'React', 'Node.js'],
      github: 'https://github.com/QizarBilal',
      image: '/projects/mediverse.jpg',
      metrics: [
        { label: 'Validation Type', value: 'AI-based' },
        { label: 'Error Reduction', value: 'High' },
        { label: 'Processing', value: 'Real-time' }
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-7xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Engineering <span className="text-gradient-green">Projects</span>
          </h2>
          <p className="text-text-muted text-lg">
            Interview-grade systems ready for technical discussion
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
              className="glass-strong rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-accent-green/10 transition-all duration-500 cursor-pointer group relative"
            >
              {/* Project Image with Gradient Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-bg-surface/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23111418" width="400" height="300"/%3E%3Ctext fill="%2310b981" font-family="monospace" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' + project.name + '%3C/text%3E%3C/svg%3E'
                  }}
                />
                {/* Floating Status Badge */}
                <div className="absolute top-4 right-4 z-30">
                  <span className="px-3 py-1.5 bg-accent-green/90 text-bg-primary rounded-lg border border-accent-green text-xs font-bold backdrop-blur-sm shadow-lg">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-green transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-accent-green/20 text-accent-green rounded border border-accent-green/30 text-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <HiCode className="w-6 h-6 text-text-muted group-hover:text-accent-green group-hover:rotate-12 transition-all" />
                </div>

                {/* Description */}
                <p className="text-sm text-text-muted mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Preview */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-2 text-center border border-white/5 group-hover:border-accent-green/30 transition-colors">
                        <div className="text-sm font-bold text-accent-green">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-text-muted">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 text-text-muted text-xs font-mono rounded border border-white/10 group-hover:border-accent-green/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-accent-green text-xs font-bold">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div className="text-accent-green text-sm font-medium group-hover:translate-x-2 transition-transform flex items-center gap-2">
                    View Case Study
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <HiCode className="w-4 h-4 text-text-muted" />
                      </div>
                    )}
                    {project.live && (
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <HiExternalLink className="w-4 h-4 text-text-muted" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-green/5 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-strong rounded-2xl p-8 max-w-3xl w-full my-8 max-h-[90vh] overflow-y-auto"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-text-primary mb-2">
                      {selectedProject.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-accent-green/20 text-accent-green rounded-lg border border-accent-green/30 text-sm">
                        {selectedProject.category}
                      </span>
                      <span className="px-3 py-1 bg-white/5 text-text-muted rounded-lg border border-white/10 text-sm">
                        {selectedProject.status}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <HiX className="w-6 h-6 text-text-muted" />
                  </button>
                </div>

                {/* Metrics */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {selectedProject.metrics.map((metric, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-accent-green mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-text-muted">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Case Study Sections */}
                <div className="space-y-6 mb-8">
                  {/* Problem */}
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                      <div className="w-1 h-6 bg-accent-green rounded"></div>
                      Problem
                    </h4>
                    <p className="text-text-muted pl-4">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Engineering Approach */}
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                      <div className="w-1 h-6 bg-accent-green rounded"></div>
                      Engineering Approach
                    </h4>
                    <p className="text-text-muted pl-4">
                      {selectedProject.approach}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                      <div className="w-1 h-6 bg-accent-green rounded"></div>
                      Outcome
                    </h4>
                    <p className="text-text-muted pl-4">
                      {selectedProject.outcome}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 text-text-primary text-sm font-mono rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-text-primary"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent-green hover:bg-accent-green/90 rounded-lg transition-colors text-base"
                    >
                      <HiExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsSection
