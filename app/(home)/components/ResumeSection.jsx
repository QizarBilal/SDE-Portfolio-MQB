"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { HiDownload, HiDocumentText } from 'react-icons/hi'

const ResumeSection = () => {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-5xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            <span className="text-gradient-green">Resume</span>
          </h2>
          <p className="text-text-muted text-lg">
            This resume reflects my readiness for Software Development Engineer roles
          </p>
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 lg:p-12"
        >
          {/* PDF Preview */}
          <div className="mb-8 rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <iframe 
              src="/resume.pdf" 
              className="w-full h-[600px] bg-white"
              title="Resume Preview"
            >
              <div className="flex flex-col items-center justify-center py-20 px-6">
                <HiDocumentText className="w-24 h-24 text-accent-green/50 mb-6" />
                <p className="text-text-muted text-center mb-4">
                  Your browser doesn't support PDF preview. Please download to view.
                </p>
              </div>
            </iframe>
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent-green hover:bg-accent-green/90 text-base font-bold rounded-xl transition-all shadow-lg shadow-accent-green/20 hover:shadow-accent-green/40"
            >
              <HiDownload className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </motion.a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10">
            {[
              { label: 'Format', value: 'PDF' },
              { label: 'Pages', value: '1-2' },
              { label: 'ATS Ready', value: 'Yes' },
              { label: 'Updated', value: 'Jan 2026' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-text-primary font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResumeSection
