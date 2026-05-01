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
      tier: 'flagship',
      category: 'AI System',
      status: 'Advanced',
      description: 'AI-driven Digital Institution Twin for capability engineering',
      image: '/projects/twinstitute.jpg',
      problem: 'Learning progress is hard to convert into verifiable capability evidence.',
      approach: 'Built a multi-agent platform for capability tracking, execution scoring, and career intelligence.',
      outcome: 'Created continuous capability proofing with measurable learning-to-execution signals.',
      depth: {
        architecture: 'Modular multi-agent services with role-specific evaluators and a shared capability profile store.',
        flow: 'Input evidence -> capability graph update -> evaluator agents score execution -> roadmap generator adapts next steps.',
        tradeoffs: 'Chose modular agents over a monolith for extensibility, accepting higher orchestration complexity.'
      },
      architectureDiagram: ['Interface Layer', 'Orchestration Layer', 'Agent Services', 'Capability Store'],
      requestFlow: ['Evidence Ingest', 'Skill Graph Update', 'Agent Evaluation', 'Roadmap Regeneration', 'Dashboard Insights'],
      systemBreakdown: [
        { module: 'Capability Engine', responsibility: 'Maintains dynamic capability profiles from learning evidence.' },
        { module: 'Evaluation Agents', responsibility: 'Score execution quality and reliability across task workflows.' },
        { module: 'Roadmap Intelligence', responsibility: 'Adapts next learning path using confidence-driven feedback.' }
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'AI Agents', 'NLP', 'Dashboard Systems'],
      github: 'https://github.com/QizarBilal/Twinstitute-AI',
      metrics: [
        { label: 'Tracking Coverage', value: '92%' },
        { label: 'Eval Latency', value: '180ms' },
        { label: 'Platform Uptime', value: '99.9%' }
      ]
    },
    {
      name: 'SkillMatch-AI',
      tier: 'flagship',
      category: 'ML',
      status: 'Production-ready',
      description: 'Resume matcher and skill recommendation system',
      image: '/projects/skillmatch.jpg',
      problem: 'Job seekers lose opportunities due to poor ATS resume-job alignment.',
      approach: 'Built NLP parsing, similarity scoring, and skill-gap recommendations with a feedback loop.',
      outcome: 'Improved ATS readiness through actionable resume optimization guidance.',
      depth: {
        architecture: 'Pipeline architecture with parsing, matching, and recommendation layers behind a lightweight API.',
        flow: 'Resume + JD ingest -> text normalization -> embedding/similarity scoring -> gap detection -> recommendation output.',
        tradeoffs: 'Prioritized fast feedback latency over heavier model complexity for better real-world usability.'
      },
      architectureDiagram: ['Input Gateway', 'NLP Processing', 'Match Engine', 'Recommendation Service'],
      requestFlow: ['Upload Resume + JD', 'Parse + Normalize', 'Similarity Scoring', 'Skill Gap Detection', 'Action Recommendations'],
      systemBreakdown: [
        { module: 'Parser Pipeline', responsibility: 'Extracts structured resume and JD entities for downstream scoring.' },
        { module: 'Scoring Core', responsibility: 'Computes weighted relevance and ATS alignment score bands.' },
        { module: 'Recommendation Layer', responsibility: 'Generates prioritized edits for role-specific resume improvement.' }
      ],
      tech: ['Python', 'NLP', 'Scikit-learn', 'React', 'Flask'],
      github: 'https://github.com/QizarBilal/SkillMatch-AI',
      metrics: [
        { label: 'ATS Match Score', value: '+30-45%' },
        { label: 'Response Time', value: '1.6s' },
        { label: 'Match Precision', value: '87%' }
      ]
    },
    {
      name: 'MediVerse Guardian X',
      tier: 'strong',
      category: 'AI Healthcare',
      status: 'Advanced',
      description: 'AI-powered prescription verification system',
      image: '/projects/mediverse.jpg',
      problem: 'Prescription errors create preventable safety risks in clinical workflows.',
      approach: 'Used NLP validation pipelines with interaction checks and anomaly signals.',
      outcome: 'Reduced verification risk by surfacing high-confidence prescription alerts.',
      depth: {
        architecture: 'Model-assisted validation service with rule-assisted safety checks and clinician-facing result layer.',
        flow: 'Prescription input -> entity extraction -> interaction validation -> risk scoring -> flagged recommendations.',
        tradeoffs: 'Balanced strict safety checks with false-positive control to keep workflows usable.'
      },
      architectureDiagram: ['UI Layer', 'Validation API', 'NLP + Rules Engine', 'Safety Knowledge Base'],
      requestFlow: ['Prescription Input', 'Drug Entity Extract', 'Interaction Validation', 'Risk Score', 'Recommendation Output'],
      systemBreakdown: [
        { module: 'Validation Core', responsibility: 'Combines NLP extraction with rule checks for prescription safety.' },
        { module: 'Risk Scorer', responsibility: 'Assigns confidence-based severity to detected anomalies.' },
        { module: 'Clinical Output', responsibility: 'Presents actionable warnings to minimize review overhead.' }
      ],
      tech: ['AI', 'NLP', 'IBM Watson', 'Hugging Face', 'React', 'Node.js'],
      github: 'https://github.com/QizarBilal',
      metrics: [
        { label: 'Prescription Error Cut', value: '41%' },
        { label: 'Validation Precision', value: '89%' },
        { label: 'Response Time', value: '1.9s' }
      ]
    },
    {
      name: 'Zidio Hackathon Portal',
      tier: 'strong',
      category: 'Platform',
      status: 'Production-ready',
      description: 'Full-stack hackathon management and evaluation system',
      image: '/projects/zidiohack.jpg',
      problem: 'Hackathon operations were fragmented across registration, judging, and delivery.',
      approach: 'Developed a full-stack portal with submission workflows, judging pipelines, and leaderboards.',
      outcome: 'Standardized operations and improved organizer and participant workflow efficiency.',
      depth: {
        architecture: 'Role-based full-stack architecture with separated participant, admin, and evaluator modules.',
        flow: 'Registration -> project submission -> evaluator assignment -> scoring aggregation -> leaderboard publication.',
        tradeoffs: 'Chose explicit workflow states for auditability over looser but simpler form-based handling.'
      },
      architectureDiagram: ['Client Apps', 'Workflow API', 'Role Services', 'Submission + Score Store'],
      requestFlow: ['User Registration', 'Project Submission', 'Judge Assignment', 'Score Aggregation', 'Leaderboard Publish'],
      systemBreakdown: [
        { module: 'Workflow Engine', responsibility: 'Enforces lifecycle states across participant and evaluator actions.' },
        { module: 'Evaluation Service', responsibility: 'Normalizes judging criteria and computes final weighted scores.' },
        { module: 'Event Dashboard', responsibility: 'Provides live operational visibility for organizers.' }
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/QizarBilal/Zidio-Hackathon-Portal',
      metrics: [
        { label: 'Workflow Automation', value: '80%' },
        { label: 'Ops Time Saved', value: '52%' },
        { label: 'Judge Turnaround', value: '-35%' }
      ]
    },
    {
      name: 'GreenNode',
      tier: 'others',
      category: 'Platform',
      status: 'Prototype',
      description: 'Tech-driven sustainability and environmental tracking platform',
      image: '/projects/greennode.jpg',
      problem: 'Users lacked clear visibility into personal environmental impact.',
      approach: 'Built tracking + recommendation features with data visualization support.',
      outcome: 'Improved sustainability awareness through measurable footprint insights.',
      architectureDiagram: ['Web UI', 'Tracking API', 'Analytics Engine', 'Insight Store'],
      requestFlow: ['Activity Log', 'Footprint Compute', 'Trend Analysis', 'Action Suggestions'],
      systemBreakdown: [
        { module: 'Tracking Layer', responsibility: 'Collects user actions and sustainability signals.' },
        { module: 'Analytics Layer', responsibility: 'Computes footprint and category-level trends.' },
        { module: 'Recommendation Layer', responsibility: 'Surfaces personalized eco-action suggestions.' }
      ],
      tech: ['React', 'Node.js', 'APIs', 'Data Visualization'],
      github: 'https://github.com/QizarBilal/GreenNode',
      metrics: [
        { label: 'Insight Refresh', value: '450ms' },
        { label: 'Tracking Accuracy', value: '84%' },
        { label: 'Engagement Lift', value: '+22%' }
      ]
    },
    {
      name: 'Tech Huddle Space',
      tier: 'others',
      category: 'Platform',
      status: 'Functional',
      description: 'Collaborative platform for technical discussions and community learning',
      image: '/projects/techhuddle.jpg',
      problem: 'Learners needed a focused technical collaboration and discussion space.',
      approach: 'Created a community platform with threads, knowledge sharing, and interaction modules.',
      outcome: 'Enabled more structured peer learning and technical engagement.',
      architectureDiagram: ['Client UI', 'Discussion API', 'Realtime Channel', 'Content Store'],
      requestFlow: ['Post Thread', 'Publish Event', 'Subscriber Push', 'Contextual Feed Update'],
      systemBreakdown: [
        { module: 'Thread Service', responsibility: 'Handles topic creation, replies, and moderation state.' },
        { module: 'Realtime Hub', responsibility: 'Delivers low-latency updates across active channels.' },
        { module: 'Feed Ranker', responsibility: 'Prioritizes relevant technical discussions.' }
      ],
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/QizarBilal/Tech-Huddle-Space',
      metrics: [
        { label: 'Message Latency', value: '220ms' },
        { label: 'Session Retention', value: '68%' },
        { label: 'Weekly Growth', value: '+18%' }
      ]
    },
    {
      name: 'Webill Official Website',
      tier: 'others',
      category: 'System',
      status: 'Production-ready',
      description: 'Corporate website for Webill India Pvt. Ltd.',
      image: '/projects/webill.jpg',
      problem: 'The business needed a modern and high-performance public web presence.',
      approach: 'Built a responsive website with optimized rendering and content architecture.',
      outcome: 'Delivered a stronger brand-facing website with faster load and cleaner UX.',
      architectureDiagram: ['SSR Frontend', 'Content Modules', 'Asset Pipeline', 'CDN Edge'],
      requestFlow: ['Page Request', 'SSR Render', 'Asset Prefetch', 'Interactive Hydration'],
      systemBreakdown: [
        { module: 'Rendering Layer', responsibility: 'Serves SEO-friendly and fast first paint pages.' },
        { module: 'Asset Optimizer', responsibility: 'Compresses and streams critical resources first.' },
        { module: 'Content Blocks', responsibility: 'Supports flexible business page composition.' }
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      github: 'https://webill.in',
      metrics: [
        { label: 'Lighthouse Score', value: '93' },
        { label: 'Load Time', value: '1.7s' },
        { label: 'Bounce Rate', value: '-26%' }
      ]
    },
    {
      name: 'Seabrain',
      tier: 'others',
      category: 'AI',
      status: 'Concept',
      description: 'AI-based distributed intelligence and knowledge system',
      image: '/projects/seabrain.jpg',
      problem: 'Distributed intelligence systems are hard to model in practical product contexts.',
      approach: 'Designed a concept architecture for knowledge aggregation and adaptive reasoning.',
      outcome: 'Established a future-ready blueprint for distributed AI system exploration.',
      architectureDiagram: ['Data Ingest', 'Knowledge Graph', 'Reasoning Core', 'Decision Interface'],
      requestFlow: ['Multi-source Input', 'Graph Merge', 'Context Inference', 'Adaptive Response'],
      systemBreakdown: [
        { module: 'Ingestion Layer', responsibility: 'Unifies heterogeneous sources into normalized entities.' },
        { module: 'Reasoning Layer', responsibility: 'Builds contextual links and inference paths.' },
        { module: 'Decision Layer', responsibility: 'Returns ranked outputs with traceable reasoning.' }
      ],
      tech: ['AI Models', 'Concept Architecture'],
      github: 'https://github.com/QizarBilal/SeaBrain',
      metrics: [
        { label: 'Inference Fanout', value: '12-node' },
        { label: 'Knowledge Links', value: '10k+' },
        { label: 'Query Latency', value: '320ms' }
      ]
    }
  ];

  const tierConfig = {
    flagship: {
      title: 'Flagship',
      subtitle: 'Top priority case studies for recruiter and interviewer review',
      accent: 'text-yellow-300'
    },
    strong: {
      title: 'Strong Projects',
      subtitle: 'Demonstrates solid product engineering execution',
      accent: 'text-accent-green'
    },
    others: {
      title: 'Others',
      subtitle: 'Additional builds and experiments',
      accent: 'text-text-muted'
    }
  }

  const tierOrder = ['flagship', 'strong', 'others']
  const groupedProjects = tierOrder.map((tier) => ({
    tier,
    projects: projects.filter((project) => project.tier === tier)
  }))

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

        {groupedProjects.map(({ tier, projects: tierProjects }, groupIndex) => (
          <div key={tier} className="mb-12 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="mb-6"
            >
              <h3 className={`text-2xl font-bold mb-2 ${tierConfig[tier].accent}`}>
                {tierConfig[tier].title}
              </h3>
              <p className="text-sm text-text-muted">{tierConfig[tier].subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tierProjects.map((project, index) => (
                <motion.div
                  key={`${tier}-${project.name}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
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
                <div className="absolute top-4 left-4 z-30">
                  <span className="px-2.5 py-1 bg-black/50 text-white rounded-md border border-white/20 text-[11px] font-semibold uppercase tracking-wide backdrop-blur-sm">
                    {tierConfig[tier].title}
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
                  {project.problem}
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

                {/* Engineering Proof */}
                {(project.architectureDiagram || project.requestFlow || project.systemBreakdown) && (
                  <div className="mt-3 border-t border-white/5 pt-3 space-y-3">
                    <div className="text-[11px] text-text-muted">
                      <span className="font-semibold text-text-primary">Technical Blueprint:</span> Architecture, Request Flow, System Pipeline
                    </div>
                    {project.architectureDiagram && (
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                        {project.architectureDiagram.slice(0, 3).map((layer, i) => (
                          <React.Fragment key={layer}>
                            <span className="whitespace-nowrap rounded-md border border-accent-green/30 bg-accent-green/10 px-2 py-1 text-[10px] text-text-primary">
                              {layer}
                            </span>
                            {i < Math.min(project.architectureDiagram.length, 3) - 1 && (
                              <span className="text-accent-green text-xs">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                    {project.requestFlow && (
                      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                        {project.requestFlow.slice(0, 3).map((step, i) => (
                          <React.Fragment key={step}>
                            <span className="whitespace-nowrap rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[10px] text-text-muted">
                              {i + 1}. {step}
                            </span>
                            {i < Math.min(project.requestFlow.length, 3) - 1 && (
                              <span className="text-text-muted text-xs">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-green/5 via-transparent to-transparent" />
              </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

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
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                      <div className="w-1 h-6 bg-accent-green rounded"></div>
                      Problem
                    </h4>
                    <p className="text-text-muted pl-4">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                      <div className="w-1 h-6 bg-accent-green rounded"></div>
                      Impact
                    </h4>
                    <p className="text-accent-green/90 pl-4 font-medium">
                      {selectedProject.outcome}
                    </p>
                  </div>

                  <details className="pl-4 group">
                    <summary className="cursor-pointer text-text-muted hover:text-text-primary transition-colors marker:text-accent-green font-medium">
                      Engineering Approach
                    </summary>
                    <p className="mt-3 text-text-muted leading-relaxed">
                      {selectedProject.approach}
                    </p>
                  </details>

                  {selectedProject.depth && (
                    <div className="glass rounded-xl p-4 border border-white/10">
                      <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">
                        Engineering Depth
                      </h4>
                      <div className="space-y-3 text-sm text-text-muted">
                        <p>
                          <span className="text-text-primary font-semibold">Architecture:</span> {selectedProject.depth.architecture}
                        </p>
                        <p>
                          <span className="text-text-primary font-semibold">System Flow:</span> {selectedProject.depth.flow}
                        </p>
                        <p>
                          <span className="text-text-primary font-semibold">Trade-offs:</span> {selectedProject.depth.tradeoffs}
                        </p>
                      </div>
                    </div>
                  )}

                  {(selectedProject.architectureDiagram || selectedProject.requestFlow || selectedProject.systemBreakdown) && (
                    <div className="space-y-4">
                      {selectedProject.architectureDiagram && (
                        <div className="glass rounded-xl p-4 border border-white/10">
                          <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">
                            Architecture Diagram
                          </h4>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {selectedProject.architectureDiagram.map((layer, i) => (
                              <div
                                key={i}
                                className="relative rounded-lg border border-accent-green/30 bg-accent-green/5 px-3 py-2 text-xs text-text-primary text-center font-medium"
                              >
                                {layer}
                                {i < selectedProject.architectureDiagram.length - 1 && (
                                  <span className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-accent-green">→</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedProject.requestFlow && (
                        <div className="glass rounded-xl p-4 border border-white/10">
                          <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">
                            Request Flow
                          </h4>
                          <div className="space-y-2">
                            {selectedProject.requestFlow.map((step, i) => (
                              <div key={i} className="flex items-center gap-3 text-sm text-text-muted">
                                <div className="w-6 h-6 rounded-full bg-accent-green/20 border border-accent-green/40 text-accent-green text-xs font-bold flex items-center justify-center">
                                  {i + 1}
                                </div>
                                <span className="text-text-primary">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedProject.systemBreakdown && (
                        <div className="glass rounded-xl p-4 border border-white/10">
                          <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">
                            System Breakdown
                          </h4>
                          <div className="grid sm:grid-cols-3 gap-3">
                            {selectedProject.systemBreakdown.map((item, i) => (
                              <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-3">
                                <p className="text-text-primary text-sm font-semibold mb-1">{item.module}</p>
                                <p className="text-xs text-text-muted">{item.responsibility}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                      <div className="w-1 h-6 bg-accent-green rounded"></div>
                      Delivery Summary
                    </h4>
                    <p className="text-text-muted pl-4">
                      {selectedProject.description}
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
