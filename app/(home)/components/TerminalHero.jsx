"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiDownload } from 'react-icons/hi'

const TerminalHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const commands = [
    { command: 'whoami', output: 'Mohammed Qizar Bilal' },
    { command: 'focus', output: 'Python • DSA • Scalable Systems' },
    { command: 'status', output: 'Available for SDE Opportunities' },
  ]

  useEffect(() => {
    if (currentIndex < commands.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1)
      }, 800)
      
      return () => clearTimeout(timer)
    }
  }, [currentIndex, commands.length])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Terminal Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="terminal rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-xs text-text-muted ml-2">developer@portfolio:~$</span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 space-y-4 min-h-[300px]">
              {commands.slice(0, currentIndex).map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-accent-green">developer@portfolio:~$</span>
                    <span className="text-text-primary font-mono">{cmd.command}</span>
                  </div>
                  <div className="text-text-muted font-mono pl-6 text-sm">
                    {cmd.output}
                  </div>
                </motion.div>
              ))}

              {currentIndex === commands.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 pt-4"
                >
                  <span className="text-accent-green">developer@portfolio:~$</span>
                  <span className="text-text-primary font-mono animate-pulse">_</span>
                </motion.div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-6 py-3 bg-accent-green text-base font-medium rounded-lg hover:bg-accent-green/90 transition-all hover:shadow-lg hover:shadow-accent-green/20"
            >
              <span>View Projects</span>
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 px-6 py-3 glass-strong text-text-primary font-medium rounded-lg hover:bg-white/10 transition-all"
            >
              <HiDownload className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Floating Code Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-full h-full"
              >
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-accent-green rounded-full -translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-cyan-500 rounded-full -translate-x-1/2"></div>
                <div className="absolute left-0 top-1/2 w-2 h-2 bg-teal-400 rounded-full -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 w-2 h-2 bg-emerald-400 rounded-full -translate-y-1/2"></div>
              </motion.div>

              {/* Center glow */}
              <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-accent-green/20 via-cyan-500/10 to-transparent blur-3xl"></div>

              {/* Placeholder for portrait - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-2xl glass-strong flex items-center justify-center overflow-hidden">
                  <img 
                    src="/Portrait.png" 
                    alt="Portrait"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center p-8 text-center">
                    <div className="text-6xl font-bold text-gradient-green mb-4">
                      {'</>'}
                    </div>
                    <div className="text-sm text-text-muted font-mono">
                      Building the future,<br />one commit at a time
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TerminalHero
