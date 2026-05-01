"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Lead Product Engineer',
      company: 'Webill India Pvt. Ltd.',
      period: 'March 2026 - Present',
      location: 'Vaniyambadi',
      type: 'Full-time',
      roleHighlight: 'Improved cross-product reliability by 38% while scaling delivery workflows.',
      tech: ['React', 'Next.js', 'Node.js', 'JavaScript', 'MongoDB', 'REST APIs', 'System Design'],
      achievements: [
        {
          problem: 'Business operations needed production-grade apps that could scale without reliability loss.',
          action: 'Designed and built end-to-end web apps and internal platforms with modular architecture, clear service boundaries, and release-ready standards.',
          impactPrefix: 'Delivered',
          impactMetric: 'stable digital infrastructure',
          impactSuffix: 'that improved reliability, scalability, and product delivery speed.'
        },
        {
          problem: 'The official website did not reflect product quality or performance expectations.',
          action: 'Engineered and optimized a responsive company website with clean UX, performance-first rendering, and structured content.',
          impactPrefix: 'Improved engagement and cut',
          impactMetric: 'load time',
          impactSuffix: 'while establishing a stronger public brand presence.'
        },
        {
          problem: 'Teams needed faster delivery with consistent frontend standards across projects.',
          action: 'Implemented reusable component systems, scalable folder architecture, and shared frontend conventions.',
          impactPrefix: 'Reduced development time and increased',
          impactMetric: 'codebase consistency',
          impactSuffix: 'across product surfaces.'
        },
        {
          problem: 'Growing product scope required dependable backend integrations and data flow.',
          action: 'Built and integrated REST APIs, standardized payload contracts, and improved frontend-backend communication paths.',
          impactPrefix: 'Increased',
          impactMetric: 'backend reliability',
          impactSuffix: 'for multi-product feature delivery.'
        }
      ]
    },
    {
      role: 'Artificial Intelligence Intern',
      company: 'Infosys Springboard',
      period: 'Feb 2026 - April 2026',
      location: 'Remote',
      type: 'Internship',
      roleHighlight: 'Raised ATS alignment outcomes by up to 45% through NLP-driven recommendations.',
      tech: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn', 'Pandas', 'NumPy'],
      achievements: [
        {
          problem: 'Applicants were missing opportunities due to weak resume-job alignment for ATS systems.',
          action: 'Built SkillMatch-AI with NLP-based resume parsing, JD analysis, and skill-gap recommendation logic.',
          impactPrefix: 'Improved',
          impactMetric: 'ATS alignment quality',
          impactSuffix: 'through actionable, skill-focused recommendations.'
        },
        {
          problem: 'Transitioning from theory to applied AI/ML required stronger project-grounded execution skills.',
          action: 'Completed structured AI/ML learning across supervised models, NLP pipelines, and practical preprocessing workflows.',
          impactPrefix: 'Built',
          impactMetric: 'production-oriented ML foundation',
          impactSuffix: 'for real project implementation.'
        }
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Zidio Development',
      period: 'Aug 2025 - Dec 2025',
      location: 'Remote',
      type: 'Part-time',
      roleHighlight: 'Cut frontend delivery time by 40% and improved runtime performance by 35%.',
      tech: ['React', 'Next.js', 'JavaScript', 'Responsive Design'],
      achievements: [
        {
          problem: 'Client projects needed modern responsive UI with design consistency at speed.',
          action: 'Built reusable React component libraries and responsive patterns across 5+ projects.',
          impactPrefix: 'Reduced development time by',
          impactMetric: '40%',
          impactSuffix: 'while standardizing UI quality.'
        },
        {
          problem: 'Apps faced complex state flows causing instability and performance issues.',
          action: 'Implemented Redux and Context API patterns with scalable state boundaries and predictable updates.',
          impactPrefix: 'Improved app performance by',
          impactMetric: '35%',
          impactSuffix: 'and removed recurring state bugs.'
        }
      ]
    },
    {
      role: 'Web Developer',
      company: 'Flutions',
      period: 'Jul 2025 - Aug 2025',
      location: 'Pernambut, Tamil Nadu, India',
      type: 'Internship',
      roleHighlight: 'Reduced page load times by 50% and shipped all projects ahead of schedule.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      achievements: [
        {
          problem: 'Clients needed launch-ready websites under strict deadlines.',
          action: 'Delivered 3+ production websites with custom designs and responsive execution.',
          impactPrefix: 'Completed all deliveries',
          impactMetric: 'ahead of schedule',
          impactSuffix: 'with full client satisfaction.'
        },
        {
          problem: 'Slow pages were impacting UX quality and search performance.',
          action: 'Optimized assets, added lazy loading, and reduced render-blocking resources.',
          impactPrefix: 'Reduced average page load time by',
          impactMetric: '50%',
          impactSuffix: 'and raised Lighthouse scores to 90+.'
        }
      ]
    },
    {
      role: 'AIML Intern',
      company: 'Edunet Foundation',
      period: 'Jun 2025 - Jul 2025',
      location: 'Remote',
      type: 'Internship',
      roleHighlight: 'Built 3+ production ML models with 88%+ accuracy and faster data pipelines.',
      tech: ['Python', 'TensorFlow', 'Machine Learning', 'AI'],
      achievements: [
        {
          problem: 'Training demanded real-world AI/ML implementation beyond academic exercises.',
          action: 'Built and deployed 3+ classification and prediction models in applied project contexts.',
          impactPrefix: 'Reached',
          impactMetric: '88%+ model accuracy',
          impactSuffix: 'with successful deployment outcomes.'
        },
        {
          problem: 'Manual preprocessing was slowing experimentation and model iteration.',
          action: 'Automated data cleaning and feature engineering workflows for repeatable preparation.',
          impactPrefix: 'Cut data preparation from',
          impactMetric: 'hours to minutes',
          impactSuffix: 'while improving model quality.'
        }
      ]
    }
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Engineering <span className="text-gradient-green">Experience</span>
          </h2>
          <p className="text-text-muted text-lg">
            Problem → Action → Impact
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-accent-green/0 via-accent-green/50 to-accent-green/0 hidden lg:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
              className="glass-strong rounded-2xl p-8 hover:bg-white/10 transition-all relative lg:ml-6"
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-[-27px] top-12 w-3 h-3 bg-accent-green rounded-full hidden lg:block"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
              />
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-text-muted mb-2">
                  <span className="text-accent-green font-medium">{exp.company}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted"></span>
                  <span>{exp.type}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-text-muted"></span>
                  <span>{exp.period}</span>
                </div>
                <div className="text-sm text-text-muted/80 mb-4">
                  📍 {exp.location}
                </div>
                <div className="mb-4 rounded-lg border border-accent-green/30 bg-accent-green/10 px-4 py-2">
                  <p className="text-sm text-text-primary">
                    <span className="text-accent-green font-bold">→ Role Impact:</span> {exp.roleHighlight}
                  </p>
                </div>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-text-muted font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="pl-6 border-l-2 border-accent-green/30 hover:border-accent-green/60 transition-colors"
                  >
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <HiCheckCircle className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                        <p className="text-text-primary">
                          {achievement.problem}
                        </p>
                      </div>
                      <p className="pl-6 text-accent-green/90">
                        {achievement.impactPrefix}{' '}
                        <span className="font-bold text-accent-green">{achievement.impactMetric}</span>{' '}
                        {achievement.impactSuffix}
                      </p>
                      <details className="pl-6 group">
                        <summary className="cursor-pointer text-text-muted hover:text-text-primary transition-colors marker:text-accent-green">
                          How I solved it
                        </summary>
                        <p className="mt-2 text-text-muted leading-relaxed">{achievement.action}</p>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
