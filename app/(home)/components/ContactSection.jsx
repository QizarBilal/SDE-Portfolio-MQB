"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const ContactSection = () => {
  const contactMethods = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'mohammedqizarbilal@gmail.com',
      link: 'mailto:mohammedqizarbilal@gmail.com'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Mohammed Qizar Bilal',
      link: 'https://linkedin.com/in/mohammed-qizar-bilal'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: '@mohammedqizar',
      link: 'https://github.com/mohammedqizar'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'Tirupathur, Tamil Nadu',
      link: null
    }
  ]

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-4xl w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Let's <span className="text-gradient-green">Connect</span>
          </h2>
          <p className="text-text-muted text-lg">
            Open to SDE opportunities and technical discussions
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {method.link ? (
                <a
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="block glass-strong rounded-xl p-6 hover:bg-white/10 transition-all group h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-green/20 rounded-lg group-hover:bg-accent-green/30 transition-colors">
                      <method.icon className="w-6 h-6 text-accent-green" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-text-muted mb-1">
                        {method.label}
                      </div>
                      <div className="text-text-primary font-medium group-hover:text-accent-green transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="glass-strong rounded-xl p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-green/20 rounded-lg">
                      <method.icon className="w-6 h-6 text-accent-green" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-text-muted mb-1">
                        {method.label}
                      </div>
                      <div className="text-text-primary font-medium">
                        {method.value}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 lg:p-12 text-center"
        >
          <div className="text-6xl text-accent-green/20 mb-4">"</div>
          <blockquote className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
            The best way to predict the future is to{' '}
            <span className="text-gradient-green">engineer it.</span>
          </blockquote>
          <div className="text-6xl text-accent-green/20 rotate-180">"</div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="text-text-muted text-sm mb-2">
            © 2026 Mohammed Qizar Bilal
          </div>
          <div className="text-text-muted/70 text-xs">
            Built with discipline, clarity, and intent.
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
