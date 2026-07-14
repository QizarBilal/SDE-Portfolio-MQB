"use client"
import React from 'react'
import TerminalHero from './components/TerminalHero'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import FeaturedCaseStudiesSection from './components/FeaturedCaseStudiesSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ResumeSection from './components/ResumeSection'
import ContactSection from './components/ContactSection'

const Home = () => {
  return (
    <div className="relative">
      {/* Single-scroll multi-panel system */}
      <TerminalHero />
      <AboutSection />
      <ExperienceSection />
      <FeaturedCaseStudiesSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ResumeSection />
      <ContactSection />
    </div>
  )
}

export default Home