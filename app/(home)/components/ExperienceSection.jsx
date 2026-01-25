"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Zidio Development',
      period: 'Aug 2025 - Dec 2025',
      location: 'Remote',
      type: 'Part-time',
      tech: ['React', 'Next.js', 'JavaScript', 'Responsive Design'],
      achievements: [
        {
          problem: 'Multiple clients required modern, responsive web interfaces with consistent design systems',
          action: 'Built reusable React component libraries and implemented responsive designs across 5+ client projects',
          impact: 'Reduced development time by 40% and ensured consistent UI/UX across all projects'
        },
        {
          problem: 'Complex state management requirements across multiple frontend applications',
          action: 'Implemented Redux and Context API patterns for scalable state architecture',
          impact: 'Improved application performance by 35% and eliminated state-related bugs'
        },
        {
          problem: 'Need for pixel-perfect responsive layouts across devices',
          action: 'Developed mobile-first responsive designs using modern CSS and Tailwind',
          impact: 'Achieved 100% mobile compatibility and improved user engagement by 25%'
        }
      ]
    },
    {
      role: 'Web Developer',
      company: 'Flutions',
      period: 'Jul 2025 - Aug 2025',
      location: 'Pernambut, Tamil Nadu, India',
      type: 'Internship',
      tech: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
      achievements: [
        {
          problem: 'Clients needed professional web presence with limited timelines',
          action: 'Delivered 3+ production-ready websites with custom designs and responsive layouts',
          impact: 'All projects completed ahead of schedule with 100% client satisfaction'
        },
        {
          problem: 'Slow page load times affecting user experience and SEO',
          action: 'Optimized assets, implemented lazy loading, and minimized render-blocking resources',
          impact: 'Reduced average page load time by 50% and improved Lighthouse scores to 90+'
        }
      ]
    },
    {
      role: 'AIML Intern',
      company: 'Edunet Foundation',
      period: 'Jun 2025 - Jul 2025',
      location: 'Remote',
      type: 'Internship',
      tech: ['Python', 'TensorFlow', 'Machine Learning', 'AI'],
      achievements: [
        {
          problem: 'Need to develop practical AI/ML solutions for real-world problems',
          action: 'Built and deployed 3+ machine learning models for classification and prediction tasks',
          impact: 'Achieved 88%+ accuracy across models and successfully deployed to production'
        },
        {
          problem: 'Complex data preprocessing requirements for ML pipelines',
          action: 'Created automated data cleaning and feature engineering workflows',
          impact: 'Reduced data preparation time from hours to minutes while improving model quality'
        }
      ]
    },
    {
      role: 'Python Developer',
      company: 'ShadowFox',
      period: 'Jan 2025 - Feb 2025',
      location: 'Remote',
      type: 'Internship',
      tech: ['Python', 'Django', 'APIs', 'Scripting'],
      achievements: [
        {
          problem: 'Manual processes consuming significant development time',
          action: 'Developed Python automation scripts and tools to streamline workflows',
          impact: 'Automated 5+ repetitive tasks, saving 10+ hours per week'
        },
        {
          problem: 'Need for robust backend APIs for client applications',
          action: 'Built RESTful APIs with proper authentication and error handling',
          impact: 'Delivered scalable APIs handling 1000+ requests/day with 99.9% uptime'
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
                        <div>
                          <span className="text-text-muted">Problem: </span>
                          <span className="text-text-primary">{achievement.problem}</span>
                        </div>
                      </div>
                      <div className="pl-6 text-text-muted">
                        <span className="text-text-primary font-medium">Action:</span> {achievement.action}
                      </div>
                      <div className="pl-6 text-accent-green/90 font-medium">
                        → {achievement.impact}
                      </div>
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
