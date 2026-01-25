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

              {/* Portrait with advanced animations */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <motion.div 
                  className="w-72 h-72 rounded-2xl glass-strong flex items-center justify-center overflow-hidden relative group"
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: -5,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                  }}
                >
                  {/* Animated border gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(45deg, #10b981, #06b6d4, #10b981)",
                      backgroundSize: "200% 200%",
                      padding: "2px",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude"
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent-green/0 via-accent-green/0 to-accent-green/0 opacity-0 group-hover:opacity-100"
                    animate={{
                      background: [
                        "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)",
                        "radial-gradient(circle at 100% 100%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)",
                        "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.img 
                    src="/Portrait.png" 
                    alt="Portrait"
                    className="w-full h-full object-cover relative z-10"
                    initial={{ filter: "brightness(0.8) blur(10px)" }}
                    animate={{ filter: "brightness(1) blur(0px)" }}
                    transition={{ duration: 1, delay: 0.7 }}
                    whileHover={{
                      filter: "brightness(1.1) saturate(1.1)",
                      transition: { duration: 0.3 }
                    }}
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
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TerminalHero
