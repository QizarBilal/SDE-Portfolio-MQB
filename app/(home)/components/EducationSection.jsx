"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi'

const EducationSection = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering (Computer Science and Engineering)',
      institution: 'Priyadarshini Engineering College',
      university: 'Anna University',
      location: 'Vaniyambadi, India',
      period: 'November 2022 - May 2026',
      gpa: '8.89',
      highlights: [
        'Specialized in Data Structures, Algorithms, and System Design',
        'Completed advanced courses in Machine Learning and AI',
        'Active participant in technical clubs and coding competitions'
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Al-Ameen Mat.Hr.Sec.School',
      university: 'State Board of Tamil Nadu',
      location: 'Tirupattur, India',
      period: 'June 2020 - May 2022',
      gpa: '82%',
      stream: 'Biology-Mathematics',
      highlights: [
        'Strong foundation in Mathematics and Computer Science',
        'Consistently ranked in top 10% of the class',
        'Developed early interest in programming and problem-solving'
      ]
    }
  ]

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
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
            <span className="text-gradient-green">Education</span>
          </h2>
          <p className="text-text-muted text-lg">
            Academic foundation for engineering excellence
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-strong rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-accent-green/20 rounded-xl">
                  <HiAcademicCap className="w-8 h-8 text-accent-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-lg text-accent-green font-medium mb-2">
                    {edu.institution}
                  </div>
                  <div className="text-sm text-text-muted mb-3">
                    {edu.university}
                  </div>
                  
                  {/* Info Row */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                    <div className="flex items-center gap-2">
                      <HiCalendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiLocationMarker className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    {edu.stream && (
                      <div className="px-3 py-1 bg-white/5 rounded-md text-xs">
                        {edu.stream}
                      </div>
                    )}
                  </div>
                </div>

                {/* GPA Badge */}
                <div className="text-center">
                  <div className="px-6 py-3 bg-accent-green/20 border border-accent-green/30 rounded-xl">
                    <div className="text-2xl font-bold text-accent-green">
                      {edu.gpa}
                    </div>
                    <div className="text-xs text-text-muted mt-1">
                      {edu.gpa.includes('%') ? 'Percentage' : 'GPA'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="pl-16 space-y-2">
                {edu.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-text-muted text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 flex-shrink-0"></div>
                    <span>{highlight}</span>
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

export default EducationSection
