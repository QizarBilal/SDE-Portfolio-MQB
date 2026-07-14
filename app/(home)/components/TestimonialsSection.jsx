"use client"
import React from 'react'
import { motion } from 'framer-motion'

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'Qizar consistently turned ambiguous requirements into clean, production-ready deliveries with strong ownership.',
      person: 'Engineering Lead',
      context: 'Webill India Pvt. Ltd.'
    },
    {
      quote: 'He learned quickly, collaborated smoothly, and proactively resolved technical blockers during active releases.',
      person: 'Team Mentor',
      context: 'BluePMS Software Solutions'
    },
    {
      quote: 'His approach to performance optimization and code quality improved both delivery speed and maintainability.',
      person: 'Project Supervisor',
      context: 'Flutions India'
    }
  ]

  return (
    <section id="testimonials" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Testimonials & <span className="text-gradient-green">Recommendations</span>
          </h2>
          <p className="text-text-muted text-lg">
            Social proof from collaborators and mentors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={`${item.person}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-strong rounded-2xl p-6 border border-white/10"
            >
              <p className="text-text-primary leading-relaxed mb-6">“{item.quote}”</p>
              <footer>
                <p className="text-accent-green font-semibold">{item.person}</p>
                <p className="text-sm text-text-muted">{item.context}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
