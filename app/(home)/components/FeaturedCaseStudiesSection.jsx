"use client"
import React from 'react'
import { motion } from 'framer-motion'

const FeaturedCaseStudiesSection = () => {
  const caseStudies = [
    {
      title: 'Twinstitute AI',
      problem: 'Learning progress was not converting into recruiter-verifiable execution proof.',
      approach: 'Built a multi-agent capability engine with evaluator scoring and adaptive roadmap intelligence.',
      result: 'Enabled measurable capability tracking with 92% tracking coverage and 99.9% platform uptime.'
    },
    {
      title: 'SkillMatch-AI',
      problem: 'Candidates were losing opportunities due to weak ATS resume-job alignment.',
      approach: 'Implemented NLP parsing, weighted similarity scoring, and prioritized skill-gap recommendations.',
      result: 'Improved ATS alignment outcomes by up to 45% with 87% matching precision.'
    },
    {
      title: 'Zidio Hackathon Portal',
      problem: 'Hackathon operations were fragmented and manual across teams.',
      approach: 'Delivered a full-stack workflow platform for registration, judging, scoring, and leaderboards.',
      result: 'Automated 80% of operations and reduced organizer workflow time by 52%.'
    }
  ]

  return (
    <section id="case-studies" className="min-h-screen flex items-center justify-center px-6 lg:px-12 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Featured <span className="text-gradient-green">Case Studies</span>
          </h2>
          <p className="text-text-muted text-lg">
            Problem → Approach → Result
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-strong rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-bold text-text-primary mb-4">{study.title}</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-accent-green font-semibold mb-1">Problem</p>
                  <p className="text-text-muted leading-relaxed">{study.problem}</p>
                </div>
                <div>
                  <p className="text-accent-green font-semibold mb-1">Approach</p>
                  <p className="text-text-muted leading-relaxed">{study.approach}</p>
                </div>
                <div>
                  <p className="text-accent-green font-semibold mb-1">Result</p>
                  <p className="text-text-primary leading-relaxed">{study.result}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCaseStudiesSection
