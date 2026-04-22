"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const AboutSection = () => {
  const stats = [
    { label: 'CGPA', value: '8.8+' },
    { label: 'Real Projects', value: '6+' },
    { label: 'Internships', value: '4+' },
    { label: 'Years Engineering', value: '4+' },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-8">
            I build systems,{' '}
            <span className="text-gradient-green">not just software.</span>
          </h2>

          {/* Body */}
          <div className="space-y-6 text-text-muted text-lg leading-relaxed mb-12">
            <p>
              I am a <span className="text-text-primary font-medium">Software Development Engineer aspirant</span> focused on building scalable, reliable, and well-architected systems. My work spans frontend interfaces, backend logic, APIs, data pipelines, and algorithmic problem-solving.
            </p>
            <p>
              I prioritize <span className="text-text-primary font-medium">clean code</span>, <span className="text-text-primary font-medium">predictable behavior</span>, <span className="text-text-primary font-medium">performance trade-offs</span>, and <span className="text-text-primary font-medium">long-term maintainability</span> — the fundamentals that define strong SDEs.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="glass-strong rounded-xl p-6 text-center hover:bg-white/10 transition-all group cursor-default hover:shadow-lg hover:shadow-green-500/20"
              >
                <motion.div
                  className="text-3xl lg:text-4xl font-bold text-gradient-green mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
