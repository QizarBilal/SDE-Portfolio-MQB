"use client"
import React from 'react'
import TerminalHero from './components/TerminalHero'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ResumeSection from './components/ResumeSection'
import ContactSection from './components/ContactSection'

const Home = () => {
  return (
    <div className="relative">
      {/* Single-scroll multi-panel system */}
      <TerminalHero />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </div>
  )
}

export default Home