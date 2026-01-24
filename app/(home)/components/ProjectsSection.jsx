"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      name: 'ZidioHacks',
      category: 'Platform',
      status: 'Production-ready',
      description: 'AI-powered recruitment automation platform',
      image: '/projects/zidiohacks.jpg',
      problem: 'Recruiters spend 10+ hours weekly manually screening resumes, parsing inconsistent formats, and predicting appropriate salary ranges for candidates. This manual process is error-prone and doesn\'t scale.',
      approach: 'Built a full-stack platform combining NLP for resume parsing, ML models for salary prediction, and React frontend. Implemented REST API architecture with Flask backend, MySQL database for candidate data, and TensorFlow for ML inference. Focused on modularity, allowing independent scaling of parsing and prediction services.',
      outcome: 'Reduced screening time by 80%. System processes 100+ resumes in minutes with 85% salary prediction accuracy. Deployed on Vercel with zero downtime. Architecture supports 10x traffic scaling.',
      tech: ['Python', 'Flask', 'React', 'TensorFlow', 'MySQL', 'NLP', 'Scikit-learn'],
      github: 'https://github.com/username/zidiohacks',
      live: 'https://zidiohacks.vercel.app',
      metrics: [
        { label: 'Time Saved', value: '80%' },
        { label: 'ML Accuracy', value: '85%' },
        { label: 'Resumes/Min', value: '100+' }
      ]
    },
    {
      name: 'ResuMagic',
      category: 'System',
      status: 'Production-ready',
      description: 'Intelligent resume builder with ATS optimization',
      image: '/projects/resumagic.jpg',
      problem: 'Job seekers create resumes that fail ATS (Applicant Tracking Systems) screening due to poor formatting, missing keywords, or unclear structure. Manual optimization is time-consuming and unreliable.',
      approach: 'Developed a web application with Next.js frontend and Python backend. Integrated PDF generation with react-pdf, implemented keyword extraction using NLP, and built ATS scoring algorithm analyzing format, keywords, and structure. Added real-time preview and multi-template support.',
      outcome: 'Users create ATS-optimized resumes in under 10 minutes. 92% of generated resumes pass ATS screening. Supports 5+ professional templates. Processing latency under 2 seconds.',
      tech: ['Next.js', 'Python', 'React-PDF', 'NLP', 'Tailwind CSS', 'MongoDB'],
      github: 'https://github.com/username/resumagic',
      live: 'https://resumagic.vercel.app',
      metrics: [
        { label: 'ATS Pass Rate', value: '92%' },
        { label: 'Avg. Build Time', value: '<10 min' },
        { label: 'Templates', value: '5+' }
      ]
    },
    {
      name: 'AI Resume Parser',
      category: 'ML',
      status: 'Production-ready',
      description: 'Production ML system for resume data extraction',
      image: '/projects/ai-parser.jpg',
      problem: 'Extracting structured data from unstructured resume PDFs is challenging. Different formats, layouts, and styles make traditional parsing unreliable. Manual extraction doesn\'t scale.',
      approach: 'Built Python-based parsing engine using spaCy for NER (Named Entity Recognition), regex for pattern matching, and custom ML model trained on 1000+ resumes. Implemented fallback mechanisms, confidence scoring, and validation layer. Containerized with Docker for consistent deployment.',
      outcome: 'Extracts name, email, phone, skills, experience with 94% accuracy. Handles PDF, DOCX, TXT formats. Processes single resume in <3 seconds. API deployed with 99.5% uptime.',
      tech: ['Python', 'spaCy', 'scikit-learn', 'Flask', 'Docker', 'PostgreSQL'],
      github: 'https://github.com/username/ai-resume-parser',
      image: '/projects/ai-parser.jpg',
      metrics: [
        { label: 'Extraction Accuracy', value: '94%' },
        { label: 'Processing Time', value: '<3s' },
        { label: 'Uptime', value: '99.5%' }
      ]
    },
    {
      name: 'Salary Prediction ML',
      category: 'ML',
      status: 'Production-ready',
      description: 'Machine learning model for IT salary forecasting',
      image: '/projects/salary-ml.jpg',
      problem: 'Job seekers and employers lack reliable salary data for IT roles. Existing tools provide generic ranges without considering skills, experience, location, and company size nuances.',
      approach: 'Trained ensemble model (Random Forest + XGBoost) on 10K+ salary records. Implemented feature engineering for skills encoding, experience binning, and location normalization. Used cross-validation for hyperparameter tuning. Built Flask API with request validation and caching.',
      outcome: 'Predicts salaries within ±15% error margin for 85% of cases. Model retrained monthly with fresh data. API handles 1000+ requests/day. Clear feature importance insights for users.',
      tech: ['Python', 'XGBoost', 'Pandas', 'Flask', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/username/salary-prediction',
      image: '/projects/salary-ml.jpg',
      metrics: [
        { label: 'Accuracy', value: '85%' },
        { label: 'Error Margin', value: '±15%' },
        { label: 'Daily Requests', value: '1000+' }
      ]
    },
    {
      name: 'FreeFireXperTrade',
      category: 'Platform',
      status: 'Production-ready',
      description: 'Gaming marketplace with real-time transactions',
      image: '/projects/ffxpertrade.jpg',
      problem: 'Gamers need a trusted platform for trading in-game assets. Existing solutions lack transparency, have high fees, and poor user experience. Security is a major concern.',
      approach: 'Built MERN stack marketplace with real-time WebSocket connections for live trading. Implemented JWT authentication, encrypted transactions, admin dashboard for moderation, and automated fraud detection. Used Redis for caching and session management.',
      outcome: 'Handles 500+ daily transactions with <1% dispute rate. Real-time updates with <100ms latency. 4.8/5 user rating. Zero security breaches in 6 months of operation.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'WebSocket', 'Redis', 'JWT'],
      github: 'https://github.com/username/freefirexpertrade',
      live: 'https://ffxpertrade.com',
      image: '/projects/ffxpertrade.jpg',
      metrics: [
        { label: 'Daily Transactions', value: '500+' },
        { label: 'Latency', value: '<100ms' },
        { label: 'User Rating', value: '4.8/5' }
      ]
    },
    {
      name: 'Portfolio V1',
      category: 'System',
      status: 'Production-ready',
      description: 'First-generation portfolio with advanced animations',
      image: '/projects/portfolio-v1.jpg',
      problem: 'Needed a professional online presence showcasing projects and skills. Generic templates don\'t convey engineering capability. Performance and UX critical for first impressions.',
      approach: 'Built with Next.js for SSR and optimal performance. Implemented Framer Motion for smooth animations, Intersection Observer for lazy loading, and optimized image delivery. Focused on sub-2s load times and Lighthouse 95+ scores.',
      outcome: 'Achieves 98 Lighthouse performance score. Load time under 1.5s on 3G. 60fps animations. Featured in dev community showcases. Generated interview opportunities.',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vercel', 'TypeScript'],
      github: 'https://github.com/username/portfolio-v1',
      live: 'https://portfoliov1.vercel.app',
      image: '/projects/portfolio-v1.jpg',
      metrics: [
        { label: 'Lighthouse Score', value: '98' },
        { label: 'Load Time', value: '<1.5s' },
        { label: 'FPS', value: '60' }
      ]
    }
  ]

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
