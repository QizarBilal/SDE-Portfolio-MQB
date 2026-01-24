"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiHome, HiBriefcase, HiCode, HiCog, HiDocumentText, HiMail, HiMenu, HiX, HiAcademicCap } from 'react-icons/hi'
import Link from 'next/link'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  const menuItems = [
    { id: 'home', label: 'Home', icon: HiHome },
    { id: 'about', label: 'About', icon: HiCode },
    { id: 'experience', label: 'Experience', icon: HiBriefcase },
    { id: 'education', label: 'Education', icon: HiAcademicCap },
    { id: 'projects', label: 'Projects', icon: HiCode },
    { id: 'skills', label: 'Skills', icon: HiCog },
    { id: 'resume', label: 'Resume', icon: HiDocumentText },
    { id: 'contact', label: 'Contact', icon: HiMail },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 glass-strong rounded-lg text-text-primary hover:text-accent-green transition-colors"
      >
        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
      </button>

      {/* Sidebar - Desktop persistent, Mobile slide-in */}
      {/* Desktop Sidebar - Always visible on large screens */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 glass-strong z-40 flex-col border-r border-white/5 overflow-y-auto">
        {/* Profile Section */}
        <div className="p-6 border-b border-white/5">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="relative w-24 h-24 mx-auto mb-4"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-green/20 to-cyan-500/20 p-1">
              <div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-4xl font-bold text-gradient-green overflow-hidden">
                {/* Replace with actual image */}
                <img 
                  src="/Portrait.png" 
                  alt="Mohammed Qizar Bilal" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center">
                  MQ
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent-green rounded-full border-2 border-surface"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h2 className="text-xl font-bold text-text-primary mb-1">
              Mohammed Qizar Bilal
            </h2>
            <div className="text-sm text-text-muted h-6 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Software Development Engineer
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3">
          <ul className="space-y-0.5">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-all group"
                >
                  <item.icon className="w-4 h-4 group-hover:text-accent-green transition-colors" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-white/5">
          <div className="text-[11px] text-text-muted space-y-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-accent-green"></div>
              <span>Tirupathur, Tamil Nadu</span>
            </div>
            <div className="text-[10px] italic text-text-muted/70 pt-1 border-t border-white/5">
              "Engineering &gt; Everything"
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar - Slides in when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed left-0 top-0 h-screen w-72 glass-strong z-40 flex flex-col border-r border-white/5 overflow-y-auto"
          >
            {/* Profile Section */}
            <div className="p-4 border-b border-white/5">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="relative w-16 h-16 mx-auto mb-3"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-green/20 to-cyan-500/20 p-1">
                  <div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-2xl font-bold text-gradient-green overflow-hidden">
                    <img 
                      src="/Portrait.png" 
                      alt="Mohammed Qizar Bilal" 
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center">
                      MQ
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-accent-green rounded-full border-2 border-surface"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h2 className="text-base font-bold text-text-primary mb-0.5">
                  Mohammed Qizar Bilal
                </h2>
                <div className="text-xs text-text-muted">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Software Development Engineer
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-3">
              <ul className="space-y-0.5">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-all group"
                    >
                      <item.icon className="w-4 h-4 group-hover:text-accent-green transition-colors" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-3 border-t border-white/5">
              <div className="text-[11px] text-text-muted space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-accent-green"></div>
                  <span>Tirupathur, Tamil Nadu</span>
                </div>
                <div className="text-[10px] italic text-text-muted/70 pt-1 border-t border-white/5">
                  "Engineering &gt; Everything"
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </>
  )
}

export default Sidebar
